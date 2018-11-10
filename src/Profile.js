import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { Navigation } from "react-native-navigation";
import ImagePicker from "react-native-image-picker";

class ProfileComponent extends Component {
  constructor(props) {
    super(props);

    this.isSideDrawerVisible = false;
    Navigation.events().bindComponent(this);
  }

  state = {
    avatar: " "
  };

  navigationButtonPressed = ({ buttonId }) => {
    console.log("AQUI: " + JSON.stringify(this.props));
    !this.isSideDrawerVisible
      ? (this.isSideDrawerVisible = true)
      : (this.isSideDrawerVisible = false);
    Navigation.mergeOptions("profileSidedrawer", {
      sideMenu: {
        left: {
          visible: this.isSideDrawerVisible
        }
      }
    });
  };

  addAvatar = () => {
    ImagePicker.showImagePicker(null, response => {
      if (response.didCancel) {
        alert("Cancel op");
      } else if (response.error) {
        alert("Not working");
      } else {
        this.setState({ avatar: response.uri });
      }
    });
  };

  render() {
    return (
      <View style={{ width: "100%" }}>
        <Image source={{ uri: this.state.avatar }} style={styles.avatar} />
        <Button title="Add your avatar" onPress={() => this.addAvatar()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  avatar: {
    width: "100%",
    height: 400
  }
});

export default ProfileComponent;
