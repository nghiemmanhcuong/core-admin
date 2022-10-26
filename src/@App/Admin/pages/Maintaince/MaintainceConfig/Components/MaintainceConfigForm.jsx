/*
 * Created Date: 23-10-2022, 5:48:54 pm
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

import { TRANSLATE_ADMIN } from '@App/Admin/configs/constants'
import CoreRadioGroup from '@Core/components/Input/CoreRadioGroup'
import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
// import PropTypes from 'prop-types'

const MaintainceConfigForm = props => {
	const { t } = useTranslation(TRANSLATE_ADMIN.maintaince)
	const maintenanceStatusOptions = [
		{
			value: 1,
			label: t('edit.form.check_box.label.currently_undergoing_maintenance')
		},
		{
			value: 2,
			label: t('edit.form.check_box.label.not_under_maintenance')
		}
	]
	const { control } = useForm({
		mode: 'onTouched'
	})

	return (
		<Box className="max-w-lg mx-auto">
			<Box className="flex flex-wrap flex-col justify-between sm:h-[650px]" sx={{ padding: 2 }}>
				<Box className="flex w-full flex-wrap sm:flex-nowrap mb-16 sm:mb-20">
					<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
						<Typography variant="h3" color="primary">
							{t('edit.form.label.maintenance_status')}
						</Typography>
					</Box>
					<Box className="rounded-md w-full flex sm:w-2/3 pl-[15px]" sx={{ border: '1px solid #cccc' }}>
						<Box className="w-full">
							<CoreRadioGroup
								className="flex-row"
								control={control}
								name="period"
								options={maintenanceStatusOptions}
								// row="true"
							/>
						</Box>
					</Box>
				</Box>

				<Box className="ml-auto">
					<Button className='py-8 text-14' variant="contained" color="error" size="small" onClick={() => console.log('delete')}>
						{t('common:btn.delete')}
					</Button>
					<Button
						variant="contained"
						color="primary"
						size="small"
						onClick={() => console.log('add')}
						className="mx-8 py-8 text-14 bg-[#007BFF]"
					>
						{t('common:btn.new')}
					</Button>
				</Box>
			</Box>
		</Box>
	)
}

// MaintainceConfigForm.defaultProps = {}

// MaintainceConfigForm.propTypes = {}

export default React.memo(MaintainceConfigForm)
