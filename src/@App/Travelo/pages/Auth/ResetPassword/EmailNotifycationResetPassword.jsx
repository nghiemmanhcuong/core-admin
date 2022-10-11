import EventContentPage from '@App/Travelo/components/Layout/EventContentPage'
import { TRANSLATE_TRAVELO } from '@App/Travelo/configs/constants'
import CoreInput from '@Core/components/Input/CoreInput'
import Yup from '@Core/helper/Yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Typography } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
// import PropTypes from 'prop-types'

const EmailNotifycationResetPassword = (props) => {
    const {t} = useTranslation(TRANSLATE_TRAVELO.auth)
    const {control} = useForm({
        mode: 'onTouched',
        defaultValues: {
            email: ''
        },
        resolver: yupResolver(
            Yup.object({
                email: Yup.string().email().required().min(3)
            })
        )
    })

 return (
    <EventContentPage content={
        <Box className='px-12'>
            <Typography variant='h1' className='text-center my-40'>
                    {t('title.email_notification_reset_password')}
            </Typography>

            {/* <CoreInput
                control={control}
                name='email'
                className= 'w-full mb-20'
                placeholder={t('placeholder.email_reset_password')}
            /> */}

            <Typography variant='subtitle2' className='p-12 mb-20 bg-third'>theanh580903@gmail.com</Typography>
            

            <Typography variant='subtitle2'>{t('label.email_notification_reset_password')}</Typography>
            <Typography variant='subtitle2'>{t('label.url_reset_password')}</Typography>
        </Box>
    } />
 )
}

// EmailNotifycationResetPassword.defaultProps = {}

// EmailNotifycationResetPassword.propTypes = {}

export default React.memo(EmailNotifycationResetPassword)