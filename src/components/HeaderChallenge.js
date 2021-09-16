import React from 'react'
import { Text, View, StyleSheet } from 'react-native'


export default props => {
    return (
        <View>
            <Text style={style.header}>Desafio Header</ Text>
            <Text style={style.name}>Marcos Vinicius Santos Souza</ Text>
        </ View>
    )
}



const style = StyleSheet.create({
    header: {
        fontSize: 50,
        textAlign: 'center'
    },
    name: {
        fontSize: 20,
        textAlign: 'center'
    },
})