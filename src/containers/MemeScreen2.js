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




export class MemeScreen2 extends React.Component {
  static navigationOptions = {
    title: 'Your new meme',
  };

   constructor(props) {
    super(props);
    this.state ={text: 'Other Woman', text2: 'Man', text3: 'girlfriend'};
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
        style={{height: 220, width:320}}

        source={require('../../img/meme2.jpg')}>

        <View style={{paddingTop: 60, width: 320, height: 120}}>
          <Text style={ {fontSize: 15, fontFamily:'sans-serif-medium' , textAlign: 'center', backgroundColor: 'rgba(195,191,191,1)' , color: 'white', position: "absolute", bottom:-50,left:10, width:90}}> {navigate.state.params.input}</Text>
          <Text style={ {fontSize: 15, fontFamily:'sans-serif-medium' , textAlign: 'center', backgroundColor: 'rgba(195,191,191,1)' , color: 'white', width:90, left:150,bottom:-10}}>  {navigate.state.params.input2} </Text>
          <Text style={ {fontSize: 15, fontFamily:'sans-serif-medium' , textAlign: 'center', backgroundColor: 'rgba(195,191,191,1)' , color: 'white', width:90, left:250,bottom:-15}}>   {navigate.state.params.input3} </Text>
        </View>
        </Image>
      </View>
    );
  }
}