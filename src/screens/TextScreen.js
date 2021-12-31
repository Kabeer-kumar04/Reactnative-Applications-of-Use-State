import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {

    const [name, setName] = useState('');

    return (
        <View>
            <Text style={styles.textStyle}>Enter the name:</Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                // value={name}
                // placeholder="kabeer"
                onChangeText={(newValue) => setName(newValue)}
            />
            <Text style={styles.textStyle}>Your name is: {name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 5,
        borderColor: 'black',
        margin: 15,
        padding: 7
    },
    textStyle: {
        fontSize: 20
    }
});

export default TextScreen;