import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// redux
import { Provider } from 'react-redux';
import store from './Redux/store/store';

// import all screen this app
import Home from './screens/Home';
import Menu from "./components/Menu"
import InfoAbout from './screens/InfoAbout';
import Login from './screens/Login';
import Register from './screens/Register';
import ProfileUser from './screens/ProfileUser';
import MessagesTopics from './screens/MessagesTopics';
import Topics from './screens/Topics';

const Stack = createNativeStackNavigator();


function App() {

  return (

    <Provider store={store}>
      <NavigationContainer >
        <Stack.Navigator>

          <Stack.Screen
            options={{
              title: null,
              headerStyle: {
                backgroundColor: '#1e2226'
              },
              headerTintColor: '#fff',
            }}
            name="Menu"
            component={Menu}
          />

          <Stack.Screen
            options={{
              title: null,
              headerMode: 'none',
            }}
            name="Home"
            component={Home}
          />

          <Stack.Screen
            name="InfoAbout"
            component={InfoAbout}
          />

          <Stack.Screen
            options={{
              title: null,
              headerStyle: {
                backgroundColor: '#1e2226'
              },
              headerTintColor: '#fff',
            }}
            name="Login"
            component={Login}
          />

          <Stack.Screen
            name="Register"
            component={Register}
          />

          <Stack.Screen
            name="ProfileUser"
            component={ProfileUser}
          />

          <Stack.Screen
            name="MessagesTopics"
            component={MessagesTopics}
          />

          <Stack.Screen
            options={
              ({ route }) => ({
                title: "Category: " + route.params.name,
                headerStyle: {
                  backgroundColor: '#1e2226',
                },
                headerTintColor: '#fff'
              })
            }
            name="Topics"
            component={Topics}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;