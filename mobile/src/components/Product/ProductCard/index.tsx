import React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import Typography from '../../General/Typography';
import styles from './styles';

type ProductCardProps = {
  title: string;
  price: number;
  imageURL: string;
  onPress?: () => void;
};

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  imageURL,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image
        source={{ uri: imageURL }}
        resizeMode="cover"
        height={100}
        borderTopRightRadius={15}
        borderTopLeftRadius={15}
      />
      <View style={styles.content}>
        <Typography type="caption" italic>
          {title}
        </Typography>
        <Typography type="plain" italic>
          ${price}
        </Typography>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
