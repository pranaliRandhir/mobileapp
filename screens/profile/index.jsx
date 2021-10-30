/**
 * fileName: home/index.js
 * description: the home screen component
 */

import React, { Component } from "react";
import {
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
import { RouteNames } from "../../navigation/route_names";
//  import SvgUri from 'react-native-svg-uri';

export class Profile extends Component {
  static contextType = AppStateContext;
  constructor(props) {
    super(props);

    this.state = {
      UserName: "",
      UserEmail: "",
      UserMobile: "",
      UserID: "",
    };
  }

  componentDidMount() {
    const { sharedState } = this.context;

    const user_id = sharedState?.userState?.userID;
    console.log("the sharedState component is >>>>>>>>>>>>>>>>", user_id);
    const formData = new FormData();
    formData.append("action", "getUserProfile");
    formData.append("user_id", user_id);
    ApiClient.post("", formData).then(({ data }) => {
      const UserName = data.user_name;
      const UserEmail = data.user_email;
      const UserMobile = data.user_mobile;
      this.setState({ UserName, UserEmail, UserMobile, UserID: user_id });
      //  console.log("the data is>>>>>>",data);

      //  const data1=data;

      //  const username=data1.user_name;
      //  const useremail=data1.user_email;
      //  const usermobile=data1.user_mobile;
    });
  }

  UserUpdateFunction = () => {
    const { UserName } = this.state;
    const { UserEmail } = this.state;
    const { UserMobile } = this.state;
    const { UserID } = this.state;

    fetch("https://engistack.com/dm/user/user_update.php", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: UserName,

        email: UserEmail,

        mobile: UserMobile,

        user_id: UserID,
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
    const { UserID, UserName, UserEmail, UserMobile } = this.state;
    return (
      <ScrollView>
        <ListItem
          containerStyle={{ marginRight: 150, marginLeft: 10, marginTop: 15 }}
        >
          <Avatar
            size="large"
            rounded
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREAPz94ukJs5rp_nNbrA2ijjLzruxMZ7wrV7Kei3PckuK_wKvQYgJwpMpDBCuaXZx0t3Q&usqp=CAU",
            }}
          />
          <ListItem.Content>
            <ListItem.Title style={{ fontSize: 25, fontWeight: "bold" }}>
              {UserName}
            </ListItem.Title>
          </ListItem.Content>
        </ListItem>

        <Divider orientation="horizontal" />

        <View style={{ flex: 1 }}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate(RouteNames.SCREEN_2);
            }}
          >
            <Text style={styles.testHeader}></Text>
          </TouchableOpacity>

          <Input
            inputContainerStyle={styles.inputContainer}
            leftIconContainerStyle={styles.leftIconContainer}
            inputStyle={styles.input}
            containerStyle={styles.inputRootContainer}
            placeholder="User Id"
            value={UserID}
            onChangeText={(UserID) => {
              this.setState({ UserID });
            }}
          />
          <Input
            inputContainerStyle={styles.inputContainer}
            leftIconContainerStyle={styles.leftIconContainer}
            inputStyle={styles.input}
            containerStyle={styles.inputRootContainer}
            placeholder="User Name"
            value={UserName}
            onChangeText={(UserName) => this.setState({ UserName })}
          />

          <Input
            inputContainerStyle={styles.inputContainer}
            leftIconContainerStyle={styles.leftIconContainer}
            inputStyle={styles.input}
            containerStyle={styles.inputRootContainer}
            placeholder="User Email ID"
            value={UserEmail}
            onChangeText={(UserEmail) => this.setState({ UserEmail })}
          />

          <Input
            inputContainerStyle={styles.inputContainer}
            leftIconContainerStyle={styles.leftIconContainer}
            inputStyle={styles.input}
            containerStyle={styles.inputRootContainer}
            placeholder="User Mobile Number"
            value={UserMobile}
            onChangeText={(UserMobile) => this.setState({ UserMobile })}
          />
          {/* <Text h3 style={{marginLeft:30}}>Registeration Package</Text>
           <View style={{ flexDirection: 'column'}}>

             <View style={{ flexDirection: 'row',marginLeft:25 }}>
               <CheckBox
                 value={this.state.checked}
                 onValueChange={() => this.setState({ checked: !this.state.checked })}
               />

               <Text style={{marginTop: 5}}> 1 Month</Text>
             </View>
           </View>
           <View style={{ flexDirection: 'column'}}>

             <View style={{ flexDirection: 'row',marginLeft:25 }}>
               <CheckBox
                 value={this.state.checked1}
                 onValueChange={() => this.setState({ checked1: !this.state.checked1 })}
               />

               <Text style={{marginTop: 5}}> 6 Months</Text>
             </View>
           </View>
           <View style={{ flexDirection: 'column'}}>

             <View style={{ flexDirection: 'row',marginLeft:25 }}>
               <CheckBox
                 value={this.state.checked2}
                 onValueChange={() => this.setState({ checked2: !this.state.checked2 })}
               />

               <Text style={{marginTop: 5}}> 1 Year</Text>
             </View>
           </View> */}

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

export default Profile;
