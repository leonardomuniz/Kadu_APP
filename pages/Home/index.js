import React, { useState, useEffect, useContext } from 'react';
import { ScrollView, Text, View, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';

import styles from '../../src/styles/GlobalStyle';
import Button from '../../src/components/Button';
import Kadu from '../../src/components/Kadu';
import { UserContext } from '../../src/context/User';

function Home({ navigation }) {
    const [hasKadu, setKadu] = useState(true);
    const [userCredentials, setUserCredentials] = useState({});
    const isFocused = useIsFocused();

    const { userInfos, setUserInfos } = useContext(UserContext);


    useEffect(() => {
        async function getUserAuth() {

            const userValue = JSON.parse(await AsyncStorage.getItem('userInfo'));
            setUserCredentials(userValue);
        };

        getUserAuth();
    }, [isFocused]);



    return (
        <ScrollView style={styles.scrollBody}>
            <View style={styles.staticBody}>
                <Button textButton="cadastrar" functionButton={() => navigation.navigate('cadastrarKadu')} />
                <TextInput style={styles.input} placeholder="Nome" />
            </View>

            <Text style={styles.subTitle}>Aqui estão seus Kadus </Text>

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