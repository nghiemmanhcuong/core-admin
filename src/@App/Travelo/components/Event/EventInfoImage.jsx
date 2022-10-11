/*
 * Created Date: 08-10-2022, 10:45:41 pm
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

import { Box, Typography } from '@mui/material'
import Image from 'mui-image'
// import { makeStyles } from '@mui/styles'
import React from 'react'
import EventFavoriteButton from './EventFavoriteButton'
import PropTypes from 'prop-types'

const EventInfoImage = props => {
	const { img, handleClickImg } = props
	return (
			<Box
			className="relative"
			sx={{
				maxWidth: 600,
				maxHeight: 400,
				width: '100%',
				height: '100%'
			}}
		>
			<Image
				src={img}
				wrapperClassName="h-[23rem] sm:h-400"
				errorIcon={<img src="/img/event/no_image.png" />}
				showLoading
				onClick={handleClickImg}
			/>
			<Box className="absolute z-999 bottom-0 px-16 py-8 space-y-8">
				<Box className="flex items-center space-x-4">
					<Typography className="text-white border-1 px-14 py-2 rounded-2 min-w-60">開催期間</Typography>
					<Typography className="text-white ">2022/4/1-2023/3/31</Typography>
					<Typography className="text-accent">開催中</Typography>
				</Box>
				<Box className="flex items-center space-x-4">
					<Typography className="text-white border-1 px-14 py-2 rounded-2 min-w-60">タイプ</Typography>
					<Typography className="text-white ">クイズチャアレンジ</Typography>
				</Box>
				<Box className="flex items-center space-x-4">
					<Box className="text-white font-700">東京都 / 渋谷区 ・ 目黒区 ・ 港区</Box>
				</Box>
			</Box>
			<Box
				className="overlay absolute z-99 left-0 right-0"
				sx={{
					top: '52%',
					bottom: 0,
					background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 117.5%)'
				}}
			/>
			<Box className="absolute top-10 left-10 sm:top-20 sm:left-20 z-50 px-8 py-2 bg-black text-white font-700 rounded-full">
				888
			</Box>
			<Box className="absolute top-10 right-10 sm:top-20 sm:right-20 z-50 bg-white rounded-full">
				<EventFavoriteButton />
			</Box>
		</Box>
	)
}

EventInfoImage.defaultProps = {
	img: '/img/event/no_image1.png'
}

EventInfoImage.propTypes = {
	img: PropTypes.string
}

export default React.memo(EventInfoImage)
