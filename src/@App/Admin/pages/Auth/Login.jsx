import Cookies from 'js-cookie'
import Yup from '@Core/helper/Yup'
import { useRequest } from 'ahooks'
import React, { useEffect } from 'react'
import { LoadingButton } from '@mui/lab'
import { useForm } from 'react-hook-form'
import { Paper, Typography } from '@mui/material'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'

import CoreInput from '@Core/components/Input/CoreInput'
import { ROUTER_ADMIN } from '@App/Admin/configs/constants'
import { authService } from '@App/Admin/services/authService'
import { errorMsg, successMsg } from '@Core/helper/Message'

const FontTitle = ({ variant = 'h1', title = '' }) => {
	return (
		<Typography className="text-[30px]" variant={variant}>
			{title}
		</Typography>
	)
}
const renderFont = () => {
	return <FontTitle variant="h2" title="TraVeLo CMS" />
}

const Login = () => {
	const navigate = useNavigate()

	// set XSRF-TOKEN to cookies
	const {
		data: csrfData,
		run: getCSRFData,
		loading: loadingCSRFData
	} = useRequest(authService.csrf, {
		manual: true
	})

	useEffect(() => {
		getCSRFData()
	}, [])

	const renderColor = () => {
		return (
			<LoadingButton
				loading={isSubmitting}
				variant="contained"
				className="text-18 py-8 px-20 rounded-4 font-bold bg-[#007bff] mt-20"
				type="submit"
			>
				ログイン
			</LoadingButton>
		)
	}
	const {
		control,
		handleSubmit,
		formState: { isSubmitting }
	} = useForm({
		mode: 'onTouched',
		defaultValues: {
			username: '',
			password: ''
		},
		resolver: yupResolver(
			Yup.object({
				username: Yup.string().required().email().min(3),
				password: Yup.string().required()
			})
		)
	})

	const onSubmit = handleSubmit(async data => {
		try {
			const dataRequest = {
				mail: data.username,
				password: data.password
			}
			const res = await authService.login(dataRequest)
			await Cookies.set('CMS_ACCOUNT_INFO', JSON.stringify(res?.account_info))
			await navigate(ROUTER_ADMIN.homePage)
		} catch (e) {
			errorMsg('Invalid email or password')
			console.log('============= e', e)
		}
	})

	const renderFormLogin = () => {
		return (
			<form onSubmit={onSubmit} className="text-center px-10 pt-10">
				<CoreInput
					className="py-10 flex-col"
					control={control}
					name="username"
					label="メールアドレス"
					labelStyle="mb-8"
					required
					showTextRequired={false}
					placeholder="メールアドレスを入力してください"
				/>
				<CoreInput
					className="py-10 flex-col"
					type="password"
					control={control}
					name="password"
					label="パスワード"
					labelStyle="mb-8"
					required
					showTextRequired={false}
					placeholder="パスワードを入力してください"
				/>
				{renderColor()}
			</form>
		)
	}
	return (
		<div>
			<div className="text-center grid grid-flow-row-dense grid-cols-3 pt-40">
				<div className="col-span-3 sm:col-span-1 sm:col-start-2">
					<Paper className="max-w-md p-24 m-12 shadow-none">
						{renderFont()}
						{renderFormLogin()}
					</Paper>
				</div>
			</div>
		</div>
	)
}

export default Login
