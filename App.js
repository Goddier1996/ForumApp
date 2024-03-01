import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// redux
import { Provider } from 'react-redux';
import store from './Redux/store/store';

// import all screen this app
import Home from './screens/home/Home';
import Menu from "./components/menu/Menu"
import InfoAbout from './screens/InfoAbout';
import Login from './screens/Login';
import Register from './screens/register/Register';
import ProfileUser from './screens/profile/ProfileUser';
import CommentsTopics from './screens/CommentsTopics';
import Topics from './screens/Topics';


const Stack = createNativeStackNavigator();


function StackScreen() {

  return (
    <Stack.Navigator >

      <Stack.Screen
        options={{
          title: null,
          headerMode: 'none',
          headerShown: false,
        }}
        name="HomePage"
        component={Home}
      />

      <Stack.Screen
        name="InfoAbout"
        component={InfoAbout}
      />

      <Stack.Screen
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
        options={
          ({ route }) => ({
            title: route.params.allDataTopic.nameTopic,
            headerStyle: {
              backgroundColor: '#212123',
            },
            headerTintColor: '#7c7c7e'
          })
        }
        name="CommentsTopics"
        component={CommentsTopics}
      />

      <Stack.Screen
        options={
          ({ route }) => ({
            title: route.params.name,
            headerTintColor: '#7c7c7e',
            headerStyle: {
              backgroundColor: '#212123',
            }
          })
        }
        name="Topics"
        component={Topics}
      />

    </Stack.Navigator>
  )
}


function App() {

  return (
    <Provider store={store}>
      <NavigationContainer >
        <Menu StackScreen={StackScreen} />
      </NavigationContainer>
    </Provider>
  );
}

export default App;