import { ROUTER_TRAVELO, TRANSLATE_TRAVELO } from '../../../configs/constants'
import { Box, Button, IconButton, InputAdornment, Link, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import EventContentPage from '../../../components/Layout/EventContentPage'
import IconVisibilityOff from '../../../components/Icons/IconVisibilityOff'
import CoreInput from '@Core/components/Input/CoreInput'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Yup from '@Core/helper/Yup'
import IconVisibility from '@App/Travelo/components/Icons/IconVisibility'
import { useNavigate } from 'react-router-dom'
// import PropTypes from 'prop-types'

const Login = (props) => {
    const navigate = useNavigate()
    const {control} = useForm({
        mode: 'onTouched',
        defaultValues: {
            email: '',
            password: ''
        },
        resolver: yupResolver(
            Yup.object({
                email: Yup.string().required().min(3),
                password: Yup.string().required()
            })
        )
    })
    const {t} = useTranslation(TRANSLATE_TRAVELO.auth)
    const [viewPassword, setViewPassword] = useState(false)
 return (
    <EventContentPage content={
        <form>
            <Box className='my-40 px-12'>
            <Typography variant='h1' className='text-center'>{t('title.login')}</Typography>
            <Typography variant='h3' className='mt-28 '>{t('label.login_by_mail')}</Typography>
            <Typography variant='h3' className='mt-12  mb-60'>
                <Trans i18nKey='label.go_to_register'>
                    {t('label.go_to_register')}
                </Trans>
                {/* {t('label.go_to_register', {link: <Link color='primary'>こちら</Link>}) } */}

            </Typography>
            <Typography variant='h3' className='mb-8'>{t('title.email_address')}</Typography>
            <CoreInput
                control={control}
                name='email'
                className= 'w-full mb-20'
                placeholder={t('placeholder.email_address')}
            />
            <Typography variant='h3' className='mb-8'>{t('title.password')}</Typography>
            <CoreInput
                control={control}
                name='password'
                type={viewPassword ? 'text' : 'password'}
                className= 'w-full'
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
            <Box component='div' className='text-center mt-20'>
                <Typography variant='h1' onClick={() => navigate(ROUTER_TRAVELO.reset_password)} color='primary' className='cursor-pointer'>{t('label.forget_password')}</Typography>
            </Box>

           <Box className='text-center mt-40'>
                <Button variant='contained' className='w-full sm:w-2/3 text-18 py-12 px-80 rounded-4' onClick={() => console.log('============= 123',123)}>
                    {t('btn.login')}
                </Button>
           </Box>
        </Box>
        </form>
    } />
 )
}

// Login.defaultProps = {}

// Login.propTypes = {}

export default React.memo(Login)