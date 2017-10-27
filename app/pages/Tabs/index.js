import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import TabBlue from './TabBlue';
import TabYellow from './TabYellow';
import TabRed from './TabRed';


const Tabs = TabNavigator({
  TabBlue: { screen: TabBlue },
  TabYellow: { screen: TabYellow },
  TabRed: { screen: TabRed }
}, {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: 'yellow',
  }
});

export default class TabContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    drawerLabel: 'Tabs Navigation',
    title: 'Tabs Navigation',
    headerLeft:
      <View style={{ marginLeft: 10 }}>
        <Button title="menu" onPress={() => navigation.navigate('DrawerToggle')} />
      </View>
  });

  render() {
    return <Tabs />;
  }
}
