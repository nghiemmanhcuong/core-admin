/*
 * Created Date: 22-10-2022, 3:15:13 pm
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

import { Divider, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { useMatch, useNavigate } from 'react-router-dom'
// import PropTypes from 'prop-types'

const LeftMenuItem = props => {
	const { item, sx } = props
	const navigate = useNavigate()
	const match = useMatch(item?.url ?? '/')
	// console.log('============= match', match)

	const handleClickMenu = url => {
		if (url) navigate(url)
	}

	return (
		<>
			<ListItem disablePadding onClick={() => handleClickMenu(item?.url)} sx={sx} selected={Boolean(match)}>
				<ListItemButton>
					{item?.icon && <ListItemIcon>{item?.icon}</ListItemIcon>}

					<ListItemText primary={item.title} />
				</ListItemButton>
			</ListItem>
			<Divider />
		</>
	)
}

//LeftMenuItem.defaultProps = {}

//LeftMenuItem.propTypes = {}

export default React.memo(LeftMenuItem)
