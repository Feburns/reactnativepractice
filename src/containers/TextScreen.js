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

  constructor(props) {
    super(props);
    this.state ={text: 'your text'};
  }

  
  render() {

    return (
    <View>
      <Text> Enter a line </Text>
  
    <TextInput
          onChangeText={(text) =>this.setState({text})}
          value={this.state.text}
    />

      <Button
        onPress={ () => this.props.navigation.navigate('Meme', {input: this.state.text})}
        title="Meme it"
      />
    </View>
    );
  
  // constructor (props) {
  //   super(props);
  //   }
  }
}