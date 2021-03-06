import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  UIManager,
  LayoutAnimation
} from 'react-native';

export default class Layout extends Component {
  constructor() {
    super();
    UIManager.setLayoutAnimationEnabledExperimental 
    && UIManager.setLayoutAnimationEnabledExperimental(true);

    this.state = {
      styleName: 'default'
    }
  }

  static navigationOptions = ({ navigation }) => ({
    header: null,
    tabBarLabel: 'Layout'
  });

  changeState(styleName) {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    this.setState({ styleName });
  }

  componentWillUnmount() {
    this.setState({ styleName: 'default' });
  }

  render() {
    const { navigate, goBack } = this.props.navigation;

    return (
      <View style={styles.container}>
        <View style={styles[this.state.styleName]} />

        <View style={styles.btnContainer}>
          <Button
            title="alterar estado"
            onPress={() => this.changeState('active')}
          />
        </View>

        <View style={styles.btnContainer}>
          <Button
            title="voltar ao estado default"
            onPress={() => this.changeState('default')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  default: {
    backgroundColor: 'blue',
    width: 100,
    height: 100
  },
  active: {
    backgroundColor: 'blue',
    width: 200,
    height: 200
  },
  btnContainer: {
    marginTop: 10
  }
});
