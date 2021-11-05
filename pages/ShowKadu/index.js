import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';


import styles from '../../src/styles/GlobalStyle';
import localStyle from './style';
import Button from '../../src/components/Button';
import Kadu from '../../src/components/Kadu';
import Tag from '../../src/components/Tag';



function ShowKadu({ navigation }) {
    return (
        <ScrollView style={styles.scrollBody}>
            <Button textButton="postar desenho" functionButton={() => navigation.navigate('postKadu')}/>
            <Text style={localStyle.infoPrincipal}>Nome do Kadu</Text>
            <Text style={localStyle.infoPrincipal}><FontAwesome5 name="calendar-alt" size={24} color="black" /> 01/09/2021 - <FontAwesome5 name="calendar-alt" size={24} color="black" /> 30/09/2021</Text>
            <Text style={localStyle.infoSecundaria}>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Text>

            <Text style={styles.subTitle}>Dias concluidos: 0</Text>
            <View style={localStyle.justifyContentLeft}>
                <Tag tagName="Halloween" />
                <Tag tagName="Música" />
                <Tag tagName="Filmes" />
                <Tag tagName="Folclore" />
                <Tag tagName="Discoteca" />
                <Tag tagName="RPG" />
                <Tag tagName="Samurais" />
                <Tag tagName="Cinema" />
            </View>

            <Text style={localStyle.infoPrincipal}>Tema do dia:</Text>
            <Text style={localStyle.subTitulo}>referencias</Text>
            <View style={styles.showCase}>
                <Kadu kaduName="Nome do Kadu"  />
                <Kadu kaduName="Nome do Kadu"  />
                <Kadu kaduName="Nome do Kadu"  />
                <Kadu kaduName="Nome do Kadu"  />
            </View>

        </ScrollView>
    );
}

export default ShowKadu;