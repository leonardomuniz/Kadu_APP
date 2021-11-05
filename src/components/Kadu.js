import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from "../styles/GlobalStyle";
import * as ImagePicker from 'expo-image-picker';


export default function Kadu(props) {
    return (
        <TouchableOpacity style={styles.kadu} onPress={props.kaduFunction}>
            <Text style={styles.kaduText}>{props.kaduName}</Text>
        </TouchableOpacity>
    )
}