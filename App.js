/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import defaultStyles from "./src/config/styles";
import AlertPopup from "./src/components/AlertPopup";
import AppNavigator from "./src/navigation/AppNavigator";
import navigationRef from "./src/navigation/NavigationActions";

const App = () => {
  return (
    <SafeAreaView style={styles.appContainer}>
      <StatusBar
        backgroundColor={defaultStyles.colors.gray}
        barStyle="light-content"
      />
      <AppNavigator ref={navigationRef} />
      <AlertPopup />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: defaultStyles.colors.black,
  },
});

export default App;
