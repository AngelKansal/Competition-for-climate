import * as React from 'react';
import {View} from 'react-native' ;
import HomeScreen from './Screens/HomeScreen';
import Problem from './Screens/Problem';
import Solution from './Screens/Solution';
import LSolution from './Screens/LSolution';
import WSolution from './Screens/WSolution';
import ASolution from './Screens/ASolution';
import LProblem from './Screens/LProblem';
import WProblem from './Screens/WProblem';
import AProblem from './Screens/AProblem';
import { createAppContainer, createSwitchNavigator } from 'react-navigation' ;

export default class App extends React.Component{
 
  render(){
    return(
      <View>
      <AppContainer/>  
      </View>
    );
  }
}

var AppNavigator= createSwitchNavigator({
 HomeScreen : HomeScreen,
 Problem  : Problem,
 Solution : Solution,
 LSolution : LSolution,
 WSolution : WSolution,
 ASolution : ASolution,
 LProblem : LProblem,
 WProblem : WProblem,
 AProblem : AProblem



})

const AppContainer= createAppContainer(AppNavigator)