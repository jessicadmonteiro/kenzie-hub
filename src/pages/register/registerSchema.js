import * as yup from "yup"

export const registerSchema = yup.object().shape({
    name: yup.string().required("O nome é obrigatório!").min(3,"O nome precisa de pelo menos 3 caracteres.").max(200, "O nome precisa ter no máximo 200 caracteres."),

    email: yup.string().required("O e-mail é obrigatório!").email("É necessário fornecer um e-mail."),

    password: yup.string().required("A senha é obrigatória!").matches(/(?=.*?[A-Z])/, "É necessário uma letra maiúscula.").matches(/(?=.*?[a-z])/, "É necessário uma letra minúscula.").matches(/(?=.*?[0-9])/, "É necessário um número.").matches(/(?=.*?[#?!@$%^&*-])/, "É necessário um caractere especial.").matches(/.{6,}/,"É necessário uma senha de no mínimo 6 caracteres"),

    passwordConfirmation: yup.string().required("É necessário a confirmação da senha.").oneOf([yup.ref("password"), null], "As senhas devem corresponder."),

    bio: yup.string().required("Informe sua Bio."),
    
    contact: yup.string().required("É obrigatório informar um contato!")

})