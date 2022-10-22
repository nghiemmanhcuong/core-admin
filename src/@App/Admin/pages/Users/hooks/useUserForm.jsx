/*
 * Created Date: 23-10-2022, 12:26:54 am
 * Author: Peter
 * Email: phantrung696@gmail.com
 * -----
 * Last Modified:
 * Modified By:
 * -----
 * Copyright (c) 2022 PROS+ Group , Inc
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	----------------------------------------------------------
 */

import { errorMsg, successMsg } from '@Core/helper/Message'
import Yup, { yupResolver } from '@Core/helper/Yup'
import { useForm } from 'react-hook-form'

export const useUserForm = () => {
	const methodForm = useForm({
		mode: 'onTouched',
		defaultValues: {
			email: '',
			firstname: '',
			lastname: '',
			gender: '',
			address: '',
			image: ''
		},
		resolver: yupResolver(
			Yup.object({
				email: Yup.string().required().email(),
				firstname: Yup.string().required(),
				lastname: Yup.string().required(),
				image: Yup.string().required()
			})
		)
	})

	const onSubmit = methodForm.handleSubmit(
		async data => {
			try {
				console.log('============= data', data)
				successMsg('Create user successfully')
			} catch (e) {
				errorMsg(e)
			}
		},
		error => console.log('============= error', error)
	)

	return { methodForm, onSubmit }
}
