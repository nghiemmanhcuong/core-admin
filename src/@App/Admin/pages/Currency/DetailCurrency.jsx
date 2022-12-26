import React, { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import AdminContentPage from '../../components/Layout/AdminContentPage'
import ListCurrencyProvider from './ListCurrencyProvider'
import { ROUTER_ADMIN, TRANSLATE_ADMIN } from '@App/Admin/configs/constants'
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
import { errorMsg, successMsg } from '@Core/helper/Message'
import { currencyService } from '@App/Admin/services/currencyService'
import { useNavigate } from 'react-router-dom'
import { useAdminPageContext } from '@App/Admin/components/Provider/AdminPageProvider'
import { LoadingButton } from '@mui/lab'
import CoreRadioGroup from '@Core/components/Input/CoreRadioGroup'
import moment from 'moment'

const DetailCurrency = props => {
	const { t } = useTranslation(TRANSLATE_ADMIN.currency)
	const navigate = useNavigate()
	const { isEdit } = useAdminPageContext()
	const { currencyId, currencyData } = props
	const [changeImage, setChangeImage] = useState(false)

	const callbackChangeImage = childData => {
		setChangeImage(childData)
	}

	const {
		control,
		handleSubmit,
		formState: { isSubmitting, isDirty }
	} = useForm({
		mode: 'onTouched',
		defaultValues: {
			id: currencyData?.id ?? null,
			name: currencyData?.name ?? '',
			unit: currencyData?.unit ?? '',
			app_currency_explanation: currencyData?.app_currency_explanation ?? '',
			image: currencyData?.image ?? '',
			available_start: currencyData?.available_start ? new Date(currencyData?.available_start) : '',
			available_end: currencyData?.available_end ? new Date(currencyData?.available_end) : '',
			display: currencyData?.display ?? 0,
			author: currencyData?.author ?? '作成者名'
		},
		resolver: yupResolver(
			Yup.object({
				name: Yup.string().required(),
				unit: Yup.string().required(),
				app_currency_explanation: Yup.string()
			})
		)
	})

	const onSubmit = handleSubmit(async data => {
		try {
			if (isEdit) {
				const formData = new FormData()
				formData.append('name', data?.name)
				formData.append('unit', data?.unit)
				formData.append('app_currency_explanation', data?.app_currency_explanation)
				if (changeImage) {
					formData.append('image', data?.image)
				}
				formData.append('available_start', moment(data?.available_start).format('YYYY-MM-DD'))
				formData.append('available_end', moment(data?.available_end).format('YYYY-MM-DD'))
				formData.append('display', data?.display)
				formData.append('author', data?.author)
				formData.append('id', currencyId)
				formData.append('_method', 'PUT')

				await currencyService.updateCurrency(formData, currencyId)
			} else {
				const formData = new FormData()
				formData.append('name', data?.name)
				formData.append('unit', data?.unit)
				formData.append('app_currency_explanation', data?.app_currency_explanation)
				if (changeImage) {
					formData.append('image', data?.image)
				}
				formData.append('available_start', moment(data?.available_start).format('YYYY-MM-DD'))
				formData.append('available_end', moment(data?.available_end).format('YYYY-MM-DD'))
				formData.append('display', data?.display)
				formData.append('author', data?.author)

				await currencyService.save(formData)
			}
			navigate(ROUTER_ADMIN.currency.list)
			successMsg(isEdit ? t('common:message.edit_success') : t('common:message.create_success'))
		} catch (error) {
			errorMsg(error)
		}
	})

	return (
		<form onSubmit={onSubmit}>
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
						label="通貨単位名"
						control={control}
						name="unit"
						placeholder="Default input"
						size="small"
						className="mb-16 sm:mb-20"
						required
					/>
					<AdminInput
						label={t('edit.form.label.description')}
						control={control}
						name="app_currency_explanation"
						placeholder="Default input"
						size="small"
						className="mb-16 sm:mb-20"
						minRows={5}
						multiline
					/>

					<AdminInputUpload
						label={t('edit.form.label.image')}
						parentCallback={callbackChangeImage}
						control={control}
						name="image"
						size="small"
						className="w-full sm:w-2/3 mb-16 sm:mb-20"
						helperText
					/>

					<Box className="flex flex-wrap sm:flex-nowrap mb-20">
						<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
							<Typography variant="h3" color="primary" className="flex items-center">
								{/* <Typography className="text-black py-4 px-16 rounded-4 bg-yellow mx-8">必須</Typography> */}
								{t('edit.form.label.time')}
							</Typography>
						</Box>
						<Box className="w-full sm:w-2/3 flex">
							<CoreDatePicker
								control={control}
								size="small"
								fullWidth
								variant="outlined"
								placeholder="Choose..."
								name="available_start"
								className="w-full"
							/>
							<Typography variant="h3" color="primary" className="mx-8 self-center">
								{t('edit.form.label.to')}
							</Typography>
							<CoreDatePicker
								control={control}
								size="small"
								fullWidth
								variant="outlined"
								placeholder="Choose..."
								name="available_end"
								className="w-full"
							/>
						</Box>
					</Box>

					<Box className="flex flex-wrap sm:flex-nowrap mb-16 sm:mb-20">
						<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
							<Typography variant="h3" color="primary" className="flex items-center">
								{/* <Typography className="text-black py-4 px-16 rounded-4 bg-yellow mx-8">必須</Typography>{' '} */}
								{t('edit.form.label.hide/show')}
							</Typography>
						</Box>
						<Box className="flex w-full sm:w-2/3 pl-[15px] border-grey-400 border-1 rounded-4">
							<CoreRadioGroup
								control={control}
								name="display"
								options={[
									{ key: '0', value: 0, label: t('edit.form.check_box.label.representation') },
									{ key: '1', value: 1, label: t('edit.form.check_box.label.express') }
								]}
								row
								className="flex-row"
							/>
						</Box>
					</Box>

					<Box className="flex flex-wrap sm:flex-nowrap items-center mb-20">
						<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
							<Typography variant="h3" color="primary" className="flex items-center">
								{/* <Typography className="text-black py-4 px-16 rounded-4 bg-yellow mx-8">必須</Typography>{' '} */}
								{t('edit.form.label.creator')}
							</Typography>
						</Box>
						<Box className="w-full sm:w-2/3 flex flex-nowrap">
							<AdminInput
								control={control}
								name="author"
								size="small"
								className="w-full mr-12"
								classNameField="bg-grey-300"
								// readOnly
							/>
							<Button
								onClick={() => navigate(ROUTER_ADMIN.currency.list)}
								variant="contained"
								color="error"
								className="mr-10 h-32"
								size="small"
							>
								削除
							</Button>
							<LoadingButton
								loading={isSubmitting}
								disabled={isEdit ? false : !isDirty}
								variant="contained"
								className="bg-blue text-white h-32"
								size="small"
								type="submit"
							>
								登録
							</LoadingButton>
						</Box>
					</Box>
				</Box>
			</Box>
		</form>
	)
}

export default React.memo(DetailCurrency)
