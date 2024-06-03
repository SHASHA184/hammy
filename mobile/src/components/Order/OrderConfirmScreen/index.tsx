import React from 'react';
import { View } from 'react-native';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';
import FloatingPanel from '../../General/FloatingPanel';
import Button from '../../General/Button';
import ButtonSelectOption from '../../General/ButtonSelectOption';
import ButtonSelect from '../../General/ButtonSelect';
import TextField from '../../General/TextField';
import PaddingContainer from '../../General/PaddingContainer';
import Typography from '../../General/Typography';
import { RootStackParamList } from '../../Navigation/Stack/types';
import styles from './styles';

type OrderConfirmScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'OrderConfirm'
>;

const OrderConfirmScreen: React.FC<OrderConfirmScreenProps> = () => {
  return (
    <PaddingContainer>
      <View style={styles.container}>
        <Typography type="h1">Your order</Typography>
        <Typography type="plain">Select delivery type</Typography>
        <ButtonSelect>
          <ButtonSelectOption
            selected={false}
            onPress={() => console.log('Post')}>
            Post
          </ButtonSelectOption>
          <ButtonSelectOption
            selected={false}
            onPress={() => console.log('Post')}>
            Courier
          </ButtonSelectOption>
        </ButtonSelect>

        <View style={styles.addressContainer}>
          <Typography type="plain">Enter your address</Typography>
          <TextField placeholder="address..." />
        </View>

        <Typography type="plain">Select payment type</Typography>
        <ButtonSelect>
          <ButtonSelectOption
            selected={false}
            onPress={() => console.log('Post')}>
            Cash
          </ButtonSelectOption>
          <ButtonSelectOption
            selected={false}
            onPress={() => console.log('Post')}>
            Debit card
          </ButtonSelectOption>
        </ButtonSelect>

        <View style={styles.orderSummaryContainer}>
          <Typography type="plain">Cost: $852</Typography>
          <Typography type="plain">Delivery: $10</Typography>
          <Typography type="plain">Total: $862</Typography>
        </View>

        <FloatingPanel>
          <Button
            type="outlined"
            width="35%"
            onPress={() => console.log('cancel')}>
            cancel
          </Button>
          <Button width="55%" onPress={() => console.log('confirm order')}>
            Confirm order
          </Button>
        </FloatingPanel>
      </View>
    </PaddingContainer>
  );
};

export default OrderConfirmScreen;
