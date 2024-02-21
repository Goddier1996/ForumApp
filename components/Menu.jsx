import { useState } from "react";
import { View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import InfoAbout from "../screens/InfoAbout";
import Login from "../screens/Login";
import Register from "../screens/register/Register";
import ProfileUser from "../screens/profile/ProfileUser";


const Tab = createBottomTabNavigator();


const Menu = ({ StackScreen }) => {

  const [token, setToken] = useState(() => {});


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
            title: null,
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
          component={StackScreen}
        />

        {token == null ? (
          <>
            <Tab.Screen
              options={{
                title: null,
                headerStyle: {
                  backgroundColor: "#1e2226",
                },
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
              // component={<View><Login setToken={ setToken} /></View>}
              children={() => <Login setToken={setToken} />}
            />

            <Tab.Screen
              options={{
                title: null,
                headerStyle: {
                  backgroundColor: "#1e2226",
                },
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
          </>
        ) : token != null ? (
          <>
            <Tab.Screen
              options={{
                title: null,
                headerStyle: {
                  backgroundColor: "#1e2226",
                },
                tabBarIcon: ({ focused }) => (
                  <View>
                    <Image
                      source={{ uri: token.FotoUser }}
                      resizeMode="contain"
                      style={{ width: 40, height: 40 }}
                    />
                  </View>
                ),
              }}
              name="ProfileUser"
              // component={ProfileUser}
              children={() => <ProfileUser setToken={setToken} />}
            />
          </>
        ) : (
          ""
        )}

        <Tab.Screen
          options={{
            title: null,
            headerStyle: {
              backgroundColor: "#1e2226",
            },
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
      </Tab.Navigator>
    </>
  );
};


export default Menu;