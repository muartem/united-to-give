'use client'

import Button from '@/components/ui/button'
import {yupResolver} from '@hookform/resolvers/yup'
import {useTranslations} from 'next-intl'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const schema = (t) => yup.object().shape({
	fullName: yup.string().required(t('required')),
	email: yup.string().email(t('emailER')).required(t('required')),
	dobYear: yup.string().required(),
	dobMonth: yup.string().required(),
	dobDay: yup.string().required(),
	phone: yup.string().matches(phoneRegExp, t('numberER')).required(t('required')),
	hasDonated: yup.string().required(t('required')),
	availableTime: yup.string().required(t('required')),
	agreeReminders: yup.boolean(),
	agreeTerms: yup.boolean().oneOf([true], t('termsER')),
})

const JoinDonationForm = () => {
	const t = useTranslations('home.form')

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
				t('title')
				<span className="text-primary"> t('groupForm')</span>
			</h2>
			<p className="b2 text-logo-gray mb-4 md:mb-8">
				t('desc')
			</p>

			<div>
				<label>t('fName')<span className="text-primary">*</span></label>
				<input {...register('fullName')} className="input" placeholder="t('fnPH')"/>
				<p className="error">{errors.fullName?.message}</p>
			</div>

			<div>
				<label>t('email')<span className="text-primary">*</span></label>
				<input {...register('email')} className="input" placeholder="t('emailPH')"/>
				<p className="error">{errors.email?.message}</p>
			</div>

			<div>
				<label>t('dob')<span className="text-primary">*</span></label>
				<div className="flex gap-2">
					<select {...register('dobYear')} className="input">
						<option value="">t('yyyy')</option>
						{Array.from({length: 100}, (_, i) => (
							<option key={i} value={2025 - i}>{2025 - i}</option>
						))}
					</select>
					<select {...register('dobMonth')} className="input">
						<option value="">t('mm')</option>
						{[...Array(12)].map((_, i) => (
							<option key={i + 1} value={(i + 1).toString().padStart(2, '0')}>
								{(i + 1).toString().padStart(2, '0')}
							</option>
						))}
					</select>
					<select {...register('dobDay')} className="input">
						<option value="">t('dd')</option>
						{[...Array(31)].map((_, i) => (
							<option key={i + 1} value={(i + 1).toString().padStart(2, '0')}>
								{(i + 1).toString().padStart(2, '0')}
							</option>
						))}
					</select>
				</div>
			</div>

			<div>
				<label>t('number')<span className="text-primary">*</span></label>
				<input {...register('phone')} className="input" placeholder="+1"/>
				<p className="error">{errors.phone?.message}</p>
			</div>

			<div>
				<label>t('donated')<span className="text-primary">*</span></label>
				<select {...register('hasDonated')} className="input">
					<option value="">Select the answer</option>
					<option value="yes">t('yes')</option>
					<option value="no">t('no')</option>
				</select>
				<p className="error">{errors.hasDonated?.message}</p>
			</div>

			<div>
				<label>t('time')<span className="text-primary">*</span></label>
				<select {...register('availableTime')} className="input">
					<option value="">Select the answer</option>
					<option value="morning">Morning</option>
					<option value="afternoon">Afternoon</option>
					<option value="evening">Evening</option>
				</select>
				<p className="error">{errors.availableTime?.message}</p>
			</div>

			<div className="space-y-2">
				<label className="flex gap-2">
					<input type="checkbox" {...register('agreeReminders')} />
					<span>t('reminders')</span>
				</label>
				<label className="flex gap-2">
					<input type="checkbox" {...register('agreeTerms')} />
					<span>t('terms')</span>
				</label>
				<p className="error">{errors.agreeTerms?.message}</p>
			</div>

			<Button type="submit" classNames="w-full">
				t('submit')
			</Button>
		</form>
	)
}

export default JoinDonationForm
