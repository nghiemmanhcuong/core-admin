/*
 * Created Date: 07-10-2022, 5:13:46 pm
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

import { AppBar, Box, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import AccountCircle from '@mui/icons-material/AccountCircle'
import UserHeader from '../UserHeader'
// import PropTypes from 'prop-types'

const AppHeader = props => {
	const [auth, setAuth] = useState(true)
	const [anchorEl, setAnchorEl] = useState(null)

	const handleChange = event => {
		setAuth(event.target.checked)
	}

	const handleMenu = event => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	return (
		<Box>
			<AppBar position="static">
				<Toolbar>
					<IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						<img className="mx-auto" src="/img/header/logo.png" />
					</Typography>
					<UserHeader />
				</Toolbar>
			</AppBar>
		</Box>
	)
}

//AppHeader.defaultProps = {}

//AppHeader.propTypes = {}

export default React.memo(AppHeader)
