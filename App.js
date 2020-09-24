import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header   from './components/Header'
import ToDoItem from "./components/ToDoItem";
import AddToDo  from "./components/AddToDo";

export default function App() {

  const [todos, setTodos] = useState([
    {text: "buy coffee"},
    {text: "text to Trump"},
    {text: "sleep"},
    {text: "pay bills"},
    {text: "pay bills 2"},
    {text: "pay bills 3"}
  ]);

  const addHandler = (text) => {
    setTodos((prevTodos) => [...prevTodos, { text }])
  };

  const deleteHandler = (itemToDelete) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo !== itemToDelete)
    })
  };

  return (
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
        {/** to form */}
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'lightblue',
  },
  content: {

  },
  list: {

  },
  toDo: {
    backgroundColor: 'pink',
    width: "80%",
    marginTop: 5,
    marginBottom: 5,
    padding: 15,
  }

});
