import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const SWOLLENEYES = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.swollenEyes}>
      <View style={styles.component4}>
        <View style={[styles.component4Child, styles.childPosition]} />
        <Pressable
          style={styles.akarIconsarrowRight}
          onPress={() => navigation.navigate("Symptoms")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/akariconsarrowright3.png")}
          />
        </Pressable>
        <Text style={styles.symptoms}>Symptoms</Text>
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
      <View style={styles.swollenEyesInner}>
        <LinearGradient
          style={[styles.frameChild, styles.childPosition]}
          locations={[0, 1]}
          colors={["#ccd4dd", "#3656f3"]}
        />
      </View>
      <View style={styles.swollenEyes1}>
        <LinearGradient
          style={[styles.swollenEyesChild, styles.childPosition]}
          locations={[0, 1]}
          colors={["#20252d", "#015967"]}
        />
        <Text style={[styles.swollenEyes2, styles.fowlPoxTypo]}>
          SWOLLEN EYES
        </Text>
        <View style={[styles.swollenEyesWrapper, styles.swollenLayout]}>
          <View style={[styles.swollenEyes3, styles.fowlPoxPosition]}>
            <LinearGradient
              style={[styles.swolleneyes, styles.fowlPoxPosition]}
              locations={[0, 1]}
              colors={["#20252d", "#015967"]}
            />
            <View style={styles.fowlpoxIsASlowSpreadingYeParent}>
              <Text style={[styles.fowlpoxIsA, styles.fowlpoxIsATypo]}>
                Fowlpox is a slow-spreading yet economically significant viral
                infection that affects chickens and turkeys on a global scale.
                This disease manifests in two distinct forms: cutaneous and
                diphtheritic. The cutaneous form is characterized by the
                development of nodular lesions on the unfeathered skin of the
                affected birds. On the other hand, the diphtheritic form
                primarily targets the upper gastrointestinal and respiratory
                tracts, causing lesions to form from the mouth to the esophagus
                and in the tracheal mucosa. The diagnosis of fowlpox relies on
                observing the characteristic gross and microscopic lesions, and
                it can be confirmed through PCR assays designed to detect the
                fowlpox virus-specific genes. While fowlpox is considered a
                slow-spreading viral infection, it is regarded as an
                economically important disease within the commercial poultry
                industry due to its potential to cause productivity losses and
                mortality in affected flocks. Vaccination plays a crucial role
                in preventing the disease and limiting its spread among poultry
                populations, making it an essential component of disease
                management strategies in commercial poultry operations
                worldwide.
              </Text>
              <Text style={[styles.fowlPox, styles.fowlPoxPosition]}>
                FOWL POX
              </Text>
              <Image
                style={styles.fowlPox2}
                contentFit="cover"
                source={require("../assets/fowl-pox-2.png")}
              />
              <Text style={[styles.clickHereFor, styles.clickTypo]}>
                CLICK HERE FOR MORE INFORMATION
              </Text>
            </View>
            <View
              style={[
                styles.avianInfluenzaCommonlyKnowParent,
                styles.avianLayout,
              ]}
            >
              <Text
                style={[styles.avianInfluenzaCommonly, styles.fowlpoxIsATypo]}
              >{`Avian Influenza, commonly known as bird flu, is a highly contagious viral disease caused by strains of the influenza A virus that primarily infect wild birds and domestic poultry like chickens, turkeys, and ducks. While these avian influenza viruses generally circulate among bird populations, certain strains have been known to cross the species barrier and infect humans, albeit with limited human-to-human transmission. Most human cases of avian influenza result from direct or close contact with infected live or dead poultry or their contaminated environments. In chickens, highly pathogenic avian influenza strains can manifest severe signs, including respiratory distress characterized by gasping and coughing, as well as digestive issues like extreme diarrhea, which can rapidly lead to death. Physical abnormalities such as swelling around the head, neck, and eyes, along with purple discoloration of the wattles, combs, and legs, are also common indicators of avian influenza in chickens.







`}</Text>
              <Text style={[styles.avianInfluenza, styles.fowlPoxPosition]}>
                AVIAN INFLUENZA
              </Text>
              <Image
                style={[styles.avianInfluenza1, styles.avianLayout]}
                contentFit="cover"
                source={require("../assets/avian-influenza-1.png")}
              />
              <Text style={[styles.clickHereFor1, styles.clickTypo]}>
                CLICK HERE FOR MORE INFORMATION
              </Text>
            </View>
          </View>
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
  fowlPoxTypo: {
    fontFamily: FontFamily.rowdiesBold,
    fontWeight: "700",
    fontSize: FontSize.size_21xl,
    textAlign: "center",
    color: Color.colorGainsboro_100,
    lineHeight: 30,
  },
  swollenLayout: {
    height: 2095,
    width: 460,
    left: 0,
  },
  fowlPoxPosition: {
    top: 0,
    position: "absolute",
  },
  fowlpoxIsATypo: {
    alignItems: "flex-end",
    fontFamily: FontFamily.rowdiesRegular,
    fontSize: FontSize.size_mini,
    width: 405,
    display: "flex",
    textAlign: "left",
    color: Color.colorGainsboro_100,
    lineHeight: 30,
    position: "absolute",
  },
  clickTypo: {
    color: Color.colorRoyalblue,
    textDecoration: "underline",
    fontFamily: FontFamily.rowdiesRegular,
    fontSize: FontSize.size_mini,
    lineHeight: 30,
    position: "absolute",
  },
  avianLayout: {
    width: 421,
    position: "absolute",
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
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
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
  symptoms: {
    height: "26.07%",
    width: "33.57%",
    left: "33.34%",
    fontSize: FontSize.specialTextBig_size,
    fontWeight: "500",
    fontFamily: FontFamily.typographyLevel,
    alignItems: "center",
    display: "flex",
    color: Color.colorGainsboro_100,
    lineHeight: 30,
    textAlign: "left",
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
  swollenEyesInner: {
    height: "0.59%",
    width: "27.2%",
    top: "98.16%",
    right: "36.36%",
    bottom: "1.24%",
    left: "36.45%",
    position: "absolute",
  },
  swollenEyesChild: {
    backgroundColor: "transparent",
  },
  swollenEyes2: {
    top: 33,
    left: 59,
    textAlign: "center",
    position: "absolute",
  },
  swolleneyes: {
    height: 2095,
    width: 460,
    left: 0,
    backgroundColor: "transparent",
  },
  fowlpoxIsA: {
    top: 45,
    left: 0,
  },
  fowlPox: {
    left: 80,
    textAlign: "center",
    fontFamily: FontFamily.rowdiesBold,
    fontWeight: "700",
    fontSize: FontSize.size_21xl,
    color: Color.colorGainsboro_100,
    lineHeight: 30,
  },
  fowlPox2: {
    top: 757,
    left: 21,
    width: 356,
    height: 287,
    position: "absolute",
  },
  clickHereFor: {
    top: 1053,
    left: 58,
    textAlign: "left",
    color: Color.colorRoyalblue,
    textDecoration: "underline",
  },
  fowlpoxIsASlowSpreadingYeParent: {
    top: 976,
    left: 31,
    height: 1083,
    width: 405,
    position: "absolute",
  },
  avianInfluenzaCommonly: {
    top: 47,
    left: 5,
  },
  avianInfluenza: {
    left: 10,
    textAlign: "center",
    fontFamily: FontFamily.rowdiesBold,
    fontWeight: "700",
    fontSize: FontSize.size_21xl,
    color: Color.colorGainsboro_100,
    lineHeight: 30,
  },
  avianInfluenza1: {
    top: 633,
    height: 212,
    left: 0,
  },
  clickHereFor1: {
    top: 857,
    left: 66,
    textAlign: "center",
  },
  avianInfluenzaCommonlyKnowParent: {
    top: 57,
    left: 15,
    height: 887,
  },
  swollenEyes3: {
    height: 2095,
    width: 460,
    left: 0,
  },
  swollenEyesWrapper: {
    top: 79,
    position: "absolute",
  },
  swollenEyes1: {
    height: "92.87%",
    width: "107.48%",
    top: "12.85%",
    right: "-3.97%",
    bottom: "-5.72%",
    left: "-3.5%",
    position: "absolute",
  },
  swollenEyes: {
    backgroundColor: Color.colorDarkslategray,
    width: 428,
    height: 926,
  },
});

export default SWOLLENEYES;
