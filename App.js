import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import * as Speech from 'expo-speech';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text:''
    }
  }

  speak =()=> {
    var thingToSay = this.state.text;
    this.state.text === ''
    ? alert("The box is empty. Please write a word to continue")
    : Speech.speak(thingToSay);
  };
  
  render() {
    return(
      
      <View style={styles.container}>
       <TextInput style={styles.inputBox}
        onChangeText={text => {
          this.setState({ text: text })
        }}
        value={this.state.text}
        placeholder='Type Your Text Here'
       />
       <TouchableOpacity style = {styles.searchButton} onPress={this.speak}>
       <Text style = {{ textAlign: 'center', fontSize:18, color:'white'}}>Click Here to Hear Speech</Text>
      </TouchableOpacity>
      </View> 
        
    );
  }
}

const styles=StyleSheet.create( {
  container:{
    flex:1,
    backgroundColor:'lightgreen'
  },
  searchButton:{
    alignSelf:'center',
    backgroundColor:'purple',
    borderRadius:100,
    borderWidth:3,
    borderColor:'lightgrey',
    alignItems:'center',
    justifyContent:'center',
    height:90,
    width:200,
    marginTop:100, 
    marginLeft:10
  },
  inputBox:{
    marginTop:100,
    alignSelf:'center',
    textAlign:'center',
    fontSize:20,
    borderColor:'#BC4572',
    borderRadius:10,
    borderWidth:3,
    height:50,
    width:300
    
  }
})