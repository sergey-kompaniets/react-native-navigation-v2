import { Navigation } from "react-native-navigation";

import { YellowBox } from "react-native";
YellowBox.ignoreWarnings(["Remote debugger"]);
console.ignoredYellowBox = ["Remote debugger"];

import HomeComponent from "./src/Home";
import ProfileComponent from "./src/Profile";
import PostsComponent from "./src/Posts";
import SidedrawerComponent from "./src/Sidedrawer";
import ContactsComponent from "./src//Contacts";

Navigation.registerComponent(`HomeScreen`, () => HomeComponent);
Navigation.registerComponent(`ProfileScreen`, () => ProfileComponent);
Navigation.registerComponent(`PostsScreen`, () => PostsComponent);
Navigation.registerComponent(`SidedrawerScreen`, () => SidedrawerComponent);
Navigation.registerComponent(`ContactsScreen`, () => ContactsComponent);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        id: "AppStack",
        children: [
          {
            component: {
              name: "HomeScreen",
              options: {
                topBar: {
                  title: {
                    text: "Home"
                  }
                }
              }
            }
          }
        ]
      }
    }
  });
});
