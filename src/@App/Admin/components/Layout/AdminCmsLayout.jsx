/*
 * Created Date: 10-10-2022, 11:49:50 pm
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
import MenuIcon from '@mui/icons-material/Menu'
import React, { useState, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { AppBar, Box, CircularProgress, CssBaseline, Drawer, IconButton, Toolbar, Typography } from '@mui/material'

import LeftMenu from './LeftMenu'

const drawerWidth = 240

const AdminCmsLayout = props => {
	const navigate = useNavigate()
	const cmsInfor = !!Cookies.get('CMS_ACCOUNT_INFO')
	const xsrfToken = !!Cookies.get('XSRF-TOKEN')

	useEffect(() => {
		if (!cmsInfor || !xsrfToken) {
			return navigate(`/cms/admin/login`)
		}
	}, [])
	const { window } = props
	const [mobileOpen, setMobileOpen] = useState(false)

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen)
	}

	const container = window !== undefined ? () => window().document.body : undefined

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar position="fixed" sx={{ zIndex: theme => theme.zIndex.drawer + 1 }}>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: 'none' } }}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap component="div">
						<img className="mx-auto" src="/img/header/logo.png" />
					</Typography>
				</Toolbar>
			</AppBar>
			<Box
				component="nav"
				sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
				aria-label="mailbox folders"
			>
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true // Better open performance on mobile.
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
					}}
				>
					<LeftMenu />
				</Drawer>
				<Drawer
					variant="permanent"
					sx={{
						display: { xs: 'none', sm: 'block' },
						'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
					}}
					open
					PaperProps={{
						className: 'shadow-4'
					}}
				>
					<LeftMenu />
				</Drawer>
			</Box>
			<Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
				<Toolbar />
				<Box className="admin-content flex flex-col h-full" sx={{ minHeight: `calc(100vh - 200px)` }}>
					<React.Suspense
						fallback={
							<div className="mt-200 text-center">
								<CircularProgress />
							</div>
						}
					>
						<Outlet />
					</React.Suspense>
				</Box>
			</Box>
		</Box>
	)
}

//AdminCmsLayout.defaultProps = {}

//AdminCmsLayout.propTypes = {}

export default React.memo(AdminCmsLayout)
