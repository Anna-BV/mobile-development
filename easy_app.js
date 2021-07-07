
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, SafeAreaView, Button, Alert, Image,TouchableWithoutFeedback} from 'react-native';

export default function App() {
    const handleText = () =>  console.log('отлично');
    const handleButtonText = () => Alert.alert('itProg','Message',[
        {text: 'yes', onPress: () => console.log('Yes button')},
        {text: 'no', onPress: () => console.log('No button')}
        ]
    );
    const handleButtonText2 = () => Alert.prompt('itProg','Message',text => console.log());
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.colorText} onPress={handleText}>Привет ! {'\n'} Как дела?</Text>
            <Button title='отвечу' color='green' onPress={handleButtonText}/>
            <Button title='ввести сообщение' color='red' onPress={handleButtonText2}/>
            <TouchableWithoutFeedback onPress={handleButtonText}>
            <Image source={{
            width: 200,
            height: 150,
            uri: 'https://i.pinimg.com/originals/b0/13/05/b01305ec4709271658ef09c488c67df2.png'}
            } />
            </TouchableWithoutFeedback>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    colorText: {
      color: 'red'
    },
});
