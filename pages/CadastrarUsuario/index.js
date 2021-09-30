import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './estilo';


function CadastrarUsuario({navigation}) {
    return (
        <View style = {styles.corpo}>
            <Text style = {styles.titulo}>Criar Conta</Text>
            <TextInput style={styles.input} placeholder="Nome" />
            <TextInput style={styles.input} placeholder="Email" />
            <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true}/>
            <TextInput style={styles.input} placeholder="Endereço" />
            <TouchableOpacity style = {styles.botao} onPress={() => navigation.navigate('login')} >
                <Text style = {styles.botao_texto}>cadastrar</Text>
            </TouchableOpacity>
        </View>
    );
}

export default CadastrarUsuario;