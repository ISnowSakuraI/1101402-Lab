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

const ProductDetailScreen = () => {
  return (
    <View style={styles.container}>
      {/* Product Image */}
      <View style={styles.imageSection}>
        <Image
          source={require("../assets/images/shoe1.png")}
          style={styles.productImage}
          resizeMode="contain"
        />
      </View>
      {/* Details */}
      <View style={styles.detailsSection}>
        {/* Product Info */}
        <View style={styles.infoSection}>
          <Text style={styles.productName}>Adidas Stan Smith</Text>
          <Text style={styles.productPrice}>$850.99</Text>
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
            <Text style={styles.descriptionText}>
              Take a seat at the table and add your special touch to the hoops
              to streets icon. Inspired by the audacious, the customizable
              design lets you be as expressive as you want. Choose between
              canvas and suede accents for a healthy dose of trail-time flavor.
              Add classic leather for those on-the-court days. Next, write a
              piece of your story on the pull tab, which doubles as the perfect
              spot to attach your kicks to your backpack when its time to cross
              streets or hit the beach. Plus, countless color options let you be
              as adventurous as you want.
            </Text>
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
