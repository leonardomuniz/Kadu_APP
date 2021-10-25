import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from "../styles/GlobalStyle";

export default function Button ({textButton, functionButton }) {

    return (
        <View>
            <TouchableOpacity style={styles.buttonSelect} onPress={functionButton}>
                <Text style={styles.buttonText}>{textButton}</Text>
            </TouchableOpacity>
        </View>
    );
};