import { useEffect, useState } from "react";
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from "react-native";
import {searchAllBooks} from "../services/books.http.service"

export default function Book({ navigation }){
    const [books, setBooks] = useState([])
    const numColumns = 2; 
    useEffect(()=>{
        searchAllBooks().then((data)=> setBooks(data))
    }, [])
    return (
        
            <FlatList 
                contentContainerStyle={styles.list}
                data={books}
                keyExtractor={(item) => item.abbrev.pt}
                numColumns={numColumns}
                key={numColumns.toString()} 
                renderItem={({ item }) => 
                <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Capítulos', { abbrev: item.abbrev.pt })}>
                <Text style={styles.books}>{item.name}</Text>
                </TouchableOpacity>
                }
            />
        
    )
}
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#fff",
    },
    container: {
        backgroundColor: "#f8f8f8",
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
        flex: 1,
        borderRadius: 10,
        padding: 10,
        height: 150,
    },
    list: {
        backgroundColor: "#fff",
    },
    books: {
        color: '#000',
        fontSize: 16,
    },
    titleBox: {
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        paddingTop:40,
    },
    titleText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
    }
});
