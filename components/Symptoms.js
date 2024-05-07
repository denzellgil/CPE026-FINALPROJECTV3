import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const Symptoms = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.symptoms}>
      <View style={styles.component4}>
        <View style={[styles.component4Child, styles.childPosition]} />
        <Pressable
          style={styles.akarIconsarrowRight}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/akariconsarrowright3.png")}
          />
        </Pressable>
        <Text style={styles.symptoms1}>Symptoms</Text>
        <Pressable
          style={styles.homePage}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/home-page.png")}
          />
        </Pressable>
      </View>
      <View style={styles.symptomsInner}>
        <LinearGradient
          style={[styles.frameChild, styles.childPosition]}
          locations={[0, 1]}
          colors={["#ccd4dd", "#3656f3"]}
        />
      </View>
      <View style={styles.carousel}>
        <View style={[styles.symptomsParent, styles.pageIndicatorFlexBox]}>
          <Pressable
            style={[styles.symptoms2, styles.symptomsBg]}
            onPress={() => navigation.navigate("NASALDISCHARGE")}
          >
            <Image
              style={[styles.symptomsChild, styles.symptomsLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-1010.png")}
            />
            <Text style={styles.nasalDischarge}>NASAL DISCHARGE</Text>
          </Pressable>
          <Pressable
            style={[styles.symptoms3, styles.symptomsBg]}
            onPress={() => navigation.navigate("SWOLLENCOMB")}
          >
            <Image
              style={[styles.symptomsItem, styles.symptomsLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-10101.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.symptoms3, styles.symptomsBg]}
            onPress={() => navigation.navigate("SWOLLENFEET")}
          >
            <Image
              style={[styles.symptomsItem, styles.symptomsLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-10102.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.symptoms3, styles.symptomsBg]}
            onPress={() => navigation.navigate("SWOLLENEYES")}
          >
            <Image
              style={[styles.symptomsItem, styles.symptomsLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-10103.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.symptoms3, styles.symptomsBg]}
            onPress={() => navigation.navigate("SNEEZING")}
          >
            <Image
              style={[styles.symptomsItem, styles.symptomsLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-10104.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.symptoms3, styles.symptomsBg]}
            onPress={() => navigation.navigate("DIARRHEA")}
          >
            <Image
              style={[styles.symptomsItem, styles.symptomsLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-10105.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.symptoms3, styles.symptomsBg]}
            onPress={() => navigation.navigate("ATAXIA")}
          >
            <Image
              style={[styles.symptomsItem, styles.symptomsLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-10106.png")}
            />
          </Pressable>
        </View>
        <View style={[styles.pageIndicator, styles.pageIndicatorFlexBox]}>
          <View style={[styles.dot, styles.dotLayout]} />
          <View style={[styles.dot1, styles.dotLayout]} />
          <View style={[styles.dot1, styles.dotLayout]} />
          <View style={[styles.dot1, styles.dotLayout]} />
          <View style={[styles.dot1, styles.dotLayout]} />
          <View style={[styles.dot1, styles.dotLayout]} />
          <View style={[styles.dot1, styles.dotLayout]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  childPosition: {
    bottom: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    position: "absolute",
  },
  pageIndicatorFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  symptomsBg: {
    backgroundColor: Color.colorGray_300,
    borderRadius: Border.br_31xl,
    overflow: "hidden",
  },
  symptomsLayout: {
    borderRadius: Border.br_xl,
    height: "75%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  dotLayout: {
    height: 10,
    borderRadius: Border.br_31xl,
    overflow: "hidden",
  },
  component4Child: {
    shadowColor: "rgba(5, 5, 5, 0.05)",
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowRadius: 60,
    elevation: 60,
    shadowOpacity: 1,
    backgroundColor: Color.colorGray_100,
  },
  icon: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    height: "100%",
    width: "100%",
  },
  akarIconsarrowRight: {
    left: "7.24%",
    right: "85.02%",
    bottom: "13.04%",
    width: "7.73%",
    height: "27.84%",
    top: "59.13%",
    position: "absolute",
  },
  symptoms1: {
    height: "26.07%",
    width: "33.57%",
    left: "33.34%",
    color: Color.colorGainsboro_100,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    fontFamily: FontFamily.typographyLevel,
    fontWeight: "500",
    lineHeight: 30,
    fontSize: FontSize.specialTextBig_size,
    top: "59.13%",
    position: "absolute",
  },
  homePage: {
    left: "87.38%",
    top: "58.87%",
    right: "5.61%",
    bottom: "15.9%",
    width: "7.01%",
    height: "25.23%",
    position: "absolute",
  },
  component4: {
    height: "12.84%",
    bottom: "87.16%",
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    position: "absolute",
  },
  frameChild: {
    borderRadius: Border.br_10xl,
    backgroundColor: "transparent",
  },
  symptomsInner: {
    height: "0.59%",
    width: "27.2%",
    top: "98.16%",
    right: "36.36%",
    bottom: "1.24%",
    left: "36.45%",
    position: "absolute",
  },
  symptomsChild: {
    width: "89.29%",
    top: "12.5%",
    right: "5.24%",
    bottom: "12.5%",
    left: "5.48%",
  },
  nasalDischarge: {
    top: "90.25%",
    left: "23.57%",
    color: Color.colorBlack,
    textAlign: "center",
    fontFamily: FontFamily.typographyLevel,
    fontWeight: "500",
    lineHeight: 30,
    fontSize: FontSize.specialTextBig_size,
    position: "absolute",
  },
  symptoms2: {
    height: 400,
    width: 420,
  },
  symptomsItem: {
    width: "89.3%",
    top: "12.52%",
    right: "5.23%",
    bottom: "12.48%",
    left: "5.47%",
  },
  symptoms3: {
    width: 298,
    height: 250,
    marginLeft: 22,
  },
  symptomsParent: {
    top: 0,
    left: -173,
    width: 2682,
  },
  dot: {
    backgroundColor: Color.colorCadetblue,
    width: 18,
  },
  dot1: {
    backgroundColor: Color.colorGainsboro_100,
    width: 10,
    marginLeft: 4,
  },
  pageIndicator: {
    top: 437,
    left: 0,
    backgroundColor: Color.colorGray_400,
    height: 40,
    paddingHorizontal: Padding.p_23xl,
    paddingVertical: Padding.p_11xl,
    width: 420,
  },
  carousel: {
    height: "51.51%",
    width: "98.13%",
    top: "24.19%",
    right: "3.5%",
    bottom: "24.3%",
    left: "-1.64%",
    position: "absolute",
  },
  symptoms: {
    backgroundColor: Color.colorDarkslategray,
    width: 428,
    height: 926,
  },
});

export default Symptoms;
