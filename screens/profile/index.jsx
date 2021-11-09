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
import { RouteNames } from "../../navigation/route_names";
//  import SvgUri from 'react-native-svg-uri';
const DeviceWidth = Dimensions.get("window").width;
export class Profile extends Component {
  static contextType = AppStateContext;
  constructor(props) {
    super(props);

    this.state = {
      orderList: [],
      UserName: "",
      UserEmail: "",
      UserMobile: "",
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

    const formData1 = new FormData();
    
    formData1.append("action", "getUserOrder");
    
    formData1.append("user_id", user_id);
    //console.log("formData1 is >>>>>>>>>>>>>>>>>>>>>>>>>",formData1);
    //console.log("Order List is >>>>>>>>>>>>>>>>>>>>>>>>>",user_id);
    ApiClient.post("", formData1).then(({ data }) => {
      console.log("Order List is >>>>>>>>>>>>>>>>>>>>>>>>>",data);
      this.setState({ orderList: data});
      
    });
  }

  UserUpdateFunction = () => {
    const { UserName } = this.state;
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
        name: UserName,

        email: UserEmail1,

        mobile: UserMobile1,

        //user_id: UserID,
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
    const { UserID, UserName1, UserEmail1, UserMobile1,orderList,UserName, UserEmail, UserMobile } = this.state;
    return (
      <ScrollView>
        <ListItem
          containerStyle={{  marginLeft: 0, marginTop: 15 }}
        >
          <Avatar
            size="large"
            rounded
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREAPz94ukJs5rp_nNbrA2ijjLzruxMZ7wrV7Kei3PckuK_wKvQYgJwpMpDBCuaXZx0t3Q&usqp=CAU",
            }}
          />
          <ListItem.Content style={{width:200}}>
            <ListItem.Title style={{ fontSize: 15, fontWeight: "bold" }}>
              <Text>
                {UserName1}
              </Text>
            </ListItem.Title>
            <ListItem.Title style={{ fontSize: 15, fontWeight: "bold" }}>
              <Text>
               {UserEmail1}
              </Text>
            </ListItem.Title>
            <ListItem.Title style={{ fontSize: 15, fontWeight: "bold" }}>
              <Text>
               +91 {UserMobile1}
              </Text>
            </ListItem.Title>
          </ListItem.Content>


          <Avatar
            size="small"
            containerStyle={{ marginLeft: 20, marginTop: 5}}
            source={{
              uri: "https://www.freeiconspng.com/uploads/edit-png-icon-blue-pencil-18.png",
            }}
            onPress={() => console.log("Works!")} onPress={() => {
              this.props.navigation.navigate(RouteNames.PROFILE_EDIT);
            }}
          />
        </ListItem>

       

        <Divider orientation="horizontal" />



        <View style={{ flex: 1 }}>
          <Text style={styles.testHeader}>Ordered Details</Text>
          <FlatList
            data={orderList}
            renderItem={({ item, index }) => this.renderTestCard(item, index)}
            contentContainerStyle={styles.listContainer}
          />
        </View>

        
      </ScrollView>
    );
  }
  

  renderTestCard(item, index) {
    return (
      <TouchableOpacity
      
        style={styles.cardRootContainer}
      >
        <View style={styles.cardRootContainer}>
          <View style={styles.cardContentContainer}>
            <View style={styles.cardHeaderContainer}>
             
              <View
                style={{
                  flexDirection: "row",
                  // justifyContent: "center",
                  // alignItems: "center",
                  // marginLeft: 50,
                }}
              >
                <View>
                  <View style={{ width: DeviceWidth * 0.65 }}>
                    <Text style={styles.testName}>Test Name :  {item.test_name}</Text>
                    
                  </View>
                  <View style={{ width: DeviceWidth * 0.65, marginLeft: 0,marginTop:10 }}>
                    <Text style={styles.testName}>Lab Name: {item.lab_name}</Text>
                    <Text style={styles.testName}>Location: {item.location}</Text>
                    <Text style={styles.testName}>Cost: {item.price}</Text>
                    <Text style={styles.testName}>Date: {item.date}</Text>
                  </View>
                  
                </View>
              </View>
              {/* </View> */}
             
            </View>
          </View>
        </View>
      </TouchableOpacity>
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
