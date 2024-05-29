import LoginScreen from '../../Login/LoginScreen';
import Stack from '../../Navigation/Stack';

const Root = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Root;
