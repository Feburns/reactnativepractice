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



export class MemeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };

   constructor(props) {
    super(props);
    this.state ={text: 'ONE DOES NOT SIMPLY', text2: 'MAKE A MEME GENERATOR'};
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
      <Text>
      The Cesca meme generator
      </Text>
      <Text>

      </Text>
        <Image 
        style={{width: 320, height: 320}}
        source={require('../../img/meme1.jpg')}>
        <View style={{paddingTop: 60, width: 320, height: 120}}>
          <TextInput style={ {fontSize: 20, fontFamily:'sans-serif-medium' , textAlign: 'center', backgroundColor: 'rgba(0,0,0,0)', color: 'white', position: "absolute", top:10,left:10, width:290}}
          onChangeText={(text) =>this.setState({text})}
          value={this.state.text}
          />
          <TextInput style={ {fontSize: 20, fontFamily:'sans-serif-medium' , textAlign: 'center', backgroundColor: 'rgba(0,0,0,0)', color: 'white', position: "absolute", bottom:-150,left:15, width:290}}
          onChangeText={(text2) =>this.setState({text2})}
          value={this.state.text2}
          />
        </View>
        </Image>
      </View>
    );
  }
}