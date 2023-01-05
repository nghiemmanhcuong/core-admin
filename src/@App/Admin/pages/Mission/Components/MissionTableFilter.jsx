import { Box } from '@mui/system'
import React from 'react'
import TextField from '@mui/material/TextField'
import { Button, Icon, Card, Typography, FormControlLabel, Checkbox } from '@mui/material'
import FormAutocomplete from '@App/Admin/components/Form/FormAutocomplete'
import FormInputSearch from '@App/Admin/components/Form/FormInputSearch'
import { useAdminPageContext } from '@App/Admin/components/Provider/AdminPageProvider'
import { useTranslation } from 'react-i18next'
import { TRANSLATE_ADMIN } from '@App/Admin/configs/constants'
import { useForm } from 'react-hook-form'
import CoreCheckbox from '@Core/components/Input/CoreCheckbox'
import CoreInputFile from '@Core/components/Input/CoreInputFile'
import CoreInput from '@Core/components/Input/CoreInput'
import CoreAutocomplete from '@Core/components/Input/CoreAutocomplete'

const MissionTableFilter = props => {
	const { missionTableHandler } = useAdminPageContext()
	const { t } = useTranslation(TRANSLATE_ADMIN.mission)
	const handleFilter = () => {
		const params = getValues()
		const valueCheckbox = getValues('display')
		const arraySelected = []

		//eslint-disable-next-line
		for (const value in valueCheckbox) {
			if (valueCheckbox[value]) {
				arraySelected.push(value)
			}
		}

		missionTableHandler.handleFetchData({ ...params, display: arraySelected })
	}

	const { control, getValues } = useForm({
		mode: 'onTouched',
		defaultValues: {
			mission_name: '',
			// clear_type: null,
			card_name: '',
			display: {},
			app_currency_id: null
		}
	})

	const statusOptions = [
		{ value: 0, label: 'すべて' },
		{ value: 1, label: '完走' },
		{ value: 2, label: 'ポイント獲得' }
	]

	const displayOptions = [
		{ value: 0, label: t('value.non_representation') },
		{ value: 1, label: t('value.express') }
	]

	return (
		<Box className="m-10 border-1 rounded-4 border-grey-300">
			<Box className="p-8 bg-grey-300">
				<Typography variant="h4">{t('title.filter')}</Typography>
			</Box>
			<Box className="flex p-8  w-full">
				<Box className="flex w-1/2 items-center  ">
					<Box className="w-1/3 p-8 bg-grey-300 border-grey-300 border-1 rounded-4">{t('title.name')}</Box>
					<CoreInput control={control} name="mission_name" size="small" className="w-full sm:w-2/3" />
				</Box>
				<Box className="flex w-1/2 items-center mx-8 ">
					<Box className="w-1/3 p-8 bg-grey-300 border-grey-300 border-1 rounded-4">
						{t('title.clear_condition')}
					</Box>
					<CoreAutocomplete
						control={control}
						name="clear_type"
						size="small"
						className="w-full sm:w-2/3"
						placeholder="選択する"
						options={statusOptions}
						returnValueType="enum"
					/>
				</Box>
			</Box>
			<Box className="flex p-8  w-full">
				<Box className="flex w-1/2 items-center  ">
					<Box className="w-1/3 p-8 bg-grey-300 border-grey-300 border-1 rounded-4">
						{t('label.card_name')}
					</Box>
					<CoreInput control={control} name="card_name" size="small" className="w-full sm:w-2/3" />
				</Box>
				<Box className="flex w-1/2 items-center mx-8 ">
					<Box className="w-1/3 p-8 bg-grey-300 border-grey-300 border-1 rounded-4">
						{t('label.app_currency')}
					</Box>
					<CoreAutocomplete
						control={control}
						name="app_currency_id"
						size="small"
						placeholder="選択する"
						options={[
							{ value: 1, label: 'Travelo共通ポイント' },
							{ value: 2, label: '通貨名qqllqqllqqll' },
							{ value: 3, label: '通貨名3' },
							{ value: 4, label: '通貨名通貨名通貨名通貨名通貨名通貨名通貨名通貨名通貨名通貨名' },
							{ value: 5, label: '通貨名テスト' },
							{ value: 6, label: 'あああああああああああああああ' },
							{ value: 7, label: '通貨名coin' },
							{ value: 8, label: '通貨名ドル' },
							{ value: 9, label: '通貨名円' },
							{ value: 10, label: '通貨名bitCoin' },
							{ value: 11, label: '江戸城下町ポイント' },
							{ value: 12, label: '北の大地ポイント' }
						]}
						returnValueType="enum"
						className="w-full sm:w-2/3"
					/>
				</Box>
			</Box>
			<Box className="flex p-8  w-full">
				<Box className="flex w-1/2 items-center  "></Box>
				<Box className="flex w-1/2 items-center mx-8 ">
					<Box className="w-1/3 p-8 bg-grey-300 border-grey-300 border-1 rounded-4">
						{t('title.situation')}
					</Box>
					<Box className="border-grey-400 border-1 rounded-4">
						<Box className="grid grid-flow-row-dense grid-cols-2 ml-5">
							{displayOptions?.map(item => (
								<CoreCheckbox
									control={control}
									className="col-span-1 -my-3 ml-20"
									name={`display.${item?.value}`}
									label={item?.label}
								/>
							))}
						</Box>
					</Box>
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

export default React.memo(MissionTableFilter)
