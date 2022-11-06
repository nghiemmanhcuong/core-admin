/*
 * Created Date: 24-10-2022, 11:31:04 pm
 * Author: TheAnh58
 * Email: you@you.you
 * -----
 * Last Modified: Sun Nov 06 2022
 * Modified By: haitran
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
import { Button, Icon, InputAdornment, Typography, FormControlLabel, Checkbox, Card } from '@mui/material'
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

const AccountTableFilter = props => {
	const { accountTableHandler } = useAdminPageContext()
	const { t } = useTranslation(TRANSLATE_ADMIN.account)
	const handleFilter = () => {
		const params = getValues()
		accountTableHandler.handleFetchData(params)
	}

	const { control, getValues } = useForm({
		mode: 'onTouched',
		defaultValues: {
			name: '',
			mail: '',
			role: '',
			checkbox1: false,
			checkbox2: false
		}
	})

	const roleOptions = [
		{
			value: 'admin',
			label: t('edit.form.option.label.admin')
		},
		{
			value: 'other',
			label: t('edit.form.option.label.other')
		}
	]

	const emailOptions = [
		{ value: 'phantrung696@gmail.com', label: 'phantrung696@gmail.com' },
		{ value: 'kazuya.takematsu@acrospera.com', label: 'kazuya.takematsu@acrospera.com' },
		{ value: 'test@gmail.com', label: 'test@gmail.com' },
		{ value: 'driver@gmail.com', label: 'driver@gmail.com' },
		{ value: 'tran@gmail.com', label: 'tran@gmail.com' }
	]

	return (
		<Box className="m-10 border-1 rounded-4 border-grey-300">
			<Box className="p-10 bg-grey-300">
				<Typography variant="h4">{t('title.filter')}</Typography>
			</Box>
			<Box className="flex p-10 w-full">
				<Box className="flex w-full sm:w-1/2 items-center">
					<Box className="w-full sm:w-1/3 p-8 bg-grey-300 border-grey-300 border-1 rounded-4">
						{t('title.account_name')}
					</Box>
					<CoreInput control={control} name="name" size="small" className="w-full sm:w-2/3" />
				</Box>
				<Box className="flex w-1/2 items-center mx-8">
					<Box className="w-full sm:w-1/3 p-8 bg-grey-300 border-grey-300 border-1 rounded-4">
						{t('title.email')}
					</Box>
					<CoreAutocomplete
						control={control}
						name="email"
						size="small"
						placeholder="Default Select"
						options={emailOptions}
						returnValueType="enum"
						className="w-full sm:w-2/3"
					/>
				</Box>
			</Box>
			<Box className="flex p-10  w-full">
				<Box className="flex w-full sm:w-1/2 items-center">
					<Box className="w-full sm:w-1/3 p-8 bg-grey-300  border-grey-300 border-1 rounded-4">
						{t('title.roll')}
					</Box>
					<CoreAutocomplete
						control={control}
						name="role"
						size="small"
						className="w-full sm:w-2/3"
						placeholder="Default Select"
						options={roleOptions}
						returnValueType="enum"
					/>
				</Box>
				<Box className="flex w-1/2 items-center mx-8 ">
					{/* <Box className="w-1/3 px-10 h-full bg-grey-300 border-grey-300 border-1 rounded-4">
						{t('title.state')}
					</Box> */}
					{/* <FormControlLabel control={<Checkbox />} label={t('value.express')} className="ml-[5px]" /> */}
					{/* <Box className="border-1 border-grey-300 rounded-4 flex">
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
					</Box> */}
					<Box className="w-full sm:w-1/3 p-8 bg-grey-300  border-grey-300 border-1 rounded-4">
						{t('title.state')}
					</Box>
					<Card variant="outlined">
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
					</Card>

					<Button variant="contained" color="primary" className="ml-auto" onClick={handleFilter}>
						{t('btn.search')}
					</Button>
				</Box>
			</Box>
		</Box>
	)
}

//AccountTableFilter.defaultProps = {}

//AccountTableFilter.propTypes = {}

export default React.memo(AccountTableFilter)
