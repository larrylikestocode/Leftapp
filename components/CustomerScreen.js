import React from 'react'
import { Text, View, Image, StyleSheet, FlatList, ImageBackground} from 'react-native';
import Button from 'react-native-button';
import { Tile, Divider} from 'react-native-elements';

import LogoTitle from './LogoTitle'

export default class CustomerScreen extends React.Component {
  constructor(props) {
  super(props);
  this.renderRow = this.renderRow.bind(this);
  this.state = {
    restaurants: [
      {
        "name": "Gaspar Brasserie",
        "address": "185 Sutter St, San Francisco, CA 94109",
        "image": { "url": "../assets/chinese-food.jpg" },
      },
      {
        "name": "Chalk Point Kitchen",
        "address": "527 Broome St, New York, NY 10013",
        "image": { "url": "../assets/japanese-food.jpg" },
      },
      {
        "name": "Kyoto Amber Upper East",
        "address": "225 Mulberry St, New York, NY 10012",
        "image": { "url": "../assets/korean-food.jpg" },
      },
      {
        "name": "Kyoto Amber Upper East",
        "address": "225 Mulberry St, New York, NY 10012",
        "image": { "url": "../assets/korean-food.jpg" },
      },
      {
        "name": "Sushibo",
        "address": "35 Sipes Key, New York, NY 10012",
        "image": { "url": "../assets/chinese-food.jpg" },
      },
      {
        "name": "Mastergrill",
        "address": "550 Upton Rue, San Francisco, CA 94109",
        "image": { "url": "../assets/chinese-food.jpg" },
      }
    ],
  }
}

renderRow = ({item: restaurant}) => {

  return (
    <View>
      <ImageBackground
        style={styles.container}
        source={require("../assets/japanese-food.jpg")}
      >
        <Tile>
          <Text> {restaurant.name}</Text>
        </Tile>
      </ImageBackground>
    <Divider styleName="line"/>
    </View>
  );
};

  static navigationOptions = ({ navigation}) => {
   return {
    // headerTitle instead of title
    headerTitle: <LogoTitle />,
    headerRight: (
      <Button
        onPress={() => navigation.navigate('Home')}
        color="#fff"
      >
      Home
      </Button>
    ),
    headerTitleStyle: {backgroundColor: '#f4511e',
    },
   };
  };
  
  render() {
    return (
      <View>
        <FlatList
          data={this.state.restaurants}
          renderItem={this.renderRow}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    resizeMode: 'cover'
  },
});