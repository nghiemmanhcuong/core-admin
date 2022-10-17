import { Button, Card, Paper, Typography, TextField} from '@mui/material'
import { green } from '@mui/material/colors'
import { Box } from '@mui/system'
import React from 'react'
import Yup from '@Core/helper/Yup'
import CoreInput from '@Core/components/Input/CoreInput'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
const FontTitle = ({ variant = 'h1', title = '' }) => {
	return <Typography variant={variant}>{title}</Typography>
}
const renderFont = () => {
	return <FontTitle variant="h2" title="TraVeLo CMS" />
}

const Login = () => {
	const renderColor = () => {
		return <Button variant="contained" color="primary" style={{ background: "#007bff" }}>ログイン</Button>
	}
	const { control } = useForm({
		mode: 'onTouched',
		defaultValues: {
			username: '',
			password: ''
		},
		resolver: yupResolver(
			Yup.object({
				username: Yup.string().required(),
				password: Yup.string().required()
			})
		)
	})
	
	const renderFormLogin = () => {
		return (
				<form className="text-center px-10 pt-10">
					<CoreInput
						className="py-10"
						control={control}
						name="username"
						label="メールアドレス"
						required
						placeholder="メールアドレスを入力してください"
					/>
					<CoreInput
						className="py-10"
						type='password'
						control={control}
						name="password"
						label="パスワード"
						required
						placeholder="パスワードを入力してください"
					/>
				</form>
		)
	}
	return (
		<div>
			<div className="text-center grid grid-flow-row-dense grid-cols-3 pt-40">
				<div className="col-span-3 sm:col-span-1 sm:col-start-2">
					<Paper className="max-w-md p-24 m-12">
						{ renderFont() }
						{ renderFormLogin() }
						{ renderColor() }
					</Paper>
				</div>
			</div>
		</div>
		
	)
}

export default Login