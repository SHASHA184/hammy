import React, { useState } from 'react';
import { View } from 'react-native';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';
import { useAuth } from '../../../redux/hooks';
import { useCreateOrderMutation } from '../../../redux/API';
import useCart from '../../../redux/hooks/useCart';
import FloatingPanel from '../../General/FloatingPanel';
import Button from '../../General/Button';
import ButtonSelectOption from '../../General/ButtonSelectOption';
import ButtonSelect from '../../General/ButtonSelect';
import TextField from '../../General/TextField';
import PaddingContainer from '../../General/PaddingContainer';
import Typography from '../../General/Typography';
import { RootStackParamList } from '../../Navigation/Stack/types';
import createOrderProducts from './createOrderPdocuts';
import styles from './styles';

type OrderConfirmScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'OrderConfirm'
>;

const OrderConfirmScreen: React.FC<OrderConfirmScreenProps> = ({
  navigation,
}) => {
  const { user } = useAuth();
  const [createOrder] = useCreateOrderMutation();
  const { cart } = useCart();
  const [deliveryType, setDeliveryType] = useState('post');
  const [paymentType, setPaymentType] = useState('cash');
  const [shippingAddress, setShippingAddress] = useState('');

  if (!user) return null;

  const handleCreateOrder = async () => {
    try {
      const orderProducts = createOrderProducts(cart.products);
      const orderCreateData = {
        user_id: user.id,
        total_price: cart.totalPrice,
        order_items: orderProducts,
      };

      await createOrder(orderCreateData).unwrap();
      navigation.navigate('Products');
    } catch (error) {
      console.error('Failed to create order:', error);
    }
  };

  const handleCancel = () => {
    navigation.navigate('Products');
  };

  return (
    <PaddingContainer>
      <View style={styles.container}>
        <Typography type="h1">Your order</Typography>
        <Typography type="plain">Select delivery type</Typography>
        <ButtonSelect>
          <ButtonSelectOption
            selected={false}
            onPress={() => setDeliveryType('post')}
            active={deliveryType === 'post'}>
            Post
          </ButtonSelectOption>
          <ButtonSelectOption
            selected={false}
            onPress={() => setDeliveryType('courier')}
            active={deliveryType === 'courier'}>
            Courier
          </ButtonSelectOption>
        </ButtonSelect>

        <View style={styles.addressContainer}>
          <Typography type="plain">Enter your address</Typography>
          <TextField
            value={shippingAddress}
            setValue={setShippingAddress}
            placeholder="address..."
          />
        </View>

        <Typography type="plain">Select payment type</Typography>
        <ButtonSelect>
          <ButtonSelectOption
            selected={false}
            onPress={() => setPaymentType('cash')}
            active={paymentType === 'cash'}>
            Cash
          </ButtonSelectOption>
          <ButtonSelectOption
            selected={false}
            onPress={() => setPaymentType('debit')}
            active={paymentType === 'debit'}>
            Debit card
          </ButtonSelectOption>
        </ButtonSelect>

        <View style={styles.orderSummaryContainer}>
          <Typography type="plain">
            Cost: ${cart.totalPrice.toFixed(2)}
          </Typography>
        </View>

        <FloatingPanel>
          <Button type="outlined" width="35%" onPress={handleCancel}>
            cancel
          </Button>
          <Button width="55%" onPress={handleCreateOrder}>
            Confirm order
          </Button>
        </FloatingPanel>
      </View>
    </PaddingContainer>
  );
};

export default OrderConfirmScreen;
