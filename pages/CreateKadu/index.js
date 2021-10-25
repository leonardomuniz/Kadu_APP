import React, { useState } from 'react';
import { ScrollView, Text, View, TextInput, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Formik } from 'formik';
import * as yup from 'yup';

import localStyle from './style';
import styles from '../../src/styles/GlobalStyle';
import Button from '../../src/components/Button';
import Kadu from '../../src/components/Kadu';
import Tag from '../../src/components/Tag';



function CreateKadu({ navigation }) {
    const [start, setStart] = useState(new Date());
    const [end, setEnd] = useState(new Date());
    const [inicio, setInicio] = useState(false);
    const [fim, setFim] = useState(false);

    const FormValidator = yup.object({
        email: yup.string().email('O email precisa ser um email valido').required('O email é obrigatório'),
        password: yup.string().required('A senha é obrigatório').min(6, 'A senha precisa ter pelo menos 6 letras')
    });


    function mudarInicio(event, selectedDate) {
        setInicio(Platform.OS === 'ios');
        setStart(selectedDate);
    };

    function mudarFim(event, selectedDate) {
        setFim(Platform.OS === 'ios');
        setEnd(selectedDate);
    };


    function inicioKadu() {
        setInicio(true);
    };

    function fimKadu() {
        setFim(true);
    };



    return (
        <ScrollView style={styles.scrollBody}>
            {inicio && <DateTimePicker value={new Date()} onChange={mudarInicio} />}
            {fim && <DateTimePicker value={new Date()} onChange={mudarFim} />}

            <Text style={styles.title}>Criar Kadu</Text>

            <Text style={styles.subTitle}>Informações</Text>

            <View style={styles.staticBody}>
                <Formik
                    initialValues={{ title: '', description: '' }}
                    validationSchema={FormValidator}
                    onSubmit={async (values, actions) => {
                        try {


                            actions.resetForm();

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
                            <Button textButton="entrar" functionButton={handleSubmit} />
                        </>
                    )}
                </Formik>

            </View>


            <Button textButton="inicio" functionButton={inicioKadu} />
            <Button textButton="Fim" functionButton={fimKadu} />


            <Text style={styles.subTitle}>Temas</Text>

            <View style={styles.showCase}>
                <Kadu kaduName="Nome do Kadu" kaduFunction={() => navigation.navigate('mostrarKadu')} />
                <Kadu kaduName="Nome do Kadu" kaduFunction={() => navigation.navigate('mostrarKadu')} />
                <Kadu kaduName="Nome do Kadu" kaduFunction={() => navigation.navigate('mostrarKadu')} />
                <Kadu kaduName="Nome do Kadu" kaduFunction={() => navigation.navigate('mostrarKadu')} />
            </View>

            <Button textButton="ver mais" />

            <Text style={localStyle.infoPrincipal}>Nome do Kadu</Text>
            <Text style={localStyle.infoPrincipal}>{start.toDateString()} - {end.toDateString()}</Text>
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
            <Button textButton="finalizar" />
            <Text></Text>

        </ScrollView>
    );
}

export default CreateKadu;