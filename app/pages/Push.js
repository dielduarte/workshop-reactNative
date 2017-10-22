import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  DeviceEventEmitter
} from 'react-native';
import PushNotification from 'react-native-push-notification';
import PushNotificationAndroid from 'react-native-push-notification';

export default class Push extends Component {
  constructor(props) {
    super(props);

    const { navigate } = this.props.navigation;

    PushNotificationAndroid.registerNotificationActions(['Yes', 'No']);
    DeviceEventEmitter.addListener('notificationActionReceived', function (action) {
      const info = JSON.parse(action.dataJSON);
      if (info.action == 'Yes') {
        navigate('HelloWorld');
      }
    });
  }

  static navigationOptions = ({ navigation }) => ({
    drawerLabel: 'Push',
    title: 'Push notifications',
    headerLeft:
    <View style={{ marginLeft: 10 }}>
      <Button title="menu" onPress={() => navigation.navigate('DrawerToggle')} />
    </View>
  });

  handlePush() {
    PushNotification.localNotification({
      title: 'my title',
      message: 'lorem ipsum dolor'
    });
  }

  handleActionsPush() {
    PushNotification.localNotification({
      title: 'Deseja mudar de view?',
      message: 'Escolha sim para acessar a home',
      actions: '["Yes", "No"]',
    });
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.btnContainer}>
          <Button title="Mandar push" onPress={() => this.handlePush()} />
        </View>

        <View style={styles.btnContainer}>
          <Button title="Mandar Push com ações" onPress={() => this.handleActionsPush()} />
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
    marginBottom: 10
  }
});
