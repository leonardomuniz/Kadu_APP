import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from "../styles/GlobalStyle";

export default function Button (props) {

    return (
        <View>
            <TouchableOpacity style={styles.buttonSelect} onPress={props.functionButton}>
                <Text style={styles.buttonText}>{props.textButton}</Text>
            </TouchableOpacity>
        </View>
    );
};