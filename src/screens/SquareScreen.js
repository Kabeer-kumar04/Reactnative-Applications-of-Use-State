import React, { useReducer } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ColorCounter from './components/ColorCounter';



const Color_Increament = 15;

const SquareScreen = () => {

    

    return (
        <View>
            <ColorCounter
                onIncrease={() =>
                    setColor('red', Color_Increament)
                }
                onDecrease={() =>
                    setColor('red', -1 * Color_Increament)
                }
                color="Red"
            />
            <ColorCounter
                onIncrease={() =>
                    setColor('green', Color_Increament)
                }
                onDecrease={() =>
                    setColor('green', -1 * Color_Increament)
                }
                color="Green"
            />
            <ColorCounter
                onIncrease={() =>
                    setColor('blue', Color_Increament)
                }
                onDecrease={() =>
                    setColor('blue', -1 * Color_Increament)
                }
                color="Blue"
            />
            <View
                style={{
                    height: 150,
                    width: 150,
                    backgroundColor: `rgb(${red},${green},${blue})`,
                    marginVertical: 30,
                    marginHorizontal: 125
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({

})

export default SquareScreen;