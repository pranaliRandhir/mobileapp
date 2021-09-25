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
import SvgUri from 'react-native-svg-uri';




export class OrderScreen extends Component {
  state = {
    testName: "",
    testPrice: "",
    testArea : "",
  };
  constructor(props) {
    super(props);
    this.state = {
      testList: [],
      
    };
    
  }

  componentDidMount() {
    const formData = new FormData();

    const testId = this.props.route.params.iTestId;
    const testName = this.props.route.params.sName;
    const testPrice = this.props.route.params.sTestPrice;
    const testArea =this.props.route.params.sTestArea;
    this.setState({ 
      testName: testName,
      testPrice: testPrice,
      testArea:testArea,

    });
    console.log('Test ID>>>>>>',  testId );
    console.log('Test Name>>>>>>',  testName );
    console.log('Test Price>>>>>>',  testPrice);
    console.log('Test Location>>>>>>',  testArea);

    formData.append("action", "getTests");

    ApiClient.post("", formData).then(({ data }) => {
      this.setState({ testList: data });
    });
  }

  renderBody() {
    const { testList } = this.state;
   
    
    return (
      <View style={{ flex: 1 }}>
        
        {/* <TouchableOpacity onPress={() => {this.props.navigation.navigate(RouteNames.SCREEN_2)}}> */}
          <Text style={styles.testHeader}>ORDER</Text>
        {/* </TouchableOpacity> */}
        <TouchableOpacity  style={styles.cardRootContainer}>
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
                    <Text style={styles.testName}>{this.state.testName}</Text>
                  </View>
                  
                  <View>
                    <Text>{this.state.testArea}</Text>
                  </View>

                  <View>
                    <Text style={styles.priceText}>{"\u20B9"}{this.state.testPrice}</Text>
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
    
      </View>
    );
  }

  renderTestCard(item, index) {
    return (
      // <TouchableOpacity onPress={() => { this.props.navigation.navigate(RouteNames.LAB_SCHEDULE, item) }} style={styles.cardRootContainer}>
      <TouchableOpacity  style={styles.cardRootContainer}>
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
                    <Text style={styles.priceText}>{"\u20B9"}{item.sTestPrice}</Text>
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
          <Header />
          {this.renderBody()}
          {/* <Footer /> */}
        </View>
      </>
    );
  }
}

export default OrderScreen;
