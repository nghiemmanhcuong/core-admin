/*
 * Created Date: 11-10-2022, 12:08:23 am
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

import { Divider, Icon, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useMatch, useNavigate } from 'react-router-dom'
import { menuAdminConfig } from '../../configs/menuConfig'
// import PropTypes from 'prop-types'

const LeftMenuItem = props => {
	const { item } = props
	const navigate = useNavigate()
	// const match = useMatch(item?.url ?? '/')
	// console.log('============= match', match)
	return (
		<ListItem disablePadding onClick={() => navigate(item.url)}>
			<ListItemButton>
				<ListItemIcon>
					<Icon>home</Icon>
				</ListItemIcon>
				<ListItemText primary={item.title} />
			</ListItemButton>
		</ListItem>
	)
}

const LeftMenu = props => {
	return (
		<Box>
			<Toolbar />
			<Divider />
			<List>
				{menuAdminConfig.map((item, index) => (
					<LeftMenuItem key={index} item={item} />
				))}
			</List>
		</Box>
	)
}

//LeftMenu.defaultProps = {}

//LeftMenu.propTypes = {}

export default React.memo(LeftMenu)
