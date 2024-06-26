import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Image, View } from 'react-native';
import React from 'react';
import { useGetProductByIdQuery } from '../../../redux/API';
import useCart from '../../../redux/hooks/useCart';
import { RootStackParamList } from '../../Navigation/Stack/types';
import Typography from '../../General/Typography';
import PaddingContainer from '../../General/PaddingContainer';
import Button from '../../General/Button';
import FloatingPanel from '../../General/FloatingPanel';
import styles from './styles';

type ProductDetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ProductDetails'
>;

const ProductDetailsScreen: React.FC<ProductDetailsScreenProps> = ({
  navigation,
  route: {
    params: { id },
  },
}) => {
  const { currentData: product } = useGetProductByIdQuery(id);
  const { addProduct } = useCart();

  const isWrongProduct = !product;
  if (isWrongProduct) {
    return <Typography type="h1">No such product</Typography>;
  }

  const handleAddProduct = () => {
    addProduct(product);
  };

  return (
    <PaddingContainer>
      <View style={styles.container}>
        <Image
          resizeMode="cover"
          height={229}
          borderRadius={15}
          style={styles.productImage}
          source={{
            uri: product.image,
          }}
        />
        <View style={styles.productTitle}>
          <Typography type="h2" capitalize>
            {product.name}
          </Typography>
          <Typography type="subtitle">${product.price}</Typography>
        </View>

        <Typography type="plain">{product.description}</Typography>

        <FloatingPanel>
          <Button fullWidth onPress={handleAddProduct}>
            add to cart
          </Button>
        </FloatingPanel>
      </View>
    </PaddingContainer>
  );
};

export default ProductDetailsScreen;
