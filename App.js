
import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import {StyleSheet, View,Text,FlatList} from 'react-native';
import Header from './components/Header';



export default function App() {
   const [listOfItems,setListOfItems] = useState([
       {text: 'Зарядка', index: 1},
       {text: 'Медитация', index: 2},
       {text: 'Работа', index: 3},
       {text: 'Позвонить маме', index: 4}
   ])
    return (
        <View>
            <Header />
                <View>
                  <FlatList data={listOfItems} renderItem={({item}) => (
                      <Text>{item.text}</Text>
                  ) } />
                </View>
        </View>
    );
}


const styles = StyleSheet.create({

});
