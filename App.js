import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { store } from './Store';
import { Provider } from 'react-redux';
import MainPage from './src/Containers/MainPage';
import CalendarPage from './src/Containers/CalendarPage';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {
          fontSize: 15,
        },
      }}
    >
      <Tab.Screen name="MainPage" component={MainPage} />
      <Tab.Screen name="CalendarPage" component={CalendarPage} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Tabs" component={Tabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;