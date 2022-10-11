/*
 * Created Date: 07-10-2022, 5:12:09 pm
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

import { Box } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import AppFooter from '../AppFooter'
import AppHeader from '../AppHeader'
// import PropTypes from 'prop-types'

const DefaultLayout = props => {
	return (
		<Box className="flex flex-col  h-screen">
			<AppHeader />
			<div className="app-content ">
				<Outlet />
			</div>
			<AppFooter />
		</Box>
	)
}

//DefaultLayout.defaultProps = {}

//DefaultLayout.propTypes = {}

export default React.memo(DefaultLayout)
