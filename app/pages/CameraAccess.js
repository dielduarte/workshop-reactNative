import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  CameraRoll,
  Image,
  UIManager,
  LayoutAnimation,
  TouchableWithoutFeedback
} from 'react-native';
import Share from 'react-native-share';

export default class CameraAccess extends Component {
  static navigationOptions = ({ navigation }) => ({
    drawerLabel: 'Acessar fotos',
    title: 'Acessar fotos',
    headerLeft:
    <View style={{ marginLeft: 10 }}>
      <Button title="menu" onPress={() => navigation.navigate('DrawerToggle')} />
    </View>
  });

  constructor() {
    super();
      
    UIManager.setLayoutAnimationEnabledExperimental
    && UIManager.setLayoutAnimationEnabledExperimental(true);


    this.state = {
      photos: []
    };
  }

  getPhotos() {
    CameraRoll.getPhotos({
      first: 20,
      assetType: 'All',
      groupName: 'DCIM'
    })
      .then(photos => {
        console.log(photos);
        LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
        this.setState({ photos: photos.edges });
      });
  }

  sharePhoto(url) {
    const options = {
      title: "Compartilhando minha foto",
      url
    };

    Share.open(options)
      .catch((err) => { err && console.log(err); })
  }

  renderPhotos() {
    return this.state.photos.map((photo, index) => {
      return <TouchableWithoutFeedback key={index} onPress={() => this.sharePhoto(photo.node.image.uri)}>
        <Image 
          style={{ 
            width: 100, 
            height: 100 
          }}
          source={{ uri: photo.node.image.uri }}
          resizeMode="contain"
        />
      </TouchableWithoutFeedback>;
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.btnContainer}>
          <Button title="Buscar fotos" onPress={() => this.getPhotos()} />
        </View>

        <View style={styles.imagesContainer}>
          {this.renderPhotos()}
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
    marginBottom: 10,
    marginTop: 10
  },
  imagesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }
});
