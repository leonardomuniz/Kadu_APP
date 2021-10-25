import React, { useState, useEffect } from 'react';
import { ScrollView, TouchableOpacity, Text, View, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from '../../src/styles/GlobalStyle';
import localStyles from './style';
import PictureProfile from '../../src/components/PictureProfile';
import api from '../../src/services/api';
import Button from '../../src/components/Button';

import { Formik } from 'formik';
import * as yup from 'yup';



function EditProfile() {
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        async function getUserAuth() {
            const tokenValue = await AsyncStorage.getItem('authToken');
            const userValue = JSON.parse(await AsyncStorage.getItem('userCredentials'));
            setUserInfo({
                token: tokenValue,
                name: userValue.name,
                email: userValue.email,
            });
        };

        getUserAuth();
    }, []);


    return (
        <ScrollView style={styles.scrollBody}>
            <View style={styles.staticBody}>
                <PictureProfile />
                <Text style={localStyles.infoPrincipal}>{userInfo.name} - elo</Text>
            </View>

            <View style={styles.showCase}>
                <Text style={styles.subTitle}>Nome:</Text>
                <TextInput style={styles.input} placeholder="Leonardo Campos Muniz" />

                <Text style={styles.subTitle}>E-mail:</Text>
                <TextInput style={styles.input} placeholder="leonardo@kadu.com.br" />

                <Text style={styles.subTitle}>Senha:</Text>
                <TextInput style={styles.input} placeholder="senha" secureTextEntry={true} />

                <Text style={styles.subTitle}>Descrição:</Text>
                <TextInput style={styles.input} placeholder="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" />

                <TouchableOpacity style={localStyles.botao}>
                    <Text style={localStyles.botao_texto} onPress={() => navigation.navigate('profile')}>finalizar</Text>
                </TouchableOpacity>

            </View>

            <Text></Text>
        </ScrollView>
    );
}

export default EditProfile;