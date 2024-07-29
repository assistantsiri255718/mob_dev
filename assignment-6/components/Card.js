import React from 'react';
import { View, Text, Image } from 'react-native';

const CardComponent = ({ product }) => {
  return (
    <View style={{ margin: 10, padding: 10, borderWidth: 1, borderRadius: 5 }}>
      <Image source={{ uri: product.image }} style={{ width: 150, height: 150 }} />
      <Text>{product.name}</Text>
    </View>
  );
};

export default CardComponent;
