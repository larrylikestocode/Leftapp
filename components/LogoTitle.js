import React from 'react'
import { Text, View, StyleSheet, Image} from 'react-native';

export default class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('../assets/app-icon.png')}
        style={{ width: 50, height: 50, alignItems: 'center' }}
      />
    );
  }
}