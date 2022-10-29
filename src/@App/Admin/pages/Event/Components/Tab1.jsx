import React, { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { ROUTER_ADMIN, TRANSLATE_ADMIN } from '@App/Admin/configs/constants'
import { Button, Paper, Typography, TextField, Box, Card } from '@mui/material'
import CoreInput from '@Core/components/Input/CoreInput'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Yup from '@Core/helper/Yup'
import CoreCheckbox from '@Core/components/Input/CoreCheckbox'
import CoreRadioGroup from '@Core/components/Input/CoreRadioGroup'
import Grid from '@mui/material/Grid'
import { errorMsg, successMsg } from '@Core/helper/Message'
import AdminInput from '@App/Admin/components/Input/AdminInput'
import { useAdminPageContext } from '@App/Admin/components/Provider/AdminPageProvider'
import { useNavigate } from 'react-router-dom'
import CoreAutocomplete from '@Core/components/Input/CoreAutocomplete'
import { eventService } from '@App/Admin/services/eventService'
import { LoadingButton } from '@mui/lab'
import CoreCheckboxGroup from '@Core/components/Input/CoreCheckboxGroup'

const Tab1 = props => {
	const { t, eventData, isEdit } = useAdminPageContext()
	const navigate = useNavigate()

	const displayOptions = [
		{ value: '1', label: t('edit.form.check_box.label.display') },
		{ value: '2', label: t('edit.form.check_box.label.hidden') }
	]

	const categoryData = [
		{ key: '1', value: 1, label: t('edit.form.check_box.label.men_only') },
		{ key: '2', value: 2, label: t('edit.form.check_box.label.women_only') },
		{ key: '3', value: 3, label: t('edit.form.check_box.label.men_over_50s') },
		{ key: '4', value: 4, label: t('edit.form.check_box.label.all_participants') }
	]

	const tagDatas = [
		{ key: '1', value: 1, label: '温泉あり' },
		{ key: '2', value: 2, label: '景色最高' },
		{ key: '3', value: 3, label: '秋におすすめ' },
		{ key: '4', value: 4, label: '初心者におすすめ' },
		{ key: '5', value: 5, label: '温泉あり' },
		{ key: '6', value: 6, label: '景色最高' },
		{ key: '7', value: 7, label: '秋におすすめ' },
		{ key: '8', value: 8, label: '初心者におすすめ' },
		{ key: '9', value: 9, label: '温泉あり' },
		{ key: '10', value: 10, label: '景色最高' },
		{ key: '11', value: 11, label: '秋におすすめ' },
		{ key: '12', value: 12, label: '初心者におすすめ' }
	]

	const paymentMethodOptions = [
		{ value: '1', label: 'クレカ' },
		{ value: '2', label: 'QR' }
	]

	const typeOptions = [
		{ value: 1, label: 'クイズチャレンジ' },
		{ value: 2, label: 'エントリーオプション' },
		{ value: 2, label: 'クレカ' },
		{ value: 2, label: 'QR' },
		{ value: 2, label: 'QR2' },
		{ value: 2, label: 'QR3' }
	]

	const venueOptions = [
		{ value: '東京都', label: '東京都' },
		{ value: '大阪府', label: '大阪府' },
		{ value: '神奈川県', label: '神奈川県' },
		{ value: '愛知県', label: '愛知県' },
		{ value: '埼玉県', label: '埼玉県' },
		{ value: '千葉県', label: '千葉県' },
		{ value: '北海道', label: '北海道' },
		{ value: '兵庫県', label: '兵庫県' },
		{ value: '福岡県', label: '福岡県' },
		{ value: '静岡県', label: '静岡県' }
	]

	const eventStartOptions = [
		{ value: '2022-09-01 00:00:00', label: '2022-09-01 00:00:00' },
		{ value: '2022-09-01 12:00:00', label: '2022-09-01 12:00:00' },
		{ value: '2022-09-01 21:00:00', label: '2022-09-01 21:00:00' },
		{ value: '2022-12-01 21:00:00', label: '2022-12-01 21:00:00' },
		{ value: '2022-08-01 21:00:00', label: '2022-08-01 21:00:00' },
		{ value: '2022-10-01 21:00:00', label: '2022-10-01 21:00:00' }
	]

	const eventEndOptions = [
		{ value: '2023-03-31 21:00:00', label: '2023-03-31 21:00:00' },
		{ value: '2023-04-01 21:00:00', label: '2023-04-01 21:00:00' },
		{ value: '2022-09-05 00:00:00', label: '2022-09-05 00:00:00' },
		{ value: '2022-09-30 21:00:00', label: '2022-09-30 21:00:00' },
		{ value: '2022-08-31 21:00:00', label: '2022-08-31 21:00:00' },
		{ value: '2022-09-05 00:00:00', label: '2022-09-05 00:00:00' }
	]

	const methodForm = useForm({
		mode: 'onTouched',
		defaultValues: {
			id: eventData?.id ?? '',
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

	const onSubmit = methodForm.handleSubmit(async data => {
		try {
			const newCategory = []
			const newTag = []

			for (const categoryKey in data?.category) {
				if (data?.category[categoryKey]) {
					newCategory.push(+categoryKey)
				}
			}

			for (const tagKey in data?.tag) {
				if (data?.category[tagKey]) {
					newCategory.push(+tagKey)
				}
			}

			const newData = {
				...data,
				tag: newTag,
				category: newCategory
			}
			await eventService.save(newData)
			navigate(ROUTER_ADMIN.event.list)
			successMsg(isEdit ? 'Edit success' : 'Create success')
		} catch (error) {
			errorMsg(error)
		}
	})

	return (
		<form onSubmit={onSubmit}>
			<Box className="max-w-lg mx-8 sm:mx-auto">
				{/* <AdminInput
					control={control}
					label={t('edit.form.label.id')}
					name="id"
					placeholder="Default input"
					size="small"
					disabled
					// required
				/> */}

				<AdminInput
					control={control}
					label={t('edit.form.label.title')}
					name="title"
					placeholder="Default input"
					size="small"
					required
				/>

				{/* <AdminInput
					control={control}
					name="description"
					label={t('edit.form.label.description')}
					placeholder="Default input"
					size="small"
					multiline
					rows={5}
					required
				/> */}

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

				<CoreCheckboxGroup
					control={control}
					name="category"
					options={categoryData}
					legendLabel={t('edit.form.label.category')}
					row
				/>

				<Box className="flex flex-wrap sm:flex-nowrap mb-16 sm:mb-20">
					<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
						<Typography variant="h3" color="primary" className="flex items-center mb-4">
							{t('edit.form.label.venue')}
							<Typography className="text-error mx-8">必須</Typography>
						</Typography>
					</Box>
					<Box className="rounded-md flex flex-wrap w-full sm:w-2/3">
						<CoreAutocomplete
							control={control}
							name="venue"
							size="small"
							className="w-full sm:w-1/3"
							variant="outlined"
							placeholder="Choose..."
							options={venueOptions}
							returnValueType="enum"
						/>

						<Box className="text-center w-full sm:w-1/3 mx-auto pt-10">
							<Typography variant="h3" color="primary" className="mb-4 ml-10">
								{t('edit.form.label.type')}
							</Typography>
						</Box>

						<CoreAutocomplete
							control={control}
							name="type"
							size="small"
							className="w-full sm:w-1/3"
							variant="outlined"
							placeholder="Choose..."
							options={typeOptions}
							returnValueType="enum"
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
						<CoreAutocomplete
							control={control}
							name="event_start"
							size="small"
							className="w-full sm:w-1/3"
							variant="outlined"
							placeholder="Choose..."
							options={eventStartOptions}
							returnValueType="enum"
						/>

						<Box className="text-center w-full sm:w-1/3 mx-auto pt-10">
							<Typography variant="h3" color="primary">
								{t('edit.form.label.to')}
							</Typography>
						</Box>

						<CoreAutocomplete
							control={control}
							name="event_end"
							size="small"
							className="w-full sm:w-1/3"
							variant="outlined"
							placeholder="Choose..."
							options={eventEndOptions}
							returnValueType="enum"
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
						<CoreAutocomplete
							control={control}
							name="reception_start"
							size="small"
							className="w-full sm:w-1/3"
							variant="outlined"
							placeholder="Choose..."
							options={eventStartOptions}
							returnValueType="enum"
						/>

						<Box className="text-center w-full sm:w-1/3 mx-auto pt-10">
							<Typography variant="h3" color="primary">
								{t('edit.form.label.to')}
							</Typography>
						</Box>

						<CoreAutocomplete
							control={control}
							name="reception_end"
							size="small"
							className="w-full sm:w-1/3"
							variant="outlined"
							placeholder="Choose..."
							options={eventEndOptions}
							returnValueType="enum"
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

						{/* <Box className="text-center w-full sm:w-1/3 mx-auto pt-10">
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
						</Box> */}
					</Box>
				</Box>

				{/* <Box className="flex flex-wrap sm:flex-nowrap mb-16 sm:mb-20">
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
				</Box> */}

				{/* <Box className="flex flex-wrap sm:flex-nowrap mb-16 sm:mb-20">
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
				</Box> */}

				<CoreCheckboxGroup
					control={control}
					name="tag"
					options={tagDatas}
					legendLabel={t('edit.form.label.tag')}
					row
				/>

				{/* <AdminInput
					control={control}
					name="precaution_when_entering"
					label={t('edit.form.label.precaution_when_entering')}
					placeholder="Default input"
					size="small"
					multiline
					rows={5}
				/> */}

				{/* <AdminInput
					control={control}
					name="trouble_contact_name"
					label={t('edit.form.label.trouble_contact_name')}
					placeholder="Default input"
					size="small"
				/> */}

				{/* <AdminInput
					control={control}
					name="contact_address"
					label={t('edit.form.label.contact_address')}
					placeholder="Default input"
					size="small"
				/> */}

				{/* <Box className="flex flex-wrap sm:flex-nowrap mb-16 sm:mb-20">
					<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
						<Typography variant="h3" color="primary" className="flex items-center mb-4">
							{t('edit.form.label.related_event')}
						</Typography>
					</Box>
					<Box className="rounded-md w-full sm:w-2/3">
						<CoreAutocomplete
							control={control}
							name="related_event"
							size="small"
							className="w-full"
							variant="outlined"
							placeholder="Choose..."
						/>
					</Box>
				</Box> */}
			</Box>

			<Box className="flex max-w-lg mx-8 sm:mx-auto">
				<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
					<Typography variant="h3" color="primary" className="flex items-center mb-4">
						{t('edit.form.label.creator')}
						<Typography className="text-error mx-8">必須</Typography>
					</Typography>
				</Box>
				<Box className="rounded-md flex w-full ml-auto sm:w-2/3">
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
