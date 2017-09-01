import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  TextInput,
  Image,
  Button,
  ToastAndroid
} from 'react-native';
import { StackNavigator } from 'react-navigation';




export class MemeScreen3 extends React.Component {
  static navigationOptions = {
    title: 'Your new meme',
  };

   constructor(props) {
    super(props);
    this.state ={text: 'ONE DOES NOT SIMPLY', text2: 'MAKE A MEME GENERATOR'};
  }

  render() {
    const navigate = this.props.navigation;
    return (
      <View>
      <Text>
      The Cesca meme generator
      </Text>
      <Text>

      </Text>
        <Image 
        style={{width: 320, height: 320}}
        source={require('../../img/meme3.jpg')}>
        <View style={{paddingTop: 60, width: 320, height: 120}}>
          <Text style={ {fontSize: 17, fontFamily:'sans-serif-medium' , textAlign: 'left', backgroundColor: 'rgba(0,0,0,0)', color: 'white', position: "absolute", left:10, top:5, width:120}}
          > {navigate.state.params.input}</Text>
          <Text style={ {fontSize: 17, fontFamily:'sans-serif-medium' , textAlign: 'left', backgroundColor: 'rgba(0,0,0,0)', color: 'white', position: "absolute", top:5 ,left:190, width:90}}
          > {navigate.state.params.input2} </Text>
        </View>
        </Image>
      </View>
    );
  }
}