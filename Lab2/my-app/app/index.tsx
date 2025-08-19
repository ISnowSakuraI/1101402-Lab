import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* Top Section */}
        <View style={[styles.topSection, styles.lightBlueBackground]}>
          <View style={styles.box1} />
          <View style={styles.box2}>
            <Text style={styles.greetingText}>Hi, Suranaree</Text>
            <Text style={styles.instructionText}>
              Choose your favourite shoe
            </Text>
          </View>
          <View style={styles.box3} />
          <View style={styles.box4} />
        </View>

        {/* Bottom Section */}
        <View style={[styles.bottomSection, styles.yellowBackground]}>
          <View style={styles.box5} />
          <View style={styles.box6}>
            <Text style={styles.recommendedText}>Recommended for you</Text>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
  },
  topSection: {
    flex: 3,
    borderWidth: 1,
    borderColor: "#000",
  },
  bottomSection: {
    flex: 7,
    borderWidth: 1,
    borderColor: "#000",
  },
  box1: {
    flex: 1.5,
    borderWidth: 1,
    borderColor: "#000",
  },
  box2: {
    flex: 1.5,
    borderWidth: 1,
    borderColor: "#000",
  },
  box3: {
    flex: 1.5,
    borderWidth: 1,
    borderColor: "#000",
  },
  box4: {
    flex: 1.5,
    borderWidth: 1,
    borderColor: "#000",
  },
  box5: {
    flex: 2.5,
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: "#FFFF00",
  },
  box6: {
    flex: 7.5,
  },
  greetingText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  instructionText: {
    fontSize: 14,
    color: "#000",
  },
  recommendedText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    borderBottomWidth: 1,
    borderColor: "#000",
  },
  lightBlueBackground: {
    backgroundColor: "#ADD8E6",
  },
  yellowBackground: {
    backgroundColor: "#FFFF00",
  },
});

export default App;
