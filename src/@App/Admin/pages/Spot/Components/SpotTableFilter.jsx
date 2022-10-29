import { Box } from '@mui/system'
import React from 'react'
import TextField from '@mui/material/TextField'
import { Button, Icon, InputAdornment, Typography, FormControlLabel, Checkbox } from '@mui/material'
import FormAutocomplete from '@App/Admin/components/Form/FormAutocomplete'
import FormInputSearch from '@App/Admin/components/Form/FormInputSearch'
import { useAdminPageContext } from '@App/Admin/components/Provider/AdminPageProvider'
import { useTranslation } from 'react-i18next'
import { TRANSLATE_ADMIN } from '@App/Admin/configs/constants'
import { useForm } from 'react-hook-form'
import CoreCheckbox from '@Core/components/Input/CoreCheckbox'
import CoreInputFile from '@Core/components/Input/CoreInputFile'

const SpotTableFilter = props => {
	const { spotTableHandler } = useAdminPageContext()
	const { t } = useTranslation(TRANSLATE_ADMIN.spot)
	const handleFilter = () => {
		const params = {
			// TODO : param filter
		}
		spotTableHandler.handleFetchData(params)
	}

	const { control } = useForm({
		mode: 'onTouched',
		defaultValues: {}
	})

	return (
		<Box className="m-10 border-1 rounded-4 border-grey-300">
			<Box className="p-10 bg-grey-300">
				<Typography variant="h4">{t('title.filter')}</Typography>
			</Box>
			<Box className="flex p-10 w-full">
				<Box className="flex w-1/2 items-start">
					<Box className="w-1/3 px-10 h-full bg-grey-300 pt-6 mr-[-2px] border-grey-300 border-1 rounded-l-4">
						{t('title.name')}
					</Box>
					<TextField size="small" className="w-2/3" fullWidth variant="outlined" />
				</Box>
				<Box className="flex w-1/2 items-start mx-8">
					<Box className="w-1/3 px-10 h-full bg-grey-300 pt-6 mr-[-2px] border-grey-300 border-1 rounded-l-4">
						{t('title.tag')}
					</Box>
					<FormAutocomplete
						control={control}
						name="spot_id"
						size="small"
						className="w-2/3"
						fullWidth
						variant="outlined"
						placeholder="Choose..."
					/>
				</Box>
			</Box>
			<Box className="flex p-10 w-full">
				<Box className="flex w-full sm:w-1/2 rounded-md">
					<Box className="w-full sm:w-1/3 px-10 h-full bg-grey-300 mr-[-2px] border-grey-300 border-1 rounded-l-4">
						{t('title.area')}
					</Box>
					<TextField size="small" className="w-full sm:w-2/3" fullWidth variant="outlined" />
				</Box>
				<Box className="flex w-full sm:w-1/2 rounded-md">
					<Box className="w-1/3 px-10 h-full bg-grey-300 mr-[-2px] border-grey-300 border-1 rounded-l-4">
						{t('title.state')}
					</Box>
					{/* <FormControlLabel control={<Checkbox />} label={t('value.express')} className="ml-[5px]" /> */}
					<Box className="rounded-r-4 flex px-[10px]" sx={{ border: '1px solid #cccc' }}>
						<CoreCheckbox
							control={control}
							name="express"
							label={t('value.express')}
							className="ml-[5px]"
						/>
						<CoreCheckbox
							control={control}
							name="non_representation"
							label={t('value.non_representation')}
							className="ml-[5px]"
						/>
					</Box>

					<Button variant="contained" color="primary" className="ml-auto" onClick={handleFilter}>
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
