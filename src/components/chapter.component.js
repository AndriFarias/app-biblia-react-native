import { useEffect, useState } from "react";
import { getChapter } from "../services/books.http.service";
import { FlatList, Text, StyleSheet,ScrollView} from "react-native";

export default function Chapter({ route }){
    const { abbrev, cap } = route.params;
    const [chapter, setChapter] = useState(null)
    
    useEffect(()=>{
        getChapter(abbrev, cap).then(setChapter)
    }, [])
   
    return chapter && chapter.verses ? (
        <ScrollView>
            {chapter.verses.map((verse, index) => 
                <Text key={index} style={styles.versiculos}>{verse.number}. {verse.text}</Text>
            )}
        </ScrollView>
    ) : null;
}

const styles = StyleSheet.create({
    versiculos: {
        textAlign: "center",
        padding:12,
        fontSize: 18,
    },
});