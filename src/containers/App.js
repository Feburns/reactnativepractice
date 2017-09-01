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


const CescaProject = StackNavigator({
  Home: { screen: HomeScreen },
  Text: {screen:TextScreen},
  Meme: {screen:MemeScreen}

});

AppRegistry.registerComponent('CescaProject', () => CescaProject);