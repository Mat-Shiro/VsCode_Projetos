import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

import { Icon, Button, Container, Header, Content, Left } from 'native-base';

class SettingsScreen extends Component{
    render(){
        return (
            <Container>
                <Content>
                    <Text> Página de Configuração </Text>
                </Content>
            </Container>
        );
    }
}
export default SettingsScreen;
