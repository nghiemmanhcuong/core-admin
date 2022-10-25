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
import { Button, Card, CardMedia, Typography,
     Grid, FormControlLabel, CardContent, RadioGroup, Checkbox,
     FormGroup } from '@mui/material'
import AdminInput from '@App/Admin/components/Input/AdminInput'

const DetailTagForm = props => {
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
				<AdminInput
					label={t('title.id')}
					control={control}
					name="id"
					placeholder="Default input"
					size="small"
				/>
				<AdminInput
					label={t('title.name')}
					control={control}
					name="name"
					placeholder="Default input"
					size="small"
				/>
				<AdminInput
					label={t('title.description')}
					control={control}
					name="description"
					size="small"
					minRows={5}
					multiline
				/>
				<AdminInput
					label={t('title.number_tag')}
					control={control}
					name="number_tag"
					placeholder="Default input"
					size="small"
				/>
				<AdminInput
					label={t('title.tag_creator')}
					control={control}
					name="tag_creator"
					placeholder="Default input"
					size="small"
				/>

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

export default React.memo(DetailTagForm)
