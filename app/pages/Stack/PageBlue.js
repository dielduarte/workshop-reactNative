import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';


export default class PageBlue extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  render() {
    const { navigate, goBack } = this.props.navigation;

    return (
      <View style={styles.container}>
        <View style={styles.btnContainer}>
          <Button title="Voltar" onPress={() => goBack()} color="#000" />
        </View>  
        <View style={styles.btnContainer}>
          <Button title="ir para página amarela" onPress={() => navigate('PageYellow')} color="#000" />
        </View>  
        <View style={styles.btnContainer}>
          <Button title="ir para página Vermelha" onPress={() => navigate('PageRed')} color="#000" />
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
