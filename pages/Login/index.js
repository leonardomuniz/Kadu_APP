import React, {useState, createContext} from 'react';
import { View, Text, TextInput } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';


import styles from '../../styles/GlobalStyle';
import api from '../../services/api';
import Button from '../../components/Button';

const FormValidator = yup.object({
    email: yup.string().email('O email precisa ser um email valido').required('O email é obrigatório'),
    password: yup.string().required('A senha é obrigatório').min(6, 'A senha precisa ter pelo menos 6 letras')
})


function Login({ navigation }) {
    const [error, setError] = useState('');

    return (
        <View style={styles.staticBody}>
            <View style={styles.logo} />    
           

            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={FormValidator}
                onSubmit={async (values, actions) => {
                    try {
                        const {data} = await api.post('user/auth', values);

                        api.defaults.headers.Authorization = `${data.token}`;

                        const token = data.token;
                        const AuthContext = createContext(token);
                       
                        console.log(`este é o token da requisição:            ${token}`);
                        console.log(AuthContext)
                        actions.resetForm();
                        setError('');
                        
                        //navigation.navigate('home');
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
                        <Button textButton="entrar" functionButton={handleSubmit}/>
                    </>
                )}
            </Formik>

            <Text>Ainda não tenho <Text style={{ color: '#6732FF' }} onPress={() => navigation.navigate('cadastro')}>conta !</Text> </Text>
        </View>
    );
}

export default Login;