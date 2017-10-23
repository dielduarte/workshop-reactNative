import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import MapView from 'react-native-maps';

export default class Gps extends Component {

  static navigationOptions = ({ navigation }) => ({
    drawerLabel: 'Gps',
    title: 'GPS - MAPA',
    headerLeft:
      <View style={{ marginLeft: 10 }}>
        <Button title="menu" onPress={() => navigation.navigate('DrawerToggle')} />
      </View>
  });

  constructor() {
    super();
    this.state = {
      region: {}
    };
  }

  render() {
    if (Object.keys(this.state.region).length) {
      return (
        <View style={styles.container}>
          <MapView 
            region={this.state.region}
            style={styles.map}
          >
            <MapView.Marker
              coordinate={{ ...this.state.region }}
              title={'Minha localização'}
              description={'estou na ufmg'}
            />
          </MapView>
        </View>
      );
    }

    return ( 
      <View>
        <Text>carregando localização...</Text>
      </View>
    );
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (region) => {
        this.setState({
          region: {
            latitude: region.coords.latitude,
            longitude: region.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          } 
        });
      },
      (error) => console.log(error),
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 1000 }
    );

    this.watchId = navigator.geolocation.watchPosition(
      (region) => {
        this.setState({
          region: {
            latitude: region.coords.latitude,
            longitude: region.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }
        });
      },
      (error) => console.log(error),
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 1000 }
    );
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
});
