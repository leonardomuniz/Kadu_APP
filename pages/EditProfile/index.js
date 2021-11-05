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
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [bio, setBio] = useState('');

    const { userInfos, setUserInfos } = useContext(UserContext);
    const isFocused = useIsFocused();

    useEffect(() => {
        (async () => {
            const {data} = await api.get(`/user/${userInfos.id}`)
            setUserInfo(data)
        })();
    }, [isFocused, userInfos]);


    async function updateUserInfo(){
        const user ={
            name: name === '' ? userInfos.name : name,
            email: email === '' ? userInfos.email : email,
            bio: bio === '' ? userInfos.bio : bio,
        };

        setUserInfos({
            token:userInfos.token,
            name:  name === '' ? userInfos.name : name,
            email: email === '' ? userInfos.email : email,
            id: userInfos.id,
        });

        await api.put(`user/${userInfos.id}`, user);
        resetForm();
        navigation.navigate('profile');
    };

    async function signOut() {
        await AsyncStorage.clear();
        setUserInfos(null);
    };

    function resetForm(){
        setName('');
        setEmail('');
        setBio('')
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
                <TextInput style={styles.input} placeholder={userInfo.name} onChangeText={setName}/>

                <Text style={styles.subTitle}>E-mail:</Text>
                <TextInput style={styles.input} placeholder={userInfo.email} onChangeText={setEmail}/>

                <Text style={styles.subTitle}>Descrição:</Text>
                <TextInput style={styles.input} placeholder={userInfo.bio} onChangeText={setBio} multiline/>

                <Button textButton="Finalizar" functionButton={updateUserInfo} />
            </View>

            <Text></Text>
        </ScrollView>
    );
}

export default EditProfile;