import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import PageBlue from './PageBlue';
import PageYellow from './PageYellow';
import PageRed from './PageRed';

const Stack = StackNavigator({
  PageBlue: { screen: PageBlue },
  PageYellow: { screen: PageYellow },
  PageRed: { screen: PageRed }
});

export default class StackContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    drawerLabel: 'Stack Navigation',
    title: 'Stack Navigation',
    headerLeft:
      <View style={{ marginLeft: 10 }}>
        <Button title="menu" onPress={() => navigation.navigate('DrawerToggle')} />
      </View>
  });

  render() {
    return <Stack />;
  }
}
