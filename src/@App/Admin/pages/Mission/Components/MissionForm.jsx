/*
 * Created Date: 06-11-2022, 10:09:08 am
 * Author: TheAnh58_DELL
 * Email: you@you.you
 * -----
 * Last Modified: Sun Nov 06 2022
 * Modified By: Dell
 * -----
 * Copyright (c) 2022 PROS+ Group , Inc
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	----------------------------------------------------------
 */

import AdminInput from '@App/Admin/components/Input/AdminInput'
import AdminInputUpload from '@App/Admin/components/Input/AdminInputUpload'
import CoreAutocomplete from '@Core/components/Input/CoreAutocomplete'
import CoreCheckbox from '@Core/components/Input/CoreCheckbox'
import CoreInput from '@Core/components/Input/CoreInput'
import CoreRadioGroup from '@Core/components/Input/CoreRadioGroup'
import Yup from '@Core/helper/Yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
// import PropTypes from 'prop-types'

const MissionForm = (props) => {
    const {t} = props
    const { control } = useForm({
		mode: 'onTouched',
		defaultValues: {
			firstname: '',
			checkbox: false
		},
		resolver: yupResolver(
			Yup.object({
				firstname: Yup.string().required()
			})
		)
	})
 return (
    <form>
		<Box sx={{ padding: 2 }} className="max-w-lg mx-auto">
            <AdminInput
                label={t('edit.form.label.id')}
                control={control}
                name="id"
                placeholder="Default input"
                size="small"
                classNameField='bg-grey-300'
                readOnly
            />
            <AdminInput
                label={t('edit.form.label.name')}
                control={control}
                name="name"
                required
                placeholder="Default input"
                size="small"
            />
            <AdminInput
                label={t('edit.form.label.description')}
                control={control}
                name="description"
                minRows={5}
                multiline
                required
                size="small"
            />
            <Box className="flex flex-wrap sm:flex-nowrap mb-16 sm:mb-20">
                <Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
                    <Typography variant="h3" color="primary" className='flex items-center'>
                    <Typography className="text-black py-4 px-16 rounded-4 bg-yellow mx-8">必須</Typography> {t('edit.form.label.clear_condition')} 
                    </Typography>
                </Box>
                <Box className="flex rounded-md w-full sm:w-2/3 pl-[15px]" sx={{ border: '1px solid #cccc' }}>
                    <CoreRadioGroup control={control} className='my-8' name='abc' options={[
                        {
                            value: 1,
                            label: <Box className='flex items-center w-full'>
                                <Typography className='w-80'>完走</Typography>
                                <CoreInput control={control} name='input1' size='small' className='w-full sm:w-1/3 mx-20'  /> 
                                <Typography className='w-1/3'>コース</Typography>
                            </Box>
                        },
                        {
                            value: 2,
                            label: <Box className='flex items-center w-full'>
                            <Typography className='w-80'>ポイント獲得</Typography>
                            <CoreInput control={control} name='input1' size='small' className='w-full sm:w-1/3 mx-20'  /> 
                            <Typography className='w-1/3'>ポイント以上</Typography>
                        </Box>
                        }
                    ]} />
                
                    
                </Box>
            </Box>
            <Box className="flex flex-wrap sm:flex-nowrap mb-16 sm:mb-20">
                <Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
                    <Typography variant="h3" color="primary" className='flex items-center'>
                    <Typography className="text-black py-4 px-16 rounded-4 bg-yellow mx-8">必須</Typography> {t('edit.form.label.hide/show')} 
                    </Typography>
                </Box>
                <Box className="flex rounded-md w-full sm:w-2/3 pl-[15px]" sx={{ border: '1px solid #cccc' }}>
                    <CoreCheckbox 
                        control={control}
                        name='checkbox1'
                        label={t('edit.form.check_box.label.express')}
                        
                    />
                    <CoreCheckbox 
                        control={control}
                        name='checkbox2'
                        label={t('edit.form.check_box.label.representation')}
                        className='ml-20'
                    />
                    
                </Box>
            </Box>
            <AdminInput
                label={t('edit.form.label.name_card')}
                control={control}
                name="name_card"
                required
                placeholder="Default input"
                size="small"
            />
            <AdminInput
                label={t('edit.form.label.description_card')}
                control={control}
                name="description_card"
                required
                minRows={5}
                multiline
                size="small"
            />
            <AdminInputUpload
                label={t('edit.form.label.image_card')}
                control={control}
                name="image_card"
                size="small"
                required
                className="w-full sm:w-2/3"
                helperText
            />
            <Box className="flex flex-wrap sm:flex-nowrap mb-20">
                <Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
                    <Typography
                        variant="h3"
                        color="primary"
                        className="self-center flex items-center w-full py-10 sm:py-0"
                    >
                        <Typography className="text-black py-4 px-16 rounded-4 bg-yellow mx-8">必須</Typography>{' '}
                        {t('edit.form.label.earn_in-app_currency')}
                    </Typography>
                </Box>
                <Box className="w-full sm:w-2/3 sm:flex">
                    <CoreAutocomplete
                        control={control}
                        size="small"
                        name="earn_in-app_currency"
                        fullWidth
                        variant="outlined"
                        returnValueType="enum"
                        placeholder="Choose..."
                        className="w-full"
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
            <Box className="flex flex-wrap sm:flex-nowrap mb-16 sm:mb-20">
                <Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
                    <Typography variant="h3" color="primary" className='flex items-center'>
                    <Typography className="text-black py-4 px-16 rounded-4 bg-yellow mx-8">必須</Typography> {t('edit.form.label.hide/show')} 
                    </Typography>
                </Box>
                <Box className="flex rounded-md w-full sm:w-2/3 pl-[15px]" sx={{ border: '1px solid #cccc' }}>
                    <CoreCheckbox 
                        control={control}
                        name='checkbox1'
                        label={t('edit.form.check_box.label.express')}
                        
                    />
                    <CoreCheckbox 
                        control={control}
                        name='checkbox2'
                        label={t('edit.form.check_box.label.representation')}
                        className='ml-20'
                    />
                    
                </Box>
            </Box>
            <AdminInput
                label={t('edit.form.label.creator_card')}
                control={control}
                name="creator_card"
                required
                size="small"
                classNameField='bg-grey-300'
                readOnly
            />
            <AdminInput
                label={t('edit.form.label.creator_mission')}
                control={control}
                name="creator_mission"
                required
                size="small"
                classNameField='bg-grey-300'
                readOnly
            />
            <Box className='text-right'>
                <Button variant="contained" color="error" className="ml-auto">
                    {t('edit.form.btn.delete')}
                </Button>
                <Button variant="contained" className="ml-[10px] bg-blue">
                    {t('edit.form.btn.register')}
                </Button>
            </Box>
        </Box>
    </form>
 )
}

// MissionForm.defaultProps = {}

// MissionForm.propTypes = {}

export default React.memo(MissionForm)