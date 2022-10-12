import { useTranslation } from 'react-i18next'
import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'

const TableFilter = props => {
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

TableFilter.propTypes = {
	header: PropTypes.any,
	content: PropTypes.any
}

export default React.memo(TableFilter)

