import { Navigation } from "react-native-navigation";

import HomeIcon from "./assets/icons/home.png";
import MenuIcon from "./assets/icons/menu.png";

const tabs = [
  {
    sideMenu: {
      left: {
        component: {
          name: "SidedrawerScreen",
          id: "postsSidedrawer"
        }
      },
      center: {
        stack: {
          children: [
            {
              component: {
                id: "PostsScreen",
                name: "PostsScreen",
                options: {
                  topBar: {
                    leftButtons: [
                      {
                        id: "sideDrawer",
                        icon: MenuIcon
                      }
                    ],
                    // rightButtons: [],
                    title: {
                      text: "Posts"
                    }
                  }
                }
              }
            }
          ],
          options: {
            bottomTab: {
              text: "Posts",
              testID: "STORIES_TAB",
              icon: HomeIcon
            }
          }
        }
      }
    }
  },
  {
    sideMenu: {
      left: {
        component: {
          name: "SidedrawerScreen",
          id: "profileSidedrawer"
        }
      },
      center: {
        stack: {
          children: [
            {
              component: {
                name: "ProfileScreen",
                id: "Profile",
                options: {
                  topBar: {
                    leftButtons: [
                      {
                        id: "sideDrawer",
                        icon: MenuIcon
                      }
                    ],
                    // rightButtons: [],
                    title: {
                      text: "Profile",
                      fontSize: 18,
                      color: "red"
                    },
                    background: {
                      color: "black"
                    }
                  }
                }
              }
            }
          ],
          options: {
            bottomTab: {
              text: "Profile",
              testID: "ACCOUNT_TAB",
              icon: HomeIcon
            }
          }
        }
      }
    }
  },
  {
    sideMenu: {
      left: {
        component: {
          name: "SidedrawerScreen",
          id: "contactSidedrawer"
        }
      },
      center: {
        stack: {
          children: [
            {
              component: {
                name: "ContactsScreen",
                id: "Contacts",
                options: {
                  topBar: {
                    leftButtons: [
                      {
                        id: "sideDrawer",
                        icon: MenuIcon
                      }
                    ],
                    // rightButtons: [],
                    title: {
                      text: "Contacts"
                    }
                  }
                }
              }
            }
          ],
          options: {
            bottomTab: {
              text: "Contacts",
              testID: "SEARCH_TAB",
              icon: HomeIcon
            }
          }
        }
      }
    }
  }
];

const LoadTabs = () => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        id: "ROOT",
        children: tabs
      }
    }
  });
};

export default LoadTabs;
