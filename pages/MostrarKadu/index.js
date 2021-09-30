import React from 'react';
import { ScrollView, TouchableOpacity, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import styles from './estilo';


// import { Container } from './styles';

function MostrarKadu({navigation}) {
    return (
        <ScrollView style={styles.corpo}>
            <TouchableOpacity style={styles.botao}>
                <Text style={styles.botao_texto}>postar desenho</Text>
            </TouchableOpacity>
            <Text style={styles.infoPrincipal}>Nome do Kadu</Text>
            <Text style={styles.infoPrincipal}><FontAwesome5 name="calendar-alt" size={24} color="black" /> 01/09/2021 - <FontAwesome5 name="calendar-alt" size={24} color="black" /> 30/09/2021</Text>
            <Text style={styles.infoSecundaria}>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Text>

            <Text style={styles.titulo}>Dias concluidos: </Text>
            <View style={styles.alinharEsquerda}>
                <TouchableOpacity style={styles.tag}>
                    <Text style={styles.botao_texto}>Hallowen</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tag}>
                    <Text style={styles.botao_texto}>Música</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tag}>
                    <Text style={styles.botao_texto}>Filmes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tag}>
                    <Text style={styles.botao_texto}>Folclore</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tag}>
                    <Text style={styles.botao_texto}>Discoteca</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tag}>
                    <Text style={styles.botao_texto}>RPG</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tag}>
                    <Text style={styles.botao_texto}>Samurais</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tag}>
                    <Text style={styles.botao_texto}>Cinema</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.infoPrincipal}>Tema do dia:</Text>
            <Text style={styles.subTitulo}>referencias</Text>
            <View style={styles.vitrine}>
                <TouchableOpacity style={styles.kadu} onPress={() => navigation.navigate('perfil')}>
                    <Text style={styles.kaduTexto}>Nome do Kadu</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.kadu} onPress={() => navigation.navigate('perfil')}>
                    <Text style={styles.kaduTexto}>Nome do Kadu</Text>
                </TouchableOpacity>   
                <TouchableOpacity style={styles.kadu} onPress={() => navigation.navigate('perfil')}>
                    <Text style={styles.kaduTexto}>Nome do Kadu</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.kadu} onPress={() => navigation.navigate('perfil')}>
                    <Text style={styles.kaduTexto}>Nome do Kadu</Text>
                </TouchableOpacity>  
                <TouchableOpacity style={styles.kadu} onPress={() => navigation.navigate('perfil')}>
                    <Text style={styles.kaduTexto}>Nome do Kadu</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.kadu} onPress={() => navigation.navigate('perfil')}>
                    <Text style={styles.kaduTexto}>Nome do Kadu</Text>
                </TouchableOpacity>   
                <TouchableOpacity style={styles.kadu} onPress={() => navigation.navigate('perfil')}>
                    <Text style={styles.kaduTexto}>Nome do Kadu</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.kadu} onPress={() => navigation.navigate('perfil')}>
                    <Text style={styles.kaduTexto}>Nome do Kadu</Text>
                </TouchableOpacity>   
            </View>
        </ScrollView>
    );
}

export default MostrarKadu;