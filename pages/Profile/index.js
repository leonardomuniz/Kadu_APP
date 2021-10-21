import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';

import styles from '../../styles/GlobalStyle';
import localStyles from './styles';

import Button from '../../components/Button';
import Kadu from '../../components/Kadu';
import PictureProfile from '../../components/PictureProfile';

function Profile({ navigation }) {
    const [hasKadu, setKadu] = useState(true);


    return (
        <ScrollView style={styles.scrollBody}>
            <View style={styles.staticBody}>
                <PictureProfile />
                <Text style={localStyles.infoPrincipal}>Nome do usuário - elo</Text>
                <Button textButton="editar perfil" functionButton={() => navigation.navigate('editarPerfil')} />
            </View>

            {hasKadu == false ? (
                <View style={styles.staticBody}>
                    <Text>Você ainda não fez Kadus</Text>
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


            <Text></Text>
        </ScrollView>
    );
}

export default Profile;