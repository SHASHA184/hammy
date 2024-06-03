import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TextInput, View } from 'react-native';
import colors from '../../../theme/colors';
import Typography from '../../General/Typography';
import { RootStackParamList } from '../../Navigation/Stack/types';
import PaddingContainer from '../../General/PaddingContainer';
import ProductCard from '../ProductCard';
import generateProducts from './generateProducts';
import styles from './styles';
import TextField from '../../General/TextField';

type ProductsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Products'
>;

const ProductsScreen: React.FC<ProductsScreenProps> = ({ navigation }) => {
  const products = generateProducts();

  const handleCardPress = (id: string) => {
    navigation.navigate('ProductDetails', { id });
  };

  return (
    <PaddingContainer>
      <TextField placeholder="Search products..." />
      <Typography type="h1">Products</Typography>
      <View style={styles.productsContainer}>
        {products.map((product, i) => (
          <ProductCard
            key={i}
            title={product.title}
            price={product.price}
            imageURL={product.imageURL}
            onPress={() => handleCardPress(product.id)}
          />
        ))}
      </View>
    </PaddingContainer>
  );
};

export default ProductsScreen;
