import React from 'react'
import { Text, View, StyleSheet, Image} from 'react-native';
import Button from 'react-native-button';

// You can import from local files
import { Card } from 'react-native-paper';

import LogoTitle from './LogoTitle'

export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation}) => {
   return {
    // headerTitle instead of title
    headerTitle: <LogoTitle />,
    headerRight: (
      <Button
        onPress={() => navigation.navigate('Home')}
        title="Info"
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
          <Card>
            <Button
            onPress={() => this.props.navigation.push('Customer')}
            style={{fontSize: 30, color: '#4385ef'}}
            containerStyle={{ padding: 5, height: 50, overflow: 'hidden', borderRadius: 3}}
            >
            Customers
            </Button>
          </Card>

          <Card>
            <Button
            onPress={() => alert('Take you to Restaurant owners Page!')} // TBD
            style={{fontSize: 30, color: 'orange'}}
            containerStyle={{ padding: 5, height: 50, overflow: 'hidden', borderRadius: 3}}
            >
            Restaurant Owners
            </Button>
          </Card>
      </View>
    );
  }
}