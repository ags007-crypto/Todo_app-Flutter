import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/task';
import { Image } from 'react-native';

export default function App() {
  const [task,setTask]=useState();
  const [taskItems,setTaskItems]=useState([]);

  const handleAddTask=()=>{
Keyboard.dismiss();
if(task){
  setTaskItems([...taskItems,task]);
  setTask(null);
}}

const completeTask=(index)=>{
  let itemscopy=[...taskItems];
  itemscopy.splice(index,1);
  setTaskItems(itemscopy)
}


const deleteall=()=>{
  let itemscopy=[];
  setTaskItems(itemscopy)
}
  
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow:1}}>
        <Text style={{
          backgroundColor:"#0AD6A0",
          marginTop: 25,
          color: "white",
          textAlign:"center",
          fontSize:20,
          padding:10,
          fontWeight:"700",
        }}>My Todo App</Text>
        <TouchableOpacity style={styles.removeall} onPress={()=>deleteall()}>
          <Text style={styles.removealltext}>Remove all</Text>
        </TouchableOpacity>
     
    <View>
      <View style={styles.items}>
        {taskItems.map((item,index)=>{
          return(
            <TouchableOpacity key={index} style={styles.todocard} >
            <TouchableOpacity key={index} onPress={()=>completeTask(index)}> 
              <Image source={require("./images/delete_icon.png")}
              style={{width:15,height:20,marginVertical:15,marginLeft:10
              }}/>
            </TouchableOpacity>
            <Task text={item}/>
            </TouchableOpacity>
          )
        })}
      </View>
    </View>
    </ScrollView>
     {/*todo input container */}
     <KeyboardAvoidingView style={styles.writeTaskWrapper}>
        <TextInput placeholder='Enter your Task'
        style={styles.inputbox} value={task}
        onChangeText={(text)=>{setTask(text)}}/>
        <TouchableOpacity onPress={()=>handleAddTask()}>
          <Image source={require("./images/plus_icon.png")} style={{width:25,height:25
              }}/>
        </TouchableOpacity>
  </KeyboardAvoidingView>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ebebeb",
    //alignItems: 'center',
    justifyContent: 'center',
  },
  removeall:{
    flex:0,
    justifyContent:'flex-end',
    width:'100%',
    color:'red',
    flexDirection:'row',
    margin:10
  },
  removealltext:{
    fontSize:17,fontWeight:'700',backgroundColor:"#FF5757",
    color:'white',width:110,textAlign:'center',
    padding:5,borderRadius:10,marginRight:15
  },
  todocard:{
    flexDirection:'row',
    backgroundColor:'white',
   
    padding:5,borderRadius:10,justifyContent:'space-between',
    margin:10
  },
  items:{
    
    
  
  },
  writeTaskWrapper:{
       flexDirection:'row', justifyContent:'space-between',margin:20, backgroundColor:'white',
       padding:10,borderRadius:8

      
  },
  inputbox:{
    fontSize:20
  }

  
});
