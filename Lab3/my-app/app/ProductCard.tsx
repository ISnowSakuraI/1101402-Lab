import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity, ImageSourcePropType } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

type ProductCardProps = {
  image: ImageSourcePropType;
  name: string;
  price: number | string;
};

const ProductCard: React.FC<ProductCardProps> = ({ image, name, price }) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={image} style={styles.productImage} />
      <View style={styles.detailsContainer}>
        <Text style={styles.productName}>{name}</Text>
        <Text style={styles.productPrice}>${price}</Text>
      </View>
      <TouchableOpacity style={styles.heartIcon}>
        <Icon name="heart-outline" size={24} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    margin: 5,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    position: "relative",
    width: 150, // Adjust as needed
  },
  productImage: {
    width: "100%",
    height: 100,
    resizeMode: "contain",
    borderRadius: 8,
  },
  detailsContainer: {
    marginTop: 10,
    alignSelf: "flex-start",
  },
  productName: {
    fontSize: 16,
    fontWeight: "normal",
    textTransform: "capitalize", // ขึ้นต้นด้วยตัวใหญ่
  },
  productPrice: {
    fontSize: 14,
    color: "black",
    fontWeight: "bold", // ตัวหนา
  },
  heartIcon: {
    position: "absolute",
    top: 10,
    right: 10,
  },
});

export default ProductCard;
