import React from 'react'
import {  TouchableOpacity } from 'react-native'
import styles from "../styles/GlobalStyle";

export default function UserIcon({userFunction}) {
    return (
        <TouchableOpacity style={styles.userIcon} onPress={userFunction}/>
    )
}
