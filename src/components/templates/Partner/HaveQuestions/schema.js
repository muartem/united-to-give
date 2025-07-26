import * as yup from 'yup'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const schema = (t) => yup.object().shape({
  fullName: yup.string().required(t('required')),
  email: yup.string().email(t('emailER')).required(t('required')),
  phone: yup.string().matches(phoneRegExp, t('numberER')).required(t('required')),
  company: yup.string(),
  message: yup.string(),
  agreeReminders: yup.boolean(),
  agreeTerms: yup.boolean().oneOf([true], t('termsER')),
})

export default schema
