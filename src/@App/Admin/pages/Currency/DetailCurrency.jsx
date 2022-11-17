import React, { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import AdminContentPage from '../../components/Layout/AdminContentPage'
import ListCurrencyProvider from './ListCurrencyProvider'
import { TRANSLATE_ADMIN } from '@App/Admin/configs/constants'
import { Button, Paper, Typography, TextField, Box, Card } from '@mui/material'
import CoreInput from '@Core/components/Input/CoreInput'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Yup from '@Core/helper/Yup'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import TableBody from '@mui/material/TableBody'
import FormAutocomplete from '@App/Admin/components/Form/FormAutocomplete'
import Grid from '@mui/material/Grid'
import CoreDatePicker from '@Core/components/Input/CoreDatePicker'
import AdminInputUpload from '@App/Admin/components/Input/AdminInputUpload'
import CoreCheckbox from '@Core/components/Input/CoreCheckbox'
import AdminInput from '@App/Admin/components/Input/AdminInput'

const FontTitle = ({ variant = 'h1', title = 'アプリ内通貨詳細' }) => {
	return (
		<Typography variant={variant} className="text-primary">
			{title}
		</Typography>
	)
}
function createData(no, name, fat, carbs, protein, carbs1, protein1) {
	return { no, name, fat, carbs, protein, carbs1, protein1 }
}

const contentCurrency = () => {
	const { t } = useTranslation(TRANSLATE_ADMIN.currency)
	const { control } = useForm({
		mode: 'onTouched',
		defaultValues: {
			firstname: '',
			checkbox: false
		},
		resolver: yupResolver(
			Yup.object({
				name: Yup.string().required(),
				description: Yup.string().required(),
				from_date: Yup.mixed().nullable().required(),
				to_date: Yup.mixed().nullable().required(),
				creator: Yup.string().required()
			})
		)
	})
	return (
		<form>
			<Box>
				<Box sx={{ padding: 2 }} className="max-w-lg mx-auto">
					<AdminInput
						label={t('edit.form.label.id')}
						control={control}
						name="id"
						placeholder="Default input"
						size="small"
						classNameField="bg-grey-300"
						className="mb-16 sm:mb-20"
						readOnly
					/>
					<AdminInput
						label={t('edit.form.label.name')}
						control={control}
						name="name"
						placeholder="Default input"
						size="small"
						className="mb-16 sm:mb-20"
						required
					/>

					<AdminInput
						label={t('edit.form.label.description')}
						control={control}
						name="description"
						placeholder="Default input"
						size="small"
						className="mb-16 sm:mb-20"
						minRows={5}
						multiline
						required
					/>

					<AdminInputUpload
						label={t('edit.form.label.image')}
						control={control}
						name="image"
						size="small"
						className="w-full sm:w-2/3 mb-16 sm:mb-20"
						helperText
						required
					/>

					<Box className="flex flex-wrap sm:flex-nowrap mb-20">
						<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
							<Typography variant="h3" color="primary" className="flex items-center">
								<Typography className="text-black py-4 px-16 rounded-4 bg-yellow mx-8">必須</Typography>{' '}
								{t('edit.form.label.time')}
							</Typography>
						</Box>
						<Box className="w-full sm:w-2/3 flex">
							<FormAutocomplete
								control={control}
								size="small"
								fullWidth
								variant="outlined"
								placeholder="Choose..."
								name="from_date"
								className="w-full"
							/>
							<Typography variant="h3" color="primary" className="mx-8 self-center">
								{t('edit.form.label.to')}
							</Typography>
							<FormAutocomplete
								control={control}
								size="small"
								fullWidth
								variant="outlined"
								placeholder="Choose..."
								name="to_date"
								className="w-full"
							/>
						</Box>
					</Box>

					<Box className="flex flex-wrap sm:flex-nowrap mb-16 sm:mb-20">
						<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
							<Typography variant="h3" color="primary" className="flex items-center">
								<Typography className="text-black py-4 px-16 rounded-4 bg-yellow mx-8">必須</Typography>{' '}
								{t('edit.form.label.hide/show')}
							</Typography>
						</Box>
						<Box className="flex w-full sm:w-2/3 pl-[15px] border-grey-400 border-1 rounded-4">
							<CoreCheckbox
								control={control}
								name="checkbox1"
								label={t('edit.form.check_box.label.express')}
							/>
							<CoreCheckbox
								control={control}
								name="checkbox2"
								label={t('edit.form.check_box.label.representation')}
								className="ml-20"
							/>
						</Box>
					</Box>

					<Box className="flex flex-wrap sm:flex-nowrap items-center mb-20">
						<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
							<Typography variant="h3" color="primary" className="flex items-center">
								<Typography className="text-black py-4 px-16 rounded-4 bg-yellow mx-8">必須</Typography>{' '}
								{t('edit.form.label.creator')}
							</Typography>
						</Box>
						<Box className="w-full sm:w-2/3 flex flex-nowrap">
							<AdminInput
								control={control}
								name="creator"
								size="small"
								className="w-full mr-12"
								classNameField="bg-grey-300"
								readOnly
							/>
							<Button variant="contained" color="error" className="ml-auto h-32">
								{t('edit.form.btn.delete')}
							</Button>
							<Button variant="contained" className="ml-[10px] bg-blue h-32">
								{t('edit.form.btn.register')}
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</form>
	)
}
const DetailCurrency = props => {
	const { t } = useTranslation(TRANSLATE_ADMIN.course)
	return contentCurrency()
}

export default React.memo(DetailCurrency)
