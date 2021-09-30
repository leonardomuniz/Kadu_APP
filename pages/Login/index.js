import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './estilo';

// import { Container } from './styles';

function Login({navigation}) {
    return(
        <View style = {styles.corpo}>
            <View style = {styles.logo}/>
            <TextInput style={styles.input} placeholder="Nome" />
            <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true}/>

            <TouchableOpacity style = {styles.texto}>
                <Text>Esqueceu sua senha ?! <Text style={{ color: '#6732FF' }}>Clique aqui !</Text></Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.botao}  onPress={() => navigation.navigate('home')} >
                <Text style = {styles.botao_texto}>entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity  onPress={() => navigation.navigate('cadastro')}>
                <Text>Ainda não tenho <Text style={{ color: '#6732FF' }}>conta !</Text></Text>
            </TouchableOpacity>
        </View>
    );
}

export default Login;