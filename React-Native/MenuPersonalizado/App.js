import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native';

import { DrawerNavigator, DrawerItems } from 'react-navigation';

import { Container, Content, Header, Body, Icon } from 'native-base';

import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';

class App extends Component {
  render() {
    return (
      <MyApp />
    );
  }
}

const CustomDrawerContentComponent = (props) => (

  <Container>
    <Header style={{ height: 200, backgroundColor: 'white' }}>
      <Body>
        <Image
          style={styles.drawerImage}
          source={require('./assets/DrawerIcons/logo.png')}
        />
      </Body>
    </Header>
    <Content>
        <DrawerItems {...props}/>
    </Content>
  </Container>
);

const MyApp = DrawerNavigator({

  Home: {
    screen: HomeScreen
  },
  Options: {
    screen: SettingsScreen
  }
}, {
  initialRouteName: 'Home',
  contentComponent: CustomDrawerContentComponent,
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle'
});

export default App;

styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  drawerImage: {
    height: 150,
    width: 150,
    borderRadius: 75,
    alignSelf: 'center'
  }
});
