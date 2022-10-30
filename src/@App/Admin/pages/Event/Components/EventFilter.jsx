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

const EventFilter = props => {
	const { eventTableHandler } = useAdminPageContext()
	const { t } = useTranslation(TRANSLATE_ADMIN.course)
	
	const { control, getValues } = useForm({
		mode: 'onTouched',
		defaultValues: {
			title: '',
			category: [],
			summary: '',
			venue: '',
			event_date_from: null,
			event_date_until: null,
			reception_date_from: null,
			reception_date_until: null,
			tag: [],
			author: '',
			min_fee: null,
			max_fee: null,
			publish: null
		}
	})

	const handleFilter = async () => {
		try {
			const data = getValues()
			const params = {
				...data,
				category: data?.category?.join(','),
				tag: data?.tag?.join(',')
			}
			await eventTableHandler.handleFetchData(params)
		} catch (error) {
			// errorMsg(error?.response?.data?.error_message)
			console.log('============= error',error)
		}
	}


	return (
		<Box className="m-10 border-1 rounded-4 border-grey-300">
			<Box className="p-10 bg-grey-300">
				<Typography variant="h4">検索条件</Typography>
			</Box>
			<Box className="flex p-10  w-full">
				<Box className="flex w-1/2 items-start  ">
					<Box className="w-1/3 px-10 h-full bg-grey-300 pt-6 mr-[-2px] border-grey-300 border-1 rounded-l-4">
						イベントタイトル
					</Box>
					<CoreInput control={control} name='title' size="small" className="w-2/3" />
				</Box>
				<Box className="flex w-1/2 items-start mx-8 ">
					<Box className="w-1/3 px-10 h-full bg-grey-300 pt-6 mr-[-2px] border-grey-300 border-1 rounded-l-4">
					カテゴリー
					</Box>
					<CoreAutocomplete
						control={control}
						name="category"
						size="small"
						className="w-2/3"
						returnValueType='enum'
						placeholder="Choose..."
						multiple
						options={[
							{
								value: 1,
								label: 'カテゴリー1'
							},
							{
								value: 2,
								label: 'カテゴリー2'
							}
						]}
					/>
				</Box>
			</Box>
			<Box className="flex p-10  w-full">
				<Box className="flex w-1/2 items-start  ">
					<Box className="w-1/3 px-10 h-full bg-grey-300 pt-6 mr-[-2px] border-grey-300 border-1 rounded-l-4">
					まとめ
					</Box>
					<CoreInput control={control} name='summary' size="small" className="w-2/3" />
				</Box>
				<Box className="flex w-1/2 items-start mx-8 ">
					<Box className="w-1/3 px-10 h-full bg-grey-300 pt-6 mr-[-2px] border-grey-300 border-1 rounded-l-4">
						開催地
					</Box>
					<CoreInput control={control} name='venue' size="small" className="w-2/3" />
					
				</Box>
			</Box>
			<Box className="flex p-10  w-full">
				<Box className="flex w-1/2 items-start  ">
					<Box className="w-1/3 px-10 h-full bg-grey-300 pt-6 mr-[-2px] border-grey-300 border-1 rounded-l-4">
						開催年月日
					</Box>
					<CoreDatePicker
						control={control}
						name="event_date_from"
						size="small"
						className="w-1/3"
					/>
					<CoreDatePicker
						control={control}
						name="event_date_until"
						size="small"
						className="w-1/3"
					/>
				</Box>
				<Box className="flex w-1/2 items-start mx-8 ">
					<Box className="w-1/3 px-10 h-full bg-grey-300 pt-6 mr-[-2px] border-grey-300 border-1 rounded-l-4">
						受付年月日
					</Box>
					<CoreDatePicker
						control={control}
						name="reception_date_from"
						size="small"
						className="w-1/3"
					/>
					<CoreDatePicker
						control={control}
						name="reception_date_until"
						size="small"
						className="w-1/3"
					/>
				</Box>
			</Box>
			<Box className="flex p-10  w-full">
				<Box className="flex w-1/2 items-start  ">
					<Box className="w-1/3 px-10 h-full bg-grey-300 pt-6 mr-[-2px] border-grey-300 border-1 rounded-l-4">
						著者
					</Box>
					<CoreInput control={control} name='author' size="small" className="w-2/3" />
				</Box>
				<Box className="flex w-1/2 items-start mx-8 ">
					<Box className="w-1/3 px-10 h-full bg-grey-300 pt-6 mr-[-2px] border-grey-300 border-1 rounded-l-4">
					費用
					</Box>
					<CoreInput control={control} name='min_fee' placeholder='最低料金' className='w-1/3' size='small' />
					<CoreInput control={control} name='max_fee' placeholder='最大料金' className='w-1/3' size='small' />
				</Box>
			</Box>
			<Box className="flex p-10  w-full">
				<Box className="flex w-1/2 items-start">
					<Box className="w-1/3 px-10 h-full bg-grey-300 pt-6 mr-[-2px] border-grey-300 border-1 rounded-l-4">
						タグ情報
					</Box>
					<CoreAutocomplete
						control={control}
						name="tag"
						size="small"
						className="w-2/3"
						returnValueType='enum'
						placeholder="Choose..."
						multiple
						options={[
							{
								value: 1,
								label: '鬼ごっこ 1'
							},
							{
								value: 2,
								label: '鬼ごっこ 2'
							}
						]}
					/>
				</Box>
				<Box className="flex w-1/2 items-start mx-8 ">
					<Box className="w-1/3 px-10 h-full bg-grey-300 pt-6 mr-[-2px] border-grey-300 border-1 rounded-l-4">
						状態
					</Box>
					<Card variant="outlined">
						<Box>
							<CoreRadioGroup 
								control={control}
								name='publish'
								row
								className='ml-12'
								options={[
									{
										value: 0,
										label: '非公開'
									},
									{
										value: 1,
										label: '公開'
									}
								]}
							/>
						</Box>
					</Card>
					<Button variant="contained" color="primary" className="ml-auto" onClick={handleFilter}>
						検索
					</Button>
				</Box>
			</Box>
		</Box>
	)
}

export default React.memo(EventFilter)
