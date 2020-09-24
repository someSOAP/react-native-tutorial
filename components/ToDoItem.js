import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function ToDoItem({ item, pressHandler }) {
    return (
        <TouchableOpacity onPress={()=>pressHandler(item)}>
            <View style={style.item}>
                <MaterialIcons 
                    name="delete" 
                    size={18} 
                    color='#333'
                />
                <Text style={style.text}>{item.text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    item :{
        flexDirection: 'row',
        marginHorizontal: 20,
        backgroundColor: 'pink',
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
    },
    text: {
        marginLeft: 18,
    }

});
