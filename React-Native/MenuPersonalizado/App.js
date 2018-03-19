import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

import { Drawernavigator } from 'react-navigation';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Menu de Navegação customizado
        </Text>
      </View>
    );
  }
}
export default App;

styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
