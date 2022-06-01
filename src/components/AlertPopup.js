import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";
import { useSelector } from "react-redux";
import defaultStyles from "../config/styles";

const AlertPopup = () => {
  const { content, color, showAlertPopup } = useSelector(
    (state) => state.popups
  );
  const animatedValue = useRef(new Animated.Value(-100)).current;

  useEffect(() => {
    if (showAlertPopup) {
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(animatedValue, {
        toValue: -100,
        duration: 500,
        useNativeDriver: false,
      });
    }
  }, [showAlertPopup]);

  return (
    showAlertPopup && (
      <Animated.View
        style={[
          styles.popupContainer,
          { backgroundColor: color, top: animatedValue },
        ]}
      >
        <Text style={styles.contentText}>{content}</Text>
      </Animated.View>
    )
  );
};

const styles = StyleSheet.create({
  popupContainer: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  contentText: {
    fontFamily: defaultStyles.fonts.regular,
    color: defaultStyles.colors.white,
  },
});

export default AlertPopup;
