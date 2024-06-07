import { useAuth } from '../../../redux/hooks';
import LoginScreen from '../../Login/LoginScreen';
import RegisterScreen from '../../Register/RegisterScreen';
import ProductsScreen from '../../Product/ProductsScreen';
import Stack from '../../Navigation/Stack';
import ProductDetailsScreen from '../../Product/ProductDetailsScreen';
import OrderConfirmScreen from '../../Order/OrderConfirmScreen';

const Root = () => {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Products"
          component={ProductsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetailsScreen}
          options={{ headerShown: false }}
          getId={({ params }) => params.id.toString()}
        />
        <Stack.Screen
          name="OrderConfirm"
          component={OrderConfirmScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Root;
