import React from 'react';
import { SafeAreaView, ScrollView, useColorScheme, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Typography from '../Typography';

const Root = () => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Root;
