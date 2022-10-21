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
import { useAdminPageContext } from '@App/Admin/components/Provider/AdminPageProvider'
import CoreCheckbox from '@Core/components/Input/CoreCheckbox'
import CoreInput from '@Core/components/Input/CoreInput'
import CoreRadioGroup from '@Core/components/Input/CoreRadioGroup'
import Yup from '@Core/helper/Yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button, FormGroup, Typography } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
// import PropTypes from 'prop-types'

const EditNotification = props => {
	const { t, notificationTableHandler } = useAdminPageContext()
	const sex = [
		{
			value: 1,
			label: t('edit.form.check_box.label.express')
		},
		{
			value: 2,
			label: t('edit.form.check_box.label.representation')
		}
	]
	const { control } = useForm({
		mode: 'onTouched',
		defaultValues: {
			title: ''
		},
		resolver: yupResolver(
			Yup.object({
				title: Yup.string().required().trim().min(1).max(30)
			})
		)
	})

	return (
		<Box>
			<Box sx={{ padding: 2 }}>
				<Box className="flex flex-wrap sm:flex-nowrap mb-16 sm:mb-20">
					<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
						<Typography variant="h3" color="primary">
							{t('edit.form.label.id')}
						</Typography>
					</Box>
					<CoreInput control={control} name="id" size="small" className="w-full sm:w-2/3" />
				</Box>
				<Box className="flex flex-wrap sm:flex-nowrap mb-20">
					<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
						<Typography variant="h3" color="primary">
							{t('edit.form.label.title')}
						</Typography>
					</Box>
					<CoreInput control={control} name="title" size="small" className="w-full sm:w-2/3" />
				</Box>
				<Box className="flex flex-wrap sm:flex-nowrap mb-20">
					<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
						<Typography
							variant="h3"
							color="primary"
							className="self-center w-full py-10 sm:py-0 sm:w-1/3 sm:text-center"
						>
							{t('edit.form.label.type')}
						</Typography>
					</Box>
					<Box className="w-full sm:w-2/3 sm:flex">
						<FormAutocomplete
							control={control}
							size="small"
							fullWidth
							variant="outlined"
							placeholder="Choose..."
							name="type"
							className="w-full sm:w-1/3"
						/>
					</Box>
				</Box>
				<Box className="flex flex-wrap sm:flex-nowrap mb-20">
					<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
						<Typography variant="h3" color="primary">
							{t('edit.form.label.period')}
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
				</Box>

				<Box className="flex flex-wrap sm:flex-nowrap mb-16 sm:mb-20">
					<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
						<Typography variant="h3" color="primary">
							{t('edit.form.label.notification')}
						</Typography>
					</Box>
					<CoreInput
						control={control}
						name="notification"
						size="small"
						multiline
						className="w-full sm:w-2/3"
					/>
				</Box>

				<Box className="flex flex-wrap sm:flex-nowrap mb-16 sm:mb-20">
					<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
						<Typography variant="h3" color="primary">
							{t('edit.form.label.situation')}
						</Typography>
					</Box>
					<Box className="rounded-md w-full sm:w-2/3 pl-[15px]" sx={{ border: '1px solid #cccc' }}>
						<CoreRadioGroup
							className="flex-row"
							control={control}
							name="description"
							options={sex}
							row="true"
						/>
					</Box>
				</Box>
				<Box className="flex flex-wrap sm:flex-nowrap mb-20">
					<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
						<Typography variant="h3" color="primary">
							{t('edit.form.label.creator')}
						</Typography>
					</Box>
					<Box className="w-full sm:w-2/3 flex flex-nowrap">
						<CoreInput control={control} name="creator" size="small" className="w-4/5" />
						<Button variant="contained" color="primary" className="ml-auto w-1/5">
							{t('edit.form.btn.selection')}
						</Button>
					</Box>
				</Box>

				<Box className="flex flex-wrap sm:flex-nowrap mb-20">
					<Button variant="contained" color="error" className="ml-auto">
						{t('edit.form.btn.delete')}
					</Button>
					<Button variant="contained" color="primary" className="ml-[10px]">
						{t('edit.form.btn.register')}
					</Button>
				</Box>
			</Box>
		</Box>
	)
}

// EditNotification.defaultProps = {}

// EditNotification.propTypes = {}

export default React.memo(EditNotification)
