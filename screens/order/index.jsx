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
  Alert,
  ScrollView,
} from "react-native";

import Icon from "react-native-vector-icons/Fontisto";
import { Input, Divider } from "react-native-elements";

import { Header, Footer } from "../../components";
import { HealthOrbitImage } from "../../assets";
import { styles } from "./styles";
import ApiClient from "../../utils/api_client";

import { COLOR_PRESETS } from "../../presets/colors";
import { RouteNames } from "../../navigation/route_names";
import SvgUri from "react-native-svg-uri";

import { AppStateContext } from "../../providers/app-state/app-state.provider";

export class OrderScreen extends Component {
  static contextType = AppStateContext;
  state = {
    testName: "",
    testPrice: "",
    testArea: "",
    testDate:"",
    UserID: "",
  };
  constructor(props) {
    super(props);
    this.state = {
      testList: [],
    };
  }

  componentDidMount() {
    //const formData = new FormData();
    const { sharedState } = this.context;

    const userId = sharedState?.userState?.userID;
    //console.log("User Id >>>>>>>>>>>>",userId);

    const testId = this.props.route.params.iTestId;
    const testName = this.props.route.params.sName;
    const labName = this.props.route.params.lab_name;
    const testPrice = this.props.route.params.sTestPrice;
    const testArea = this.props.route.params.sLocation;
    const testDate = this.props.route.params.selectedDate;

    this.setState({
      userId : sharedState?.userState?.userID,
      testName: testName,
      labName: labName,
      testPrice: testPrice,
      testArea: testArea,
      testDate : testDate,
    });
    console.log("User ID is here  >>>>>>", userId);
    console.log("Test ID>>>>>>", testId);
    console.log("Test Name>>>>>>", testName);
    console.log("Lab Name>>>>>>", labName);
    console.log("Test Price>>>>>>", testPrice);
    console.log("Test Location>>>>>>", testArea);
    console.log("selected Test Date>>>>>>", testDate);

    // formData.append("action", "getTests");

    // ApiClient.post("", formData).then(({ data }) => {
    //   this.setState({ testList: data });
    // });
  }

  UserOrderFunction = () => {
    fetch("https://engistack.com/dm/user/user_order.php", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId : 2,
        testName: this.props.route.params.sName,
        labName: this.props.route.params.lab_name,
        testPrice: this.props.route.params.sTestPrice,
        testArea: this.props.route.params.sLocation,
        testDate: this.props.route.params.selectedDate,
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
    //const { testList } = this.state;

    return (
      <ScrollView>
        <View style={{ flex: 1 }}>
          {/* <TouchableOpacity onPress={() => {this.props.navigation.navigate(RouteNames.SCREEN_2)}}> */}
          <Text style={styles.testHeader}>ORDER</Text>
          {/* </TouchableOpacity> */}
          <TouchableOpacity style={styles.cardRootContainer}>
            <View style={styles.cardRootContainer}>
              <View style={styles.cardContentContainer}>
                <View style={styles.cardHeaderContainer}>
                  {/* <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width:75,

                  }}> */}

                  <View>
                    <View>
                      <Text style={styles.testName}>
                        Test Name : {this.state.testName}
                      </Text>
                    </View>

                    <View>
                      <Text style={styles.testName}>
                        Lab Name : {this.state.labName}
                      </Text>
                    </View>

                    <View>
                      <Text>Location : {this.state.testArea}</Text>
                    </View>

                    <View>
                      <Text>Date is  : {this.state.testDate}</Text>
                    </View>

                    <View>
                      <Text style={styles.priceText}>
                        Price : {"\u20B9"}
                        {this.state.testPrice}
                      </Text>
                    </View>

                    <TouchableOpacity onPress={this.UserOrderFunction}>
                      <Text style={styles.SingIn}>Buy Now</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                {/* </View> */}
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }

  renderTestCard(item, index) {
    return (
      // <TouchableOpacity onPress={() => { this.props.navigation.navigate(RouteNames.LAB_SCHEDULE, item) }} style={styles.cardRootContainer}>
      <TouchableOpacity style={styles.cardRootContainer}>
        <View style={styles.cardRootContainer}>
          <View style={styles.cardContentContainer}>
            <View style={styles.cardHeaderContainer}>
              {/* <View style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width:75,

                }}> */}

              <View>
                <View>
                  <Text style={styles.testName}>{item.sName}</Text>
                </View>
                <View>
                  <Text style={styles.priceText}>
                    {"\u20B9"}
                    {item.sTestPrice}
                  </Text>
                </View>
                <TouchableOpacity>
                  <Text style={styles.SingIn}>Buy Now</Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* </View> */}
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
                  console.log("menu pressed");
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

export default OrderScreen;
