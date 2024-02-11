import React from "react";
import { View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import InfoAbout from "../screens/InfoAbout";
import Login from "../screens/Login";
import Register from "../screens/Register";
import ProfileUser from "../screens/ProfileUser";

const Tab = createBottomTabNavigator();


const Menu = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveBackgroundColor: "green",
          tabBarInactiveBackgroundColor: "#1e2226",
        }}
      >
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View>
                <Image
                  source={{
                    uri: "https://i.postimg.cc/sDb3bjpC/icons8-house-48.png",
                  }}
                  resizeMode="contain"
                  style={{ width: 40, height: 40 }}
                />
              </View>
            ),
          }}
          name="Home"
          component={Home}
        />

        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View>
                <Image
                  source={{
                    uri: "https://i.postimg.cc/3JZYmJxQ/Lovepik-com-450041178-Information-vector.png",
                  }}
                  resizeMode="contain"
                  style={{ width: 40, height: 40 }}
                />
              </View>
            ),
          }}
          name="InfoAbout"
          component={InfoAbout}
        />

        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View>
                <Image
                  source={{
                    uri: "https://i.postimg.cc/6QddRVxR/icons8-log-in-64.png",
                  }}
                  resizeMode="contain"
                  style={{ width: 50, height: 50 }}
                />
              </View>
            ),
          }}
          name="Login"
          component={Login}
        />

        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View>
                <Image
                  source={{
                    uri: "https://i.postimg.cc/1t7d1WgY/Universal-37.png",
                  }}
                  resizeMode="contain"
                  style={{ width: 40, height: 40 }}
                />
              </View>
            ),
          }}
          name="Register"
          component={Register}
        />

        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View>
                <Image
                  source={{
                    uri: "https://i.postimg.cc/1t7d1WgY/Universal-37.png",
                  }}
                  resizeMode="contain"
                  style={{ width: 40, height: 40 }}
                />
              </View>
            ),
          }}
          name="ProfileUser"
          component={ProfileUser}
        />
      </Tab.Navigator>
    </>
  );
};


export default Menu;