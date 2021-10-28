import React, { useState, useEffect } from 'react';
import { ScrollView, Text, View, TextInput, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';


import localStyle from './style';
import styles from '../../src/styles/GlobalStyle';
import Button from '../../src/components/Button';
import Kadu from '../../src/components/Kadu';
import Tag from '../../src/components/Tag';
import api from '../../src/services/api';



function CreateKadu({ navigation }) {
    const [initialDate, setInitialDate] = useState(new Date());
    const [finalDate, setFinalDate] = useState(new Date());
    const [initialDateMode, setInitialDateMode] = useState('date');
    const [finalDateMode, setFinalDateMode] = useState('date');
    const [showInitialDate, setShowInitialDate] = useState(false);
    const [showFinalDate, setShowFinalDate] = useState(false);
    const [goals, setGoals] = useState(0);
    const [themes, setThemes] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [themeList, setThemeList] = useState([]);
    const [range, setRange] = useState(5);


    const onInitialDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowInitialDate(Platform.OS === 'ios');
        setInitialDate(currentDate);
    };

    const onFinalDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowFinalDate(Platform.OS === 'ios');
        setFinalDate(currentDate);
    };


    const showInitialDateMode = (currentMode) => {
        setShowInitialDate(true);
        setInitialDateMode(currentMode);
    };

    const showFinalDateMode = (currentMode) => {
        setShowFinalDate(true);
        setFinalDateMode(currentMode);
    };


    const showInitialDatepicker = () => {
        showInitialDateMode('date');
    };

    const showFinalDatepicker = () => {
        showFinalDateMode('date');
    };




    function calculateGoals() {
        const oneDay = 24 * 60 * 60 * 1000;
        const firstDate = new Date(initialDate);
        const secondDate = new Date(finalDate);

        const differenceBetweenDates = Math.round(Math.abs((firstDate - secondDate) / oneDay));
        setGoals(goals)

        return differenceBetweenDates;

    };

    async function createKadu() {
        try {
            const goals = await calculateGoals();

            const kadu = {
                title: title,
                description: description,
                dateInit: initialDate,
                dateEnd: finalDate,
                goal: goals,
                artist: '',
                themes: themeList
            }

            await api.post('kadu/', kadu);

            //navigation.navigate('home');

            //console.log(kadu);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        async function getThemes() {
            const { data } = await api.get('theme');

            setThemes(data);
        };

        getThemes();
    }, []);




    return (
        <ScrollView style={styles.scrollBody}>

            <Text style={styles.title}>Criar Kadu</Text>
            <Text style={styles.subTitle}>Informações</Text>

            <View style={styles.staticBody}>
                <TextInput style={styles.input} placeholder="Nome do Kadu" onChangeText={setTitle} value={title} />
                <TextInput style={styles.input} placeholder="Descrição" secureTextEntry={true} onChangeText={setDescription} value={description} multiline />

                <View style={styles.showCase}>
                    <Button textButton="inicio" functionButton={showInitialDatepicker} />
                    <Button textButton="Fim" functionButton={showFinalDatepicker} />
                </View>

                <Text style={localStyle.infoPrincipal}>{initialDate.toDateString()} - {finalDate.toDateString()}</Text>

                {showInitialDate && <DateTimePicker value={initialDate} mode={initialDateMode} display="default" onChange={onInitialDateChange} />}
                {showFinalDate && <DateTimePicker value={finalDate} mode={finalDateMode} display="default" onChange={onFinalDateChange} />}



                <Text style={styles.subTitle}>Temas</Text>

                <View style={styles.showCase}>
                    {themes.slice(0, range).map(item => <Kadu key={item._id} kaduName={item.title} kaduFunction={() => setThemeList(() => [...themeList, { id: item._id, name: item.title }])} />)}
                </View>
                <Button textButton="Ver mais" functionButton={() => setRange(range + 5)} />
            </View>

            <Text style={localStyle.infoPrincipal}>Titulo: {title}</Text>
            <Text style={localStyle.infoPrincipal}>{initialDate.toDateString()} - {finalDate.toDateString()}</Text>
            <Text style={localStyle.infoPrincipal}>Descrição:</Text>
            <Text style={localStyle.infoSecundaria}>{description}</Text>
            <Text style={localStyle.infoPrincipal}>Temas: </Text>
            <View style={localStyle.justifyContentLeft}>
                {themeList.map(item => <Tag key={item.id} tagName={item.name} />)}
            </View>

            <Button textButton="Finalizar" functionButton={() => createKadu()} />

            <Text></Text>

        </ScrollView>
    );
}

export default CreateKadu;