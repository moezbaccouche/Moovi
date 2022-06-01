import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import defaultStyles from "../config/styles";
import IconBack from "../assets/icons/icon-arrow-back.svg";

const CustomHeader = ({ title }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      <View style={{ flex: 0.2 }}>
        {/* <TouchableOpacity onPress={() => navigation.goBack()}>
          <IconBack fill={defaultStyles.colors.white} />
        </TouchableOpacity> */}
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <View style={{ flex: 0.2 }}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: defaultStyles.colors.gray,
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 20,
  },
  titleContainer: {
    flex: 0.6,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontFamily: defaultStyles.fonts.bold,
    fontSize: 20,
    color: defaultStyles.colors.white,
  },
});

export default CustomHeader;
