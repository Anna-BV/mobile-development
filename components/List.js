import React from 'react';
import { StyleSheet, Text, TouchableHighlight} from 'react-native';

export default function ListItem({element,deleteHandler}) {
    return (
        <TouchableHighlight onPress={() => deleteHandler(element.key)}>
            <Text style={styles.text}>{element.text}</Text>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    text: {
        paddingTop: 30, // внутренний отступ сверху
        textAlign: 'center',
        borderRadius: 5,
        backgroundColor: 'pink',
        fontWeight: 'bold',
        borderWidth: 1,
        marginTop: 20,
        width: '80%',
        marginLeft: '10%' // отступ слева
    }
});