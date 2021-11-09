/**
 * fileName: home/index.js
 * description: the home screen component
 */

import React, { Component } from "react";
import {
  Dimensions,
  Image,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  CheckBox,
  ScrollView,
  Alert,
} from "react-native";

import Icon from "react-native-vector-icons/Fontisto";

import { Input, Avatar, ListItem, Divider } from "react-native-elements";

import { Header, Footer } from "../../components";
import { HealthOrbitImage } from "../../assets";
import { styles } from "./styles";
import ApiClient from "../../utils/api_client";
import { AppStateContext } from "../../providers/app-state/app-state.provider";

import { COLOR_PRESETS } from "../../presets/colors";
import { DrawerScreens, RouteNames } from "../../navigation/route_names";
//  import SvgUri from 'react-native-svg-uri';
const DeviceWidth = Dimensions.get("window").width;
export class ProfileEdit extends Component {
  static contextType = AppStateContext;
  constructor(props) {
    super(props);

    this.state = {
    
      UserName1: "",
      UserEmail1: "",
      UserMobile1: "",
      UserID: "",
    
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
      const UserName1 = data.user_name;
      const UserEmail1= data.user_email;
      const UserMobile1 = data.user_mobile;
      this.setState({ UserName1, UserEmail1, UserMobile1, UserID: user_id });
      //  console.log("the data is>>>>>>",data);

      //  const data1=data;

      //  const username=data1.user_name;
      //  const useremail=data1.user_email;
      //  const usermobile=data1.user_mobile;
    });

    
  }

  UserUpdateFunction = () => {
    const { UserName1 } = this.state;
    const { UserEmail1 } = this.state;
    const { UserMobile1} = this.state;
    //const { UserID } = this.state;

    fetch("https://engistack.com/dm/user/user_update.php", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: UserName1,

        email: UserEmail1,

        mobile: UserMobile1,

        //user_id: UserID,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        // Showing response message coming from server after inserting records.
        Alert.alert(
          "Success",
          responseJson,
         [{ text: "OK", onPress: () => console.log("Updated!!!") }]
       );
      })
      .catch((error) => {
        console.error(error);
      });
  };

  renderBody() {
    const { UserName1, UserEmail1, UserMobile1} = this.state;
    return (
      <ScrollView>
        

       

       



      

        <View style={{ flex: 1 }}>
          <TouchableOpacity
            
          >
            <Text style={styles.testHeader}>Edit Profile Details</Text>
          </TouchableOpacity>

          {/* <Input
            inputContainerStyle={styles.inputContainer}
            leftIconContainerStyle={styles.leftIconContainer}
            inputStyle={styles.input}
            containerStyle={styles.inputRootContainer}
            placeholder="User Id"
            value={UserID}
            onChangeText={(UserID) => {
              this.setState({ UserID });
            }}
          /> */}
          <Input
            inputContainerStyle={styles.inputContainer}
            leftIconContainerStyle={styles.leftIconContainer}
            inputStyle={styles.input}
            containerStyle={styles.inputRootContainer}
            placeholder="User Name"
            value={UserName1}
            onChangeText={(UserName1) => this.setState({ UserName1 })}
          />

          <Input
            inputContainerStyle={styles.inputContainer}
            leftIconContainerStyle={styles.leftIconContainer}
            inputStyle={styles.input}
            containerStyle={styles.inputRootContainer}
            placeholder="User Email ID"
            value={UserEmail1}
            editable={false} 
            selectTextOnFocus={false} 
            onChangeText={(UserEmail1) => this.setState({ UserEmail1 })}
          />

          <Input
            keyboardType='numeric'
            maxLength={10} 
            inputContainerStyle={styles.inputContainer}
            leftIconContainerStyle={styles.leftIconContainer}
            inputStyle={styles.input}
            containerStyle={styles.inputRootContainer}
            placeholder="User Mobile Number"
            value={UserMobile1}
            onChangeText={(UserMobile1) => this.setState({UserMobile1})}
          />
       

          <TouchableOpacity onPress={this.UserUpdateFunction}>
            <Text style={styles.SingIn}>Edit Profile</Text>
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

export default ProfileEdit;
