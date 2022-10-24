/*
 * Created Date: 24-10-2022, 11:14:09 pm
 * Author: TheAnh58
 * Email: you@you.you
 * -----
 * Last Modified: Tue Oct 25 2022
 * Modified By: TheAnh58
 * -----
 * Copyright (c) 2022 PROS+ Group , Inc
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	----------------------------------------------------------
 */

import FormAutocomplete from '@App/Admin/components/Form/FormAutocomplete'
import { useAdminPageContext } from '@App/Admin/components/Provider/AdminPageProvider'
import { ROUTER_ADMIN } from '@App/Admin/configs/constants'
import { accountSerivce } from '@App/Admin/services/accountService'
import CoreCheckbox from '@Core/components/Input/CoreCheckbox'
import CoreInput from '@Core/components/Input/CoreInput'
import { errorMsg, successMsg } from '@Core/helper/Message'
import Yup from '@Core/helper/Yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { LoadingButton } from '@mui/lab'
import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
// import PropTypes from 'prop-types'

const EditAccountForm = (props) => {
    const {isEdit, account} = props
    const navigate = useNavigate()
	const { t, accountTableHandler } = useAdminPageContext()
    const role = [
		{
			value: 1,
			label: t('edit.form.option.label.admin')
		},
		{
			value: 2,
			label: t('edit.form.option.label.other')
		}
	]

    const { control, handleSubmit, formState: {isSubmitting, isDirty} } = useForm({
		mode: 'onTouched',
		defaultValues: {
			id: account?.id ?? null,
			name: account?.name ?? '',
			mail: account?.mail ?? '',
			role: account?.role ?? null,
            password: ''
		},
		resolver: yupResolver(
			Yup.object({
				name: Yup.string().required()
			})
		)
	})

    const onSubmit = handleSubmit(async data => {
        data.confirm_password = data?.password
        data.role = data?.role?.label
        try {
            await accountSerivce.save(data)
            successMsg('success')
            navigate(ROUTER_ADMIN.account.list)
        } catch (error) {
            errorMsg('submit failed!')
        }
    })
 return (
    <form onSubmit={onSubmit}>
        <Box className="max-w-lg mx-auto">
        <Box className="flex flex-wrap sm:flex-nowrap mb-16 mt-12 sm:mb-20">
            <Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
                <Typography variant="h3" color="primary">
                    {t('edit.form.label.id')}
                </Typography>
            </Box>
            <CoreInput control={control} name="id" size="small" className="w-full sm:w-2/3" disabled />
        </Box>
        <Box className="flex flex-wrap sm:flex-nowrap mb-20">
            <Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
                    <Typography variant="h3" color="primary">
                        {t('edit.form.label.name')}
                    </Typography>
            </Box>
            <CoreInput control={control} name="name" size="small" className="w-full sm:w-2/3" />
        </Box>
        <Box className="flex flex-wrap sm:flex-nowrap mb-20">
            <Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
                    <Typography variant="h3" color="primary">
                        {t('edit.form.label.mail')}
                    </Typography>
            </Box>
            <CoreInput control={control} name="mail" size="small" className="w-full sm:w-2/3" />
        </Box>
        <Box className="flex flex-wrap sm:flex-nowrap mb-20">
            <Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
                    <Typography variant="h3" color="primary">
                        {t('edit.form.label.password')}
                    </Typography>
            </Box>
            <CoreInput control={control} name="password" type='password' size="small" className="w-full sm:w-2/3" />
        </Box>
        <Box className="flex flex-wrap sm:flex-nowrap mb-20">
            <Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
                    <Typography variant="h3" color="primary">
                        {t('edit.form.label.role')}
                    </Typography>
            </Box>
            <FormAutocomplete
                control={control}
                size="small"
                fullWidth
                variant="outlined"
                placeholder="Choose..."
                name="role"
                className="w-full sm:w-1/3"
                options={role}
            />
        </Box>
        <Box className="flex flex-wrap sm:flex-nowrap mb-20">
            <Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
                    <Typography variant="h3" color="primary">
                        {t('edit.form.label.roll')}
                    </Typography>
            </Box>
            <FormAutocomplete
                control={control}
                size="small"
                fullWidth
                variant="outlined"
                placeholder="Choose..."
                name="roll"
                className="w-full sm:w-1/3"
            />
        </Box>
        <Box className="flex flex-wrap sm:flex-nowrap mb-20">
            <Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
                    <Typography variant="h3" color="primary">
                        {t('edit.form.label.active')}
                    </Typography>
            </Box>
            <Box className='border-gray-300 flex'>
                <CoreCheckbox control={control} name="express" label={t('value.express')} className="ml-[5px]" />
                <CoreCheckbox
                    control={control}
                    name="non_representation"
                    label={t('value.non_representation')}
                    className="ml-[5px]"
                />
            </Box>
        </Box>
        <Box className="flex flex-wrap sm:flex-nowrap mb-20">
            <Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
                    <Typography variant="h3" color="primary">
                        {t('edit.form.label.account_creator')}
                    </Typography>
            </Box>
            <CoreInput control={control} name="account_creator" size="small" className="w-full sm:w-2/3" />
        </Box>
        <Box className="flex flex-wrap sm:flex-nowrap mb-20">
            <Button variant="contained" color="error" className="ml-auto">
                {t('edit.form.btn.delete')}
            </Button>
            <LoadingButton variant="contained" loading={isSubmitting} disabled={!isDirty} type='submit' color="primary" className="ml-[10px]">
                {t('edit.form.btn.register')}
            </LoadingButton>
        </Box>
    </Box>
    </form>
 )
}

// EditAccountForm.defaultProps = {}

// EditAccountForm.propTypes = {}

export default React.memo(EditAccountForm)