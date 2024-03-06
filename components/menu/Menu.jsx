import { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import InfoAbout from "../../screens/InfoAbout";
import Login from "../../screens/Login";
import Register from "../../screens/register/Register";
import ProfileUser from "../../screens/ProfileUser";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Ionicons from "react-native-vector-icons/Ionicons";
import { View, Text } from "react-native";
import styles from "./menu.style";

const Tab = createBottomTabNavigator();

const Menu = ({ StackScreen }) => {
  
  const [token, setToken] = useState(() => {});

  // this function check if user connect to App
  // why i create this function here ?
  // user can close this app and AsyncStorage was save.
  // and now we can show options at menu, if user open this app but AsyncStorage don't delete(LogOut)
  const checkIfUserConnect = async () => {
    const deleteUser = await AsyncStorage.getItem("user");
    const currentUser = JSON.parse(deleteUser);

    if (currentUser) {
      setToken(currentUser);
    } else {
      setToken(null);
    }
  };

  useEffect(() => {
    checkIfUserConnect();
  });

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveBackgroundColor: "#212123",
          tabBarInactiveBackgroundColor: "#212123",
        }}
      >
        <Tab.Screen
          options={{
            title: null,
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View style={styles.menuOptions}>
                <Ionicons
                  name="home-outline"
                  color={focused ? "#e48a33" : "#7c7c7e"}
                  size={28}
                />
                {focused && (
                  <Text
                    style={[
                      styles.textMenuOptions,
                      { color: focused ? "#e48a33" : "#7c7c7e" },
                    ]}
                  >
                    Home
                  </Text>
                )}
              </View>
            ),
          }}
          name="Home"
          component={StackScreen}
        />

        {token == null ? (
          <>
            <Tab.Screen
              options={{
                // headerStyle: {
                //   backgroundColor: "#1e2226",
                // },
                title: null,
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                  <View style={styles.menuOptions}>
                    <Ionicons
                      style={{ marginTop: focused ? -4 : 0 }}
                      name="log-in-outline"
                      color={focused ? "#e48a33" : "#7c7c7e"}
                      size={37}
                    />

                    {focused && (
                      <Text
                        style={[
                          styles.textMenuOptions,
                          { color: focused ? "#e48a33" : "#7c7c7e" },
                          { marginTop: -5, marginLeft: 8 },
                        ]}
                      >
                        Login
                      </Text>
                    )}
                  </View>
                ),
              }}
              name="Login"
              children={() => <Login setToken={setToken} />}
            />

            <Tab.Screen
              options={{
                // headerStyle: {
                //   backgroundColor: "#1e2226",
                //   height: 55,
                //    borderRadius:100
                // },
                title: null,
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                  <View style={styles.menuOptions}>
                    <Ionicons
                      name="person-add-outline"
                      color={focused ? "#e48a33" : "#7c7c7e"}
                      size={28}
                    />
                    {focused && (
                      <Text
                        style={[
                          styles.textMenuOptions,
                          { color: focused ? "#e48a33" : "#7c7c7e" },
                          { marginLeft: 1 },
                        ]}
                      >
                        Register
                      </Text>
                    )}
                  </View>
                ),
              }}
              name="Register"
              component={Register}
            />
          </>
        ) : token != null ? (
          <>
            <Tab.Screen
              options={{
                headerStyle: {
                  backgroundColor: "white",
                  height: 25,
                },
                title: null,
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                  <View style={styles.menuOptions}>
                    <Ionicons
                      name="person-outline"
                      color={focused ? "#e48a33" : "#7c7c7e"}
                      size={28}
                    />
                    {focused && (
                      <Text
                        style={[
                          styles.textMenuOptions,
                          { color: focused ? "#e48a33" : "#7c7c7e" },
                        ]}
                      >
                        {token.Name}
                      </Text>
                    )}
                  </View>
                ),
              }}
              name="ProfileUser"
              children={() => <ProfileUser setToken={setToken} />}
            />
          </>
        ) : (
          ""
        )}

        <Tab.Screen
          options={{
            title: null,
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View style={styles.menuOptions}>
                <Ionicons
                  style={{ marginTop: focused ? -2 : 0 }}
                  name="information-circle-outline"
                  color={focused ? "#e48a33" : "#7c7c7e"}
                  size={35}
                />
                {focused && (
                  <Text
                    style={[
                      styles.textMenuOptions,
                      { color: focused ? "#e48a33" : "#7c7c7e" },
                      { marginTop: -4, marginRight: 2 },
                    ]}
                  >
                    Info
                  </Text>
                )}
              </View>
            ),
          }}
          name="InfoAbout"
          component={InfoAbout}
        />
      </Tab.Navigator>
    </>
  );
};

export default Menu;
