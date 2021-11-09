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
   Alert,
 } from "react-native";
 
 import Icon from "react-native-vector-icons/Fontisto";
 import { Input } from "react-native-elements";
 import { SocialIcon } from "react-native-elements";
 import { Header, Footer } from "../../components";
 import { HealthOrbitImage } from "../../assets";
 import { styles } from "./styles";
 import ApiClient from "../../utils/api_client";
 
 import { COLOR_PRESETS } from "../../presets/colors";
 import { RouteNames } from "../../navigation/route_names";
 import { CommonActions } from "@react-navigation/routers";
 import {
   AppStateContext,
   ToastType,
 } from "../../providers/app-state/app-state.provider";
 //  import SvgUri from 'react-native-svg-uri';
 
 class SignInHelper {
   /**
    *
    * @param {string} username
    * @param {string} password
    * @returns {Promise<{userID: number}>} promise user object
    */
   static async loginUser(username, password) {
     if (!username || !password) {
       throw new Error("Invalid  username or password");
     }
     return fetch("https://engistack.com/dm/user/user_login.php", {
       method: "POST",
       headers: {
         Accept: "application/json",
         "Content-Type": "application/json",
       },
       body: JSON.stringify({
         username: username,
         password: password,
       }),
     })
       .then((response) => response.json())
       .then((responseJson) => {
         if (responseJson.success && responseJson.userID) {
           return {
             userID: responseJson.userID,
           };
         } else {
           throw new Error("Invalid username or password");
         }
       });
   }
 }
 
 export class SingIn extends Component {
   static contextType = AppStateContext;
   constructor(props) {
     super(props);
     this.state = {
       username: "",
       usernameValidate: true,
       password: "",
       passwordValidate: true,
     };
   }
 
   handleLogin = () => {
     const { username, password } = this.state;
     const { methods } = this.context;
 
     SignInHelper.loginUser(username, password)
       .then((user) => {
         methods.setUser(user);
         this.props.navigation.dispatch(
           CommonActions.reset({
             index: 0,
             routes: [{ name: RouteNames.LANDING }],
           })
         );
       })
       .catch((error) => {
         console.log("the error is>>>>", error);
         Alert.alert(error.message);
       });
   };

   //validation
   email_validate = (username) => {
    //console.log(username);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(username) === false) {
     
      this.setState({ usernameValidate: "Invalid Email ID"})
      this.setState({ username: username})
      //return false;
    }
    else {
      this.setState({ usernameValidate: "Email is Valid"});
      this.setState({ username: username})
      //console.log("Email is Correct");
    }

    console.log("Email is >>>>>>>>>>>>>>>>>>", this.state.username);
  }


  password_validate = (password) => {
    console.log(password);
    let errorFlag = false;
    
    
      //console.log("1");
     //if (this.state.password.length != "") {
      if (this.state.password.length < 5 ||  this.state.password.length > 10) {
        
        this.setState({ passwordValidate: "Password Required"});
        this.setState({ password : password});
      
      } 
      console.log("Password is >>>>>>>>>>>>>>>>>>", this.state.password);
  }
 
   renderBody() {
     return (
       <View style={{ flex: 1 }}>
         <View style={styles.logoContainer}>
           {/* <SvgUri
              width="200"
              height="200"
              source={{uri:'https://kigadel.com/gimonn/ic/Icons/Icon%20Logo.svg'}}
            /> */}
           {/* <Image source={HealthOrbitImage} style={styles.logoSize} /> */}
         </View>
 
         <TouchableOpacity
           onPress={() => {
             this.handleLogin();
           }}
         >
           <Text style={styles.testHeader}>Sign In</Text>
         </TouchableOpacity>
 
         <Input
           inputContainerStyle={styles.inputContainer}
           leftIconContainerStyle={styles.leftIconContainer}
           inputStyle={styles.input}
           containerStyle={styles.inputRootContainer}
           placeholder="Email ID"
           
           //onChangeText={(username) => this.setState({ username })}
           onChangeText={(username) => this.email_validate(username)}
         />

          {this.state.usernameValidate == "Invalid Email ID" && this.state.usernameValidate.length > 0 && <Text style={styles.inputError}>{this.state.usernameValidate}</Text>}
          
 
         <Input
           inputContainerStyle={styles.inputContainer}
           leftIconContainerStyle={styles.leftIconContainer}
           inputStyle={styles.input}
           containerStyle={styles.inputRootContainer}
           placeholder="Password"
           secureTextEntry={true}
           style={{ color: "black" }}
           //  maxLength={10}
           minLength={2}
           onChangeText={(password) => this.setState({ password })}
           //onChangeText={(password) => this.password_validate(password)}
         />

        {/* {this.state.passwordValidate && <Text style={styles.inputError}>{this.state.passwordValidate}</Text>} */}
 
         <View
           style={{
             flexDirection: "row",
            //  justifyContent: "center",
            //  alignItems: "center",
           }}
         >
 
           
          <TouchableOpacity onPress={() => {this.props.navigation.navigate(RouteNames.FORGET_PASSWORD)}}>
             <Text style={styles.forget}>Forget Password?</Text>
           </TouchableOpacity>

         </View>

        
 
         <TouchableOpacity
           onPress={() => {
             this.handleLogin();
           }}
         >
           <Text style={styles.SingIn}>Sign In</Text>
         </TouchableOpacity>
 
         {/* <View
           style={{ flexDirection: "row", alignItems: "center", marginTop: 40 }}
         >
           <View
             style={{
               flex: 1,
               height: 1.5,
               backgroundColor: COLOR_PRESETS.PRIMARY.DARK,
               marginLeft: 20,
             }}
           />
           <View>
             <Text
               style={{
                 width: 20,
                 textAlign: "center",
                 fontWeight: "bold",
                 marginLeft: 0,
                 color: COLOR_PRESETS.PRIMARY.DARK,
               }}
             >
               or
             </Text>
           </View>
           <View
             style={{
               flex: 1,
               height: 1.5,
               backgroundColor: COLOR_PRESETS.PRIMARY.DARK,
               marginRight: 20,
             }}
           />
         </View>
 
         <View
           style={{
             flexDirection: "row",
             justifyContent: "center",
             alignItems: "center",
             marginTop: 20,
           }}
         >
           <SocialIcon type="twitter" />
           <SocialIcon type="google" />
           <SocialIcon type="facebook" />
         </View> */}
 
         <View style={styles.bottom}>
           <View style={{ flex: 0.8 }}>
             <Text>Don't have an account? </Text>
           </View>
           <TouchableOpacity
             onPress={() => {
               this.props.navigation.navigate(RouteNames.SIGN_UP);
             }}
           >
             <Text style={styles.signup}>Create New One </Text>
           </TouchableOpacity>
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
 