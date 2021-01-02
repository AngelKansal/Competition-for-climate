import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export class  LProblem extends React.Component{
  render(){
    return(
      <View>
      <View style={styles.textContainer}>
      <Text style={styles.containerText}> LAND POLLUTION </Text>
      </View>
      <Text style={styles.text}>
      Land pollution, the deposition of solid or liquid waste materials on land or underground in a manner that can contaminate the soil and groundwater, threaten public health, and cause unsightly conditions and nuisances. Without action, the world’s average surface temperature is projected to rise over.
      </Text>
      <Text  style={styles.text2}>
      As mentioned earlier, the world's pollution has broken all the records and is on the top most, but is still projected to be increased. This causes harm to the health of humans and animals, most of the people today are being infeced by the the new diseases spread by garbage and insect that feed on them."Pollution in rapidly developing countries is just getting worse and worse and worse. And it isn't getting the attention it deserves. It needed to be rigorously studied", thus nowadays it is believed that no Country is Inffected, as all over world the complication is same, and that is Land Pollution.
      </Text>
      <TouchableOpacity style={styles.back}
     onPress={()=>this.props.navigation.navigate('Problem')}>
      <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.solution}
     onPress={()=>this.props.navigation.navigate('LSolution')}>
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
  text2 : {
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
    marginTop: -42,
    marginLeft: 230,
    width : 95,
    height:40,
    paddingLeft: 2,
    backgroundColor: 'lightgreen',
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

export default LProblem;