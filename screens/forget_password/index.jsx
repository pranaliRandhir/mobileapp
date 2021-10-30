/**
 * fileName: forget_password/index.js
 * description: the forget_password screen component
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
//  import SvgUri from 'react-native-svg-uri';
 
 
 

 export class ForgetPassword extends Component {
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
         
         {/* <SvgUri 
           width="200" 
           height="200" 
           source={{uri:'https://kigadel.com/gimonn/ic/Icons/Icon%20Logo.svg'}}
         /> */}
         <Image source={HealthOrbitImage} style={styles.logoSize} />
           
       </View>

       <TouchableOpacity>
         <Text style={styles.testHeader}>Forget Password?</Text>
       </TouchableOpacity>

        
        <Input
         inputContainerStyle={styles.inputContainer}
         leftIconContainerStyle={styles.leftIconContainer}
         inputStyle={styles.input}
         containerStyle={styles.inputRootContainer}
         placeholder="Email Address"
        />

       
       
        <TouchableOpacity>
          <Text style={styles.SingIn}>Submit</Text>
        </TouchableOpacity>

        <View style={styles.bottom}>
          <View >
            <Text>Already have an account? </Text>
          </View>
          <TouchableOpacity onPress={() => {this.props.navigation.navigate(RouteNames.SIGN_IN)}}>
            <Text style={styles.signup}>SignIn </Text>
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
 
 export default ForgetPassword;
 