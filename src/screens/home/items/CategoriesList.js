import React from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import defaultStyles from "../../../config/styles";
import CategoryButton from "./CategoryButton";
import IconCategoryAction from "../../../assets/icons/icon-category-action.svg";
import IconCategoryFamily from "../../../assets/icons/icon-category-family.svg";
import IconCategoryDrama from "../../../assets/icons/icon-category-drama.svg";
import IconCategoryAnimation from "../../../assets/icons/icon-category-animation.svg";
import IconCategoryAdventure from "../../../assets/icons/icon-category-aventure.svg";

const CategoriesList = ({}) => {
  return (
    <View style={styles.mainContainer}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <CategoryButton
          title="Action"
          containerStyle={{ paddingLeft: 10, paddingRight: 20 }}
          IconComponent={() => <IconCategoryAction />}
        />
        <CategoryButton
          title="Famille"
          containerStyle={{ paddingRight: 20 }}
          IconComponent={() => <IconCategoryFamily />}
        />
        <CategoryButton
          title="Drama"
          containerStyle={{ paddingRight: 20 }}
          IconComponent={() => <IconCategoryDrama />}
        />
        <CategoryButton
          title="Animation"
          containerStyle={{ paddingRight: 20 }}
          IconComponent={() => <IconCategoryAnimation />}
        />
        <CategoryButton
          title="Aventure"
          IconComponent={() => <IconCategoryAdventure />}
          containerStyle={{ paddingRight: 10 }}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: 20,
  },
});

export default CategoriesList;
