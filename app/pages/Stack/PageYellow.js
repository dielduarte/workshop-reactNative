import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { NavigationActions } from 'react-navigation'

export default class PageYellow extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  reset() {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'PageBlue' }),
      ]
    })
    this.props.navigation.dispatch(resetAction)
  }

  render() {
    const { navigate, goBack } = this.props.navigation;

    return (
      <View style={styles.container}>
        <View style={styles.btnContainer}>  
          <Button title="Voltar" onPress={() => goBack()} color="#000000" />
        </View>  
        <View style={styles.btnContainer}>  
          <Button title="ir para página vermelha" onPress={() => navigate('PageRed')} color="#000000" />
        </View>  
        <View style={styles.btnContainer}>  
          <Button title="ir para página azul" onPress={() => navigate('PageBlue')} color="#000000" />
        </View>  
        <View style={styles.btnContainer}>  
          <Button title="Limpar fila" onPress={() => this.reset()} color="#000000" />
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
    backgroundColor: 'yellow',
  },
  text: {
    color: 'black'
  },
  btnContainer: {
    marginBottom: 10
  }
});
