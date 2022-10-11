/*
 * Created Date: 09-10-2022, 1:09:33 am
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

import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

const EventContentPage = props => {
	const { t } = useTranslation()
	const { header, content } = props
	return (
		<Box>
			<Box className="max-w-600 mx-auto py-12 px-16 sm:px-0">
				<Box className="flex items-center space-x-4">
					<Typography color="primary">{t('home')}</Typography>
					<Typography>{`>`}</Typography>
					<Typography>イベント検索</Typography>
				</Box>
			</Box>
			{header && <Box className="w-full bg-third">{header}</Box>}
			<Box className="max-w-600 mx-auto ">{content}</Box>
		</Box>
	)
}

EventContentPage.defaultProps = {
	// header: 'Header',
	// content: 'Content'
}

EventContentPage.propTypes = {
	header: PropTypes.any,
	content: PropTypes.any
}

export default React.memo(EventContentPage)
