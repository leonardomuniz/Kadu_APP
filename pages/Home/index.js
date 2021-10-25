import React, { useState, useEffect } from 'react';
import { ScrollView, Text, View, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from '../../styles/GlobalStyle';
import localStyles from './styles';
import Button from '../../components/Button';
import Kadu from '../../components/Kadu';

function Home({ navigation }) {
    const [hasKadu, setKadu] = useState(true);
    const [token, setToken] = useState('');
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        async function getAuth() {
            const auth = await AsyncStorage.getItem('authToken');
            const userInfo = JSON.parse(await AsyncStorage.getItem('userCredentials'));

            setToken(auth);
            setUserInfo(userInfo);
        };

        getAuth();
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

                <View style={localStyles.vitrine}>
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