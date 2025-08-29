import { MD3DarkTheme, MD3LightTheme } from "react-native-paper";
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";

// Light Theme
export const lightPaperTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: "#6200EE",  // สีหลัก
    secondary: "#03DAC4", // accent
  },
};

export const darkPaperTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: "#BB86FC",  // สีหลักใน dark mode
    secondary: "#03DAC4", // accent
  },
};

// Navigation Theme
export const lightNavTheme = {
  ...NavigationDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    primary: "#6200EE",
    background: "#FFFFFF",
    card: "#FFFFFF",
    text: "#000000",
  },
};

export const darkNavTheme = {
  ...NavigationDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    primary: "#BB86FC",
    background: "#121212",
    card: "#1E1E1E",
    text: "#FFFFFF",
  },
};
