import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import styles from "../styles/GlobalStyle";


export default function Kadu({kaduImage, kaduFunction, kaduName}) {
    return (
        <TouchableOpacity style={styles.kadu} onPress={kaduFunction}>
            {kaduImage && <Image source={{ uri: kaduImage }} style={{ width: 300, height: "47.5%" }} />}
            <Text style={styles.kaduText}>{kaduName}</Text>
        </TouchableOpacity>
    )
}