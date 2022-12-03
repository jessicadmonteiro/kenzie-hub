import * as yup from "yup"

export const loginSchema = yup.object().shape({
    email: yup.string().required("O e-mail é obrigatório!").email("É necessário fornecer um e-mail."),

    password: yup.string().required("A senha é obrigatória!")

})