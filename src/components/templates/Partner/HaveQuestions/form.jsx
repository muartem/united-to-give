'use client'

import Button from '@/components/ui/button'
import {yupResolver} from '@hookform/resolvers/yup'
import {useTranslations} from 'next-intl'
import {useForm} from 'react-hook-form'
import schema from './schema'

const ContactForm = () => {
  const t = useTranslations('partner.haveQ.form')

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema(t)),
  })

  const onSubmit = (data) => {
    console.log(data)
    // send to API
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}
      className="b2 bg-white p-6 md:p-10 rounded-xl md:rounded-3xl flex flex-col gap-3 w-full"
    >
      <h2 className="text-light-black">
        {t('title')}
      </h2>
      <p className="b2 text-logo-gray mb-4 md:mb-8">
        {t('desc')}
      </p>
      <div>
        <label>{t('fName')}<span className="text-primary">*</span></label>
        <input {...register('fullName')} className="input" placeholder={t('fnPH')}/>
        <p className="error">{errors.fullName?.message}</p>
      </div>

      <div>
        <label>{t('email')}<span className="text-primary">*</span></label>
        <input {...register('email')} className="input" placeholder={t('emailPH')}/>
        <p className="error">{errors.email?.message}</p>
      </div>

      <div>
        <label>{t('number')}<span className="text-primary">*</span></label>
        <input {...register('phone')} className="input" placeholder="+1"/>
        <p className="error">{errors.phone?.message}</p>
      </div>

      <div>
        <label>{t('company')}</label>
        <input {...register('company')} className="input" placeholder={t('companyPH')}/>
        {/*<p className="error">{errors.fullName?.message}</p>*/}
      </div>

      <div>
        <label>{t('message')}</label>
        <input {...register('message')} className="input" placeholder={t('messagePH')}/>
        {/*<p className="error">{errors.fullName?.message}</p>*/}
      </div>

      <div className="b3 text-black-text space-y-2 mt-4">
        <label className="flex gap-2">
          <input type="checkbox" {...register('agreeReminders')} />
          <span>{t('reminders')}</span>
        </label>
        <label className="flex gap-2">
          <input type="checkbox" {...register('agreeTerms')} />
          <span>{t('terms')}</span>
        </label>
        <p className="error">{errors.agreeTerms?.message}</p>
      </div>

      <Button type="submit" classNames="w-full">
        {t('submit')}
      </Button>
    </form>
  )
}

export default ContactForm
