import { StyleSheet, View } from "react-native";
import {
  Avatar,
  Button,
  Card,
  Divider,
  Text,
  useTheme,
} from "react-native-paper";

export default function ProfileScreen() {
  const theme = useTheme();

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      {/* Profile Card */}
      <Card style={styles.card} mode="elevated">
        <Card.Content style={styles.profileContent}>
          <Avatar.Image
            size={100}
            source={require("../assets/images/icon.png")}
            style={styles.avatar}
          />
          <Text variant="titleLarge" style={styles.name}>
            John Doe
          </Text>
          <Text
            variant="bodyMedium"
            style={{ color: theme.colors.onSurfaceVariant }}
          >
            john.doe@example.com
          </Text>
        </Card.Content>
      </Card>

      {/* Info */}
      <View style={styles.info}>
        <Divider style={styles.divider} />
        <Text variant="titleMedium" style={styles.infoTitle}>
          ข้อมูลส่วนตัว
        </Text>
        <Text style={styles.infoText}>อายุ: 30 ปี</Text>
        <Text style={styles.infoText}>อาชีพ: วิศวกรซอฟต์แวร์</Text>
        <Text style={styles.infoText}>ที่อยู่: กรุงเทพมหานคร, ประเทศไทย</Text>
        <Divider style={styles.divider} />
      </View>

      {/* Buttons */}
      <Button
        mode="contained"
        onPress={() => console.log("Edit profile pressed")}
        style={styles.editButton}
        labelStyle={styles.buttonLabel}
      >
        แก้ไขโปรไฟล์
      </Button>
      <Button
        mode="text"
        onPress={() => console.log("Logout pressed")}
        style={styles.logoutButton}
        labelStyle={[styles.logoutButtonLabel, { color: theme.colors.primary }]}
      >
        ออกจากระบบ
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    borderRadius: 10,
    marginBottom: 20,
  },
  info: {
    borderRadius: 10,
    marginBottom: 30,
    marginTop: 10,
  },
  profileContent: {
    alignItems: "center",
    paddingVertical: 20,
  },
  avatar: {
    marginBottom: 15,
  },
  name: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  infoTitle: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  divider: {
    marginBottom: 10,
    marginTop: 10,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 5,
  },
  editButton: {
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonLabel: {
    fontSize: 17,
    color: "#fff",
  },
  logoutButton: {
    borderRadius: 8,
    borderColor: "#b6b6b6ff",
    borderWidth: 1,
  },
  logoutButtonLabel: {
    fontSize: 17,
  },
});
