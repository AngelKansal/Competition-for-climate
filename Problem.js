import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';

export class  Problem extends React.Component{
  render(){
    return(
      <View>
      <Image source={{ uri: "https://www.publichealthnotes.com/wp-content/uploads/2018/11/pollution.jpg" }}
      style={{ width: 333, height: 140,borderRadius: 18}}/>
      <View>
       <Text style={styles.text}>
  Goal 13: Take urgent action to combat climate change and its impacts.
  Without action, the world’s average surface temperature is projected to rise over. The major problem that world is facing today, is pollution. And the three utmost types of pollution are :- 
       </Text>
      </View>
      <TouchableOpacity style={{justifyContent : 'center',
    alignSelf : 'center',
    borderWidth : 5,
    marginTop: 10,
    marginLeft: -160,
    width : 160,
    height:30,
    paddingLeft: 2,
    backgroundColor: "lightgreen"}}
     onPress={()=>this.props.navigation.navigate('LProblem')}>
      LAND POLLUTION 
      </TouchableOpacity>


      <TouchableOpacity style={{justifyContent : 'center',
    alignSelf : 'center',
    borderWidth : 5,
    marginTop: 10,
    marginLeft: 10,
    width : 160,
    height:30,
    paddingLeft: 2,
    backgroundColor: "lightblue"}}
     onPress={()=>this.props.navigation.navigate('WProblem')}>
      WATER POLLUTION 
      </TouchableOpacity>

<TouchableOpacity style={{justifyContent : 'center',
    alignSelf : 'center',
    borderWidth : 5,
    marginTop: 10,
    marginLeft: 190,
    width : 140,
    height:30,
    paddingLeft: 2,
    backgroundColor: "lightpink"}}
     onPress={()=>this.props.navigation.navigate('AProblem')}>
      AIR POLLUTION 
      </TouchableOpacity>


      <TouchableOpacity style={styles.button}
     onPress={()=>this.props.navigation.navigate('HomeScreen')}>
      Back To Home
      </TouchableOpacity>
      
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button:{
    justifyContent : 'center',
    alignSelf : 'center',
    borderWidth : 3,
    borderRadius :5,
    marginTop: 30,
    marginLeft: -210,
    width : 110,
    height:30,
    paddingLeft: 2,
  },
  text : {
    textAlign : 'center',
    color : 'darkblack',
    fontWeight: 'bold',
    marginTop: 10
  },
})

export default Problem;