import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image
} from 'react-native';

import { Icon, Button, Container, Header, Content, Left, Right } from 'native-base';

class HomeScreen extends Component {

    static navigationOptions = {
        drawerIcon: (
            <Image source={require('./assets/DrawerIcons/home.png')}
            style={{ height: 24, width: 24 }} />
        )
    }
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Icon name="menu" onPress={() =>
                        this.props.navigation.navigate('DrawerOpen')} />
                    </Left>
                    <Right />
                </Header>
                <Content contentContainerStyle={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                    
                }}>
                    <Text> Página Principal </Text>
                </Content>
            </Container>
        );
    }
}
export default HomeScreen;
