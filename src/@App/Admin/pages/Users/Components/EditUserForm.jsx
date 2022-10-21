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
import { useForm } from 'react-hook-form'
import CoreInput from '@Core/components/Input/CoreInput'
import CoreCheckbox from '@Core/components/Input/CoreCheckbox'
import CoreRadioGroup from '@Core/components/Input/CoreRadioGroup'
import { Button, Card, Tab, Typography,
     Grid, FormControlLabel, CardContent, RadioGroup, Checkbox,
     FormGroup } from '@mui/material'

const EditUserForm = props => {
	const { t, spotTableHandler } = useAdminPageContext()
    const [tabIndex, setTabIndex] = useState(0);
    const handleTabChange = (event, newTabIndex) => {
        setTabIndex(newTabIndex);
    };

    const sex = [
        {
            value: 1,
            label: t('edit.form.check_box.label.express')
        },
        {
            value: 2,
            label: t('edit.form.check_box.label.representation')
        }
    ];

    const {control} = useForm({
        mode: 'onTouched',
        defaultValues: {
            verification_code: ''
        },
        resolver: yupResolver(
            Yup.object({
                verification_code: Yup.string().required()
            })
        )
    })

	return (
		<Box>
            <Box className="max-w-lg  mx-auto">
				<Box className="flex flex-wrap sm:flex-nowrap mb-16 sm:mb-20">
					<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
						<Typography variant="h3" color="primary">{t('title.email')}</Typography>
					</Box>
					<CoreInput control={control} name="email" className="w-full sm:w-2/3" placeholder="Default input" size="small" />
				</Box>

				<Box className="flex flex-wrap sm:flex-nowrap mb-16 sm:mb-20">
					<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
						<Typography variant="h3" color="primary">{t('title.name')}</Typography>
					</Box>
					<CoreInput control={control} name="name" className="w-full sm:w-2/3" placeholder="Default input" size="small" />
				</Box>

				<Box className="flex flex-wrap sm:flex-nowrap mb-16 sm:mb-20">
					<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
						<Typography variant="h3" color="primary">{t('title.birthday')}</Typography>
					</Box>
					<CoreInput control={control} name="firstname" className="w-full sm:w-2/3" placeholder="Default input" size="small" />
				</Box>

				<Box className="flex flex-wrap sm:flex-nowrap mb-16 sm:mb-20">
					<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
						<Typography variant="h3" color="primary">{t('title.gender')}</Typography>
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

				<Box className="flex flex-wrap sm:flex-nowrap mb-16 sm:mb-20">
					<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
						<Typography variant="h3" color="primary">{t('title.place')}</Typography>
					</Box>
					<CoreInput control={control} name="place" placeholder="Default input" className="w-full sm:w-2/3" size="small" />
				</Box>

				<Box className="flex flex-wrap sm:flex-nowrap mb-16 sm:mb-20">
					<Box className="w-full mt-12 mb-8 sm:mb-0 text-end">
						<Button variant="contained" color="error" className="mr-10" size="small">
							削除
						</Button>
						<Button variant="contained" color="success" size="small">
							登録
						</Button>
					</Box>
				</Box>
			</Box>
		</Box>
	)
}

//ListSpotTable.defaultProps = {}

//ListSpotTable.propTypes = {}

export default React.memo(EditUserForm)
