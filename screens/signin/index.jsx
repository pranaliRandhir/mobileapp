import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TextInput,
  Linking,
  TouchableOpacity,
} from "react-native";

const Flex = () => {
  return (
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: "column",
        },
      ]}
    >
      <View style={{ flex: 0.1, backgroundColor: "#9abcf7" }}>
        <Text
          style={{
            fontsize: 45,
            fontWeight: "bold",
            color: "white",
            paddingTop: 10,
          }}
        ></Text>
      </View>

      <View style={{ flex: 1 }}>
        <Image
          style={styles.tinyLogo}
          source={require("../../assets/images/health_logo.png")}
        />

        <Text
          style={{
            fontSize: 20,
            color: "blue",
            fontWeight: "bold",
            marginLeft: 40,
          }}
        >
          Sign Up
        </Text>

        <Text
          style={{ color: "blue" }}
          onPress={() => Linking.openURL("http://google.com")}
        >
          Login
        </Text>
        <TextInput
          style={style.textBox}
          placeholder={"Email & Mobile Number"}
          onChangeText={(e) => {
            this.setState({ email: e });
          }}
        ></TextInput>
        <TextInput
          style={style.textBox}
          secureTextEntry={true}
          placeholder={"Enter Password"}
          onChangeText={(e) => {
            this.setState({ password: e });
          }}
        ></TextInput>

        <TouchableOpacity>
          <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 0.1, backgroundColor: "#9abcf7" }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tinyLogo: {
    width: 50,
    height: 50,
    margin: 40,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
    marginLeft: 20,
  },
  loginBtn: {
    width: "80%",
    color: "#2196f3",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 40,
    backgroundColor: "skyblue",
  },
});
const style = StyleSheet.create({
  textBox: {
    borderBottomWidth: 2,
    borderBottomColor: "black",
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 10,
  },
});

export default Flex;
