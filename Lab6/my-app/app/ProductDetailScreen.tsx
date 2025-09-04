import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useLocalSearchParams } from "expo-router";

const images = [
  require("../assets/images/shoe1.png"),
  require("../assets/images/shoe2.png"),
  require("../assets/images/shoe3.png"),
  require("../assets/images/shoe1.png"),
  require("../assets/images/shoe2.png"),
  require("../assets/images/shoe3.png"),
];

const ProductDetailScreen = () => {
  const params = useLocalSearchParams();
  const name = params.name || "Adidas Stan Smith";
  const price = params.price || "$850.99";
  const description =
    params.description ||
    "Take a seat at the table and add your special touch to the hoops to streets icon...";
  const imageIndex = params.image ? parseInt(params.image as string) : 0;
  const imageSource = images[imageIndex] || images[0];

  return (
    <View style={styles.container}>
      {/* Product Image */}
      <View style={styles.imageSection}>
        <Image
          source={imageSource}
          style={styles.productImage}
          resizeMode="contain"
        />
      </View>
      {/* Details */}
      <View style={styles.detailsSection}>
        {/* Product Info */}
        <View style={styles.infoSection}>
          <Text style={styles.productName}>{name}</Text>
          <Text style={styles.productPrice}>${price}</Text>
        </View>

        {/* Available Sizes */}
        <View style={styles.sizeSection}>
          <Text style={styles.sectionTitle}>AVAILABLE SIZES</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {["8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"].map(
              (size, index) => (
                <TouchableOpacity key={index} style={styles.sizeOption}>
                  <Text style={styles.sizeText}>{size}</Text>
                </TouchableOpacity>
              )
            )}
          </ScrollView>
        </View>

        {/* Description */}
        <View style={styles.descriptionSection}>
          <Text style={styles.sectionTitle}>Description</Text>
          <ScrollView style={styles.descriptionScrollView}>
            <Text style={styles.descriptionText}>{description}</Text>
          </ScrollView>
        </View>

        {/* Buttons */}
        <View style={styles.buttonSection}>
          <TouchableOpacity style={styles.favButton}>
            <Icon name="heart-outline" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.addToCartButton}>
            <Text style={styles.addToCartText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageSection: {
    flex: 1.5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: "center",
  },
  detailsSection: {
    flex: 2.5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: "center",
  },
  infoSection: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: "center",
  },
  sizeSection: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: "center",
  },
  descriptionSection: {
    flex: 2.5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: "center",
  },
  buttonSection: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  productImage: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
  productName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#222",
  },
  productPrice: {
    fontSize: 20,
    color: "#e74c3c",
    fontWeight: "bold",
    marginTop: 5,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  sizeOption: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    minWidth: 40,
    alignItems: "center",
  },
  sizeText: {
    fontSize: 16,
  },
  descriptionScrollView: {
    flex: 1,
  },
  descriptionText: {
    fontSize: 14,
    lineHeight: 20,
    color: "#444",
  },
  favButton: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
  },
  addToCartButton: {
    flex: 1,
    backgroundColor: "#5cb85c",
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: "center",
  },
  addToCartText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ProductDetailScreen;
