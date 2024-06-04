import { NavigationContainer } from '@react-navigation/native';
import { Provider as ReduxProvider } from 'react-redux';
import Root from '../Root';
import React from 'react';
import { store } from '../../../redux/store';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Root />
      </NavigationContainer>
    </ReduxProvider>
  );
};

export default App;
