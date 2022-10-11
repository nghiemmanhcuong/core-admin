import { CheckBox } from '@mui/icons-material'
import { Box, Button, Checkbox, Dialog, DialogContent, DialogTitle, Divider, Typography, useMediaQuery } from '@mui/material'
import { useBoolean } from 'ahooks'
import React, { useCallback } from 'react'
// import PropTypes from 'prop-types'

export const useHomePageDialog = (props) => {
    const data = [
        {
            id: 1,
            label: 'コースチャレンジ'
        },
        {
            id: 2,
            label: 'アラウンドチャレンジ'
        },
        {
            id: 3,
            label: 'クイズチャレンジ'
        }
    ]
    const [open, {setTrue, setFalse}] = useBoolean()

    const handleOpen = () => {
        setTrue()
    }

    const handleClose = () => {
        setFalse()
    }
    const isMobile = useMediaQuery('(max-width:600px)');

    const renderHomePageDialog = useCallback(() => {
        return (
            <Dialog onClose={handleClose} open={open} maxWidth='sm' fullWidth 
                sx={isMobile && {
                        '& .MuiDialog-container': {   
                            alignItems: 'end'
                        },
                        '& .MuiPaper-root': {
                            width: '100%',
                            margin: 0
                        }
                }}
            >
                <DialogTitle className='py-40 font-bold'>イベントタイプ</DialogTitle>
                <DialogContent className='sm:mx-80'>
                    {data?.map(item => {
                        return (
                           <Box key={item?.id} >
                                <Box className='flex items-center justify-between py-8'>
                                    <Typography variant='h5'>{item?.label}</Typography>
                                    <Checkbox color='primary' />
                                </Box>
                                <Divider />
                           </Box>
                        )
                    })}
                    <Button variant='contained' color='primary' className='mt-20 w-full py-12 rounded-8'>
                        適用する
                    </Button>
                </DialogContent>
            </Dialog>
        )
    }, [open])

 return {handleOpen, handleClose, renderHomePageDialog}
}

