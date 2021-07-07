import React,{useState} from 'react';
import { StyleSheet,TextInput, View } from 'react-native';

export default function Form() {
    const [text,setValue] = useState('');

    const onChange = (text) => {
        setValue(text);
    };
    return (
        <View>
            <TextInput style={styles.input} onChangeText={onChange} placeholder='Впишите задачу'/>
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