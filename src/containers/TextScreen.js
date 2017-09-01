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

export class TextScreen extends React.Component {
  static navigationOptions = {
    title: 'Text Screen',
  };
  render() {
    return (
    <View>
      <Text> Test! </Text>
      <Text> Test 2 </Text>

      <Button
        onPress={ () => this.props.navigation.navigate('Meme')}
        title="Meme it"
      />
    </View>
    );
  
  // constructor (props) {
  //   super(props);
  //   }
  }
}