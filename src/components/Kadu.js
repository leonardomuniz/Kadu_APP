import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import styles from "../styles/GlobalStyle";


export default function Kadu({kaduImage, kaduFunction, kaduName}) {
    return (
        <TouchableOpacity style={styles.kadu} onPress={kaduFunction}>
            <Text style={styles.kaduText}>{kaduName}</Text>
            {kaduImage && <Image source={kaduImage} style={{ width:"100%", height: "100%"}} />}
        </TouchableOpacity>
    )
}