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

export class TextScreen2 extends React.Component {
  static navigationOptions = {
    title: 'Write your text',
  };

  constructor(props) {
    super(props);
    this.state ={text: 'other woman', text2:' man', text3:'girlfriend'};
  }

  
  render() {

    return (
    <View>
      <Text> Enter your text </Text>
  
    <TextInput
          onChangeText={(text) =>this.setState({text})}
          value={this.state.text}
    />

    <TextInput
          onChangeText={(text2) =>this.setState({text2})}
          value={this.state.text2}
    />

    <TextInput
          onChangeText={(text3) =>this.setState({text3})}
          value={this.state.text3}
    />

      <Button
        onPress={ () => this.props.navigation.navigate('Meme2', {input: this.state.text, input2: this.state.text2, input3: this.state.text3})}
        title="Meme it"
      />
    </View>
    );
  
  // constructor (props) {
  //   super(props);
  //   }
  }
}