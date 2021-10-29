
import React from 'react';
import { Text, View } from 'react-native';

import localStyles from './styles';
import styles from '../../src/styles/GlobalStyle';

function Loading(){
    return (
        <View style={localStyles.body}>
            <Text style={styles.title}>Carregando . . .</Text>
        </View>
    );
}

export default Loading;