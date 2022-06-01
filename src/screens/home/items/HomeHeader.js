import React from "react";
import { View, StyleSheet } from "react-native";
import AppMainLogo from "../../../assets/icons/icon-moovi-logo.svg";
import defaultStyles from "../../../config/styles";

const HomeHeader = ({}) => {
  return (
    <View style={styles.mainContainer}>
      <AppMainLogo />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: defaultStyles.colors.gray,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

export default HomeHeader;
