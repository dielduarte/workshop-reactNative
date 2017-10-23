import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import * as Animatable from 'react-native-animatable';

const ViewAnimated = Animatable.createAnimatableComponent(View);

export default class AnimatableView extends Component {
  static navigationOptions = ({ navigation }) => ({
    drawerLabel: 'Animatable',
    title: 'Animatable',
    headerLeft:
    <View style={{ marginLeft: 10 }}>
      <Button title="menu" onPress={() => navigation.navigate('DrawerToggle')} />
    </View>
  });

  render() {
    return (
      <View style={styles.container}>
        <Animatable.Text animation="slideInDown" direction="alternate" iterationCount="infinite">
          Animatable text
        </Animatable.Text>

        <ViewAnimated animation="fadeIn" iterationCount="infinite" style={styles.animationView}>
          <Text style={styles.textColor}>Animatable view</Text>
        </ViewAnimated>
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
  animationView: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    justifyContent: 'center'
  },
  textColor: { 
    color: '#fff',
    textAlign: 'center'
  }
});
