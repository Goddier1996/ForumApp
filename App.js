import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// redux
import { Provider } from 'react-redux';
import store from './Redux/store/store';

// import all screen this app
import Home from './screens/home/Home';
import Menu from "./components/menu/Menu"
import CommentsTopics from './screens/CommentsTopics';
import Topics from './screens/Topics';

// this for SplashScreen, when loading app show animation
import { useEffect, useState } from 'react';
import SplashScreen from './components/tools/SplashScreen';



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

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading process
    setTimeout(() => {
      setIsLoading(false);
    }, 3500); // Adjust the time as needed
  }, []);


  return (
    <Provider store={store}>
      <NavigationContainer>
        {isLoading ? <SplashScreen /> :
          <Menu StackScreen={StackScreen} />
        }
      </NavigationContainer>
    </Provider>
  );
}

export default App;