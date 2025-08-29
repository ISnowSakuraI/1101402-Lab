import { Stack } from "expo-router";
import { Provider as PaperProvider } from "react-native-paper";
import { useState, createContext } from "react";
import {
  lightPaperTheme,
  darkPaperTheme,
  lightNavTheme,
  darkNavTheme,
} from "../theme";
import { ThemeProvider } from "@react-navigation/native";

// สร้าง Context
export const ThemeContext = createContext({
  isDark: false,
  toggleTheme: () => {},
});

export default function Layout() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark((p) => !p);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <PaperProvider theme={isDark ? darkPaperTheme : lightPaperTheme}>
        <ThemeProvider value={isDark ? darkNavTheme : lightNavTheme}>
          <Stack
            screenOptions={{
              headerShown: true,
            }}
          >
            <Stack.Screen name="index" options={{ title: "Home" }} />
            <Stack.Screen name="settings" options={{ title: "Settings" }} />
            <Stack.Screen name="profile" options={{ title: "Profile" }} />
          </Stack>
        </ThemeProvider>
      </PaperProvider>
    </ThemeContext.Provider>
  );
}
