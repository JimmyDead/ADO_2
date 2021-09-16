import React, { useState } from 'react'
import { FlatList, View, StyleSheet } from 'react-native'
import BookDetails from './BookDetails';
import HeaderChallenge from './HeaderChallenge';

const requestApiBook = async (url, setData) => {
    await fetch(url)
        .then(response => response.json())
        .then(json => json.slice(0, 10))
        .then(json => setData(json))
        .catch(() => (alert('Erro in request')))
}

export default () => {
    const [data, setData] = useState([])

    requestApiBook('https://jsonplaceholder.typicode.com/photos', setData)

    const myItems = ({ item }) => {
        return (
            <BookDetails
                id={`Book: ${item.id}`}
                title={item.title}
                url={item.url}
            />
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={myItems}
                keyExtractor={item => item.id} 
                ListHeaderComponent={HeaderChallenge}
                />
        </ View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        padding: 8,
    }
})