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

export class TextScreen3 extends React.Component {
  static navigationOptions = {
    title: 'Type your text',
  };

  constructor(props) {
    super(props);
    this.state ={text: 'Robin', text2: 'Batman'};
  }

  
  render() {

    return (
    <View>
      <Text> Enter a line </Text>
  
    <TextInput
          onChangeText={(text) =>this.setState({text})}
          value={this.state.text}
    />

    <TextInput
          onChangeText={(text2) =>this.setState({text2})}
          value={this.state.text2}
    />

      <Button
        onPress={ () => this.props.navigation.navigate('Meme3', {input: this.state.text, input2: this.state.text2})}
        title="Meme it"
      />
    </View>
    );
  
  // constructor (props) {
  //   super(props);
  //   }
  }
}