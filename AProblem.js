import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export class  AProblem extends React.Component{
  render(){
    return(
      <View>
      <View style={styles.textContainer}>
      <Text style={styles.containerText}> AIR POLLUTION </Text>
      </View>
      <Text style={styles.text}>
We have talked about Land and Water Pollution  but the most dangerous or un-safe is air pollution. 
 </Text>
 <Text  style={styles.text}>
The most prevalent types of air pollution is Smog. It can irritate the eyes and throat and also damage the lungs—especially of people who work or exercise outside, children, and senior citizens. It’s even worse for people who have asthma or allergies—these extra pollutants only intensify their symptoms and can trigger asthma attacks.
      </Text>
      <Text style={styles.text}>
      Most air pollution comes from energy use and production. Burning fossil fuels releases gases and chemicals into the air. Air pollution in the form of carbon dioxide and methane raises the earth’s temperature. Another type of air pollution is then worsened by that increased heat: Smog forms when the weather is warmer and there’s more ultraviolet radiation. These are the main causes of Air Pollution.
      </Text>
      <TouchableOpacity style={styles.back}
     onPress={()=>this.props.navigation.navigate('Problem')}>
      <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.solution}
     onPress={()=>this.props.navigation.navigate('ASolution')}>
      <Text style={styles.solutionText}>Solution</Text>
      </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text : {
    textAlign : 'center',
    color : 'darkblack',
    fontWeight: 'bold',
    marginTop: 10
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
    marginTop: 50,
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
    backgroundColor: 'pink',
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


export default AProblem;