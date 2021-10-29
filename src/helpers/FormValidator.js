import * as yup from 'yup';

export const FormValidator = yup.object({
    email: yup.string().email('O email precisa ser um email valido').required('O email é obrigatório'),
    password: yup.string().required('A senha é obrigatório').min(6, 'A senha precisa ter pelo menos 6 letras')
})