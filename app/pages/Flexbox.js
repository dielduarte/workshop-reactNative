import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';


export default class Flexbox extends Component {
  static navigationOptions = ({ navigation }) => ({
    drawerLabel: 'Flexbox',
    title: 'Flexbox',
    headerLeft:
    <View style={{ marginLeft: 10 }}>
      <Button title="menu" onPress={() => navigation.navigate('DrawerToggle')} />
    </View>
  });

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.blue, styles.size]} />
        <View style={[styles.yellow, styles.size]} />
        <View style={[styles.red, styles.size]} />
        <View style={[styles.blue, styles.size]} />
        <View style={[styles.yellow, styles.size]} />
        <View style={[styles.red, styles.size]} />
        <View style={[styles.blue, styles.size]} />
        <View style={[styles.yellow, styles.size]} />
        <View style={[styles.red, styles.size]} />
        <View style={[styles.blue, styles.size]} />
        <View style={[styles.yellow, styles.size]} />
        <View style={[styles.red, styles.size]} />
        <View style={[styles.blue, styles.size]} />
        <View style={[styles.yellow, styles.size]} />
        <View style={[styles.red, styles.size]} />
        <View style={[styles.blue, styles.size]} />
        <View style={[styles.yellow, styles.size]} />
        <View style={[styles.red, styles.size]} />
        <View style={[styles.blue, styles.size]} />
        <View style={[styles.yellow, styles.size]} />
        <View style={[styles.red, styles.size]} />
        <View style={[styles.blue, styles.size]} />
        <View style={[styles.yellow, styles.size]} />
        <View style={[styles.red, styles.size]} />
        <View style={[styles.blue, styles.size]} />
        <View style={[styles.yellow, styles.size]} />
        <View style={[styles.red, styles.size]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap' // <-- flex Wrap
  },
  size: {
    width: 50,
    height: 50
  },
  blue: {
    backgroundColor: 'blue'
  },
  yellow: {
    backgroundColor: 'yellow'
  },
  red: {
    backgroundColor: 'red'
  }
});
