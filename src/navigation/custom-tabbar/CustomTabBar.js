import React from "react";
import { View, StyleSheet } from "react-native";
import IconHomeOutline from "../../assets/icons/icon-home.svg";
import IconHomeFilled from "../../assets/icons/icon-home-on.svg";
import IconHeartOutline from "../../assets/icons/icon-heart.svg";
import IconHeartFilled from "../../assets/icons/icon-heart-on.svg";
import TabBarButton from "./items/TabBarButton";
import defaultStyles from "../../config/styles";
import { StatusCodes } from "http-status-codes";
import routes from "../routes";

const CustomTabBar = ({ state, navigation }) => {
  console.log("State", state);
  return (
    <View style={styles.tabBarContainer}>
      <View style={styles.btnContainer}>
        <TabBarButton
          IconComponent={() =>
            state.index === 0 ? <IconHomeFilled /> : <IconHomeOutline />
          }
          selected={state.index === 0}
          onPress={() => navigation.navigate(routes.HOME)}
        />
      </View>
      <View style={styles.btnContainer}>
        <TabBarButton
          IconComponent={() =>
            state.index === 1 ? <IconHeartFilled /> : <IconHeartOutline />
          }
          selected={state.index === 1}
          onPress={() => navigation.navigate(routes.FAVORITE)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: defaultStyles.colors.gray,
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  btnContainer: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CustomTabBar;
