import React, { useState, useEffect, useContext } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from '../../src/styles/GlobalStyle';
import localStyles from './styles';
import PictureProfile from '../../src/components/PictureProfile';
import Button from '../../src/components/Button';
import Kadu from '../../src/components/Kadu';
import { UserContext } from '../../src/context/User';
import api from '../../src/services/api';


function Profile({ navigation }) {
    const [hasKadu, setKadu] = useState(null);
    const [userInfo, setUserInfo] = useState({});
    const isFocused = useIsFocused();


    const { userInfos } = useContext(UserContext);

    useEffect(() => {
        (async () => {
            try {
                const { data } = await api.get(`kadu/artist/${userInfos.id}`);

                setKadu(data);
            } catch (error) {
                console.log(error);
            }
        })()
    }, [isFocused]);


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

            {hasKadu ? (
                <View style={styles.showCase}>
                    {hasKadu.map(item => <Kadu
                        key={item._id}
                        kaduName={item.title}
                        kaduName={item.title}
                        kaduFunction={() => navigation.navigate('mostrarKadu')}
                        kaduImage={{ uri: item.thumb }}
                    />).reverse()}
                </View>
            ) : (
                <View style={styles.staticBody}>
                    <Text>  Você ainda não fez Kadus</Text>
                </View>
            )}

            <Text></Text>
        </ScrollView>
    );
}

export default Profile;