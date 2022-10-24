/*
 * Created Date: 24-10-2022, 11:31:04 pm
 * Author: TheAnh58
 * Email: you@you.you
 * -----
 * Last Modified: Mon Oct 24 2022
 * Modified By: TheAnh58
 * -----
 * Copyright (c) 2022 PROS+ Group , Inc
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	----------------------------------------------------------
 */

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

const AccountTableFilter = props => {
	const { accountTableHandler } = useAdminPageContext()
	const { t } = useTranslation(TRANSLATE_ADMIN.account)
	const handleFilter = () => {
		const params = {
			// TODO : param filter
		}
		// accountTableHandler.handleFetchData(params)
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
			<Box className="flex p-10  w-full">
				<Box className="flex w-1/2 items-start  ">
					<Box className="w-1/3 px-10 h-full bg-grey-300 pt-6 mr-[-2px] border-grey-300 border-1 rounded-l-4">
						{t('title.account_name')}
					</Box>
					<TextField size="small" className="w-2/3" fullWidth variant="outlined" />
				</Box>
				<Box className="flex w-1/2 items-start mx-8 ">
					<Box className="w-1/3 px-10 h-full bg-grey-300 pt-6 mr-[-2px] border-grey-300 border-1 rounded-l-4">
						{t('title.authority')}
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
				<Button variant="contained" color="primary" className="ml-auto invisible">
					{t('btn.search')}
				</Button>
			</Box>
			<Box className="flex p-10  w-full">
				<Box className="flex w-1/2 items-start  ">
					<Box className="w-1/3 px-10 h-full bg-grey-300 pt-6 mr-[-2px] border-grey-300 border-1 rounded-l-4">
						{t('title.roll')}
					</Box>
					<FormAutocomplete
						control={control}
						name="spot_id"
						size="small"
						className="w-2/3"
						fullWidth
						variant="outlined"
						placeholder="Default Select"
					/>
				</Box>
				<Box className="flex w-1/2 items-start mx-8 ">
					<Box className="w-1/3 px-10 h-full bg-grey-300 pt-6 mr-[-2px] border-grey-300 border-1 rounded-l-4">
						{t('title.state')}
					</Box>
					{/* <FormControlLabel control={<Checkbox />} label={t('value.express')} className="ml-[5px]" /> */}
					<CoreCheckbox control={control} name="express" label={t('value.express')} className="ml-[5px]" />
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
	)
}

//AccountTableFilter.defaultProps = {}

//AccountTableFilter.propTypes = {}

export default React.memo(AccountTableFilter)
