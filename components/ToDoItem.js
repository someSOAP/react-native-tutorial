import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native'


export default function ToDoItem({ item, pressHandler }) {
    return (
        <TouchableOpacity onPress={()=>pressHandler(item)}>
            <Text style={style.item}>{item.text}</Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    item :{
        marginHorizontal: 20,
        backgroundColor: 'pink',
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
    }

});
