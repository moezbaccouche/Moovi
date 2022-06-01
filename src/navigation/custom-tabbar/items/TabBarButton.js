import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import defaultStyles from "../../../config/styles";
import IconHomeOutline from "../../../assets/icons/icon-home.svg";

const TabBarButton = ({ IconComponent = null, selected = false, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.mainContainer, selected && styles.selectedStyle]}
      onPress={onPress}
    >
      {IconComponent && <IconComponent />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedStyle: {
    backgroundColor: defaultStyles.colors.red,
    borderRadius: 50,
  },
});

export default TabBarButton;
