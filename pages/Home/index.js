import React from 'react';
import { ScrollView, TouchableOpacity, Text, View, TextInput } from 'react-native';
import styles from './estilo';

function Home({ navigation }) {
    return (
        <ScrollView style={styles.corpo}>
            <View style={styles.centralizar}>
                <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('cadastrarKadu')} >
                    <Text style={styles.botao_texto}>cadastrar</Text>
                </TouchableOpacity>
                <TextInput style={styles.input} placeholder="Nome" />
            </View>

            <Text style={styles.titulo}>Recomendados</Text>

            <View style={styles.vitrine}>
                <TouchableOpacity style={styles.kadu} onPress={()=> navigation.navigate('mostrarKadu')}>
                    <Text style={styles.kaduTexto}>Nome do Kadu</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.kadu} onPress={()=> navigation.navigate('mostrarKadu')}>
                    <Text style={styles.kaduTexto}>Nome do Kadu</Text>
                </TouchableOpacity>   
                <TouchableOpacity style={styles.kadu} onPress={()=> navigation.navigate('mostrarKadu')}>
                    <Text style={styles.kaduTexto}>Nome do Kadu</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.kadu} onPress={()=> navigation.navigate('mostrarKadu')}>
                    <Text style={styles.kaduTexto}>Nome do Kadu</Text>
                </TouchableOpacity>  
                <TouchableOpacity style={styles.kadu} onPress={()=> navigation.navigate('mostrarKadu')}>
                    <Text style={styles.kaduTexto}>Nome do Kadu</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.kadu} onPress={()=> navigation.navigate('mostrarKadu')}>
                    <Text style={styles.kaduTexto}>Nome do Kadu</Text>
                </TouchableOpacity>   
                <TouchableOpacity style={styles.kadu} onPress={()=> navigation.navigate('mostrarKadu')}>
                    <Text style={styles.kaduTexto}>Nome do Kadu</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.kadu} onPress={()=> navigation.navigate('mostrarKadu')}>
                    <Text style={styles.kaduTexto}>Nome do Kadu</Text>
                </TouchableOpacity>   
            </View>
        </ScrollView>
    );
}

export default Home;