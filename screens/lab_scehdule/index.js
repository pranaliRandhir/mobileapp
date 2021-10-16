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
import Icon from "react-native-vector-icons/Fontisto";
import { Input, Divider, Button } from "react-native-elements";

import { Header, Footer } from "../../components";
import { HealthOrbitImage } from "../../assets";
import { styles } from "./styles";
import ApiClient from "../../utils/api_client";

import { COLOR_PRESETS } from "../../presets/colors";
import { DrawerScreens } from "../../navigation/route_names";
//import { SvgUri } from 'react-native-svg';

const DeviceWidth = Dimensions.get("window").width;

class LabScheduleHelper {
  static TOTAL_DAYS_TO_RENDER = 4;

  /**
   *
   * @param  {Date} inputDate
   * @returns string
   */
  static getDateStringFromDate(inputDate) {
    const date = new Date(inputDate);
    return (
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
    );
  }

  /**
   *
   * @param  {Date} date
   * @returns string
   */
  static getDayFromDate(date) {
    const dateStrArray = new Date(date).toDateString().split(" ");
    return dateStrArray[0];
  }

  /**
   *
   * @param  {Date} date
   * @returns string
   */
  static getDisplayDateFromDate(date) {
    const dateStrArray = new Date(date).toDateString().split(" ");
    return `${dateStrArray[1]} ${dateStrArray[2]}`;
  }
}

export class LabSchedule extends Component {
  today = new Date();
  selectionDates = [
    this.today,
    new Date().setDate(this.today.getDate() + 1),
    new Date().setDate(this.today.getDate() + 2),
    new Date().setDate(this.today.getDate() + 3),
  ];

  constructor(props) {
    super(props);
    this.state = {
      testList: [],
      colorId: 0,
      selectedDate: LabScheduleHelper.getDateStringFromDate(this.today),
      labId: 5,
      selectedSlot: "11:00",
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

  componentDidUpdate(_, prevState) {
    if (prevState.selectedDate !== this.state.selectedDate) {
      console.log("the date updated");
    }
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
            <Days
              key={i}
              date={e}
              index={i}
              isToday={i === 0}
              onSelect={() =>
                this.setState({
                  selectedDate: LabScheduleHelper.getDateStringFromDate(e),
                })
              }
              isSelected={
                this.state.selectedDate ===
                LabScheduleHelper.getDateStringFromDate(e)
              }
            />
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
          this.props.navigation.navigate(DrawerScreens.ORDER, item);
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
  const { date, isSelected, isToday, index } = props;

  return (
    <TouchableOpacity
      style={[
        isSelected ? styles.DayCardContainer : styles.dayCardContainer,
        index === 0 ? styles.firstDayCard : {},
        index === 3
          ? styles.lastDayCard
          : { borderRightWidth: 5, borderColor: "red" },
      ]}
      onPress={() => props.onSelect()}
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
                  {isToday ? "Today" : LabScheduleHelper.getDayFromDate(date)}
                </Text>
              </View>
              <View style={{ width: DeviceWidth * 0.65 }}>
                <Text style={isSelected ? styles.Day : styles.day}>
                  {LabScheduleHelper.getDisplayDateFromDate(date)}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
