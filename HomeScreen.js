import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';

export class  HomeScreen extends React.Component{
  render(){
    return(
      <View>
      <View style={styles.textContainer}>
    <Text style={styles.containerText}>SUSTAINABLE DEVELOPMENT GOALS</Text>
      </View>
      <Text style={styles.text}>
      The Earth’s climate is changing, with severe consequences for our daily lives and the resilience of our countries. Climate change is disrupting national economies, People are experiencing changing weather patterns, rising sea levels, and extreme  weather  events. Thus, 13th SDG Goals states  the  need  of "Pollution Free Environment" . 
      </Text>
     <Image source={{ uri: "https://i2.wp.com/blog.brightcities.city/wp-content/uploads/2020/08/ODS13_en.jpg?w=900&ssl=1" }}
      style={{ width: 333, height: 170,borderRadius: 10}}/>
      <TouchableOpacity style={{ justifyContent : 'center',
    alignSelf : 'center',
    borderWidth : 4,
    borderRadius : 5,
    marginTop:15,
    marginLeft:-150,
    width : 100,
    height:50,
     marginBottom:10,
     paddingLeft: 7,
     backgroundColor: "orange"}}
     onPress={()=>this.props.navigation.navigate('Problem')}
     >
      PROBLEM
      </TouchableOpacity >
      <TouchableOpacity style={{ justifyContent : 'center',
    alignSelf : 'center',
    borderWidth : 4,
    borderRadius : 35,
    marginTop: -60,
    marginLeft:150,
    width : 100,
    height: 50,
     marginBottom:10,
     paddingLeft: 7,
     backgroundColor: "yellow"}}
     onPress={()=>this.props.navigation.navigate('Solution')}>
      SOLUTION
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
    backgroundColor: 'red',
    height: 40,
  },
  containerText:{
    color: 'white',
    padding: 7,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  }
})

export default HomeScreen;