
import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import {StyleSheet, View,Text,FlatList} from 'react-native';
import Header from './components/Header';
import ListItem from './components/List';
import Form from './components/form';

export default function App() {
   const [listOfItems,setListOfItems] = useState([
       {text: 'Зарядка', key: '1'},
       {text: 'Медитация', key: '2'},
       {text: 'Работа', key: '3'},
       {text: 'Позвонить маме', key: '4'}
   ])
    const addHandler = (text) => {
       setListOfItems((list) => {
           return [
               {text: text, key: Math.random().toString(36).substring(7)},
               ...list
           ]
       })
    }
    const deleteHandler = (key) => {
       setListOfItems((list) => {
           return list.filter(listOfItems => listOfItems.key != key)
       });
    }
    return (
        <View>
            <Header />
            <Form addHandler={addHandler} />
                <View>
                  <FlatList data={listOfItems} renderItem={({item}) => (
                      <ListItem element={item} deleteHandler={deleteHandler}/>
                  ) } />
                </View>
        </View>
    );
}


const styles = StyleSheet.create({

});
