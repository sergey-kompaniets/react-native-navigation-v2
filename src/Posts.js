import React, { Component } from "react";
import { Text, View } from "react-native";
import { Navigation } from "react-native-navigation";

class PostsComponent extends Component {
  constructor(props) {
    super(props);

    this.isSideDrawerVisible = false;
    Navigation.events().bindComponent(this);
  }

  navigationButtonPressed = ({ buttonId }) => {
    console.log("AQUI: " + JSON.stringify(this.props));
    !this.isSideDrawerVisible
      ? (this.isSideDrawerVisible = true)
      : (this.isSideDrawerVisible = false);
    Navigation.mergeOptions("postsSidedrawer", {
      sideMenu: {
        left: {
          visible: this.isSideDrawerVisible
        }
      }
    });
  };

  render() {
    return (
      <View>
        <Text> PostsComponent </Text>
      </View>
    );
  }
}

export default PostsComponent;
