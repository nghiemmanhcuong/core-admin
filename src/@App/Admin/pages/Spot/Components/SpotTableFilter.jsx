import { Box } from '@mui/system'
import React from 'react'
import TextField from '@mui/material/TextField'
import { Button, Card, Typography } from '@mui/material'
import FormAutocomplete from '@App/Admin/components/Form/FormAutocomplete'
import FormInputSearch from '@App/Admin/components/Form/FormInputSearch'
import { useAdminPageContext } from '@App/Admin/components/Provider/AdminPageProvider'
import { useTranslation } from 'react-i18next'
import { TRANSLATE_ADMIN } from '@App/Admin/configs/constants'
import { useForm } from 'react-hook-form'
import CoreCheckbox from '@Core/components/Input/CoreCheckbox'
import CoreInput from '@Core/components/Input/CoreInput'
import CoreAutocomplete from '@Core/components/Input/CoreAutocomplete'
import { errorMsg } from '@Core/helper/Message'

const SpotTableFilter = props => {
	const { spotTableHandler } = useAdminPageContext()
	const { t } = useTranslation(TRANSLATE_ADMIN.spot)
	const handleFilter = async () => {
		try {
			const params = getValues()
			await spotTableHandler.handleFetchData(params)
		} catch (error) {
			errorMsg(error?.response?.data?.error_message)
		}
	}

	const { control, getValues } = useForm({
		mode: 'onTouched',
		defaultValues: {
			name: '',
			tag: '',
			address: '',
			detail: '',
			facility: '',
			type: null
		}
	})

	const typeOptions = [
		{ value: 1, label: '1' },
		{ value: 2, label: '2' },
		{ value: 3, label: '3' }
	]

	const addressOptions = [
		{ value: '〒949-7302 新潟県南魚沼市浦佐', label: '〒949-7302 新潟県南魚沼市浦佐' },
		{ value: '〒946-0033 新潟県魚沼市大浦１７４番地', label: '〒946-0033 新潟県魚沼市大浦１７４番地' },
		{ value: '〒949-7251 新潟県南魚沼市大崎', label: '〒949-7251 新潟県南魚沼市大崎' },
		{ value: '〒949-7112 新潟県南魚沼市長森', label: '〒949-7112 新潟県南魚沼市長森' },
		{ value: '〒949-7104 新潟県南魚沼市寺尾２４３', label: '〒949-7104 新潟県南魚沼市寺尾２４３' },
		{ value: '東京都新宿区西新宿二丁目８番１号', label: '東京都新宿区西新宿二丁目８番１号' },
		{ value: '東京都港区北青山２丁目７−１６', label: '東京都港区北青山２丁目７−１６' },
		{ value: '〒100-0101 東京都大島町元町６００−１', label: '〒100-0101 東京都大島町元町６００−１' },
		{ value: '〒100-0211 東京都大島町差木地', label: '〒100-0211 東京都大島町差木地' },
		{ value: '〒100-0103 東京都大島町泉津福重', label: '〒100-0103 東京都大島町泉津福重' },
		{ value: '〒100-0005 東京都千代田区丸の内２丁目４−１', label: '〒100-0005 東京都千代田区丸の内２丁目４−１' },
		{
			value: '〒103-0013 東京都中央区日本橋人形町２丁目１１−３',
			label: '〒103-0013 東京都中央区日本橋人形町２丁目１１−３'
		},
		{ value: '〒160-0011 東京都新宿区若葉１丁目１０', label: '	〒160-0011 東京都新宿区若葉１丁目１０' },
		{ value: '〒106-0045 東京都港区麻布十番１丁目８−１４', label: '〒106-0045 東京都港区麻布十番１丁目８−１４' }
	]

	return (
		<Box className="m-10 border-1 rounded-4 border-grey-300">
			<Box className="p-8 bg-grey-300">
				<Typography variant="h4">{t('title.filter')}</Typography>
			</Box>
			<Box className="flex p-8 w-full">
				<Box className="flex w-full sm:w-1/2 items-start">
					<Box className="w-full sm:w-1/3 p-8 bg-grey-300 border-grey-300 border-1 rounded-4">
						{t('title.name')}
					</Box>
					<CoreInput name="name" control={control} size="small" className="w-full sm:w-2/3" />
				</Box>
				<Box className="flex w-full sm:w-1/2 items-start mx-8">
					<Box className="w-full sm:w-1/3 p-8 bg-grey-300 border-grey-300 border-1 rounded-4">
						{t('title.area')}
					</Box>
					<CoreAutocomplete
						control={control}
						name="address"
						size="small"
						className="w-full sm:w-2/3"
						placeholder="選択する"
						options={addressOptions}
						returnValueType="enum"
					/>
				</Box>
			</Box>
			<Box className="flex p-8 w-full">
				<Box className="flex w-full sm:w-1/2 items-start">
					<Box className="w-full sm:w-1/3 p-8 bg-grey-300 border-grey-300 border-1 rounded-4">
						{t('title.facility')}
					</Box>
					<CoreInput control={control} name="facility" size="small" className="w-full sm:w-2/3" />
				</Box>

				<Box className="flex w-full sm:w-1/2 items-start mx-8">
					<Box className="w-full sm:w-1/3 p-8 bg-grey-300 border-grey-300 border-1 rounded-4">
						{t('title.type')}
					</Box>
					<CoreAutocomplete
						control={control}
						name="type"
						size="small"
						className="w-full sm:w-2/3"
						placeholder="選択する"
						options={typeOptions}
						returnValueType="enum"
					/>
				</Box>
			</Box>
			<Box className="flex p-8 w-full">
				<Box className="flex w-full sm:w-1/2 items-start">
					<Box className="w-full sm:w-1/3 p-8 bg-grey-300 border-grey-300 border-1 rounded-4">
						{t('title.tag')}
					</Box>
					<CoreInput control={control} name="tag" size="small" className="w-full sm:w-2/3" />
				</Box>

				<Box className="flex w-1/2 items-center mx-8 ">
					<Box className="w-full sm:w-1/3 p-8 bg-grey-300 border-grey-300 border-1 rounded-4">
						{t('title.state')}
					</Box>
					<Box className="border-grey-400 border-1 rounded-4">
						<Box className="grid grid-flow-row-dense grid-cols-2 ml-20">
							<Box className="col-span-1 -my-3">
								<CoreCheckbox control={control} name="checkbox1" label={t('value.express')} />
							</Box>
							<Box className="col-span-1 -my-3">
								<CoreCheckbox
									control={control}
									name="checkbox2"
									label={t('value.non_representation')}
								/>
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>

			<Box className="flex p-8 w-full">
				<Box className="flex w-full sm:w-1/2 items-start">
					<Box className="w-full sm:w-1/3 p-8 bg-grey-300 border-grey-300 border-1 rounded-4">
						{t('title.detail')}
					</Box>
					<CoreInput control={control} name="detail" size="small" className="w-full sm:w-2/3" />
				</Box>

				<Box className="flex w-full sm:w-1/2 mx-8 items-center">
					<Button variant="contained" color="primary" className="ml-auto h-32 mt-[2px]" onClick={handleFilter}>
						{t('btn.search')}
					</Button>
				</Box>
			</Box>
		</Box>
	)
}

//SpotTableFilter.defaultProps = {}

//SpotTableFilter.propTypes = {}

export default React.memo(SpotTableFilter)
