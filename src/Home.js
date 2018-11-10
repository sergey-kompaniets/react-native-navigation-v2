import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import { Navigation } from "react-native-navigation";

import LoadTabs from "./Tabs";

class HomeComponent extends Component {
  render() {
    return (
      <View>
        <Text> HomeComponent!!! </Text>
        <Button title="See Profile" onPress={() => LoadTabs()} />
      </View>
    );
  }
}

export default HomeComponent;
