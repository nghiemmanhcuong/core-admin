import { Box } from '@mui/system'
import React from 'react'
import TextField from '@mui/material/TextField'
import { Button, Icon, InputAdornment, Typography, FormControlLabel, Card } from '@mui/material'
import FormAutocomplete from '@App/Admin/components/Form/FormAutocomplete'
import { useAdminPageContext } from '@App/Admin/components/Provider/AdminPageProvider'
import { useTranslation } from 'react-i18next'
import { TRANSLATE_ADMIN } from '@App/Admin/configs/constants'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Yup from '@Core/helper/Yup'
import CoreCheckbox from '@Core/components/Input/CoreCheckbox'
import CardMedia from '@mui/material/CardMedia'
import CoreInput from '@Core/components/Input/CoreInput'
import CoreAutocomplete from '@Core/components/Input/CoreAutocomplete'
import { errorMsg } from '@Core/helper/Message'
import CoreDatePicker from '@Core/components/Input/CoreDatePicker'
import CoreRadioGroup from '@Core/components/Input/CoreRadioGroup'
import moment from 'moment/moment'
import CoreCheckboxGroup from '@Core/components/Input/CoreCheckboxGroup'

const EventFilter = props => {
	const { eventTableHandler, tags } = useAdminPageContext()
	const { t } = useTranslation(TRANSLATE_ADMIN.course)

	const { control, getValues, watch } = useForm({
		mode: 'onTouched',
		defaultValues: {}
	})

	const handleFilter = async () => {
		try {
			const data = getValues()
			const params = {
				...data,
				event_date_from: data?.event_date_from
					? moment(data?.event_date_from).add(7, 'hours').format('YYYY-MM-DD')
					: null,
				event_date_until: data?.event_date_until
					? moment(data?.event_date_until).add(7, 'hours').format('YYYY-MM-DD')
					: null,
				reception_date_from: data?.reception_date_from
					? moment(data?.reception_date_from).add(7, 'hours').format('YYYY-MM-DD')
					: null,
				reception_date_until: data?.reception_date_until
					? moment(data?.reception_date_until).add(7, 'hours').format('YYYY-MM-DD')
					: null,
				category: data?.category?.join(','),
				// publish: data?.publish,
				tag: data?.tag?.join(','),
				page: 1
			}
			await eventTableHandler.handleFetchData(params)
		} catch (error) {
			// errorMsg(error?.response?.data?.error_message)
			console.log('============= error', error)
		}
	}

	return (
		<Box className="m-10 border-1 rounded-4 border-grey-300">
			<Box className="p-8 bg-grey-300">
				<Typography variant="h4" className="font-500">
					????????????
				</Typography>
			</Box>
			<Box className="flex p-8 w-full">
				<Box className="flex w-1/2 items-center">
					<Box className="w-1/3 p-8 bg-grey-300 border-grey-300 border-1 rounded-4">????????????????????????</Box>
					<CoreInput control={control} name="title" size="small" className="w-2/3" />
				</Box>
				<Box className="flex w-1/2 items-center mx-8 ">
					<Box className="w-1/3 p-8 bg-grey-300 border-grey-300 border-1 rounded-4">???????????????</Box>
					<CoreAutocomplete
						control={control}
						name="category"
						size="small"
						className="w-2/3"
						returnValueType="enum"
						placeholder="????????????"
						multiple
						options={[
							{
								value: 1,
								label: '???????????????1'
							},
							{
								value: 2,
								label: '???????????????2'
							}
						]}
					/>
				</Box>
			</Box>
			<Box className="flex p-8  w-full">
				<Box className="flex w-1/2 items-center  ">
					<Box className="w-1/3 p-8 bg-grey-300 border-grey-300 border-1 rounded-4">?????????</Box>
					<CoreInput control={control} name="summary" size="small" className="w-2/3" />
				</Box>
				<Box className="flex w-1/2 items-center mx-8 ">
					<Box className="w-1/3 p-8 bg-grey-300 border-grey-300 border-1 rounded-4">?????????</Box>
					<CoreInput control={control} name="venue" size="small" className="w-2/3" />
				</Box>
			</Box>
			<Box className="flex p-8  w-full">
				<Box className="flex w-1/2 items-center  ">
					<Box className="w-1/3 p-8 bg-grey-300 border-grey-300 border-1 rounded-4">???????????????</Box>
					<CoreDatePicker control={control} name="event_date_from" size="small" className="w-1/3" />
					<CoreDatePicker control={control} name="event_date_until" size="small" className="w-1/3" />
				</Box>
				<Box className="flex w-1/2 items-center mx-8 ">
					<Box className="w-1/3 p-8 bg-grey-300 border-grey-300 border-1 rounded-4">???????????????</Box>
					<CoreDatePicker control={control} name="reception_date_from" size="small" className="w-1/3" />
					<CoreDatePicker control={control} name="reception_date_until" size="small" className="w-1/3" />
				</Box>
			</Box>
			<Box className="flex p-8  w-full">
				<Box className="flex w-1/2 items-center  ">
					<Box className="w-1/3 p-8 bg-grey-300 border-grey-300 border-1 rounded-4">??????</Box>
					<CoreInput control={control} name="author" size="small" className="w-2/3" />
				</Box>
				<Box className="flex w-1/2 items-center mx-8 ">
					<Box className="w-1/3 p-8 bg-grey-300 border-grey-300 border-1 rounded-4">??????</Box>
					<CoreInput control={control} name="min_fee" className="w-1/3" size="small" />
					<CoreInput control={control} name="max_fee" className="w-1/3" size="small" />
				</Box>
			</Box>
			<Box className="flex p-8  w-full">
				<Box className="flex w-1/2 items-center">
					<Box className="w-1/3 p-8 bg-grey-300 border-grey-300 border-1 rounded-4">????????????</Box>
					<CoreAutocomplete
						control={control}
						name="tag"
						size="small"
						className="w-2/3"
						returnValueType="enum"
						placeholder="????????????"
						multiple
						options={tags?.tags}
						valuePath="id"
						labelPath="name"
					/>
				</Box>
				<Box className="flex w-1/2 items-center mx-8">
					<Box className="w-1/3 p-8 bg-grey-300 border-grey-300 border-1 rounded-4">??????</Box>
					<Box className="border-grey-400 border-1 rounded-4">
						<CoreRadioGroup
							control={control}
							name="publish"
							// legendLabel="??????"
							className="ml-10"
							options={[
								{ key: '1', value: 1, label: t('value.express') },
								{ key: '0', value: 0, label: t('value.non_representation') }
							]}
							row
							sx={{
								'& .MuiSvgIcon-root': {
									fontSize: 17
								}
							}}
						/>
					</Box>

					{/* <Box className="w-1/3 p-8 bg-grey-300 border-grey-300 border-1 rounded-4">
						??????
					</Box>
					<Card variant="outlined">
						<Box className="grid grid-flow-row-dense grid-cols-2 ml-20">
							<Box className="col-span-1 -my-3">
								<CoreCheckbox control={control} name="publish" label={t('value.express')} />
							</Box>
							<Box className="col-span-1 -my-3">
								<CoreCheckbox control={control} name="checkbox2" label={t('value.non_representation')} />
							</Box>
						</Box>
					</Card> */}
					{/* <Card variant="outlined">
						<Box>
							<CoreRadioGroup
								control={control}
								name="publish"
								row
								className="ml-12"
								options={[
									{
										value: 0,
										label: '?????????'
									},
									{
										value: 1,
										label: '??????'
									}
								]}
							/>
						</Box>
					</Card> */}
					<Button
						variant="contained"
						color="primary"
						className="ml-auto h-32 mt-[2px]"
						onClick={handleFilter}
					>
						??????
					</Button>
				</Box>
			</Box>
		</Box>
	)
}

export default React.memo(EventFilter)
