import React, { useState, useEffect } from 'react';
import { ScrollView, Text, View, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from '../../src/styles/GlobalStyle';

import Button from '../../src/components/Button';
import Kadu from '../../src/components/Kadu';

function Home({ navigation }) {
    const [hasKadu, setKadu] = useState(true);
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
                <Button textButton="cadastrar" functionButton={() => navigation.navigate('cadastrarKadu')} />
                <TextInput style={styles.input} placeholder="Nome" />
            </View>

            <Text style={styles.subTitle}>Aqui estão seus Kadus</Text>

            {hasKadu == false ? (
                <View style={styles.staticBody}>
                    <Text>  Você ainda não fez Kadus</Text>
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

        </ScrollView>
    );
}

export default Home;