import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, FlatList } from 'react-native';

const ColorScreen = () => {

    const [color, setColor] = useState([]);

    return (
        <View>
            <Button
                title="Add a Color"
                onPress={() => {
                    setColor([...color, RandomRGB()])
                }}
            />
            <FlatList
                keyExtractor={item => item}
                data={color}
                renderItem={({ item }) => {
                    return (
                        <View style={{ width: 100, height: 100, backgroundColor: item }} />
                    );
                }}
            />
        </View>
    )
}

const RandomRGB = () => { 
    const red = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);

    return `rgb(${red},${green},${blue})`
}

const styles = StyleSheet.create({});

export default ColorScreen;