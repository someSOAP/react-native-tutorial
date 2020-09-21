import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/Header'
export default function App() {

const [todos, setTodos] = useState([
  {text: "buy coffee"},
  {text: "sleep"},
  {text: "pay bills"},
  {text: "pay bills 2"},
  {text: "pay bills 3"}
])


  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        {/** to form */}
        <View style={styles.list}>
          <FlatList
            keyExtractor = {(item, index) => String(index)}
            data = {todos}
            renderItem = { ({ item }) => (
              <Text style={styles.toDo}>{item.text}</Text>
            )}
          />
        </View>
        {/** to form */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
    paddingHorizontal: 20,
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
