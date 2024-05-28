/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/components/General/App';
import { configureAll } from './src/configs';
import { name as appName } from './app.json';

configureAll();
AppRegistry.registerComponent(appName, () => App);
