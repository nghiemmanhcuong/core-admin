/*
 * Created Date: 12-10-2022, 3:36:47 pm
 * Author: Peter
 * Email: phantrung696@gmail.com
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
import { CoreActionDelete, CoreActionEdit, CoreActionView } from '@Core/components/Table/components/CoreTableAction'
import CoreTable, { columnHelper } from '@Core/components/Table/CoreTable'
import { Box } from '@mui/system'
import React, { useMemo, useState } from 'react'
import FormAutocomplete from '@App/Admin/components/Form/FormAutocomplete'
import Yup from '@Core/helper/Yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormProvider, useForm } from 'react-hook-form'
import CoreInput from '@Core/components/Input/CoreInput'
import CoreCheckbox from '@Core/components/Input/CoreCheckbox'
import CoreRadioGroup from '@Core/components/Input/CoreRadioGroup'
import {
	Button,
	Card,
	Tab,
	Typography,
	Grid,
	FormControlLabel,
	CardContent,
	RadioGroup,
	Checkbox,
	FormGroup
} from '@mui/material'
import AdminInputUpload from '@App/Admin/components/Input/AdminInputUpload'
import { useUserForm } from '../hooks/useUserForm'
import AdminInput from '@App/Admin/components/Input/AdminInput'

const EditUserForm = props => {
	const { t } = useAdminPageContext()

	const { methodForm, onSubmit } = useUserForm()
	const { control } = methodForm

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

	return (
		<FormProvider>
			<form onSubmit={onSubmit}>
				<Box className="max-w-lg mx-8 sm:mx-auto">
					<AdminInput
						label={t('title.email')}
						control={control}
						name="email"
						placeholder="Default input"
						className="mb-16 sm:mb-20"
						size="small"
						required
					/>

					<AdminInput
						label="First Name"
						control={control}
						name="firstname"
						placeholder="Default input"
						className="mb-16 sm:mb-20"
						size="small"
						required
					/>

					<AdminInput
						label="Last Name"
						control={control}
						name="firstname"
						placeholder="Default input"
						className="mb-16 sm:mb-20"
						size="small"
						required
					/>

					<Box className="flex flex-wrap sm:flex-nowrap mb-16 sm:mb-20">
						<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
							<Typography variant="h3" color="primary">
								{t('title.gender')}
							</Typography>
						</Box>
						<FormAutocomplete
							control={control}
							size="small"
							fullWidth
							variant="outlined"
							placeholder="Choose..."
							name="gender"
							className="w-full sm:w-2/3"
						/>
					</Box>

					<AdminInput
						label="Address"
						control={control}
						name="address"
						placeholder="Default input"
						className="mb-16 sm:mb-20"
						size="small"
						// required
					/>

					<AdminInputUpload
						label="Avatar upload"
						required
						control={control}
						name="image"
						helperText="Image size : 100x100"
					/>

					<Box className="flex flex-wrap sm:flex-nowrap mb-16 sm:mb-20">
						<Box className="w-full mt-12 mb-8 sm:mb-0 text-end">
							<Button variant="contained" color="error" className="mr-10" size="small">
								削除
							</Button>
							<Button variant="contained" color="success" size="small" type="submit">
								登録
							</Button>
						</Box>
					</Box>
				</Box>
			</form>
		</FormProvider>
	)
}

//ListSpotTable.defaultProps = {}

//ListSpotTable.propTypes = {}

export default React.memo(EditUserForm)
