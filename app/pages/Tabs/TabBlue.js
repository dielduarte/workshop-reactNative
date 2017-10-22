import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';


export default class TabBlue extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null,
    tabBarLabel: 'Tab Blue'
  });

  render() {
    const { navigate, goBack } = this.props.navigation;

    return (
      <View style={styles.container}>
        <View style={styles.btnContainer}>
          <Button title="Voltar" onPress={() => goBack()} color="#000" />
        </View>
        <View style={styles.btnContainer}>
          <Button title="ir para Tab amarela" onPress={() => navigate('TabYellow')} color="#000" />
        </View>
        <View style={styles.btnContainer}>
          <Button title="ir para Tab Vermelha" onPress={() => navigate('TabRed')} color="#000" />
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
    backgroundColor: 'blue',
  },
  text: {
    color: 'black'
  },
  btnContainer: {
    marginBottom: 10
  }
});
