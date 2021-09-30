import React from 'react';
import { ScrollView, TouchableOpacity, Text, View, TextInput } from 'react-native';
import styles from './estilo';

// import { Container } from './styles';

function EditarPerfil() {
    return (
        <ScrollView style={styles.corpo}>
            <View style={styles.centralizar}>
                <View style={styles.fotoPerfil} />
                <Text style={styles.infoPrincipal}>Nome do usuário - elo</Text>
            </View>

            <Text style={styles.titulo}>Nome:</Text>
            <TextInput style={styles.input} placeholder="Leonardo Campos Muniz" />

            <Text style={styles.titulo}>E-mail:</Text>
            <TextInput style={styles.input} placeholder="leonardo@kadu.com.br" />

            <Text style={styles.titulo}>Senha:</Text>
            <TextInput style={styles.input} placeholder="senha" secureTextEntry={true} />

            <Text style={styles.titulo}>Descrição:</Text>
            <TextInput style={styles.input} placeholder="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" />

            <TouchableOpacity style={styles.botao}>
                <Text style={styles.botao_texto} onPress={() => navigation.navigate('perfil')}>finalizar</Text>
            </TouchableOpacity>

            <Text></Text>
        </ScrollView>
    );
}

export default EditarPerfil;