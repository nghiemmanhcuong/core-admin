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
import CoreDatePicker from '@Core/components/Input/CoreDatePicker'

const CurrencyFilter = props => {
	const { currencyTableHandler } = useAdminPageContext()
	const { t } = useTranslation(TRANSLATE_ADMIN.currency)
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

		currencyTableHandler.handleFetchData({
			...params,
			display: arraySelected,
			available_date: params?.available_date
				? moment(params?.available_date).add(7, 'hours').format('YYYY-MM-DD')
				: undefined,
			id: +params?.id
		})
	}
	const { control, getValues } = useForm({
		mode: 'onTouched',
		defaultValues: {
			id: null,
			// name: null,
			// unit: null,
			// available_date: null,
			display: []
		}
	})

	const displayOptions = [
		{ value: 0, label: t('value.non_representation') },
		{ value: 1, label: t('value.express') }
	]

	return (
		<Box className="m-10 border-1 rounded-4 border-grey-300">
			<Box className="p-10 bg-grey-300">
				<Typography variant="h4">検索条件</Typography>
			</Box>
			<Box className="flex p-10 w-full">
				<Box className="flex w-1/2 items-start">
					<Box className="w-1/3 px-10 h-full bg-grey-300 pt-6 mr-[-2px] border-grey-300 border-1 rounded-l-4">
						{/* {t('title.name')} */}ID
					</Box>
					<CoreInput
						control={control}
						name="id"
						size="small"
						className="w-2/3"
						fullWidth
						variant="outlined"
					/>
				</Box>
				<Box className="flex w-1/2 items-start mx-8">
					<Box className="w-1/3 px-10 h-full bg-grey-300 pt-6 mr-[-2px] border-grey-300 border-1 rounded-l-4">
						{t('title.name')}
					</Box>
					<CoreInput
						control={control}
						name="name"
						size="small"
						className="w-2/3"
						fullWidth
						variant="outlined"
					/>
				</Box>
			</Box>

			<Box className="flex p-10 w-full">
				<Box className="flex w-1/2 items-start">
					<Box className="w-1/3 px-10 h-full bg-grey-300 pt-6 mr-[-2px] border-grey-300 border-1 rounded-l-4">
						アプリ内通貨単位
					</Box>
					<CoreInput
						control={control}
						name="unit"
						size="small"
						className="w-2/3"
						fullWidth
						variant="outlined"
					/>
				</Box>
				<Box className="flex w-1/2 items-start mx-8">
					<Box className="w-1/3 px-10 h-full bg-grey-300 pt-6 mr-[-2px] border-grey-300 border-1 rounded-l-4">
						{t('title.date')}
					</Box>

					<CoreDatePicker control={control} name="available_date" size="small" className="w-2/3" />
				</Box>
			</Box>
			<Box className="flex p-10  w-full">
				<Box className="flex w-1/2 items-start">
					{/* <Box className="w-1/3 px-10 h-full bg-grey-300 pt-6 mr-[-2px] border-grey-300 border-1 rounded-l-4">
						{t('title.name_currency')}
					</Box>
					<TextField size="small" className="w-2/3" fullWidth variant="outlined" /> */}
				</Box>
				<Box className="flex w-1/2 items-start mx-8">
					<Box className="w-1/3 px-10 h-full bg-grey-300 pt-6 mr-[-2px] border-grey-300 border-1 rounded-l-4">
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
					<Button variant="contained" color="primary" className="ml-auto" onClick={handleFilter}>
						{t('btn.search')}
					</Button>
				</Box>
			</Box>
		</Box>
	)
}

export default React.memo(CurrencyFilter)
