import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';

import axios from 'axios';

export default class Request extends Component {
  static navigationOptions = ({ navigation }) => ({
    drawerLabel: 'Buscar Dados',
    title: 'Buscar Dados',
    headerLeft:
    <View style={{ marginLeft: 10 }}>
      <Button title="menu" onPress={() => navigation.navigate('DrawerToggle')} />
    </View>
  });

  constructor() {
    super();
    this.state = {
      uri: '',
      id: 1,
      btnText: 'Buscar nova imagem'
    };
  }


  getNewImage() {
    this.setState({ btnText: 'carregando...' });

    axios.get(`http://www.splashbase.co/api/v1/images/${this.state.id}`)
      .then(image => {
        this.setState({ 
          uri: image.data.url,
          id: this.state.id + 1,
          btnText: 'Buscar nova imagem' 
        });
      })
      .catch(error => console.log(error));
  }

  renderImage() {
    if (this.state.uri) {
      return (
        <Image
          source={{ uri: this.state.uri, width: 200, height: 200}}
        />
      )
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderImage()}
        <View style={styles.btnContainer}>
          <Button title={this.state.btnText} onPress={() => this.getNewImage()} />
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
    marginBottom: 10,
    marginTop: 10
  }
});
