import IconVisibility from '@App/Travelo/components/Icons/IconVisibility'
import IconVisibilityOff from '@App/Travelo/components/Icons/IconVisibilityOff'
import EventContentPage from '@App/Travelo/components/Layout/EventContentPage'
import { TRANSLATE_TRAVELO } from '@App/Travelo/configs/constants'
import CoreInput from '@Core/components/Input/CoreInput'
import Yup from '@Core/helper/Yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button, IconButton, InputAdornment, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
// import PropTypes from 'prop-types'

const ResetPassword = (props) => {
    const navigate = useNavigate()
    const {t} = useTranslation(TRANSLATE_TRAVELO.auth)
    const [viewPassword,setViewPassword] = useState(false)
    const [viewConfirmPassword,setViewConfirmPassword] = useState(false)
    const {control} = useForm({
        mode: 'onTouched',
        defaultValues: {
            password: '',
            confirm_password: ''
        },
        resolver: yupResolver(
            Yup.object({
                password: Yup.string().required().min(3),
                confirm_password: Yup.string().required().min(3),
            })
        )
    })
 return (
    <EventContentPage
        content={
            <Box className='px-12 pt-40 pb-60'>
                <Typography
                variant='h1' className='text-center mb-40'
                >
                    {t('title.reset_password')}
                </Typography>
                <Typography variant='h3' className='mb-8'>{t('title.password')}</Typography>
            <CoreInput
                control={control}
                name='password'
                type={viewPassword ? 'text' : 'password'}
                className= 'w-full mb-20'
                helperText={t('text.validate_password')}
                placeholder={t('placeholder.password')}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position='end'>
                            {viewPassword ? (
                                <IconButton onClick={() => setViewPassword(false)}>
                                    <IconVisibility />
                                </IconButton>
                            ) : (
                                <IconButton onClick={() => setViewPassword(true)}>
                                    <IconVisibilityOff />
                                </IconButton>
                            )}
                        </InputAdornment>
                    )
                }}
            />
            <Typography variant='h3' className='mb-8'>{t('title.password')}</Typography>
            <CoreInput
                control={control}
                name='confirm_password'
                type={viewConfirmPassword ? 'text' : 'password'}
                className= 'w-full'
                helperText={t('text.validate_password')}
                placeholder={t('placeholder.password')}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position='end'>
                            {viewConfirmPassword ? (
                                <IconButton onClick={() => setViewConfirmPassword(false)}>
                                    <IconVisibility />
                                </IconButton>
                            ) : (
                                <IconButton onClick={() => setViewConfirmPassword(true)}>
                                    <IconVisibilityOff />
                                </IconButton>
                            )}
                        </InputAdornment>
                    )
                }}
            />
            <Box className='text-center mt-40'>
                <Button variant='contained' className='w-full sm:w-2/3 text-18 py-12 px-80 rounded-4' onClick={() => console.log('============= 123',123)}>
                    {t('btn.login')}
                </Button>
           </Box>
            </Box>
        }
    />
 )
}

// ResetPassword.defaultProps = {}

// ResetPassword.propTypes = {}

export default React.memo(ResetPassword)