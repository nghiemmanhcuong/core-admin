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
import CoreAutocomplete from '@Core/components/Input/CoreAutocomplete'
import CoreCheckbox from '@Core/components/Input/CoreCheckbox'
import CoreInput from '@Core/components/Input/CoreInput'
import { Box, Button, Card, TextField, Typography } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
// import PropTypes from 'prop-types'

const ItemTableFilter = props => {
	const { itemTableHandler, currencies } = useAdminPageContext()
	const { t } = useTranslation(TRANSLATE_ADMIN.item)
	const handleFilter = () => {
		const data = getValues()
		const valueCheckbox = getValues('display')
		const arraySelected = []

		//eslint-disable-next-line
		for (const value in valueCheckbox) {
			if (valueCheckbox[value]) {
				arraySelected.push(value)
			}
		}

		const params = {
			...data,
			display: arraySelected,
			page: 1
		}
		itemTableHandler.handleFetchData(params)
	}

	const { control, getValues } = useForm({
		mode: 'onTouched',
		defaultValues: {
			id: null,
			name: '',
			app_currency_id: null,
			exchange_area: null,
			display: {}
		}
	})

	const displayOptions = [
		{ value: 0, label: t('value.non_representation') },
		{ value: 1, label: t('value.express') }
	]

	return (
		<Box className="m-10 border-1 rounded-4 border-grey-300">
			<Box className="p-8 bg-grey-300">
				<Typography variant="h4" className="font-500">
					{t('title.filter')}
				</Typography>
			</Box>
			<Box className="flex p-8 w-full">
				<Box className="flex w-1/2 items-center">
					<Box className="w-1/3 p-8 h-full bg-grey-300 border-grey-300 border-1 rounded-4">ID</Box>
					<CoreInput control={control} name="id" size="small" className="w-2/3" />
				</Box>
				<Box className="flex w-1/2 items-center mx-8 ">
					<Box className="w-1/3 p-8 h-full bg-grey-300 border-grey-300 border-1 rounded-4">
						{t('title.name')}
					</Box>
					<CoreInput control={control} name="name" size="small" className="w-2/3" />
				</Box>
			</Box>
			<Box className="flex p-8 w-full">
				<Box className="flex w-1/2 items-center">
					<Box className="w-1/3 p-8 h-full bg-grey-300 border-grey-300 border-1 rounded-4">
						{t('title.area')}
					</Box>
					<CoreAutocomplete
						control={control}
						size="small"
						fullWidth
						variant="outlined"
						placeholder="????????????"
						name="exchange_area"
						className="w-2/3"
						options={[
							{ value: 1, label: '?????????' },
							{ value: 2, label: '?????????' },
							{ value: 3, label: '?????????' },
							{ value: 4, label: '?????????' },
							{ value: 5, label: '?????????' },
							{ value: 6, label: '?????????' },
							{ value: 7, label: '?????????' },
							{ value: 8, label: '?????????' },
							{ value: 9, label: '?????????' },
							{ value: 10, label: '?????????' },
							{ value: 11, label: '?????????' },
							{ value: 12, label: '?????????' },
							{ value: 13, label: '?????????' },
							{ value: 14, label: '????????????' },
							{ value: 15, label: '?????????' },
							{ value: 16, label: '?????????' },
							{ value: 17, label: '?????????' },
							{ value: 18, label: '?????????' },
							{ value: 19, label: '?????????' },
							{ value: 20, label: '?????????' },
							{ value: 21, label: '?????????' },
							{ value: 22, label: '?????????' },
							{ value: 23, label: '?????????' },
							{ value: 24, label: '?????????' },
							{ value: 25, label: '?????????' },
							{ value: 26, label: '?????????' },
							{ value: 27, label: '?????????' },
							{ value: 28, label: '?????????' },
							{ value: 29, label: '?????????' },
							{ value: 30, label: '????????????' },
							{ value: 31, label: '?????????' },
							{ value: 32, label: '?????????' },
							{ value: 33, label: '?????????' },
							{ value: 34, label: '?????????' },
							{ value: 35, label: '?????????' },
							{ value: 36, label: '?????????' },
							{ value: 37, label: '?????????' },
							{ value: 38, label: '?????????' },
							{ value: 39, label: '?????????' },
							{ value: 40, label: '?????????' },
							{ value: 41, label: '?????????' },
							{ value: 42, label: '?????????' },
							{ value: 43, label: '?????????' },
							{ value: 44, label: '?????????' },
							{ value: 45, label: '?????????' },
							{ value: 46, label: '????????????' },
							{ value: 47, label: '?????????' }
						]}
						returnValueType="enum"
					/>
				</Box>
				<Box className="flex w-1/2 items-center mx-8">
					<Box className="w-1/3 p-8 h-full bg-grey-300 border-grey-300 border-1 rounded-4">
						{t('title.unit')}
					</Box>

					<CoreAutocomplete
						control={control}
						name="app_currency_id"
						size="small"
						placeholder="????????????"
						options={currencies?.app_currency}
						valuePath="id"
						labelPath="name"
						returnValueType="enum"
						className="w-2/3"
					/>
				</Box>
			</Box>
			<Box className="flex p-8 w-full">
				<Box className="flex w-1/2 items-center"></Box>
				<Box className="flex w-1/2 items-center mx-8">
					<Box className="w-1/3 p-8 h-full bg-grey-300 border-grey-300 border-1 rounded-4">
						{t('title.state')}
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
					<Button
						variant="contained"
						color="primary"
						className="ml-auto h-32 mt-[2px]"
						onClick={handleFilter}
					>
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
