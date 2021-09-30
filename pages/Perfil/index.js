import React from 'react';
import { ScrollView, TouchableOpacity, Text, View } from 'react-native';
import styles from './estilo';


// import { Container } from './styles';

function Perfil({navigation}) {
    return (
        <ScrollView style={styles.corpo}>
            <View style={styles.centralizar}>
                <View style={styles.fotoPerfil} />
                <Text style={styles.infoPrincipal}>Nome do usuário - elo</Text>
                <TouchableOpacity style={styles.botao}>
                <Text style={styles.botao_texto} onPress={() => navigation.navigate('editarPerfil')}>editar perfil</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.vitrine}>
                <TouchableOpacity style={styles.kadu} onPress={() => navigation.navigate('mostrarKadu')}>
                    <Text style={styles.kaduTexto}>Nome do Kadu</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.kadu} onPress={() => navigation.navigate('mostrarKadu')}>
                    <Text style={styles.kaduTexto}>Nome do Kadu</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.kadu} onPress={() => navigation.navigate('mostrarKadu')}>
                    <Text style={styles.kaduTexto}>Nome do Kadu</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.kadu} onPress={() => navigation.navigate('mostrarKadu')}>
                    <Text style={styles.kaduTexto}>Nome do Kadu</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.kadu} onPress={() => navigation.navigate('mostrarKadu')}>
                    <Text style={styles.kaduTexto}>Nome do Kadu</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.kadu} onPress={() => navigation.navigate('mostrarKadu')}>
                    <Text style={styles.kaduTexto}>Nome do Kadu</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.kadu} onPress={() => navigation.navigate('mostrarKadu')}>
                    <Text style={styles.kaduTexto}>Nome do Kadu</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.kadu} onPress={() => navigation.navigate('mostrarKadu')}>
                    <Text style={styles.kaduTexto}>Nome do Kadu</Text>
                </TouchableOpacity>
            </View>
            <Text></Text>
        </ScrollView>
    );
}

export default Perfil;