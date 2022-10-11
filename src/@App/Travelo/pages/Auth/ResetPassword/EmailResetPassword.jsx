import EventContentPage from '@App/Travelo/components/Layout/EventContentPage'
import { ROUTER_TRAVELO, TRANSLATE_TRAVELO } from '@App/Travelo/configs/constants'
import CoreInput from '@Core/components/Input/CoreInput'
import Yup from '@Core/helper/Yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
// import PropTypes from 'prop-types'

const EmailResetPassword = (props) => {
    const navigate = useNavigate()
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
    <EventContentPage
        content={
            <Box className='px-12'>
                <Typography variant='h1' className='text-center my-40'>
                    {t('title.reset_password')}
                </Typography>
                <Typography variant='h3' className='text-center mb-48'>
                    {t('label.send_email_reset_password')}
                </Typography>
                <Typography variant='h3' className='mb-8'>{t('title.email_reset_password')}</Typography>
                <CoreInput
                    control={control}
                    name='email'
                    className= 'w-full mb-20'
                    placeholder={t('placeholder.email_reset_password')}
                />
                <Box className='text-center mt-40'>
                <Button variant='contained' className='w-full sm:w-2/3 text-18 py-12 px-80 rounded-4 mb-80' onClick={() => navigate(ROUTER_TRAVELO.email_notification_reset_password)}>
                    {t('btn.send')}
                </Button>
           </Box>
            </Box>
        }
    />
 )
}

// EmailResetPassword.defaultProps = {}

// EmailResetPassword.propTypes = {}

export default React.memo(EmailResetPassword)