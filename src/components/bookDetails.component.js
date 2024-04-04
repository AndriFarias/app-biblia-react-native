import { useEffect, useState } from "react";
import { StyleSheet, Text, FlatList, TouchableOpacity } from "react-native";
import  { getBook } from "../services/books.http.service"

export default function BookDetails({ route, navigation }){
    const [book, setBook] = useState([])
    const { abbrev } = route.params;
    const numColumns = 2; 
    useEffect(()=>{
        getBook(abbrev).then(async(data)=> setBook(data))
        
    }, [])
    return (
        <FlatList 
            contentContainerStyle={styles.list}
            data={Array.from({ length: book.chapters })}
            keyExtractor={(item, index) => index.toString()}
            numColumns={numColumns}
            key={numColumns.toString()} 
            renderItem={({ item, index }) => 
                <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Versículos', { abbrev: abbrev, cap: index+1})}>
                    <Text style={styles.books}>Capítulo {index + 1}</Text>
                </TouchableOpacity>
            }
        />
    );
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
