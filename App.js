
import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import {StyleSheet, View,Text,FlatList} from 'react-native';
import Header from './components/Header';
import ListItem from './components/List';
import Form from './components/form';

export default function App() {
   const [listOfItems,setListOfItems] = useState([
       {text: 'Зарядка', index: 1},
       {text: 'Медитация', index: 2},
       {text: 'Работа', index: 3},
       {text: 'Позвонить маме', index: 4}
   ])
    const addHandler = (text) => {
       setListOfItems((list) => {
           return [
               {text: text, index: 5},
               ...list
           ]
       })
    }
    return (
        <View>
            <Header />
            <Form addHandler={addHandler} />
                <View>
                  <FlatList data={listOfItems} renderItem={({item}) => (
                      <ListItem element={item} />
                  ) } />
                </View>
        </View>
    );
}


const styles = StyleSheet.create({

});
