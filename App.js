import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header   from './components/Header'
import ToDoItem from "./components/ToDoItem";
import AddToDo  from "./components/AddToDo";

export default function App() {

  const [todos, setTodos] = useState([
    {text: "buy coffee"},
    {text: "pay bills"}
  ]);

  const addHandler = (text) => {
    if(text.length > 3){
      setTodos((prevTodos) => [...prevTodos, { text }])
    } else {
      Alert.alert("Attention!", "Todos text must contain at least 4 characters!", [
        {text: 'Understood'}
      ]);
    }
  };

  const deleteHandler = (itemToDelete) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo !== itemToDelete)
    })
  };

  return (
    <TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
      <View style={style.container}>
        <Header/>
        <View style={style.content}>
          <AddToDo onPress={addHandler}/>
          <View style={style.list}>
            <FlatList
              keyExtractor = {(item, index) => String(index)}
              data = {todos}
              renderItem = { ({ item }) => (
                  <ToDoItem item={item} pressHandler={deleteHandler}/>
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
  content: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
  toDo: {
    backgroundColor: 'pink',
    width: "80%",
    marginTop: 5,
    marginBottom: 5,
    padding: 15,
  }

});
