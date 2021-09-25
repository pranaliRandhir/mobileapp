/**
 * fileName: lab_schedule/index.js
 * description: the lab_schedule component
 */

import React, { Component } from "react";
import {
  StyleSheet,
  Dimensions,
  Image,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import ScrollableTabView, {
  DefaultTabBar,
  ScrollableTabBar,
} from "react-native-scrollable-tab-view-forked";
import Icon from "react-native-vector-icons/Fontisto";
import { Input, Divider, Button } from "react-native-elements";

import { Header, Footer } from "../../components";
import { HealthOrbitImage } from "../../assets";
import { styles } from "./styles";
import ApiClient from "../../utils/api_client";

import { COLOR_PRESETS } from "../../presets/colors";
import { RouteNames } from "../../navigation/route_names";
//import { SvgUri } from 'react-native-svg';

const DeviceWidth = Dimensions.get("window").width;
export class LabSchedule extends Component {
  today = new Date();
  selectionDates = [
    this.today,
    new Date().setDate(this.today.getDate + 1),
    new Date().setDate(this.today.getDate + 2),
    new Date().setDate(this.today.getDate + 3),
    new Date().setDate(this.today.getDate + 3),
  ];

  constructor(props) {
    super(props);
    this.state = {
      testList: [],
      colorId: 0,
      selectedDate: this.selectionDates[0],
    };
  }
  onPress = (id) => {
    this.setState({ colorId: id });
  };
  componentDidMount() {
    const formData = new FormData();
    // console.log('the navigation params is>>>>>>', this.props.route.params);
    const testId = this.props.route.params.iTestId;
    const testName = this.props.route.params.sName;
    console.log("the navigation params is>>>>>>", testName);

    formData.append("action", "getTests");
    formData.append("id", testId);

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

        <View
          style={{
            flexDirection: "row",
            //  justifyContent: 'center',
            //alignItems: 'center',
            //marginTop: 2,
            marginBottom: 0,
            marginLeft: 20,
            marginRight: 20,
          }}
        >
          {this.selectionDates.map((e, i) => (
            <Days date={e} isToday={i === 0} isSelected={false} />
          ))}
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
          this.props.navigation.navigate(RouteNames.ORDER, item);
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

                  <View
                    style={{
                      flexDirection: "row",
                      marginLeft: 5,
                      marginRight: 15,
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{ marginLeft: 10, marginTop: 10, width: "20%" }}
                    >
                      <Button
                        title="10.00 AM"
                        type="outline"
                        titleStyle={{
                          fontSize: 6,
                        }}
                      />
                    </View>
                    <View
                      style={{ marginLeft: 10, marginTop: 10, width: "20%" }}
                    >
                      <Button
                        title="12.00 PM"
                        type="outline"
                        titleStyle={{
                          fontSize: 6,
                        }}
                        ButtonStyle={{
                          height: 5,
                        }}
                      />
                    </View>
                    <View
                      style={{ marginLeft: 10, marginTop: 10, width: "20%" }}
                    >
                      <Button
                        title="04.00 PM"
                        type="outline"
                        titleStyle={{
                          fontSize: 6,
                          color: "white",
                        }}
                        ButtonStyle={{
                          height: 5,
                        }}
                        containerStyle={{ backgroundColor: "#3c64a3" }}
                      />
                    </View>
                    <View
                      style={{ marginLeft: 10, marginTop: 10, width: "20%" }}
                    >
                      <Button
                        title="06.00 PM"
                        type="outline"
                        titleStyle={{
                          fontSize: 6,
                        }}
                        ButtonStyle={{
                          height: 5,
                        }}
                      />
                    </View>
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
          <Header />
          {this.renderBody()}
          {/* <Footer /> */}
        </View>
      </>
    );
  }
}

const styles1 = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "pink",
    flex: 1,
  },
  button: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#d6d7da",
    backgroundColor: "#2196F3",
  },
  buttonText: {
    padding: 20,
    color: "white",
  },
});

export default LabSchedule;

const Days = (props) => {
  const { date, isSelected, isToday } = props;
  console.log("the date is>>>>>>>>>>>>>>>>>", date);
  const dateStrArray = new Date(date).toDateString().split(" ");
  const dayString = dateStrArray[0];
  const dateString = `${dateStrArray[1]} ${dateStrArray[2]}`;

  return (
    <TouchableOpacity
      style={[
        isSelected ? styles.cardRootContainer : styles.CardRootContainer,
        {
          width: 80,
          height: 50,
          borderBottomRightRadius: 0,
          borderTopRightRadius: 0,
          backgroundColor:
            this.state.selectedButton === "button1"
              ? "#3c64a3"
              : COLOR_PRESETS.PRIMARY.LIGHT,
        },
      ]}
    >
      <View
        style={[
          styles.cardRootContainer,
          {
            width: 80,
            marginTop: 0,
            borderBottomRightRadius: 0,
            borderTopRightRadius: 0,
          },
        ]}
      >
        <View style={styles.cardContentContainer}>
          <View style={styles.cardHeaderContainer}>
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
                  <Text style={isSelected ? styles.Day : styles.day}>
                    {isToday ? "Today" : dayString}
                  </Text>
                </View>
                <View style={{ width: DeviceWidth * 0.65 }}>
                  <Text style={isSelected ? styles.Day : styles.day}>
                    {dateString}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
