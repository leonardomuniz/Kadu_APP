import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from "../styles/GlobalStyle";

export default function Tag({tagName, tagFunction}) {
    return (
        <TouchableOpacity style={styles.tag} onPress={tagFunction}>
            <Text style={styles.buttonText}>{tagName}</Text>
        </TouchableOpacity>
    );
};
