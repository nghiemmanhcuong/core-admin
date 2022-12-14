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
			display: arraySelected
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
				<Typography variant="h4">{t('title.filter')}</Typography>
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
						placeholder="Choose..."
						name="exchange_area"
						className="w-2/3"
						options={[
							{ value: 1, label: '北海道' },
							{ value: 2, label: '青森県' },
							{ value: 3, label: '岩手県' },
							{ value: 4, label: '宮城県' },
							{ value: 5, label: '秋田県' },
							{ value: 6, label: '山形県' },
							{ value: 7, label: '福島県' },
							{ value: 8, label: '茨城県' },
							{ value: 9, label: '栃木県' },
							{ value: 10, label: '群馬県' },
							{ value: 11, label: '埼玉県' },
							{ value: 12, label: '千葉県' },
							{ value: 13, label: '東京都' },
							{ value: 14, label: '神奈川県' },
							{ value: 15, label: '新潟県' },
							{ value: 16, label: '富山県' },
							{ value: 17, label: '石川県' },
							{ value: 18, label: '福井県' },
							{ value: 19, label: '山梨県' },
							{ value: 20, label: '長野県' },
							{ value: 21, label: '岐阜県' },
							{ value: 22, label: '静岡県' },
							{ value: 23, label: '愛知県' },
							{ value: 24, label: '三重県' },
							{ value: 25, label: '滋賀県' },
							{ value: 26, label: '京都府' },
							{ value: 27, label: '大阪府' },
							{ value: 28, label: '兵庫県' },
							{ value: 29, label: '奈良県' },
							{ value: 30, label: '和歌山県' },
							{ value: 31, label: '鳥取県' },
							{ value: 32, label: '島根県' },
							{ value: 33, label: '岡山県' },
							{ value: 34, label: '広島県' },
							{ value: 35, label: '山口県' },
							{ value: 36, label: '徳島県' },
							{ value: 37, label: '香川県' },
							{ value: 38, label: '愛媛県' },
							{ value: 39, label: '高知県' },
							{ value: 40, label: '福岡県' },
							{ value: 41, label: '佐賀県' },
							{ value: 42, label: '長崎県' },
							{ value: 43, label: '熊本県' },
							{ value: 44, label: '大分県' },
							{ value: 45, label: '宮崎県' },
							{ value: 46, label: '鹿児島県' },
							{ value: 47, label: '沖縄県' }
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
						placeholder="Choose..."
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
