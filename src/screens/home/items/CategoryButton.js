import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import defaultStyles from "../../../config/styles";

const CategoryButton = ({ title, containerStyle, IconComponent }) => {
  return (
    <TouchableOpacity
      style={[styles.mainContainerWrapper, containerStyle]}
      onPress={() => {}}
    >
      <View style={styles.mainContainer}>
        {IconComponent && <IconComponent />}
      </View>
      <Text style={styles.titleText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainerWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  mainContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 64,
    width: 64,
    borderRadius: 50,
    backgroundColor: defaultStyles.colors.red,
    elevation: 2,
  },
  titleText: {
    fontFamily: defaultStyles.fonts.medium,
    color: defaultStyles.colors.white,
    paddingTop: 10,
  },
});

export default CategoryButton;
