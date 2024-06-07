import React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import Typography from '../../General/Typography';
import styles from './styles';

type CartProductCardProps = {
  title: string;
  price: number;
  imageURL: string;
  onRemovePress: () => void;
};

const MOCKED_URI =
  'https://m.media-amazon.com/images/I/71N73mb3xcL._AC_SL1500_.jpg';

const CartProductCard: React.FC<CartProductCardProps> = ({
  title,
  price,
  imageURL,
  onRemovePress,
}) => {
  return (
    <TouchableOpacity style={{ flexDirection: 'row' }}>
      <Image
        source={{
          uri: imageURL,
        }}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <View>
          <Typography type="caption" italic>
            {title}
          </Typography>
          <Typography type="plain" italic>
            ${price}
          </Typography>
        </View>
        <TouchableOpacity
          onPress={onRemovePress}
          style={{ justifyContent: 'center' }}>
          <Typography type="plain">X</Typography>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default CartProductCard;
