import React, { useState, useEffect, useContext } from 'react';
import { ScrollView, Text, View, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';

import styles from '../../src/styles/GlobalStyle';
import localStyles from './style';
import PictureProfile from '../../src/components/PictureProfile';
import api from '../../src/services/api';
import { UserContext } from '../../src/context/User';
import Button from '../../src/components/Button';

import { Formik } from 'formik';
import * as yup from 'yup';



function EditProfile({ navigation }) {
    const [userInfo, setUserInfo] = useState({});
    const isFocused = useIsFocused();
    const { setUserInfos } = useContext(UserContext);

    useEffect(() => {
        async function getUserAuth() {
            try {
                const userValue = JSON.parse(await AsyncStorage.getItem('userInfo'));
                setUserInfo(userValue);
            } catch (error) {
                console.log(error);
            }
        };

        getUserAuth();
    }, [isFocused]);

    async function signOut() {
        await AsyncStorage.clear();
        setUserInfos(null)
    }

    return (
        <ScrollView style={styles.scrollBody}>
            <View style={styles.staticBody}>
                <Button textButton="Deslogar" functionButton={() => signOut()} />
                <PictureProfile />
                <Text style={localStyles.infoPrincipal}>{userInfo.name} - elo</Text>
            </View>

            <View style={styles.staticBody}>
                <Text style={styles.subTitle}>Nome:</Text>
                <TextInput style={styles.input} placeholder={userInfo.name} />

                <Text style={styles.subTitle}>E-mail:</Text>
                <TextInput style={styles.input} placeholder={userInfo.email} />

                <Text style={styles.subTitle}>Senha:</Text>
                <TextInput style={styles.input} placeholder="senha" secureTextEntry={true} />

                <Text style={styles.subTitle}>Descrição:</Text>
                <TextInput style={styles.input} placeholder="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" />

                <Button textButton="Finalizar" functionButton={() => navigation.navigate('profile')} />
            </View>

            <Text></Text>
        </ScrollView>
    );
}

export default EditProfile;