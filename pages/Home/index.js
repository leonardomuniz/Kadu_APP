import React, { useState } from 'react';
import { ScrollView, Text, View, TextInput } from 'react-native';

import styles from '../../styles/GlobalStyle';
import localStyles from './styles';
import Button from '../../components/Button';
import Kadu from '../../components/Kadu';

function Home({ navigation }) {
    const [hasKadu, setKadu] = useState(true);


    return (
        <ScrollView style={styles.scrollBody}>
            <View style={styles.staticBody}>
                <Button textButton="cadastrar" functionButton={() => navigation.navigate('cadastrarKadu')} />
                <TextInput style={styles.input} placeholder="Nome" />
            </View>

            <Text style={styles.subTitle}>Seus Kadus</Text>

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