/*
 * Created Date: 11-10-2022, 12:29:57 am
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

import { Box } from '@mui/system'
import React from 'react'
import PropTypes from 'prop-types'
import { Button, Card, CardContent, CardHeader, Divider } from '@mui/material'

const AdminContentPage = props => {
	const { content, pageTitle, headerAction } = props
	return (
		<Card className="shadow-4 h-full">
			{pageTitle && <CardHeader title={pageTitle} action={headerAction} />}

			<Divider />
			<Box className="my-8">{content}</Box>
		</Card>
	)
}

//AdminContentPage.defaultProps = {}

AdminContentPage.propTypes = {
	content: PropTypes.any,
	pageTitle: PropTypes.any,
	headerAction: PropTypes.any
}

export default React.memo(AdminContentPage)
