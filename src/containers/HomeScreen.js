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
    title: 'The Cesca Meme Generator',
  };
  render() {
    return (
    <View>
      <Text style={ {fontSize: 20, fontFamily:'sans-serif-medium'}}> Welcome to the meme generator! </Text>


      <Text> Choose your meme image</Text>

      <Button
        onPress={ () => this.props.navigation.navigate('Text')}
        title="One does not simply..."
      />

      <Button
        onPress={ () => this.props.navigation.navigate('Text2')}
        title="Man looks at other woman"
      />

      <Button
        onPress={ () => this.props.navigation.navigate('Text3')}
        title="Batman slaps Robin"
      />
    </View>
    );
  
  // constructor (props) {
  //   super(props);
  //   }
  }
}