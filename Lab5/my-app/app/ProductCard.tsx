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
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.productImage} />
        <TouchableOpacity style={styles.heartIcon}>
          <Icon name="heart-outline" size={24} color="#888" />
        </TouchableOpacity>
      </View>
      <Text style={styles.productName}>{name}</Text>
      <Text style={styles.productPrice}>${price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 10,
    margin: 5,
    width: 175,
    alignItems: "center",
  },
  imageContainer: {
    width: "100%",
    height: 100,
    borderRadius: 12,
    backgroundColor: "#f5f5f5",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  productImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    borderRadius: 12,
  },
  heartIcon: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "transparent",
  },
  productName: {
    fontSize: 15,
    fontWeight: "normal",
    color: "#222",
    marginTop: 2,
    textTransform: "capitalize",
    alignSelf: "flex-start",
  },
  productPrice: {
    fontSize: 15,
    color: "#222",
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
});

export default ProductCard;
