/*
 * Created Date: 21-10-2022, 11:20:29 pm
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
import { errorMsg } from '@Core/helper/Message'
import { Button, Card, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
// import PropTypes from 'prop-types'

const NotificationTableFilter = props => {
	const { notificationTableHandler } = useAdminPageContext()
	const { t } = useTranslation(TRANSLATE_ADMIN.notification)
	const { control, getValues } = useForm({
		mode: 'onTouched',
		defaultValues: {
			title: '',
			category: '',
			summary: '',
			checkbox1: false,
			checkbox2: false
		}
	})

	const handleFilter = async () => {
		try {
			const params = getValues()
			await notificationTableHandler.handleFetchData({ ...params, page: 1 })
		} catch (error) {
			errorMsg(error?.response?.data?.error_message)
		}
	}

	return (
		<Box className="m-10 border-1 rounded-4 border-grey-300">
			<Box className="p-8 bg-grey-300">
				<Typography variant="h4" className="font-500">{t('title.filter')}</Typography>
			</Box>
			<Box className="flex p-8  w-full">
				<Box className="flex w-1/2 items-center mx-8">
					<Box className="w-1/3 p-8 bg-grey-300 border-grey-300 border-1 rounded-4">{t('title.title')}</Box>
					<CoreInput control={control} name="title" size="small" className="w-2/3" />
				</Box>
				<Box className="flex w-1/2 items-center mx-8 ">
					<Box className="w-1/3 p-8 bg-grey-300 border-grey-300 border-1 rounded-4">{t('title.type')}</Box>
					<CoreAutocomplete
						control={control}
						size="small"
						name="category"
						fullWidth
						variant="outlined"
						returnValueType="enum"
						placeholder="選択する"
						className="w-2/3"
						options={[
							{
								value: '重要',
								label: '重要'
							},
							{
								value: '重要1',
								label: '重要1'
							}
						]}
					/>
				</Box>
				{/* <Button variant="contained" color="primary" className="ml-auto invisible">
					{t('btn.search')}
				</Button> */}
			</Box>
			<Box className="flex p-8  w-full">
				<Box className="flex w-1/2 mx-8 items-center">
					<Box className="w-1/3 p-8 bg-grey-300 border-grey-300 border-1 rounded-4">{t('title.period')}</Box>
					<CoreAutocomplete
						control={control}
						placeholder="デフォルト選択"
						name="123"
						size="small"
						className="w-2/3"
					/>
				</Box>
				<Box className="flex w-1/2 items-center mx-8 ">
					<Box className="w-1/3 p-8 h-full bg-grey-300 border-grey-300 border-1 rounded-4">
						{t('title.state')}
					</Box>
					<Box className="border-grey-400 border-1 rounded-4">
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
					</Box>
				</Box>
				{/* <Box className="w-full">
					<CoreInputFile control={control} name="image" />
				</Box> */}
			</Box>
			<Box className="flex p-8  w-full">
				<Box className="flex w-1/2 mx-8 items-center">
					<Box className="w-1/3 p-8 bg-grey-300 border-grey-300 border-1 rounded-4">{t('title.detail')}</Box>
					<CoreInput control={control} name="detail" size="small" className="w-2/3" />
				</Box>
				<Box className="flex w-1/2 mx-8 items-center">
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

// NotificationTableFilter.defaultProps = {}

// NotificationTableFilter.propTypes = {}

export default React.memo(NotificationTableFilter)
