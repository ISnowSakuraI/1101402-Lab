import { View, StyleSheet } from "react-native";
import { Button, Switch, Text, useTheme } from "react-native-paper";
import { Link } from "expo-router";
import { useContext } from "react";
import { ThemeContext } from "./_layout";

export default function HomeScreen() {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const theme = useTheme();
  const themeText = isDark ? "ธีมมืด" : "ธีมสว่าง";

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Text style={{ color: theme.colors.onBackground }}>หน้าหลัก</Text>

      <Link href="/settings" asChild>
        <Button mode="text" style={styles.linkButton}>
          ไปที่หน้าตั้งค่า
        </Button>
      </Link>

      <Link href="/profile" asChild>
        <Button mode="text" style={styles.linkButton}>
          ไปที่หน้าโปรไฟล์
        </Button>
      </Link>

      <View style={styles.themeSwitchContainer}>
        <Text style={[styles.themeText, { color: theme.colors.onBackground }]}>
          {themeText}
        </Text>
        <Switch
          value={isDark}
          onValueChange={toggleTheme}
          color={theme.colors.secondary}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  linkButton: {
    marginTop: 10,
    borderRadius: 5,
    borderColor: "#b6b6b6ff",
    borderWidth: 1,
  },
  themeSwitchContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  themeText: {
    marginRight: 10,
    fontSize: 16,
  },
});
