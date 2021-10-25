import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from '../../styles/GlobalStyle';
import api from '../../services/api';
import Button from '../../components/Button';


function Login({ navigation }) {
    const [error, setError] = useState('');
    const [userInfo, setUserInfo] = useState({});

    const FormValidator = yup.object({
        email: yup.string().email('O email precisa ser um email valido').required('O email é obrigatório'),
        password: yup.string().required('A senha é obrigatório').min(6, 'A senha precisa ter pelo menos 6 letras')
    })


    async function isAuth(){
        const userInfo = JSON.parse(await AsyncStorage.getItem('userCredentials'));
        setUserInfo(userInfo);
    }

    isAuth()

    return (
        <View style={styles.staticBody}>
            <View style={styles.logo} />
            <Text>{userInfo.name}</Text>

            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={FormValidator}
                onSubmit={async (values, actions) => {
                    try {
                        const { data } = await api.post('user/auth', values);
                        const usertoken = data.token;
                        const userInfo = data.data;

                        api.defaults.headers.Authorization = `${data.token}`;

                        const setAuth = async (auth, infos) => {
                            try {
                                const jsonValue = JSON.stringify(infos);

                                await AsyncStorage.setItem('authToken', auth);
                                await AsyncStorage.setItem('userCredentials', jsonValue);
                            } catch (error) {
                                console.log(error);
                            };
                        };

                        actions.resetForm();

                        setAuth(usertoken, userInfo);
                        setError('');

                        navigation.navigate('home');
                    } catch (error) {
                        console.log(error);
                        setError('O e-mail ou senha estão incorretas !');
                    }
                }}
            >
                {({ values, handleChange, handleSubmit, handleBlur, errors, touched }) => (
                    <>
                        <Text style={styles.errorMessage}>{touched.email && errors.email}</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="E-mail"
                            onBlur={handleBlur('email')}
                            onChangeText={handleChange('email')}
                            value={values.email}

                        />
                        <Text style={styles.errorMessage}>{touched.password && errors.password}</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Senha"
                            secureTextEntry={true}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                        />
                        <Text style={styles.errorMessage}>{error}</Text>
                        <Button textButton="entrar" functionButton={handleSubmit} />
                    </>
                )}
            </Formik>

            <Text>Ainda não tenho <Text style={{ color: '#6732FF' }} onPress={() => navigation.navigate('cadastro')}>conta !</Text> </Text>
        </View>
    );
}

export default Login;