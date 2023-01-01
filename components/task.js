import React from "react";
import {View,Text,StyleSheet, ShadowPropTypesIOS,} from 'react-native'

const Task=(props)=>{
    return(
        <View style={styles.item}>
            <Text style={styles.itemText}>{props.text}</Text>

        </View>
    )
}

const styles=StyleSheet.create({
    item:{
        padding:15,
    },
    itemText:{fontSize:18}
})
export default Task;