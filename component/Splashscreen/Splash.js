import React from 'react';
import { View, Image, StatusBar } from 'react-native';
import styles from './styles';


export default class Splash extends React.Component {
    async componentDidMount() {
      const data = await this.performTimeConsumingTask();
  
      if (data !== null) {
        this.props.navigation.navigate('Login');
      }
    }
  
    performTimeConsumingTask = async () =>
      new Promise(resolve =>
        setTimeout(() => {
          resolve('result');
        }, 2500)
      );
    render() {
      return (
        <View style={styles.mainContainer}>
          <StatusBar hidden />
          <View style={styles.logoContainer}>
          <Image source={require('./../Image/LogoEx.png')} style={styles.logo}/>
          </View>
        </View>
      );
    }
  }

  