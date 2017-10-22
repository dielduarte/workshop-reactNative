import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import Camera from 'react-native-camera';

export default class Capture extends Component {
  static navigationOptions = ({ navigation }) => ({
    drawerLabel: 'Acessar camêra',
    title: 'Acessar camêra',
    headerLeft:
    <View style={{ marginLeft: 10 }}>
      <Button title="menu" onPress={() => navigation.navigate('DrawerToggle')} />
    </View>
  });

  takePicture() {
    this.camera.capture()
      .then((data) => {
        alert('Foto salva com sucesso!');
        console.log(data);
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => this.camera = cam}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
          orientation={Camera.constants.Orientation.portrait}>
          <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
        </Camera>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    flexDirection: 'row'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});
