import React, { useState, useEffect, useContext } from 'react';
import { ScrollView, Text, View, TextInput, Image } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

import styles from '../../src/styles/GlobalStyle';
import Kadu from '../../src/components/Kadu';
import { UserContext } from '../../src/context/User';
import api from '../../src/services/api';

function Home({ navigation }) {
    const [hasKadu, setKadu] = useState(null);
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



    return (
        <ScrollView style={styles.scrollBody}>
            <View style={styles.staticBody}>
                <Text></Text>
                <TextInput style={styles.input} placeholder="Nome" />
            </View>

            <Text style={styles.subTitle}>Aqui estão seus Kadus </Text>

            {hasKadu ? (
                <View style={styles.showCase}>
                    {hasKadu.map(item => <Kadu
                        key={item._id}
                        kaduName={item.title}
                        kaduName={item.title}
                        kaduFunction={() => navigation.navigate('mostrarKadu', {kaduId: item._id})}
                        kaduImage={{ uri: item.thumb }}
                    />).reverse()}
                </View>
            ) : (
                <View style={styles.staticBody}>
                    <Text>  Você ainda não fez Kadus</Text>
                </View>
            )}
        </ScrollView>

    );
}

export default Home;