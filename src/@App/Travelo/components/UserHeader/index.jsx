/*
 * Created Date: 07-10-2022, 9:57:18 pm
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

import { IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import IconLockPerson from '../Icons/IconLockPerson'
// import PropTypes from 'prop-types'
const UserHeader = props => {
	return (
		<div>
			<Box textAlign="center">
				<IconButton
					size="small"
					aria-label="account of current user"
					aria-controls="menu-appbar"
					aria-haspopup="true"
					// onClick={handleMenu}
					color="inherit"
				>
					<IconLockPerson />
				</IconButton>
				<Typography>ログイン</Typography>
			</Box>
			{/* <Menu
				id="menu-appbar"
				anchorEl={anchorEl}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'right'
				}}
				keepMounted
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right'
				}}
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				<MenuItem onClick={handleClose}>Profile</MenuItem>
				<MenuItem onClick={handleClose}>My account</MenuItem>
			</Menu> */}
		</div>
	)
}

//UserHeader.defaultProps = {}

//UserHeader.propTypes = {}

export default React.memo(UserHeader)
