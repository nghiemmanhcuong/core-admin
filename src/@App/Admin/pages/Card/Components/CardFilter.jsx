/*
 * Created Date: 14-11-2022, 10:02:10 pm
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

import { useAdminPageContext } from '@App/Admin/components/Provider/AdminPageProvider'
import { TRANSLATE_ADMIN } from '@App/Admin/configs/constants'
import CoreAutocomplete from '@Core/components/Input/CoreAutocomplete'
import CoreInput from '@Core/components/Input/CoreInput'
import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
// import PropTypes from 'prop-types'

const CardFilter = props => {
	const { cardTableHandler } = useAdminPageContext()
	const { t } = useTranslation(TRANSLATE_ADMIN.card)

	const { control, getValues } = useForm({
		mode: 'onTouched',
		defaultValues: {
			name: '',
			app_currency_id: null
		}
	})

	const handleFilter = async () => {
		try {
			const data = getValues()
			const params = {
				...data
			}
			await cardTableHandler.handleFetchData(params)
		} catch (error) {
			console.log('============= error', error)
		}
	}
	return (
		<Box className="m-10 border-1 rounded-4 border-grey-300">
			<Box className="p-8 bg-grey-300">
				<Typography variant="h4">検索条件</Typography>
			</Box>
			<Box className="flex p-8 w-full">
				<Box className="flex w-1/2 items-center">
					<Box className="w-1/3 p-8 bg-grey-300 border-grey-300 border-1 rounded-4">{t('label.name')}</Box>
					<CoreInput control={control} name="name" size="small" className="w-2/3" />
				</Box>
				<Box className="flex w-1/2 items-center mx-8 ">
					<Box className="w-1/3 p-8 bg-grey-300 border-grey-300 border-1 rounded-4">
						{t('label.app_currency')}
					</Box>
					<CoreAutocomplete
						control={control}
						name="app_currency_id"
						size="small"
						className="w-2/3"
						returnValueType="enum"
						placeholder="Choose..."
						options={[
							{
								value: 1,
								label: 'Travelo共通ポイント'
							},
							{
								value: 2,
								label: '通貨名qqllqqllqqll'
							},
							{
								value: 3,
								label: '通貨名3'
							},
							{
								value: 4,
								label: '通貨名通貨名通貨名通貨名通貨名通貨名通貨名通貨名通貨名通貨名'
							},
							{
								value: 5,
								label: '通貨名テスト'
							},
							{
								value: 6,
								label: 'あああああああああああああああ'
							},
							{
								value: 7,
								label: '通貨名coin'
							},
							{
								value: 8,
								label: '通貨名ドル'
							},
							{
								value: 9,
								label: '通貨名円'
							},
							{
								value: 10,
								label: '通貨名bitCoin'
							},
							{
								value: 11,
								label: '江戸城下町ポイント'
							},
							{
								value: 12,
								label: '北の大地ポイント'
							}
						]}
					/>
				</Box>
			</Box>

			<Box className="flex p-8  w-full">
				<Box className="flex w-1/2 items-center mx-8"></Box>
				<Box className="flex w-1/2 items-center mx-8">
					<Button variant="contained" color="primary" className="ml-auto" onClick={handleFilter}>
						検索
					</Button>
				</Box>
			</Box>
		</Box>
	)
}

// CardFilter.defaultProps = {}

// CardFilter.propTypes = {}

export default React.memo(CardFilter)
