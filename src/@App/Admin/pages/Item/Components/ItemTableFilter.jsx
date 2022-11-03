/*
 * Created Date: 22-10-2022, 10:26:13 pm
 * Author: Hai Tran
 * Email: you@you.you
 * -----
 * Last Modified:
 * Modified By:
 * -----
 * Copyright (c) 2022 PROS+ Group , Inc
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	----------------------------------------------------------
 */

import FormAutocomplete from '@App/Admin/components/Form/FormAutocomplete'
import { useAdminPageContext } from '@App/Admin/components/Provider/AdminPageProvider'
import { TRANSLATE_ADMIN } from '@App/Admin/configs/constants'
import CoreCheckbox from '@Core/components/Input/CoreCheckbox'
import CoreInput from '@Core/components/Input/CoreInput'
import { Box, Button, Card, TextField, Typography } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
// import PropTypes from 'prop-types'

const ItemTableFilter = props => {
	const { itemTableHandler } = useAdminPageContext()
	const { t } = useTranslation(TRANSLATE_ADMIN.item)
	const handleFilter = () => {
		const params = {
			// TODO: param filter
		}
		itemTableHandler.handleFetchData(params)
	}
	const { control } = useForm({
		mode: 'onTouched',
		defaultValues: {
			name: ''
		}
	})

	return (
		<Box className="m-10 border-1 rounded-4 border-grey-300">
			<Box className="p-8 bg-grey-300">
				<Typography variant="h4">{t('title.filter')}</Typography>
			</Box>
			<Box className="flex p-8 w-full">
				<Box className="flex w-1/2 items-center">
					<Box className="w-1/3 p-8 h-full bg-grey-300 border-grey-300 border-1 rounded-4">
						{t('title.name')}
					</Box>
					<CoreInput control={control} name="name" size="small" className="w-2/3" />
				</Box>
				<Box className="flex w-1/2 items-center mx-8 ">
					<Box className="w-1/3 p-8 h-full bg-grey-300 border-grey-300 border-1 rounded-4">
						{t('title.area')}
					</Box>
					<FormAutocomplete
						control={control}
						name="type_id"
						size="small"
						className="w-2/3"
						fullWidth
						variant="outlined"
						placeholder="Choose..."
					/>
				</Box>
			</Box>
			<Box className="flex p-8 w-full">
				<Box className="flex w-1/2 items-center">
					<Box className="w-1/3 p-8 h-full bg-grey-300 border-grey-300 border-1 rounded-4">
						{t('title.unit')}
					</Box>
					<FormAutocomplete
						control={control}
						name="period_id"
						size="small"
						className="w-2/3"
						fullWidth
						variant="outlined"
						placeholder="Choose..."
					/>
				</Box>
				<Box className="flex w-1/2 items-center mx-8">
					<Box className="w-1/3 p-8 h-full bg-grey-300 border-grey-300 border-1 rounded-4">
						{t('title.state')}
					</Box>
					<Card variant="outlined">
						<Box className="grid grid-flow-row-dense grid-cols-2 ml-5">
							<Box className="col-span-1 -my-3 ml-20">
								<CoreCheckbox control={control} name="express" label={t('value.express')} />
							</Box>
							<Box className="col-span-1 -my-3">
								<CoreCheckbox control={control} name="non_representation" label={t('value.non_representation')} />
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

// ItemTableFilter.defaultProps = {}

// ItemTableFilter.propTypes = {}

export default React.memo(ItemTableFilter)
