import React, { useState, useEffect } from 'react';
import { ScrollView, Text, View, TextInput, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Formik } from 'formik';
import * as yup from 'yup';

import localStyle from './style';
import styles from '../../src/styles/GlobalStyle';
import Button from '../../src/components/Button';
import Kadu from '../../src/components/Kadu';
import Tag from '../../src/components/Tag';
import api from '../../src/services/api';



function CreateKadu({ navigation }) {
    const [initialDate, setInitialDate] = useState(new Date());
    const [initialDateMode, setInitialDateMode] = useState('date');
    const [showInitialDate, setShowInitialDate] = useState(false);
    const [finalDate, setFinalDate] = useState(new Date());
    const [finalDateMode, setFinalDateMode] = useState('date');
    const [showFinalDate, setShowFinalDate] = useState(false);
    const [goals, setGoals] = useState(0);
    const [themes, setThemes] = useState([]);

    const FormValidator = yup.object({
        email: yup.string().email('O email precisa ser um email valido').required('O email é obrigatório'),
        password: yup.string().required('A senha é obrigatório').min(6, 'A senha precisa ter pelo menos 6 letras')
    });

    const onInitialDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowInitialDate(Platform.OS === 'ios');
        setInitialDate(currentDate);
        console.log(initialDate)
    };

    const showInitialDateMode = (currentMode) => {
        setShowInitialDate(true);
        setInitialDateMode(currentMode);
    };

    const showInitialDatepicker = () => {
        showInitialDateMode('date');
    };



    const onFinalDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowFinalDate(Platform.OS === 'ios');
        setFinalDate(currentDate);
    };

    const showFinalDateMode = (currentMode) => {
        setShowFinalDate(true);
        setFinalDateMode(currentMode);
    };

    const showFinalDatepicker = () => {
        showFinalDateMode('date');
    };




    function calculateGoals() {
        const oneDay = 24 * 60 * 60 * 1000;
        const firstDate = new Date(initialDate);
        const secondDate = new Date(finalDate);

        const differenceBetweenDates = Math.round(Math.abs((firstDate - secondDate) / oneDay));

        setGoals(differenceBetweenDates);
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
                <Formik
                    initialValues={{ title: '', description: '', artist: '', themes: [], dateInit: '', dateEnd: '', goal: 1 }}
                    validationSchema={FormValidator}
                    onSubmit={async (values, actions) => {
                        try {
                            calculateGoals();
                            console.log(values);
                        } catch (error) {
                            console.log(error);
                        }
                    }}
                >
                    {({ values, handleChange, handleSubmit, handleBlur, errors, touched }) => (
                        <>
                            <Text style={styles.errorMessage}>{touched.title && errors.title}</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Nome do Kadu"
                                onBlur={handleBlur('title')}
                                onChangeText={handleChange('title')}
                                value={values.title}

                            />
                            <Text style={styles.errorMessage}>{touched.description && errors.description}</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Descrição"
                                secureTextEntry={true}
                                onChangeText={handleChange('description')}
                                onBlur={handleBlur('description')}
                                value={values.description}
                                multiline
                            />

                            <View style={styles.showCase}>
                                <Button textButton="inicio" functionButton={showInitialDatepicker} />
                                <Button textButton="Fim" functionButton={showFinalDatepicker} />
                            </View>

                            <Text style={localStyle.infoPrincipal}>{initialDate.toDateString()} - {finalDate.toDateString()}</Text>

                            {showInitialDate && <DateTimePicker value={initialDate} mode={initialDateMode} display="default" onChange={onInitialDateChange} />}
                            {showFinalDate && <DateTimePicker value={finalDate} mode={finalDateMode} display="default" onChange={onFinalDateChange} />}

                            <Text style={styles.subTitle}>Temas</Text>

                            <View style={styles.showCase}>
                                {themes.map(item => <Kadu key={item._id} kaduName={item.title} kaduFunction={handleChange('themes')} />)}
                            </View>

                            <Button textButton="ver mais" />
                            <Text style={localStyle.infoPrincipal}>{values.title}</Text>
                            <Text style={localStyle.infoPrincipal}>{values.goal}</Text>
                            <Text style={localStyle.infoPrincipal}>{initialDate.toDateString()} - {finalDate.toDateString()}</Text>
                            <Text style={localStyle.infoSecundaria}>{values.description}</Text>
                            <Button textButton="entrar" functionButton={handleSubmit} />
                        </>
                    )}
                </Formik>

            </View>

            <Text style={localStyle.infoPrincipal}>Nome do Kadu</Text>
            <Text style={localStyle.infoPrincipal}>{goals}</Text>
            <Text style={localStyle.infoPrincipal}>{initialDate.toDateString()} - {finalDate.toDateString()}</Text>
            <Text style={localStyle.infoSecundaria}>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Text>

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

            <Text></Text>
            <Button textButton="finalizar" functionButton={() => { }} />
            <Text></Text>

        </ScrollView>
    );
}

export default CreateKadu;