/*
 * Created Date: 22-10-2022, 12:15:34 am
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
import AdminInput from '@App/Admin/components/Input/AdminInput'
import { useAdminPageContext } from '@App/Admin/components/Provider/AdminPageProvider'
import { ROUTER_ADMIN } from '@App/Admin/configs/constants'
import { notificationService } from '@App/Admin/services/notificationService'
import CoreAutocomplete from '@Core/components/Input/CoreAutocomplete'
import CoreCheckbox from '@Core/components/Input/CoreCheckbox'
import CoreInput from '@Core/components/Input/CoreInput'
import CoreRadioGroup from '@Core/components/Input/CoreRadioGroup'
import { errorMsg, successMsg } from '@Core/helper/Message'
import Yup from '@Core/helper/Yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { LoadingButton } from '@mui/lab'
import { Box, Button, FormGroup, Typography } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom'
// import PropTypes from 'prop-types'

const EditNotification = props => {
	const navigate = useNavigate()
	const { state } = useLocation();
	const {data} = state
	console.log('============= data',data)
	const { t, notificationTableHandler } = useAdminPageContext()
	const { control, handleSubmit, watch, formState: {isSubmitting} } = useForm({
		mode: 'onTouched',
		defaultValues: {
			id: data?.id ?? '',
			title: data?.title ?? '',
			category: data?.category ?? null,
			detail: data?.detail ?? ''
			// render: 0,
		},
		resolver: yupResolver(
			Yup.object({
				title: Yup.string().required().trim().min(1).max(30)
			})
		)
	})

	console.log('============= watch()',watch())
	const onSubmit = handleSubmit(async data => {
		try {
			await notificationService.save(data)
			successMsg('submit success!...')
			navigate(ROUTER_ADMIN.notification.list)
		} catch (error) {
			errorMsg(error, 'submit failed!...')
		}
	})

	return (
		<form onSubmit={onSubmit}>
			<Box>
				<Box sx={{ padding: 2 }} className="max-w-lg mx-auto">
					<AdminInput
						label={t('edit.form.label.id')}
						control={control}
						name="id"
						placeholder="Default input"
						size="small"
						readOnly
					/>
					
					<AdminInput
						label={t('edit.form.label.title')}
						control={control}
						name="title"
						placeholder="Default input"
						size="small"
						required
					/>
					<Box className="flex flex-wrap sm:flex-nowrap mb-20">
						<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
							<Typography
								variant="h3"
								color="primary"
								className="self-center flex items-center w-full py-10 sm:py-0"
							>
								{t('edit.form.label.type')} <Typography className="text-error mx-8">必須</Typography>
							</Typography>
						</Box>
						<Box className="w-full sm:w-2/3 sm:flex">
							<CoreAutocomplete
								control={control}
								size="small"
								name="category"
								fullWidth
								variant="outlined"
								returnValueType='enum'
								placeholder="Choose..."
								className="w-full sm:w-1/3"
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
					</Box>
					{/* <Box className="flex flex-wrap sm:flex-nowrap mb-20">
						<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
							<Typography variant="h3" color="primary" className='flex items-center'>
								{t('edit.form.label.period')} <Typography className="text-error mx-8">必須</Typography>
							</Typography>
						</Box>
						<Box className="w-full sm:w-2/3 flex">
							<FormAutocomplete
								control={control}
								size="small"
								fullWidth
								variant="outlined"
								placeholder="Choose..."
								name="period"
								className="w-full"
							/>
							<Typography variant="h3" color="primary" className="mx-8 self-center">
								{t('edit.form.label.to')}
							</Typography>
							<FormAutocomplete
								control={control}
								size="small"
								fullWidth
								variant="outlined"
								placeholder="Choose..."
								name="period_to"
								className="w-full"
							/>
						</Box>
					</Box> */}
					<AdminInput
						label={t('edit.form.label.notification')}
						control={control}
						name="detail"
						placeholder="Default input"
						size="small"
						multiline

					/>
{/* 
					<Box className="flex flex-wrap sm:flex-nowrap mb-16 sm:mb-20">
						<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
							<Typography variant="h3" color="primary" className='flex items-center'>
								{t('edit.form.check_box.label.status')} <Typography className="text-error mx-8">必須</Typography>
							</Typography>
						</Box>
						<Box className="flex rounded-md w-full sm:w-2/3 pl-[15px]" sx={{ border: '1px solid #cccc' }}>
							<CoreRadioGroup 
								control={control} 
								name='render' 
								options={[
									{
										value: 0,
										label: t('edit.form.check_box.label.express')
									},
									{
										value: 1,
										label: t('edit.form.check_box.label.representation')
									}
								]}
								row
							/>
						</Box>
					</Box> */}
					<Box className="flex flex-wrap sm:flex-nowrap mb-20">
						<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
							<Typography variant="h3" color="primary" className='flex items-center'>
								{t('edit.form.label.creator')} <Typography className="text-error mx-8">必須</Typography>
							</Typography>
						</Box>
						<Box className="w-full sm:w-2/3 flex flex-nowrap">
							<CoreInput control={control} name="creator" size="small" className="w-4/5" readOnly />
							
							<Button variant="contained" color="error" className="ml-auto">
							{t('edit.form.btn.delete')}
							</Button>
							<LoadingButton type='submit' loading={isSubmitting} variant="contained" color="primary" className="ml-[10px] bg-blue">
								{t('edit.form.btn.register')}
							</LoadingButton>
						</Box>
					</Box>
				</Box>
			</Box>
		</form>
	)
}

// EditNotification.defaultProps = {}

// EditNotification.propTypes = {}

export default React.memo(EditNotification)
