import React,{useState} from 'react';
import { StyleSheet,TextInput, View,Button } from 'react-native';

export default function Form({addHandler}) {
    const [text,setValue] = useState('');

    const onChange = (text) => {
        setValue(text);
    };
    return (
        <View>
            <TextInput style={styles.input} onChangeText={onChange} placeholder='Впишите задачу'/>
            <Button color='pink' onPress={() => addHandlerndler(text)} title='добавить задачу'/>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderBottomWidth : 1,
        fontSize: 20,
        padding: 15,
        textAlign: 'center',
        width: '80%',
        marginLeft: '10%', // отступ слева
        borderColor: 'pink'
    }
});