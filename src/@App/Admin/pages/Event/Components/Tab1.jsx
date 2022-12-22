import React, { useMemo, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { ROUTER_ADMIN, TRANSLATE_ADMIN } from '@App/Admin/configs/constants'
import { Button, Paper, Typography, TextField, Box, Card } from '@mui/material'
import CoreInput from '@Core/components/Input/CoreInput'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Yup from '@Core/helper/Yup'
import CoreRadioGroup from '@Core/components/Input/CoreRadioGroup'
import { errorMsg, successMsg } from '@Core/helper/Message'
import AdminInput from '@App/Admin/components/Input/AdminInput'
import { useAdminPageContext } from '@App/Admin/components/Provider/AdminPageProvider'
import { useNavigate, useParams } from 'react-router-dom'
import CoreAutocomplete from '@Core/components/Input/CoreAutocomplete'
import { eventService } from '@App/Admin/services/eventService'
import { LoadingButton } from '@mui/lab'
import CoreCheckboxGroup from '@Core/components/Input/CoreCheckboxGroup'
import CoreDatePicker from '@Core/components/Input/CoreDatePicker'
import moment from 'moment'
import { pickBy } from 'lodash'
import { missionService } from '@App/Admin/services/missionService'
import { useRequest } from 'ahooks'

const Tab1 = props => {
	const { t, eventData, isEdit, tags } = useAdminPageContext()
	const navigate = useNavigate()
	const { id } = useParams()

	const { data: missions, run: getMissions } = useRequest(missionService.list, {
		manual: true,
		onError: (res, params) => {
			if (params) {
				mutate({
					data: []
				})
			} else {
				errorMsg(res?.response?.data?.error_message)
			}
		}
	})

	useEffect(() => {
		getMissions({ per_page: 1000 })
	}, [])

	const displayOptions = [
		{ value: 1, label: t('edit.form.check_box.label.display') },
		{ value: 0, label: t('edit.form.check_box.label.hidden') }
	]

	const categoryData = [
		{ key: '1', value: 1, label: t('edit.form.check_box.label.men_only') },
		{ key: '2', value: 2, label: t('edit.form.check_box.label.women_only') },
		{ key: '3', value: 3, label: t('edit.form.check_box.label.men_over_50s') },
		{ key: '4', value: 4, label: t('edit.form.check_box.label.all_participants') }
	]

	const tagOptions = tags?.tags?.reduce((result, currentValue) => {
		const formatResult = {
			key: `${currentValue?.id}`,
			value: currentValue?.id,
			label: currentValue?.name
		}

		result.push(formatResult)

		return result
	}, [])

	const typeOptions = [
		{ value: 1, label: 'アラウンドチャレンジ' },
		{ value: 2, label: 'コースチャレンジ' },
		{ value: 3, label: 'クイズチャレンジ' }
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
		{ value: '静岡県', label: '静岡県' },
		{ value: 'コース開催地', label: 'コース開催地' }
	]

	const methodForm = useForm({
		mode: 'onTouched',
		defaultValues: {
			id: '',
			title: '',
			type: null,
			category: {},
			event_start: '',
			event_end: '',
			reception_start: '',
			reception_end: '',
			venue: null,
			entry_fee: null,
			tag: {},
			publish: 0,
			special_feature_id: 0,
			author: '',
			caution_for_entry: '',
			sos_info: '',
			summary: '',
			challenge_image: 'xxxxxx',
			event_mission: []
		},
		resolver: yupResolver(
			Yup.object({
				title: Yup.string().required(),
				author: Yup.string().required(),
				venue: Yup.mixed().nullable().required(),
				type: Yup.mixed().nullable().required(),
				event_start: Yup.mixed().nullable().required(),
				event_end: Yup.mixed().nullable().required(),
				reception_start: Yup.mixed().nullable().required(),
				reception_end: Yup.mixed().nullable().required(),
				entry_fee: Yup.mixed().nullable().required(),
				event_mission: Yup.mixed().required()
			})
		)
	})

	const fetchData = async () => {
		if (!id) return

		const eventDetail = await eventService.detailEvent(id)
		reset({
			id: eventDetail?.event?.id,
			title: eventDetail?.event?.title,
			type: typeOptions.find(item => item.label === eventDetail?.event?.type).value,
			category: [],
			event_start: eventDetail?.event?.event_start ? new Date(eventDetail?.event?.event_start) : '',
			event_end: eventDetail?.event?.event_end ? new Date(eventDetail?.event?.event_end) : '',
			reception_start: eventDetail?.event?.reception_start ? new Date(eventDetail?.event?.reception_start) : '',
			reception_end: eventDetail?.event?.reception_end ? new Date(eventDetail?.event?.reception_end) : '',
			venue: eventDetail?.event?.venue ?? null,
			entry_fee: eventDetail?.event?.entry_fee ?? null,
			tag: eventDetail?.event?.tag ?? {},
			publish: eventDetail?.event?.publish ?? 1,
			special_feature_id: eventDetail?.event?.special_feature_id ?? 0,
			author: eventDetail?.event?.author ?? '',
			caution_for_entry: eventDetail?.event?.caution_for_entry ?? '',
			sos_info: eventDetail?.event?.sos_info ?? '',
			summary: eventDetail?.event?.summary ?? '',
			challenge_image: 'xxxxxx',
			event_mission: eventDetail?.event?.event_mission.map(item => item.mission_id) ?? []
		})
	}

	useEffect(() => {
		try {
			fetchData().catch(error => {})
		} catch (error) {}
	}, [id])

	const {
		control,
		watch,
		reset,
		formState: { isSubmitting, isDirty }
	} = methodForm

	const onSubmit = methodForm.handleSubmit(async data => {
		try {
			const newCategory = []
			const newTag = []
			if (data.event_mission && data.event_mission.length > 0) {
				data.event_mission = data.event_mission.map(item => item.id)
			}

			for (const categoryKey in data?.category) {
				if (data?.category[categoryKey]) {
					newCategory.push(+categoryKey)
				}
			}

			for (const tagKey in data?.tag) {
				if (data?.tag[tagKey]) {
					newTag.push(+tagKey)
				}
			}

			const newData = {
				...data,
				tag: newTag,
				category: newCategory,
				event_start: data.event_start ? moment(data?.event_start).format('YYYY-MM-DD') : '',
				event_end: data.event_end ? moment(data?.event_end).format('YYYY-MM-DD') : '',
				reception_start: data.reception_start ? moment(data?.reception_start).format('YYYY-MM-DD') : '',
				reception_end: data.reception_end ? moment(data?.reception_end).format('YYYY-MM-DD') : ''
			}

			const dataSubmit = pickBy(newData, val => {
				return val !== null && val !== '' && val !== 'undefined'
			})

			await eventService.save(dataSubmit)
			navigate(ROUTER_ADMIN.event.list)
			successMsg(isEdit ? t('common:message.edit_success') : t('common:message.create_success'))
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
					readOnly
					classNameField="bg-grey-300"
					className="mb-16 sm:mb-20"
				/>

				<AdminInput
					control={control}
					label={t('edit.form.label.title')}
					name="title"
					placeholder="Default input"
					size="small"
					className="mb-16 sm:mb-20"
					required
				/>

				<AdminInput
					control={control}
					name="summary"
					label={t('edit.form.label.description')}
					placeholder="Default input"
					className="mb-16 sm:mb-20"
					size="small"
					multiline
					rows={5}
					required
				/>

				<Box className="flex flex-wrap sm:flex-nowrap mb-16 sm:mb-20">
					<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
						<Typography variant="h3" color="primary" className="flex items-center mb-4">
							<Typography className="text-black py-4 px-16 rounded-4 bg-yellow mx-8">必須</Typography>
							{t('edit.form.label.display')}
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
							<Typography className="text-black py-4 px-16 rounded-4 bg-yellow mx-8">必須</Typography>{' '}
							{t('edit.form.label.venue')}
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
							<Typography className="text-black py-4 px-16 rounded-4 bg-yellow mx-8">必須</Typography>{' '}
							{t('edit.form.label.period')}
						</Typography>
					</Box>
					<Box className="rounded-md flex flex-wrap w-full sm:w-2/3">
						<CoreDatePicker
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

						<CoreDatePicker
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
							<Typography className="text-black py-4 px-16 rounded-4 bg-yellow mx-8">必須</Typography>{' '}
							{t('edit.form.label.entry_period')}
						</Typography>
					</Box>
					<Box className="rounded-md flex flex-wrap w-full sm:w-2/3">
						<CoreDatePicker
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

						<CoreDatePicker
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
							<Typography className="text-black py-4 px-16 rounded-4 bg-yellow mx-8">必須</Typography>{' '}
							{t('edit.form.label.entry_fee')}
						</Typography>
					</Box>
					<Box className="rounded-md flex flex-wrap w-full sm:w-2/3">
						<AdminInput
							control={control}
							name="entry_fee"
							placeholder="Default input"
							size="small"
							classNameField="w-full"
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

				<Box className="flex flex-wrap sm:flex-nowrap mb-16 sm:mb-20">
					<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
						<Typography variant="h3" color="primary" className="flex items-center mb-4">
							<Typography className="text-black py-4 px-16 rounded-4 bg-yellow mx-8">必須</Typography>
							{t('edit.form.label.mission')}
						</Typography>
					</Box>
					<Box className="rounded-md flex w-full sm:w-2/3">
						{/* <CoreInput control={control} name="" size="small" className="w-full" /> */}
						<CoreAutocomplete
							control={control}
							name="event_mission"
							options={missions?.missions}
							size="small"
							className="w-full"
							variant="outlined"
							placeholder="Choose..."
							labelPath="mission_name"
							valuePath="id"
							multiple
						/>
						<Button variant="contained" color="third" className="h-40">
							選択
						</Button>
					</Box>
				</Box>

				<CoreCheckboxGroup
					control={control}
					name="tag"
					options={tagOptions}
					legendLabel={t('edit.form.label.tag')}
					row
				/>

				<AdminInput
					control={control}
					name="caution_for_entry"
					label={t('edit.form.label.precaution_when_entering')}
					placeholder="Default input"
					className="mb-16 sm:mb-20"
					size="small"
					multiline
					rows={5}
				/>

				{/* <AdminInput
					control={control}
					name="trouble_contact_name"
					label={t('edit.form.label.trouble_contact_name')}
					placeholder="Default input"
					className="mb-16 sm:mb-20"
					size="small"
				/> */}

				<AdminInput
					control={control}
					name="sos_info"
					label={t('edit.form.label.contact_address')}
					placeholder="Default input"
					className="mb-16 sm:mb-20"
					size="small"
				/>

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
						<Typography className="text-black py-4 px-16 rounded-4 bg-yellow mx-8">必須</Typography>{' '}
						{t('edit.form.label.creator')}
					</Typography>
				</Box>
				<Box className="rounded-md flex w-full ml-auto items-center sm:w-2/3">
					<Box className="flex w-full sm:w-full">
						<Box className="flex w-2/3">
							<AdminInput control={control} name="author" size="small" className="w-full" />
							<Button variant="contained" color="third" className="h-32">
								選択
							</Button>
						</Box>
						<Box className="flex w-1/3 justify-end">
							<Button
								onClick={() => navigate(ROUTER_ADMIN.event.list)}
								variant="contained"
								color="error"
								className="mr-10 h-32"
								size="small"
							>
								削除
							</Button>
							<LoadingButton
								loading={isSubmitting}
								disabled={!isDirty}
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

export default React.memo(Tab1)
