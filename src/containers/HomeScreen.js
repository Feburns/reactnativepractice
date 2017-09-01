import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  TextInput,
  Image,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    return (
    <View>
      <Text> Welcome to the meme generator! </Text>
      <Text> Choose your option </Text>

      <Button
        onPress={ () => this.props.navigation.navigate('Text')}
        title="Option 1"
      />
    </View>
    );
  
  // constructor (props) {
  //   super(props);
  //   }
  }
}