import React, { Component } from "react";
import { ScrollView, StyleSheet, Text, View, FlatList } from "react-native";

import { Footer, Header } from "../components";
import { AppStateContext } from "../providers/app-state/app-state.provider";
import ApiClient from "../utils/api_client";

export default class APIDemo extends Component {
  static contextType = AppStateContext;

  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    this.fetchTodos();
  }

  fetchTodos() {
    const { methods, sharedState } = this.context;

    console.log("the sharedState is>>>", sharedState.userState.userID);

    const formData = new FormData();
    formData.append("action", "getTests");

    ApiClient.post("", formData).then(({ data }) => {
      setTimeout(() => {
        this.setState({ todos: data });
        methods.setToast({ message: "todos are loaded" });
      }, 2000);
    });
  }

  render() {
    return (
      <View style={styles.rootContainer}>
        <Header />
        {this.renderBody()}
        <Footer />
      </View>
    );
  }

  renderBody() {
    const { todos } = this.state;
    return (
      <ScrollView style={{ flexGrow: 1, padding: 10 }}>
        <FlatList
          data={todos}
          renderItem={({ item }) => {
            return <Text>{item.sCategory}</Text>;
          }}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
