import React, { useState } from 'react';
import { ScrollView, TouchableOpacity, Text, View, TextInput, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from './estilo';

// import { Container } from './styles';

function CadastrarKadu({ navigation }) {
    const [start, setStart] = useState(new Date());
    const [end, setEnd] = useState(new Date());
    const [inicio, setInicio] = useState(false);
    const [fim, setFim] = useState(false);

    const mudarInicio = (event, selectedDate) => {
        setInicio(Platform.OS === 'ios');
        setStart(selectedDate);
    };

    const mudarFim = (event, selectedDate) => {
        setFim(Platform.OS === 'ios');
        setEnd(selectedDate);
    };


    const inicioKadu = () => setInicio(true);
    const fimKadu = () => setFim(true);



    return (
        <ScrollView style={styles.corpo}>
            {inicio && <DateTimePicker value={new Date()} onChange={mudarInicio} />}
            {fim && <DateTimePicker value={new Date()} onChange={mudarFim} />}

            <Text style={styles.titulo}>Criar Kadu</Text>

            <Text style={styles.subTitulo}>Informações</Text>

            <View style={styles.centralizar}>
                <TextInput style={styles.input} placeholder="Nome" />
                <TextInput style={styles.input} placeholder="Descrição" />
            </View>


            <TouchableOpacity style={styles.botao} onPress={inicioKadu}>
                <Text style={styles.botao_texto}>Inicio</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao} onPress={fimKadu}>
                <Text style={styles.botao_texto}>fim</Text>
            </TouchableOpacity>

            <Text style={styles.subTitulo}>Temas</Text>

            <View style={styles.vitrine}>
                <View style={styles.kadu}>
                    <Text style={styles.kaduTexto}>Nome do Kadu</Text>
                </View>
                <View style={styles.kadu}>
                    <Text style={styles.kaduTexto}>Nome do Kadu</Text>
                </View>
                <View style={styles.kadu}>
                    <Text style={styles.kaduTexto}>Nome do Kadu</Text>
                </View>
                <View style={styles.kadu}>
                    <Text style={styles.kaduTexto}>Nome do Kadu</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.botao}>
                <Text style={styles.botao_texto}>VER MAIS</Text>
            </TouchableOpacity>

            <Text style={styles.infoPrincipal}>Nome do Kadu</Text>
            <Text style={styles.infoPrincipal}>{start.toDateString()} - {end.toDateString()}</Text>
            <Text style={styles.infoSecundaria}>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Text>

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

            <Text></Text>
            <TouchableOpacity style={styles.botao}>
                <Text style={styles.botao_texto}>finalizar</Text>
            </TouchableOpacity>
            <Text></Text>

        </ScrollView>
    );
}

export default CadastrarKadu;