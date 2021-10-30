/**
 * fileName: signup/index.js
 * description: the signup screen component
 */

 import React, { Component } from "react";
 import { Image, Text, View, FlatList, TouchableOpacity,CheckBox ,Alert,ScrollView,} from "react-native";
 
 import Icon from "react-native-vector-icons/Fontisto";
 import { Input } from "react-native-elements";
 
 import { Header, Footer } from "../../components";
 import { HealthOrbitImage } from "../../assets";
 import { styles } from "./styles";
 import ApiClient from "../../utils/api_client";
 
 import { COLOR_PRESETS } from "../../presets/colors";
 import { RouteNames } from "../../navigation/route_names";
//  import SvgUri from 'react-native-svg-uri';
 
 
 

 export class SingUp extends Component {
   constructor(props) {
     super(props);
     this.state = {
      UserName: '',
      UserNameValidate: '',
      UserEmail: '',
      UserEmailValidate: '',
      UserPassword: '',
      UserPasswordValidate: '',
      UserMobile:'',
      UserMobileValidate:''
     };
     
   }
 
   UserRegistrationFunction = () =>{
 
 
    const { UserName }  = this.state ;
    const { UserEmail }  = this.state ;
    const { UserPassword }  = this.state ;
    const { UserMobile}  = this.state ;
    
    
    
    fetch('https://engistack.com/dm/user/user_registration.php', {
     method: 'POST',
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
    
       name: UserName,
    
       email: UserEmail,
    
       password:UserPassword,

       mobile : UserMobile
    
     })
    
   }).then((response) => response.json())
         .then((responseJson) => {
    
   // Showing response message coming from server after inserting records.
           Alert.alert(responseJson );
          //  Alert.alert(
          //     "Success",
          //     responseJson,
          //   [{ text: "OK", onPress: () => this.props.navigation.navigate(RouteNames.SIGN_IN) }]
          // );
         }).catch((error) => {
           console.error(error);
         });
    
    
    }


   //validation

   username_validate = (userName) => {
    //console.log(userName);
    let reg = /^[A-Za-z]+$/;
    if (reg.test(userName) === false) {
     
      this.setState({UserNameValidate: "Enter Valid Username"})
      //return false;
    }
    else {
      this.setState({UserNameValidate: "Username Valid"})
      
    }

  }
   email_validate = (UserEmail) => {
    //console.log(username);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(UserEmail) === false) {
     
      this.setState({ UserEmailValidate: "Inavalid Email ID"})
      //return false;
    }
    else {
      this.setState({ UserEmailValidate: "Email is Valid"})
      
    }

  }

  usermobile_validate = (usermobile) => {
    //console.log(usermobile);
    let reg = /^[0-9]+$/;
    if (reg.test(usermobile) === false) {
     
      this.setState({UserMobileValidate: "Enter Valid Mobile number"})
      //return false;
    }
    else {
      this.setState({UserMobileValidate: "Mobile  Valid"})
      
    }

  }


  password_validate = (password) => {
    //console.log(password);
    let errorFlag = false;
    
    
      //console.log("1");
     if (this.state.UserPassword.length < 5 ||  this.state.UserPassword.length > 10) {
        
        this.setState({ UserpasswordValidate: "Password should be min 5 char and max 10 char"});
      } 
      
  }
 
  
   renderBody() {
     return (
      <ScrollView>
       <View style={{ flex: 1 }}>
         <View style={styles.logoContainer}>
           
           {/* <SvgUri 
             width="200" 
             height="200" 
             source={{uri:'https://kigadel.com/gimonn/ic/Icons/Icon%20Logo.svg'}}
           /> */}
           {/* <Image source={HealthOrbitImage} style={styles.logoSize} /> */}
             
         </View>

         <TouchableOpacity onPress={() => {this.props.navigation.navigate(RouteNames.SCREEN_2)}}>
           <Text style={styles.testHeader}>SignUp</Text>
         </TouchableOpacity>

          <Input
           inputContainerStyle={styles.inputContainer}
           leftIconContainerStyle={styles.leftIconContainer}
           inputStyle={styles.input}
           containerStyle={styles.inputRootContainer}
           placeholder="Username"
           //onChangeText={UserName => this.setState({UserName})}
           onChangeText={(UserName) => this.username_validate(UserName)}
          />
           {this.state.UserNameValidate == "Enter Valid Username" && this.state.UserNameValidate.length > 0 && <Text style={styles.inputError}>{this.state.UserNameValidate}</Text>}
 
          <Input
           inputContainerStyle={styles.inputContainer}
           leftIconContainerStyle={styles.leftIconContainer}
           inputStyle={styles.input}
           containerStyle={styles.inputRootContainer}
           placeholder="Email Address"
           //onChangeText={UserEmail => this.setState({UserEmail})}
           onChangeText={(UserEmail) => this.email_validate(UserEmail)}
          />
          {this.state.UserEmailValidate == "Inavalid Email ID" && this.state.UserEmailValidate.length > 0 && <Text style={styles.inputError}>{this.state.UserEmailValidate}</Text>}
          <Input  
           keyboardType='numeric'
           maxLength={10} 
           inputContainerStyle={styles.inputContainer}
           leftIconContainerStyle={styles.leftIconContainer}
           inputStyle={styles.input}
           containerStyle={styles.inputRootContainer}
           placeholder="Mobile No."
           style={{color:"black"}}
           //onChangeText={UserMobile => this.setState({UserMobile})}
           onChangeText={(UserMobile) => this.usermobile_validate(UserMobile)}
          />
          
          {this.state.UserMobileValidate == "Enter Valid Mobile number" && this.state.UserMobileValidate.length > 0 && <Text style={styles.inputError}>{this.state.UserMobileValidate}</Text>}


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


           <View style={{ flexDirection: 'column',marginLeft:30}}>
              
              <View style={{ flexDirection: 'row',marginRight:50 }}>
                <CheckBox
                  value={this.state.checked}
                  onValueChange={() => this.setState({ checked: !this.state.checked })}
                />
                 
                <Text style={{marginTop: 5,color:COLOR_PRESETS.PRIMARY.DARK}}> By signing up you accept the terms of services and the privacy policy</Text>
              </View>
            </View>
         
          <TouchableOpacity onPress={this.UserRegistrationFunction}>
            <Text style={styles.SingIn}>Sign Up</Text>
          </TouchableOpacity>

          <View style={styles.bottom}>
            <View style={{flex:0.6}}>
              <Text>Already have an account? </Text>
            </View>
            <TouchableOpacity onPress={() => {this.props.navigation.navigate(RouteNames.SIGN_IN)}}>
              <Text style={styles.signup}>SignIn </Text>
            </TouchableOpacity>
          </View>
        
       </View>
      </ScrollView>


     );
   }
 
   
   render() {
     return (
       <>
         <View style={styles.rootContainer}>
           <Header />
           {this.renderBody()}
           {/* <Footer /> */}
         </View>
       </>
     );
   }
 }
 
 export default SingUp;
 