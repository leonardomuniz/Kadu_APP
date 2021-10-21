import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Modal } from 'react-native';
import styles from './estilo';
import { Formik } from 'formik';
import * as yup from 'yup';
import api from '../../services/api';


const FormValidator = yup.object({
    name: yup.string().required('O nome é obrigatório'),
    surname: yup.string().required('O sobrenome é obrigatório'),
    email: yup.string().email('O email precisa ser um email valido').required('O email é obrigatório'),
    password: yup.string().required('A senha é obrigatório').min(6, 'A senha precisa ter pelo menos 6 caracteres')
})

function CadastrarUsuario({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <ScrollView style={styles.corpo}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Seu cadastro foi: <Text style={styles.success}>realizado com sucesso!</Text></Text>
                    </View>
                </View>
            </Modal>
            <Text style={styles.titulo}>Criar Conta</Text>
            <Formik
                initialValues={{ name: '', surname: '', email: '', password: '', bio: '', photo: '', conquest: '' }}
                validationSchema={FormValidator}
                onSubmit={async (values, actions) => {
                    try {
                        //api.post('/user', values);
                        setModalVisible(true);
                        setTimeout(() => {
                            setModalVisible(false);
                            navigation.goBack();
                        }, 4000);

                    } catch (erro) {
                        console.log(erro);
                    };
                    console.log(values);

                }}
            >
                {({ values, handleChange, handleSubmit, handleBlur, errors, touched }) => (
                    <View style={styles.wrap}>
                        <Text style={styles.erro}>{touched.name && errors.name}</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Nome"
                            onBlur={handleBlur('name')}
                            onChangeText={handleChange('name')}
                            value={values.name}
                        />
                        <Text style={styles.erro}>{touched.surname && errors.surname}</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Sobrenome"
                            onBlur={handleBlur('surname')}
                            onChangeText={handleChange('surname')}
                            value={values.surname}
                        />
                        <Text style={styles.erro}>{touched.email && errors.email}</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="E-mail"
                            onBlur={handleBlur('email')}
                            onChangeText={handleChange('email')}
                            value={values.email}
                        />
                        <Text style={styles.erro}>{touched.password && errors.password}</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Senha"
                            onBlur={handleBlur('password')}
                            secureTextEntry={true}
                            onChangeText={handleChange('password')}
                            value={values.password}
                        />
                        <Text style={styles.erro}>{touched.bio && errors.bio}</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Bio"
                            onBlur={handleBlur('bio')}
                            onChangeText={handleChange('bio')}
                            value={values.bio}
                            multiline
                        />

                        <TouchableOpacity style={styles.botao} onPress={handleSubmit} >
                            <Text style={styles.botao_texto}>cadastrar</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </Formik>

        </ScrollView>
    );
}

export default CadastrarUsuario;