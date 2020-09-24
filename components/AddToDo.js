import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Keyboard } from 'react-native'


export default function AddToDo({ onPress }) {

    const [text, setText] = useState("");

    const changeHandler = (value) => {
        setText(value);
    };

    return (
        <View>
            <TextInput
                value = {text}
                style={style.input}
                placeholder='new todo...'
                onChangeText ={changeHandler}
                placeholderTextColor = "rgba(255, 255, 255, 0.8)"
            />
            <Button 
                onPress = {()=> {
                    onPress(text)
                    setText("")
                    Keyboard.dismiss()
                }} 
                title="add todo" 
                color="coral"
            />
        </View>
    )
}

const style = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
});
