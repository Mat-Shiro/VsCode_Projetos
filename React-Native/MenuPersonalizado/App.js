import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

import { DrawerNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';

class App extends Component {
  render() {
    return (
      <MyApp />
    );
  }
}

const MyApp = DrawerNavigator({

  Home: {
    screen: HomeScreen
  },
  Settings: {
    screen: SettingsScreen
  }
})

export default App;

styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
