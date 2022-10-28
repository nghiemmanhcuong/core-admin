import React, { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { ROUTER_ADMIN, TRANSLATE_ADMIN } from '@App/Admin/configs/constants'
import { Button, Paper, Typography, TextField, Box, Card } from '@mui/material'
import CoreInput from '@Core/components/Input/CoreInput'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Yup from '@Core/helper/Yup'
import FormAutocomplete from '@App/Admin/components/Form/FormAutocomplete'
import CoreCheckbox from '@Core/components/Input/CoreCheckbox'
import CoreRadioGroup from '@Core/components/Input/CoreRadioGroup'
import Grid from '@mui/material/Grid'
import { errorMsg } from '@Core/helper/Message'
import AdminInput from '@App/Admin/components/Input/AdminInput'
import { useAdminPageContext } from '@App/Admin/components/Provider/AdminPageProvider'
import { useNavigate } from 'react-router-dom'
import CoreAutocomplete from '@Core/components/Input/CoreAutocomplete'
import { eventService } from '@App/Admin/services/eventService'
import { LoadingButton } from '@mui/lab'

const Tab1 = props => {
	const { t, eventData, isEdit } = useAdminPageContext()
	const navigate = useNavigate()

	console.log('============= eventData', eventData)

	const displayOptions = [
		{ value: '1', label: t('edit.form.check_box.label.display') },
		{ value: '2', label: t('edit.form.check_box.label.hidden') }
	]

	const categoryData = [
		{ id: 1, value: 1, name: t('edit.form.check_box.label.men_only') },
		{ id: 2, value: 2, name: t('edit.form.check_box.label.women_only') },
		{ id: 3, value: 3, name: t('edit.form.check_box.label.men_over_50s') },
		{ id: 4, value: 4, name: t('edit.form.check_box.label.all_participants') }
	]

	const tagDatas = [
		{ value: 1, label: '温泉あり' },
		{ value: 2, label: '景色最高' },
		{ value: 3, label: '秋におすすめ' },
		{ value: 4, label: '初心者におすすめ' },
		{ value: 5, label: '温泉あり' },
		{ value: 6, label: '景色最高' },
		{ value: 7, label: '秋におすすめ' },
		{ value: 8, label: '初心者におすすめ' },
		{ value: 9, label: '温泉あり' },
		{ value: 10, label: '景色最高' },
		{ value: 11, label: '秋におすすめ' },
		{ value: 12, label: '初心者におすすめ' }
	]

	const paymentMethodOptions = [
		{ value: '1', label: 'クレカ' },
		{ value: '2', label: 'QR' }
	]

	const methodForm = useForm({
		mode: 'onTouched',
		defaultValues: {
			id: eventData?.id ?? null,
			title: eventData?.title ?? '',
			type: eventData?.type ?? '',
			category: [],
			event_start: eventData?.event_start ?? '',
			event_end: eventData?.event_end ?? '',
			reception_start: eventData?.reception_start ?? '',
			reception_end: eventData?.reception_end ?? '',
			venue: eventData?.venue ?? '',
			entry_fee: eventData?.entry_fee ?? 0,
			tag: [],
			publish: eventData?.publish ?? '1',
			special_feature_id: eventData?.special_feature_id ?? 0,
			author: eventData?.author ?? '',
			sos_info: eventData?.sos_info ?? '',
			summary: eventData?.summary ?? '',
			challenge_image: 'xxxxxx'
		},
		resolver: yupResolver(
			Yup.object({
				title: Yup.string().required()
			})
		)
	})

	const {
		control,
		watch,
		formState: { isSubmitting, isDirty }
	} = methodForm

	console.log('============= watch()', watch('category'))
	console.log('============= watch()', watch())

	const onSubmit = methodForm.handleSubmit(async data => {
		try {
			console.log('============= data', data)

			await eventService.save(data)
			navigate(ROUTER_ADMIN.event.list)
		} catch (error) {
			errorMsg(error)
		}
	})

	return (
		<form onSubmit={onSubmit}>
			<Box className="max-w-lg mx-8 sm:mx-auto">
				<AdminInput
					control={control}
					label={t('edit.form.label.id')}
					name="id"
					placeholder="Default input"
					size="small"
					disabled
					// required
				/>

				<AdminInput
					control={control}
					label={t('edit.form.label.title')}
					name="title"
					placeholder="Default input"
					size="small"
					required
				/>

				<AdminInput
					control={control}
					name="description"
					label={t('edit.form.label.description')}
					placeholder="Default input"
					size="small"
					multiline
					rows={5}
					required
				/>

				<Box className="flex flex-wrap sm:flex-nowrap mb-16 sm:mb-20">
					<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
						<Typography variant="h3" color="primary" className="flex items-center mb-4">
							{t('edit.form.label.display')}
							<Typography className="text-error mx-8">必須</Typography>
						</Typography>
					</Box>
					<Box className="rounded-md w-full sm:w-2/3 pl-[15px]" sx={{ border: '1px solid #cccc' }}>
						<CoreRadioGroup
							className="flex-row"
							control={control}
							name="publish"
							options={displayOptions}
							row
						/>
					</Box>
				</Box>

				<Box className="flex flex-wrap sm:flex-nowrap mb-16 sm:mb-20">
					<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
						<Typography variant="h3" color="primary" className="flex items-center mb-4">
							{t('edit.form.label.category')}
							<Typography className="text-error mx-8">必須</Typography>
						</Typography>
					</Box>
					<Box
						className="rounded-md flex flex-wrap w-full sm:w-2/3 pl-[15px]"
						sx={{ border: '1px solid #cccc' }}
					>
						{categoryData.map((item, index) => {
							return (
								<CoreCheckbox
									key={index}
									control={control}
									name={`category[${index}]`}
									label={item.name}
								/>
							)
						})}
					</Box>
				</Box>

				<Box className="flex flex-wrap sm:flex-nowrap mb-16 sm:mb-20">
					<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
						<Typography variant="h3" color="primary" className="flex items-center mb-4">
							{t('edit.form.label.venue')}
							<Typography className="text-error mx-8">必須</Typography>
						</Typography>
					</Box>
					<Box className="rounded-md flex flex-wrap w-full sm:w-2/3">
						<FormAutocomplete
							control={control}
							name="venue"
							size="small"
							className="w-full sm:w-1/3"
							variant="outlined"
							placeholder="Choose..."
						/>

						<Box className="text-center w-full sm:w-1/3 mx-auto pt-10">
							<Typography variant="h3" color="primary" className="mb-4 ml-10">
								{t('edit.form.label.type')}
							</Typography>
						</Box>

						<FormAutocomplete
							control={control}
							name="type"
							size="small"
							className="w-full sm:w-1/3"
							variant="outlined"
							placeholder="Choose..."
						/>
					</Box>
				</Box>

				<Box className="flex flex-wrap sm:flex-nowrap mb-16 sm:mb-20">
					<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
						<Typography variant="h3" color="primary" className="flex items-center mb-4">
							{t('edit.form.label.period')}
							<Typography className="text-error mx-8">必須</Typography>
						</Typography>
					</Box>
					<Box className="rounded-md flex flex-wrap w-full sm:w-2/3">
						<FormAutocomplete
							control={control}
							name="event_start"
							size="small"
							className="w-full sm:w-1/3"
							variant="outlined"
							placeholder="Choose..."
						/>

						<Box className="text-center w-full sm:w-1/3 mx-auto pt-10">
							<Typography variant="h3" color="primary">
								{t('edit.form.label.to')}
							</Typography>
						</Box>

						<FormAutocomplete
							control={control}
							name="event_end"
							size="small"
							className="w-full sm:w-1/3"
							variant="outlined"
							placeholder="Choose..."
						/>
					</Box>
				</Box>

				<Box className="flex flex-wrap sm:flex-nowrap mb-16 sm:mb-20">
					<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
						<Typography variant="h3" color="primary" className="flex items-center mb-4">
							{t('edit.form.label.entry_period')}
							<Typography className="text-error mx-8">必須</Typography>
						</Typography>
					</Box>
					<Box className="rounded-md flex flex-wrap w-full sm:w-2/3">
						<FormAutocomplete
							control={control}
							name="reception_start"
							size="small"
							className="w-full sm:w-1/3"
							variant="outlined"
							placeholder="Choose..."
						/>

						<Box className="text-center w-full sm:w-1/3 mx-auto pt-10">
							<Typography variant="h3" color="primary">
								{t('edit.form.label.to')}
							</Typography>
						</Box>

						<FormAutocomplete
							control={control}
							name="reception_end"
							size="small"
							className="w-full sm:w-1/3"
							variant="outlined"
							placeholder="Choose..."
						/>
					</Box>
				</Box>

				<Box className="flex flex-wrap sm:flex-nowrap mb-16 sm:mb-20">
					<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
						<Typography variant="h3" color="primary" className="flex items-center mb-4">
							{t('edit.form.label.entry_fee')}
							<Typography className="text-error mx-8">必須</Typography>
						</Typography>
					</Box>
					<Box className="rounded-md flex flex-wrap w-full sm:w-2/3">
						<CoreInput
							control={control}
							name="entry_fee"
							placeholder="Default input"
							size="small"
							className="w-full sm:w-1/3"
						/>

						<Box className="text-center w-full sm:w-1/3 mx-auto pt-10">
							<Typography variant="h3" color="primary">
								{t('edit.form.label.payment_method')}
							</Typography>
						</Box>

						<Box className="rounded-md w-full sm:w-1/3" sx={{ border: '1px solid #cccc' }}>
							<CoreRadioGroup
								className="flex-row"
								control={control}
								name="display"
								options={paymentMethodOptions}
								row
							/>
						</Box>
					</Box>
				</Box>

				<Box className="flex flex-wrap sm:flex-nowrap mb-16 sm:mb-20">
					<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
						<Typography variant="h3" color="primary" className="flex items-center mb-4">
							{t('edit.form.label.entry_option')}
							<Typography className="text-error mx-8">必須</Typography>
						</Typography>
					</Box>
					<Box className="rounded-md flex flex-wrap w-full sm:w-2/3">
						<Box className="rounded-md w-full" sx={{ border: '1px solid #cccc' }}>
							<Box className="w-full flex">
								<CoreCheckbox
									control={control}
									className="m-auto sm:w-1/3"
									name="checkbox"
									label="獲得標高"
								/>
								<CoreInput
									control={control}
									className="m-auto sm:w-1/3"
									name=""
									// type="number"
									size="small"
								/>
								<Typography className="m-auto">円</Typography>
							</Box>
							<Box className="w-full flex">
								<CoreCheckbox
									control={control}
									className="m-auto sm:w-1/3"
									name="checkbox"
									label="XXXXXX"
								/>
								<CoreInput
									control={control}
									className="m-auto sm:w-1/3"
									// type="number"
									name=""
									size="small"
								/>
								<Typography className="m-auto">円</Typography>
							</Box>
						</Box>
					</Box>
				</Box>

				<Box className="flex flex-wrap sm:flex-nowrap mb-16 sm:mb-20">
					<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
						<Typography variant="h3" color="primary" className="flex items-center mb-4">
							{t('edit.form.label.mission')}
							<Typography className="text-error mx-8">必須</Typography>
						</Typography>
					</Box>
					<Box className="rounded-md flex w-full sm:w-2/3">
						<CoreInput control={control} name="" size="small" className="w-full" />
						<Button variant="contained" color="third">
							選択
						</Button>
					</Box>
				</Box>

				<Box className="flex flex-wrap sm:flex-nowrap mb-16 sm:mb-20">
					<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
						<Typography variant="h3" color="primary" className="flex items-center mb-4">
							{t('edit.form.label.tag')}
							{/* <Typography className="text-error mx-8">必須</Typography> */}
						</Typography>
					</Box>
					<Box className="rounded-md flex w-full sm:w-2/3">
						<Box className="rounded-md w-full" sx={{ border: '1px solid #cccc' }}>
							<Box className="flex flex-wrap p-5">
								{tagDatas?.map((item, index) => {
									return (
										<CoreCheckbox
											key={index}
											control={control}
											name={`tag[${index}]`}
											label={item.label}
										/>
									)
								})}
							</Box>
						</Box>
					</Box>
				</Box>

				<AdminInput
					control={control}
					name="precaution_when_entering"
					label={t('edit.form.label.precaution_when_entering')}
					placeholder="Default input"
					size="small"
					multiline
					rows={5}
					// required
				/>

				<AdminInput
					control={control}
					name="trouble_contact_name"
					label={t('edit.form.label.trouble_contact_name')}
					placeholder="Default input"
					size="small"
					// required
				/>

				<AdminInput
					control={control}
					name="contact_address"
					label={t('edit.form.label.contact_address')}
					placeholder="Default input"
					size="small"
					// required
				/>

				<Box className="flex flex-wrap sm:flex-nowrap mb-16 sm:mb-20">
					<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
						<Typography variant="h3" color="primary" className="flex items-center mb-4">
							{t('edit.form.label.related_event')}
							{/* <Typography className="text-error mx-8">必須</Typography> */}
						</Typography>
					</Box>
					<Box className="rounded-md w-full sm:w-2/3">
						<FormAutocomplete
							control={control}
							name="related_event"
							size="small"
							className="w-full"
							variant="outlined"
							placeholder="Choose..."
						/>
					</Box>
				</Box>
			</Box>

			<Box className="flex max-w-lg mx-8 sm:mx-auto">
				<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
					<Typography variant="h3" color="primary" className="flex items-center mb-4">
						{t('edit.form.label.creator')}
						<Typography className="text-error mx-8">必須</Typography>
					</Typography>
				</Box>
				<Box className="rounded-md flex w-full sm:w-2/3">
					<Box className="flex w-full sm:w-2/3">
						<CoreInput control={control} name="" size="small" className="w-full" />
						<Button variant="contained" color="third">
							選択
						</Button>
					</Box>

					<Box className="flex w-auto ml-auto">
						<Button
							onClick={() => navigate(ROUTER_ADMIN.event.list)}
							variant="contained"
							color="error"
							className="mr-10"
							size="small"
						>
							削除
						</Button>
						<LoadingButton
							loading={isSubmitting}
							disabled={!isDirty}
							variant="contained"
							color="success"
							size="small"
							type="submit"
						>
							登録
						</LoadingButton>
					</Box>
				</Box>
			</Box>
		</form>
	)
}

export default React.memo(Tab1)
