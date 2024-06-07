import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TouchableOpacity, View } from 'react-native';
import { useGetProductsQuery } from '../../../redux/API';
import Typography from '../../General/Typography';
import PaddingContainer from '../../General/PaddingContainer';
import TextField from '../../General/TextField';
import Loader from '../../General/Loader';
import { RootStackParamList } from '../../Navigation/Stack/types';
import ProductCard from '../ProductCard';
import styles from './styles';

type ProductsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Products'
>;

const ProductsScreen: React.FC<ProductsScreenProps> = ({ navigation }) => {
  const [searchName, setSearchName] = React.useState('');
  const { currentData: products = [], isLoading } =
    useGetProductsQuery(searchName);

  const handleCardPress = (id: number) => {
    navigation.navigate('ProductDetails', { id });
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <PaddingContainer>
      <TextField
        placeholder="Search products..."
        value={searchName}
        setValue={setSearchName}
      />
      <Typography type="h1">Products</Typography>
      <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
        <Typography type="plain">Move on cart</Typography>
      </TouchableOpacity>
      <View style={styles.productsContainer}>
        {products.map(product => (
          <ProductCard
            key={product.id}
            title={product.name}
            price={product.price}
            imageURL="https://m.media-amazon.com/images/I/71N73mb3xcL._AC_SL1500_.jpg"
            onPress={() => handleCardPress(product.id)}
          />
        ))}
      </View>
    </PaddingContainer>
  );
};

export default ProductsScreen;
