import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Touchable } from 'react-native';

const CounterScreen = () => {

    // let Counter = 0;
    const [Counter, setCounter] = useState(0);

    return (
        <View>
            <TouchableOpacity
                onPress={() =>
                    setCounter(Counter + 1)
                }
            >
                <Text style={styles.textStyle}>Increase</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() =>
                    setCounter(Counter - 1)
                }
            >
                <Text style={styles.textStyle}>Decrease</Text>
            </TouchableOpacity>
            <Text style={styles.counterStyle}>Counter Count: {Counter}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 25,
        color: 'blue',
        textAlign: 'center',
        marginVertical: 5
    },
    counterStyle: {
        fontSize: 30,
        marginVertical: 20
    }
});

export default CounterScreen;