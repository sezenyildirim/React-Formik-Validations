import * as yup from 'yup';

const validations = yup.object().shape({
    email: yup.string().email('Geçerli bir email adresi giriniz.').required('Bu alanı doldurmak zorunludur.'),
    password: yup.string().min(5, 'Parolanız en az 5 karakter olmalıdır.').required(),
    passwordConfirm: yup.string().oneOf([yup.ref('password')], 'Paralolar uyuşmuyor.').required(),


  });
  export default validations;