import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Image, View } from 'react-native';
import React from 'react';
import { RootStackParamList } from '../../Navigation/Stack/types';
import Typography from '../../General/Typography';
import PaddingContainer from '../../General/PaddingCotainer';
import Button from '../../General/Button';
import FloatingPanel from '../../General/FloatingPanel';
import styles from './styles';

type ProductDetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ProductDetails'
>;

const ProductDetailsScreen: React.FC<ProductDetailsScreenProps> = () => {
  return (
    <PaddingContainer>
      <View style={styles.container}>
        <Image
          resizeMode="cover"
          height={229}
          borderRadius={15}
          style={styles.productImage}
          source={{
            uri: 'https://m.media-amazon.com/images/I/71N73mb3xcL._AC_SL1500_.jpg',
          }}
        />
        <View style={styles.productTitle}>
          <Typography type="h2" capitalize>
            Hamster house wood
          </Typography>
          <Typography type="subtitle">$121</Typography>
        </View>

        <Typography type="plain">
          Your little pet will love this lovely house. The chalet provides them
          with a quiet resting space and offers a hidden place. This product is
          suitable for small animal, hamster, etc ... Read more
        </Typography>

        <FloatingPanel>
          <Button onPress={() => console.log('press')}>add to cart</Button>
        </FloatingPanel>
      </View>
    </PaddingContainer>
  );
};

export default ProductDetailsScreen;
