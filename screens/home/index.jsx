/**
 * fileName: home/index.js
 * description: the home screen component
 */

import React, { Component } from "react";
import { Image, Text, View, FlatList, TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/Fontisto";
import { Input, Divider } from "react-native-elements";

import { Header, Footer } from "../../components";
import { HealthOrbitImage } from "../../assets";
import { styles } from "./styles";
import ApiClient from "../../utils/api_client";

import { COLOR_PRESETS } from "../../presets/colors";
import { RouteNames } from "../../navigation/route_names";
import {SvgXml} from 'react-native-svg'
import { logo } from "../../assets/svg/Icon Logo";



export class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testList: [],
    };
  }

  componentDidMount() {
    const formData = new FormData();
    formData.append("action", "getTests");

    ApiClient.post("", formData).then(({ data }) => {
      this.setState({ testList: data });
    });
  }

  renderBody() {
    const { testList } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.logoContainer}>
          <Image source={HealthOrbitImage} style={styles.logoSize} />
          {/* <SvgXml xml={logo} width="301px" style={styles.logoSize}  /> */}
        </View>

        <Input
          inputContainerStyle={styles.inputContainer}
          leftIconContainerStyle={styles.leftIconContainer}
          inputStyle={styles.input}
          containerStyle={styles.inputRootContainer}
          placeholder="Search for pathologies, laboratories"
          leftIcon={<Icon name="search" size={18} color="gray" />}
        />

        <Text style={styles.testHeader}>Top Diagnostic Test</Text>
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
      <TouchableOpacity onPress={() => {  this.props.navigation.navigate(RouteNames.LAB_SCHEDULE, item) }} style={styles.cardRootContainer}>
        <View style={styles.cardContentContainer}>
          <View style={styles.cardHeaderContainer}>
            <Image
              source={require("../../assets/images/image.png")}
              style={styles.cardImg}
            />
            <Text style={styles.testName}>{item.sName}</Text>
          </View>
          <View style={styles.cardBodyContainer}>
            <View style={{ flex: 0.7 }}>
              <Text style={styles.cardBodyText}>Known as Vit B12</Text>
              <Text style={styles.cardBodyText}>Conventional Blood</Text>
            </View>
            <View style={styles.priceContainer}>
              <Text style={styles.priceText}>{"\u20B9"}{item.sTestPrice}</Text>
            </View>
          </View>
        </View>
        <Divider color={COLOR_PRESETS.PRIMARY.DARK} />
        <Text style={styles.addText}>ADD</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <>
        <View style={styles.rootContainer}>
          <Header />
          {this.renderBody()}
          <Footer />
        </View>
      </>
    );
  }
}

export default HomeScreen;
