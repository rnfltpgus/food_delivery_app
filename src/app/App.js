import React from "react";
// import { SafeAreaView } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "../stores/rootReducer";

import CustomDrawer from "../navigation/CustomDrawer";

const Stack = createStackNavigator();
const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  return (
    // <SafeAreaView>
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={"Home"}>
          <Stack.Screen name="Home" component={CustomDrawer} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    // </SafeAreaView>
  );
};

export default App;
