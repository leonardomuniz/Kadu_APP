import React, { useState, useContext } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Formik } from 'formik';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { UserContext } from '../../src/context/User';
import { FormValidator } from '../../src/helpers/FormValidator';
import styles from '../../src/styles/GlobalStyle';
import api from '../../src/services/api';
import Button from '../../src/components/Button';


function Login({ navigation }) {
    const [error, setError] = useState('');
    const { setUserInfos } = useContext(UserContext);

    return (
        <View style={styles.staticBody}>
            <View style={styles.logo} />
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={FormValidator}
                onSubmit={async (values, actions) => {
                    try {
                        const { data } = await api.post('user/auth', values);
                        const userInfo = { token: data.token, name: data.data.name, email: data.data.email }

                        api.defaults.headers.Authorization = `${data.token}`;

                        const setAuth = async (infos) => {
                            try {
                                await AsyncStorage.setItem('userInfo', JSON.stringify(infos));
                                setUserInfos(infos);
                            } catch (error) {
                                console.log(error);
                            };
                        };

                        actions.resetForm();

                        setAuth(userInfo);
                        setError('');
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