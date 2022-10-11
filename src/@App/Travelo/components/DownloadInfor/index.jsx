import { Image } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import React from 'react'
// import PropTypes from 'prop-types'

const DownloadInfor = (props) => {
 return (
    <Box className='w-full bg-third'>
        <Typography variant='h1' className='text-center py-40'>
             イベントエントリー完了
        </Typography>
        <Typography variant='subtitle1' className='text-center'>
             以下のイベントへのエントリーが完了しました。

        </Typography>
        <Typography variant='subtitle1' className='text-center pb-40'>
          イベント参加にはモバイルアプリが必要です。
        </Typography>
        <div className='flex justify-center pb-40'>
            <Typography variant="h6" component="div" className='pr-16 cursor-pointer' >
                <img className="mx-auto" src="/img/download/apple 3.png" />
            </Typography>
            <Typography variant="h6" component="div" className='cursor-pointer' >
                <img className="mx-auto" src="/img/download/google.png" />
            </Typography>
        </div>
    </Box>
 )
}

// DownloadInfor.defaultProps = {}

// DownloadInfor.propTypes = {}

export default React.memo(DownloadInfor)