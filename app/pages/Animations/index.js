import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import {
  TabNavigator
} from 'react-navigation';

import Animated from './Animated';
import Layout from './Layout';
import WithoutLayout from './WithoutLayout';


const Animations = TabNavigator({
  Animated: { screen: Animated },
  WithoutLayout: { screen: WithoutLayout },
  Layout: { screen: Layout }
}, {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: 'yellow',
  }
});

export default class AnimationsContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    drawerLabel: 'Animations',
    title: 'Animations',
    headerLeft:
      <View style={{ marginLeft: 10 }}>
        <Button title="menu" onPress={() => navigation.navigate('DrawerToggle')} />
      </View>
  });

  render() {
    return <Animations />;
  }
}
