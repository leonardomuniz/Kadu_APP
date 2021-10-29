import React, { useState, useEffect } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


import styles from '../../src/styles/GlobalStyle';
import localStyles from './styles';
import Button from '../../src/components/Button';
import Kadu from '../../src/components/Kadu';
import PictureProfile from '../../src/components/PictureProfile';


function Profile({ navigation }) {
    const [hasKadu, setKadu] = useState(true);
    const [userInfo, setUserInfo] = useState({});
    const isFocused = useIsFocused();

    useEffect(() => {
        async function getUserAuth() {
            const userValue = JSON.parse(await AsyncStorage.getItem('userInfo'));
            setUserInfo(userValue);
        };
        getUserAuth();
    }, [isFocused]);



    return (
        <ScrollView style={styles.scrollBody}>
            <View style={styles.staticBody}>
                <PictureProfile />
                <Text style={localStyles.infoPrincipal}>{userInfo.name} - elo</Text>
                <Button textButton="editarPerfil" functionButton={() => navigation.navigate('editarPerfil')} />
            </View>

            {hasKadu == false ? (
                <View style={styles.staticBody}>
                    <Text>Você ainda não fez Kadus</Text>
                </View>
            ) : (
                <View style={styles.showCase}>
                    <Kadu kaduName="Nome do Kadu" kaduFunction={() => navigation.navigate('mostrarKadu')} />
                    <Kadu kaduName="Nome do Kadu" kaduFunction={() => navigation.navigate('mostrarKadu')} />
                    <Kadu kaduName="Nome do Kadu" kaduFunction={() => navigation.navigate('mostrarKadu')} />
                    <Kadu kaduName="Nome do Kadu" kaduFunction={() => navigation.navigate('mostrarKadu')} />
                    <Kadu kaduName="Nome do Kadu" kaduFunction={() => navigation.navigate('mostrarKadu')} />
                    <Kadu kaduName="Nome do Kadu" kaduFunction={() => navigation.navigate('mostrarKadu')} />
                    <Kadu kaduName="Nome do Kadu" kaduFunction={() => navigation.navigate('mostrarKadu')} />
                    <Kadu kaduName="Nome do Kadu" kaduFunction={() => navigation.navigate('mostrarKadu')} />
                </View>
            )}


            <Text></Text>
        </ScrollView>
    );
}

export default Profile;