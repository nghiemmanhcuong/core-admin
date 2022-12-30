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
import CoreRadioGroup from '@Core/components/Input/CoreRadioGroup'
import { errorMsg, successMsg } from '@Core/helper/Message'
import Yup from '@Core/helper/Yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { LoadingButton } from '@mui/lab'
import { Box, Button, FormGroup, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import CoreDatePicker from '@Core/components/Input/CoreDatePicker'
import moment from 'moment/moment'
import { useRequest } from 'ahooks'
// import PropTypes from 'prop-types'

const EditNotification = props => {
	const navigate = useNavigate()
	const { state } = useLocation()
	const { id: notiId } = useParams()

	const { data: notiInfo, run: getNotiInfo } = useRequest(notificationService.detail, {
		manual: true,
		onError: (res, params) => {
			if (params) {
				mutate({
					data: []
				})
			} else {
				errorMsg(res?.response?.data?.error_message)
			}
		},
		onSuccess: res => {
			if (res && res.information) {
				reset({
					id: res?.information?.id,
					title: res?.information?.title,
					category: res?.information?.category ?? null,
					summary: res?.information.summary ?? '',
					publish_start: res.information.publish_start ? new Date(res.information.publish_start) : '',
					publish_end: res.information.publish_end ? new Date(res.information.publish_end) : '',
					display: res?.information.display,
					author: res?.information?.author
				})
			}
			console.log(res)
		}
	})

	useEffect(() => {
		if (notiId) {
			getNotiInfo(notiId)
		}
	}, [])

	const { t, notificationTableHandler } = useAdminPageContext()
	const {
		control,
		handleSubmit,
		watch,
		reset,
		formState: { isSubmitting }
	} = useForm({
		mode: 'onTouched',
		defaultValues: {
			id: state?.data?.id ?? '',
			title: '',
			category: null,
			summary: '',
			publish_start: '',
			publish_end: '',
			display: 0,
			author: ''
		},
		resolver: yupResolver(
			Yup.object({
				title: Yup.string().required().trim().min(1).max(30),
				category: Yup.mixed().nullable().required(),
				summary: Yup.string().required(),
				publish_start: Yup.string().required(),
				publish_end: Yup.string().required()
			})
		)
	})

	const onSubmit = handleSubmit(async data => {
		try {
			data.publish_start = moment(data.publish_start).format('YYYY-MM-DD hh:mm:ss')
			data.publish_end = moment(data.publish_end).format('YYYY-MM-DD hh:mm:ss')
			data.author = data.author ? data.author : 'James'
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
						classNameField="bg-grey-300"
						className="mb-16 sm:mb-20"
					/>

					<AdminInput
						label={t('edit.form.label.title')}
						control={control}
						name="title"
						placeholder="Default input"
						className="mb-16 sm:mb-20"
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
								<Typography className="text-black py-4 px-16 rounded-4 bg-yellow mx-8">必須</Typography>{' '}
								{t('edit.form.label.type')}
							</Typography>
						</Box>
						<Box className="w-full sm:w-2/3 sm:flex">
							<CoreAutocomplete
								control={control}
								size="small"
								name="category"
								fullWidth
								variant="outlined"
								returnValueType="enum"
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
					<Box className="flex flex-wrap sm:flex-nowrap mb-20">
						<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
							<Typography variant="h3" color="primary" className="flex items-center">
								<Typography className="text-black py-4 px-16 rounded-4 bg-yellow mx-8">必須</Typography>{' '}
								{t('edit.form.label.period')}
							</Typography>
						</Box>
						<Box className="w-full sm:w-2/3 flex">
							<CoreDatePicker
								control={control}
								name="publish_start"
								size="small"
								className="w-full sm:w-1/3"
								variant="outlined"
								placeholder="Choose..."
								showTimeSelect
								dateFormat="Y-m-d H:i:s"
							/>
							<Typography variant="h3" color="primary" className="mx-8 self-center">
								{t('edit.form.label.to')}
							</Typography>
							<CoreDatePicker
								control={control}
								name="publish_end"
								size="small"
								className="w-full sm:w-1/3"
								variant="outlined"
								placeholder="Choose..."
								showTimeSelect
								dateFormat="Y-m-d H:i:s"
							/>
						</Box>
					</Box>
					<AdminInput
						label={t('edit.form.label.notification')}
						control={control}
						name="summary"
						placeholder="Default input"
						className="mb-16 sm:mb-20"
						size="small"
						multiline
						required
					/>

					<Box className="flex flex-wrap sm:flex-nowrap mb-16 sm:mb-20">
						<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
							<Typography variant="h3" color="primary" className="flex items-center">
								<Typography className="text-black py-4 px-16 rounded-4 bg-yellow mx-8">必須</Typography>{' '}
								{t('edit.form.check_box.label.status')}
							</Typography>
						</Box>
						<Box className="flex rounded-md w-full sm:w-2/3 pl-[15px]" sx={{ border: '1px solid #cccc' }}>
							<CoreRadioGroup
								control={control}
								name="display"
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
					</Box>
					<Box className="flex flex-wrap sm:flex-nowrap items-center mb-20">
						<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
							<Typography variant="h3" color="primary" className="flex items-center">
								<Typography className="text-black py-4 px-16 rounded-4 bg-yellow mx-8">必須</Typography>{' '}
								{t('edit.form.label.creator')}
							</Typography>
						</Box>
						<Box className="w-full sm:w-2/3 flex flex-nowrap">
							<AdminInput
								control={control}
								name="author"
								size="small"
								className="w-full mr-12"
								classNameField="bg-grey-300"
								readOnly
							/>

							<Button variant="contained" color="error" className="ml-auto h-32">
								{t('edit.form.btn.delete')}
							</Button>
							<LoadingButton
								type="submit"
								loading={isSubmitting}
								variant="contained"
								color="primary"
								className="ml-[10px] bg-blue h-32 text-white"
							>
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
