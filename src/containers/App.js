/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

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
import {HomeScreen} from './HomeScreen';
import {MemeScreen} from './MemeScreen';
import {TextScreen} from './TextScreen';
import {TextScreen2} from './TextScreen2';
import {MemeScreen2} from './MemeScreen2';
import {TextScreen3} from './TextScreen3';
import {MemeScreen3} from './MemeScreen3';


const CescaProject = StackNavigator({
  Home: { screen: HomeScreen },
  Text: {screen:TextScreen},
  Text2: {screen:TextScreen2},
  Meme: {screen:MemeScreen},
  Meme2: {screen:MemeScreen2},
  Text3: {screen:TextScreen3},
  Meme3: {screen:MemeScreen3}

});

AppRegistry.registerComponent('CescaProject', () => CescaProject);