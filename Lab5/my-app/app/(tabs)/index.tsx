import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import SearchBar from "../SearchBar"; // Make sure SearchBar.js is in the same directory
import ProductCard from "../ProductCard"; // Make sure ProductCard.js is in the same directory
import { useRouter } from "expo-router";

const App = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="menu-outline" size={30} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../../assets/images/react-logo.png")}
            style={styles.profileImage}
          />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        {/* Welcome Section */}
        <Text style={styles.greeting}>Hi. Suranaree</Text>
        <Text style={styles.title}>Choose your favourite shoe</Text>

        {/* Search Bar */}
        <SearchBar />

        {/* Categories */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoryContainer}
        >
          {[
            "All",
            "Nike",
            "Adidas",
            "Puma",
            "Fila",
            "Converse",
            "Reebok",
            "New Balance",
            "Asics",
            "Vans",
            "Under Armour",
            "Skechers",
            "Saucony",
            "Mizuno",
            "Brooks",
            "Hoka",
            "Onitsuka Tiger",
          ].map((category, index) => (
            <TouchableOpacity key={index} style={styles.categoryButton}>
              <Text style={styles.categoryText}>{category}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* รูป shoe3 ด้านบน Recommended for you */}
        <View style={{ alignItems: "center", marginBottom: 10 }}>
          <Image
            source={require("../../assets/images/recommended.png")}
            style={{ width: 3200, height: 225, resizeMode: "contain" }}
          />
        </View>
        <Text style={styles.recommendedTitle}>Recommended for you</Text>

        {/* Recommended Products */}
        <View style={styles.productsContainer}>
          <TouchableOpacity onPress={() => router.push("/ProductDetailScreen")}>
            <ProductCard
              image={require("../../assets/images/shoe1.png")}
              name="Nike Sport"
              price="930.99"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/ProductDetailScreen")}>
            <ProductCard
              image={require("../../assets/images/shoe2.png")}
              name="Puma runner"
              price="890.50"
            />
          </TouchableOpacity>
          <ProductCard
            image={require("../../assets/images/shoe3.png")}
            name="Fila classic"
            price="890.50"
          />
          <ProductCard
            image={require("../../assets/images/shoe1.png")}
            name="Adidas boost"
            price="1,050.00"
          />
          <ProductCard
            image={require("../../assets/images/shoe2.png")}
            name="Converse street"
            price="799.00"
          />
          <ProductCard
            image={require("../../assets/images/shoe3.png")}
            name="Vans classic"
            price="950.00"
          />
          {/* เพิ่มสินค้าอื่น ๆ ด้วย ProductCard ได้เลย */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20, // To make the image circular
  },
  content: {
    paddingHorizontal: 15,
  },
  greeting: {
    fontSize: 18,
    color: "#888",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  categoryContainer: {
    marginTop: 10,
    marginBottom: 15,
  },
  categoryButton: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginRight: 10,
  },
  categoryText: {
    fontSize: 14,
  },
  recommendedTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  productsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});

export default App;
