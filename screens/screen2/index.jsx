/**
 * fileName: screen2/index.js
 * description: the screen2 component
 */

import React, { Component } from "react";
import {
  Dimensions,
  Image,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

import Icon from "react-native-vector-icons/Fontisto";
import { Input, Divider } from "react-native-elements";

import { Header, Footer } from "../../components";
import { HealthOrbitImage } from "../../assets";
import { styles } from "./styles";
import ApiClient from "../../utils/api_client";
import { DrawerScreens, RouteNames } from "../../navigation/route_names";
import { COLOR_PRESETS } from "../../presets/colors";
import { DrawerActions } from "@react-navigation/routers";
//import { SvgUri } from 'react-native-svg';

const DeviceWidth = Dimensions.get("window").width;
export class Screen2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testList: [],
    };
  }

  componentDidMount() {
    const formData = new FormData();
    console.log("the navigation params is>>>>>>", this.props.route.params);
    const testId = this.props.route.params.search;
    console.log("the navigation params is>>>>>>", testId);

    formData.append("action", "getTests");

    ApiClient.post("", formData).then(({ data }) => {
      this.setState({ testList: data });
    });
  }

  renderBody() {
    const { testList } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View style={{ flex: 8 }}>
            <Input
              inputContainerStyle={styles.inputContainer}
              leftIconContainerStyle={styles.leftIconContainer}
              inputStyle={styles.input}
              containerStyle={styles.inputRootContainer}
              placeholder="Search for pathologies"
              leftIcon={<Icon name="search" size={18} color="gray" />}
            />
          </View>
          <View style={{ flex: 5, marginLeft: -45 }}>
            <Input
              inputContainerStyle={styles.inputContainer}
              leftIconContainerStyle={styles.leftIconContainer}
              inputStyle={styles.input}
              containerStyle={styles.inputRootContainer}
              placeholder="Location"
              leftIcon={<Icon name="search" size={18} color="gray" />}
            />
          </View>
        </View>

        <FlatList
          data={testList}
          numColumns={2}
          renderItem={({ item, index }) => this.renderTestCard(item, index)}
          contentContainerStyle={styles.listContainer}
          columnWrapperStyle={styles.columnWrapper}
        />
      </View>
    );
  }

  renderTestCard(item, index) {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate(DrawerScreens.LAB_SCHEDULE, item);
        }}
        style={styles.cardRootContainer}
      >
        <View style={styles.cardRootContainer}>
          <View style={styles.cardContentContainer}>
            <View style={styles.cardHeaderContainer}>
              <Image
                source={require("../../assets/images/image.png")}
                style={styles.cardImg}
              />

              {/* <View style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width:75,

                }}> */}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: 50,
                }}
              >
                <View>
                  <View style={{ width: DeviceWidth * 0.65 }}>
                    <Text style={styles.testName}>{item.sName}</Text>
                  </View>
                  <View style={{ width: DeviceWidth * 0.5, marginLeft: 10 }}>
                    <Text>Distance 3kms</Text>
                  </View>
                  <View
                    style={{
                      width: DeviceWidth * 0.5,
                      marginLeft: 10,
                      paddingTop: -10,
                    }}
                  >
                    <Image
                      source={require("../../assets/images/star.png")}
                      style={[styles.cardImg, { height: 20 }]}
                    />
                  </View>
                </View>
              </View>
              {/* </View> */}
              <Image
                source={require("../../assets/images/image.png")}
                style={[styles.cardImg, { marginLeft: 40 }]}
              />
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
                  console.log("menu pressed");
                  this.props.navigation.dispatch(DrawerActions.toggleDrawer());
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

export default Screen2;
