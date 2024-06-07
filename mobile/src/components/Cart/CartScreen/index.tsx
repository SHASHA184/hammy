import React from 'react';
import { View } from 'react-native';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';
import useCart from '../../../redux/hooks/useCart';
import { RootStackParamList } from '../../Navigation/Stack/types';
import PaddingContainer from '../../General/PaddingContainer';
import Typography from '../../General/Typography';
import FloatingPanel from '../../General/FloatingPanel';
import Button from '../../General/Button';
import CartProductCard from '../CartProductCard';
import styles from './styles';

type CartScreenProps = NativeStackScreenProps<RootStackParamList, 'Cart'>;

const CartScreen: React.FC<CartScreenProps> = ({ navigation }) => {
  const { cart, removeProduct } = useCart();

  const handleMakeOrder = () => {
    navigation.navigate('OrderConfirm');
  };

  return (
    <PaddingContainer>
      <View style={styles.container}>
        <Typography type="h1">Basket</Typography>
        <Typography type="plain" style={styles.price}>
          Total: ${cart.totalPrice.toFixed(2)}
        </Typography>
        <View>
          {cart.products.map(product => (
            <View style={styles.cartCardContainer} key={product.id}>
              <CartProductCard
                title={product.name}
                price={product.price}
                imageURL={product.image}
                onRemovePress={() => removeProduct(product.id)}
              />
            </View>
          ))}
        </View>

        <FloatingPanel>
          <Button fullWidth onPress={handleMakeOrder}>
            make order
          </Button>
        </FloatingPanel>
      </View>
    </PaddingContainer>
  );
};

export default CartScreen;
