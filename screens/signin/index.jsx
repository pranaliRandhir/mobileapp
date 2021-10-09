/**
 * fileName: home/index.js
 * description: the home screen component
 */

import React, { Component } from "react";
import { Image, Text, View, FlatList, TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/Fontisto";
import { Input, Divider } from "react-native-elements";
import { CommonActions } from "@react-navigation/routers";

import { Header, Footer } from "../../components";
import { HealthOrbitImage } from "../../assets";
import { styles } from "./styles";
import ApiClient from "../../utils/api_client";

import { RouteNames } from "../../navigation/route_names";
import {
  AppStateContext,
  ToastType,
} from "../../providers/app-state/app-state.provider";
//  import SvgUri from 'react-native-svg-uri';

class SignInHelper {
  static async loginUser(username, password) {
    if (username === "a" && password === "b") {
      return {
        userID: 1,
      };
    } else {
      throw new Error("Invalid username or password");
    }
  }
}

export class SingIn extends Component {
  static contextType = AppStateContext;
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleLogin = async () => {
    const { username, password } = this.state;
    const { methods } = this.context;
    try {
      const user = await SignInHelper.loginUser(username, password);
      if (user?.userID) {
        methods.setUser(user);
      }
      // this.props.navigation.dispatch(
      //   CommonActions.reset({
      //     index: 0,
      //     routes: [{ name: RouteNames.LANDING }],
      //   })
      // );
    } catch (error) {
      methods.setToast({ message: error.message, type: ToastType.ERROR });
    }
  };

  renderBody() {
    const { testList } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.logoContainer}>
          {/* <SvgUri
             width="200"
             height="200"
             source={{uri:'https://kigadel.com/gimonn/ic/Icons/Icon%20Logo.svg'}}
           /> */}
          <Image source={HealthOrbitImage} style={styles.logoSize} />
        </View>

        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.testHeader}>Login</Text>
        </TouchableOpacity>

        <Input
          inputContainerStyle={styles.inputContainer}
          leftIconContainerStyle={styles.leftIconContainer}
          inputStyle={styles.input}
          containerStyle={styles.inputRootContainer}
          placeholder="Email & Mobile No."
          onChangeText={(username) => this.setState({ username })}
        />

        <Input
          inputContainerStyle={styles.inputContainer}
          leftIconContainerStyle={styles.leftIconContainer}
          inputStyle={styles.input}
          containerStyle={styles.inputRootContainer}
          placeholder="Password"
          secureTextEntry
          onChangeText={(password) => this.setState({ password })}
        />

        <TouchableOpacity>
          <Text style={styles.forget}>Forget Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.handleLogin();
          }}
        >
          <Text style={styles.SingIn}>Sign In</Text>
        </TouchableOpacity>

        <View style={styles.bottom}>
          <View style={{ flex: 0.5 }}>
            <Text>No account yet ? </Text>
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate(RouteNames.SIGN_UP);
              }}
            >
              <Text style={styles.signup}>SignUp </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
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

export default SingIn;
