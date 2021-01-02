import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export class  WProblem extends React.Component{
  render(){
    return(
      <View>
      <View style={styles.textContainer}>
      <Text style={styles.containerText}> WATER POLLUTION </Text>
      </View>
      <Text style={styles.text}>
To put it bluntly: Water pollution kills. In fact, it caused 1.8 million deaths in 2015, according to a study published in The Lancet. Contaminated water can also make you ill. Every year, unsafe water sickens about 1 billion people. And low-income communities are disproportionately at risk because their homes are often closest to the most polluting industries.
      </Text>
      <Text style={styles.text}>
      Water pollution not only spread infection but it also kills the life under Water. Water pollution occurs when harmful substances—often chemicals or microorganisms—contaminate a stream, river, lake, ocean, aquifer, or other body of water, degrading water quality and rendering it toxic to humans or the environment.
      </Text>
      <Text style={styles.text2}>
      And hence, Water Pollution is a very concerned point which must be discussed and made in view of public, so that it can be decreased!
      </Text>
      <TouchableOpacity style={styles.back}
     onPress={()=>this.props.navigation.navigate('Problem')}>
      <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.solution}
     onPress={()=>this.props.navigation.navigate('WSolution')}>
      <Text style={styles.solutionText}>Solution</Text>
      </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text : {
    color : 'darkblack',
    fontWeight: 'bold',
    marginTop: 10
  },
  text2:{
    color : 'darkblack',
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  textContainer:{
    backgroundColor: 'blue',
    height: 50,
  },
  containerText:{
    color: 'white',
    padding: 7,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  back:{
    justifyContent : 'center',
    alignSelf : 'center',
    borderWidth : 3,
    borderRadius :1,
    marginTop: 60,
    marginLeft: -250,
    width : 60,
    height:40,
    paddingLeft: 2,
  },
  solution:{
    justifyContent : 'center',
    alignSelf : 'center',
    borderWidth : 3,
    borderRadius :10,
    marginTop: -38,
    marginLeft: 230,
    width : 95,
    height:40,
    paddingLeft: 2,
    backgroundColor: 'lightblue',
  },
  backText : {
    textAlign : 'center',
    color : 'darkblack',
    fontWeight: 'bold',
    fontSize: 20,
  },
  solutionText : {
    textAlign : 'center',
    color : 'darkblack',
    fontWeight: 'bold',
    fontSize: 20,
  },
})


export default WProblem;