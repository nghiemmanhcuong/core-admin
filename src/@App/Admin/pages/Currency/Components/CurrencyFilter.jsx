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

const CurrencyFilter = props => {
	const { currencyTableHandler } = useAdminPageContext()
	const { t } = useTranslation(TRANSLATE_ADMIN.currency)
	const handleFilter = () => {
		const params = {
			// TODO : param filter
		}
		currencyTableHandler.handleFetchData(params)
	}
	const { control } = useForm({
		mode: 'onTouched',
		defaultValues: {
			firstname: '',
			checkbox: false
		},
		resolver: yupResolver(
			Yup.object({
				firstname: Yup.string().required()
			})
		)
	})

	return (
		<Box className="m-10 border-1 rounded-4 border-grey-300">
			<Box className="p-10 bg-grey-300">
				<Typography variant="h4">検索条件</Typography>
			</Box>
			<Box className="flex p-10 w-full">
				<Box className="flex w-1/2 items-start  ">
					<Box className="w-1/3 px-10 h-full bg-grey-300 pt-6 mr-[-2px] border-grey-300 border-1 rounded-l-4">
						{t('title.name')}
					</Box>
					<TextField size="small" className="w-2/3" fullWidth variant="outlined" />
				</Box>
				<Box className="flex w-1/2 items-start mx-8 ">
					<Box className="w-1/3 px-10 h-full bg-grey-300 pt-6 mr-[-2px] border-grey-300 border-1 rounded-l-4">
						{t('title.date')}
					</Box>
					<FormAutocomplete
						control={control}
						name="course"
						size="small"
						className="w-2/3"
						fullWidth
						variant="outlined"
						placeholder="Choose..."
					/>
				</Box>
			</Box>
			<Box className="flex p-10  w-full">
				<Box className="flex w-1/2 items-start  ">
					<Box className="w-1/3 px-10 h-full bg-grey-300 pt-6 mr-[-2px] border-grey-300 border-1 rounded-l-4">
						{t('title.name_currency')}
					</Box>
					<TextField size="small" className="w-2/3" fullWidth variant="outlined" />
				</Box>
				<Box className="flex w-1/2 items-start mx-8 ">
					<Box className="w-1/3 px-10 h-full bg-grey-300 pt-6 mr-[-2px] border-grey-300 border-1 rounded-l-4">
						{t('title.situation')}
					</Box>
					<Box className="border-grey-400 border-1 rounded-4">
						<Box className="grid grid-flow-row-dense grid-cols-2 ml-5">
							<Box className="col-span-1 -my-3 ml-20">
								<CoreCheckbox control={control} name="checkbox" label={t('value.express')} />
							</Box>
							<Box className="col-span-1 -my-3">
								<CoreCheckbox control={control} name="checkbox1" label={t('value.non_representation')} />
							</Box>
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
