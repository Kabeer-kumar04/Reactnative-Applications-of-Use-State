import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const StateScreen = ({ navigation }) => {
    return (
        <View>
            <Text style={Styles.TextStyle}>Applications of ReactNative Based on UseState</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('Counter App')}
            >
                <Text style={Styles.AppStyle}>Counter Screen</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Random Color App')}
            >
                <Text style={Styles.AppStyle}>Random Color App</Text>
            </TouchableOpacity>
        </View>
    )
}

const Styles = StyleSheet.create({
    TextStyle: {
        fontSize: 19,
        marginVertical: 15,
        // marginHorizontal: 7
        textAlign: 'center'
    },
    AppStyle: {
        fontSize: 25,
        marginHorizontal: 10,
        marginVertical: 10,
        color: 'blue',
        textAlign: 'center'
    }
})

export default StateScreen;