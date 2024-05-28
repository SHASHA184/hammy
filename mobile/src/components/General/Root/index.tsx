import React from 'react';
import { SafeAreaView, ScrollView, useColorScheme, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Typography from '../Typography';
import { GoogleSigninButton } from '@react-native-google-signin/google-signin';
import useAuth from '../../../API/auth/hooks/useAuth';

const Root = () => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const { signIn } = useAuth();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={backgroundStyle}>
          <Typography type="plain">
            ✨Pan roman✨, vipustite iz podvala
          </Typography>
          <GoogleSigninButton
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={() => {
              signIn();
            }}
            disabled={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Root;
