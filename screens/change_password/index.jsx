/**
 * fileName: change_password/index.js
 * description: the chnage_password screen component
 */

 import React, { Component } from "react";
 import { Image, Text, View, FlatList, TouchableOpacity,ScrollView,Alert,} from "react-native";
 
 import Icon from "react-native-vector-icons/Fontisto";
 import { Input, Divider } from "react-native-elements";
 
 import { Header, Footer } from "../../components";
 import { HealthOrbitImage } from "../../assets";
 import { styles } from "./styles";
 import ApiClient from "../../utils/api_client";
 
 import { COLOR_PRESETS } from "../../presets/colors";
 import { RouteNames } from "../../navigation/route_names";
 import { AppStateContext } from "../../providers/app-state/app-state.provider";

 
 
 

 export class ChangePassword extends Component {
  static contextType = AppStateContext;
   constructor(props) {
     super(props);
     this.state = {
       UserEmail: "",
       UserPassword: '',
       UserPasswordValidate: '',
       UserConfirmPassword: '',
       UserConfirmPasswordValidate: '',
     };
   }
 
   componentDidMount() {
    const { sharedState } = this.context;

    const user_id = sharedState?.userState?.userID;
    //console.log("the sharedState component is >>>>>>>>>>>>>>>>", user_id);
    const formData = new FormData();
    formData.append("action", "getUserProfile");
    formData.append("user_id", user_id);
    ApiClient.post("", formData).then(({ data }) => {
      
      const UserEmail = data.user_email;
    
      this.setState({ UserEmail,UserID: user_id });
     
    });
   }


   UserUpdateFunction = () => {
    const { UserID } = this.state;
    const {UserEmail}=this.state;
    const { UserPassword } = this.state;
    const { UserConfirmPassword } = this.state;

    fetch("https://engistack.com/dm/user/change_password.php", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: UserPassword,

        cpassword: UserConfirmPassword,

        user_email: UserEmail,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        // Showing response message coming from server after inserting records.
        Alert.alert(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  };

 
   renderBody() {
    const { UserID,UserEmail,UserPassword,UserConfirmPassword } = this.state;
    
   
   return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <View style={styles.logoContainer}>
          
          {/* <SvgUri 
            width="200" 
            height="200" 
            source={{uri:'https://kigadel.com/gimonn/ic/Icons/Icon%20Logo.svg'}}
          /> */}
          <Image source={HealthOrbitImage} style={styles.logoSize} />
            
        </View>

        <TouchableOpacity>
          <Text style={styles.testHeader}>Reset Password?</Text>
        </TouchableOpacity>

          
          <Input
          inputContainerStyle={styles.inputContainer}
          leftIconContainerStyle={styles.leftIconContainer}
          inputStyle={styles.input}
          containerStyle={styles.inputRootContainer}
          placeholder="Email Address"
          value={UserEmail}
          />

          <Input
            inputContainerStyle={styles.inputContainer}
            leftIconContainerStyle={styles.leftIconContainer}
            inputStyle={styles.input}
            containerStyle={styles.inputRootContainer}
            placeholder="Password"
            secureTextEntry={true} 
            style={{color:"black"}}
            //  maxLength={10} 
            minLength={3} 
            onChangeText={UserPassword => this.setState({UserPassword})}
          />
          <Input
            inputContainerStyle={styles.inputContainer}
            leftIconContainerStyle={styles.leftIconContainer}
            inputStyle={styles.input}
            containerStyle={styles.inputRootContainer}
            placeholder="Confirm Password"
            secureTextEntry={true} 
            style={{color:"black"}}
            //  maxLength={10} 
            minLength={3} 
            onChangeText={UserConfirmPassword => this.setState({UserConfirmPassword})}
          />



        
        
          <TouchableOpacity onPress={this.UserUpdateFunction}>
            <Text style={styles.SingIn}>Submit</Text>
          </TouchableOpacity>

        
        
      </View>
    </ScrollView>



   );
 }

   
   render() {
     return (
       <>
         <View style={styles.rootContainer}>
         <Header
            leading={
              <Icon
                name="nav-icon-a"
                style={styles.toggleDrawer}
                onPress={() => {
                  //console.log("menu pressed");
                  this.props.navigation.toggleDrawer();
                }}
              />
            }
          />
           {this.renderBody()}
           {/* <Footer /> */}
         </View>
       </>
     );
   }
 }
 
 export default ChangePassword;
 