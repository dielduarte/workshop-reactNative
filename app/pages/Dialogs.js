import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Vibration
} from 'react-native';

export default class Dialogs extends Component {
  static navigationOptions = ({ navigation }) => ({
    drawerLabel: 'Alert',
    title: 'Alert',
    headerLeft:
    <View style={{ marginLeft: 10 }}>
      <Button title="menu" onPress={() => navigation.navigate('DrawerToggle')} />
    </View>,
  });

  handleAlert() {
    Alert.alert(
      'Hello UFMG',
      'esse alerta foi gerado ao clicar no botão'
    );
  }

  handleYesOrNotAlert() {
    const { navigate } = this.props.navigation;

    Alert.alert(
      'Voltar ao início',
      'Você será redirecionado para o inicio do app.',
      [
        { text: 'Sim', onPress: () => navigate('HelloWorld') },
        { text: 'Não', style: 'cancel' },
      ]
    );
  }

  handleVibrate() {
    Alert.alert(
      'Hello UFMG',
      'seu celular vai vibrar'
    );

    const DURATION = 500;

    Vibration.vibrate(DURATION);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.btnContainer}>
          <Button title="Abrir alerta" onPress={() => this.handleAlert()} />
        </View>

        <View style={styles.btnContainer}>
          <Button title="Abrir alerta de sim ou não" onPress={() => this.handleYesOrNotAlert()} />
        </View>

        <View style={styles.btnContainer}>
          <Button title="abrir alerta e vibrar" onPress={() => this.handleVibrate()} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  btnContainer: {
    marginBottom: 10
  }
});
