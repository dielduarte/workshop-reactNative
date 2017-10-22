import React, { PureComponent } from 'react';
import { View, Animated, StyleSheet, TouchableWithoutFeedback } from 'react-native';

export default class Ball extends PureComponent {
  constructor() {
    super();
    this.state = {
      position: new Animated.ValueXY(0, 0)
    };
  }

  handleAnimation() {
    Animated.sequence([
      Animated.timing(this.state.position, {
        toValue: {
          x: 200,
          y: 200
        }
      }),
      Animated.timing(this.state.position, {
        toValue: {
          x: 0,
          y: 200
        }
      }),
      Animated.timing(this.state.position, {
        toValue: {
          x: 200,
          y: 350
        }
      })
    ]).start();
  }

  render() {
    return (
      <Animated.View style={this.state.position.getLayout()}>
        <TouchableWithoutFeedback onPress={() => this.handleAnimation()}>
          <View style={styles.ball} />
        </TouchableWithoutFeedback>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  ball: {
    width: 100,
    height: 100,
    backgroundColor: 'black',
    borderRadius: 50
  }
});