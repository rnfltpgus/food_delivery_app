import React from 'react';
// import {SafeAreaView, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import CustomDrawer from '../navigation/CustomDrawer';

const Stack = createStackNavigator();

const App = () => {
  return (
    // <SafeAreaView>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'Home'}>
        <Stack.Screen name="Home" component={CustomDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
    // </SafeAreaView>
  );
};

export default App;
