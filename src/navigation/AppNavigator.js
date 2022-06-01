import React, { forwardRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import routes from "./routes";
import CustomTabBar from "./custom-tabbar/CustomTabBar";
import Home from "../screens/home/Home";
import FavoriteMovies from "../screens/favorite-movies/FavoriteMovies";

const Root = createNativeStackNavigator();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs" component={AppTab} />
    </Stack.Navigator>
  );
};

const AppTab = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      initialRouteName={routes.HOME}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name={routes.HOME} component={Home} />
      <Tab.Screen name={routes.FAVORITE} component={FavoriteMovies} />
    </Tab.Navigator>
  );
};

const AppNavigator = (props, ref) => {
  return (
    <NavigationContainer ref={ref}>
      <Root.Navigator headerMode="none" screenOptions={{ headerShown: false }}>
        <Root.Screen name="App" component={AppStack} />
      </Root.Navigator>
    </NavigationContainer>
  );
};

export default forwardRef(AppNavigator);
