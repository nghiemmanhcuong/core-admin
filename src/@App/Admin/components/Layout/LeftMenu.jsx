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

import Cookies from 'js-cookie'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import { Divider, List, ListItem, ListItemButton, ListItemText, Toolbar } from '@mui/material'

import LeftMenuItem from '../Menu/LeftMenuItem'
import { menuAdminConfig } from '../../configs/menuConfig'
import { authService } from '@App/Admin/services/authService'
import LeftMenuItemCollapse from '../Menu/LeftMenuItemCollapse'

const LeftMenu = props => {
	const navigate = useNavigate()
	const [open, setOpen] = React.useState(false)
	const handleClickOpen = () => {
		setOpen(true)
	}
	const handleClose = () => {
		setOpen(false)
	}

	const handleLogout = async () => {
		await authService.logout()
		// Remove all Cookie
		Object.keys(Cookies.get()).forEach(function (cookieName) {
			var neededAttributes = {}
			Cookies.remove(cookieName, neededAttributes)
		})
		await navigate(`/cms/admin/login`)
	}

	return (
		<Box>
			<Toolbar />
			<Divider />
			<List>
				{menuAdminConfig.map((item, index) => {
					if (item?.type === 'collapse') {
						return <LeftMenuItemCollapse key={index} item={item} />
					}
					return <LeftMenuItem key={index} item={item} />
				})}
				<ListItem disablePadding>
					<ListItemButton>
						<ListItemText primary={'ログアウト'} onClick={handleClickOpen} />
					</ListItemButton>
				</ListItem>
			</List>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">ログアウトしてもよろしいですか</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>キャンセル</Button>
					<Button onClick={handleLogout} autoFocus>
						ログアウト
					</Button>
				</DialogActions>
			</Dialog>
		</Box>
	)
}

//LeftMenu.defaultProps = {}

//LeftMenu.propTypes = {}

export default React.memo(LeftMenu)
