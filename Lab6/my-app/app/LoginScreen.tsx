import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { useRouter } from "expo-router";

const LoginScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/react-logo.png")}
        style={styles.logo}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Email"
        placeholderTextColor="#A0A0A0"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        placeholderTextColor="#A0A0A0"
        secureTextEntry
      />
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => router.replace("../(tabs)")}
      >
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.registerText}>
          New Here? <Text style={styles.registerLink}>Register</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginBottom: 50,
  },
  input: {
    width: "100%",
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#A0A0A0",
    marginBottom: 20,
    fontSize: 16,
    color: "#000",
  },
  loginButton: {
    backgroundColor: "#5cb85c",
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    marginTop: 20,
  },
  loginText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  registerText: {
    marginTop: 20,
    fontSize: 14,
    color: "#000",
  },
  registerLink: {
    fontWeight: "bold",
    color: "#000",
  },
});

export default LoginScreen;
