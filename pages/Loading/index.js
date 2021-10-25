
import React from 'react';
import { Text, View } from 'react-native';

import loaclStyles from './styles';
import styles from '../../src/styles/GlobalStyle';

function Loading(){
    return (
        <View style={loaclStyles.body}>
            <Text style={styles.title}>Loading . . .</Text>
        </View>
    );
}

export default Loading;