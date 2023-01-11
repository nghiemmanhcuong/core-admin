/*
 * Created Date: 23-10-2022, 9:41:26 am
 * Author: TheAnh58
 * Email: you@you.you
 * -----
 * Last Modified: Sat Dec 17 2022
 * Modified By: Peter
 * -----
 * Copyright (c) 2022 PROS+ Group , Inc
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	----------------------------------------------------------
 */

import AdminContentPage from '@App/Admin/components/Layout/AdminContentPage'
import { Box, Card, CardContent, CardHeader, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import ChartOverview from './ChartOverview'
import ChartPartners from './ChartPartners'
import ChartInstall from './ChartInstall'
import ChartMAU from './ChartMAU'
import ChartDAU from './ChartDAU'
// import ChartSale from './ChartSale'

const HomePage = props => {
	useEffect(() => {
		document.title = 'ダッシュボード'
	}, [])
	return (
		<AdminContentPage
			pageTitle="Dashboard"
			content={
				<Box className="flex flex-wrap mt-40">
					{/* <Box className="w-full sm:w-1/2 px-12 mb-40">
						<Card>
							<CardContent>
								<Typography variant="subtitle2" className="mb-12">
									SALES
								</Typography>
								<Typography variant="h4" className="mb-40">
									アプリ登録者数
								</Typography>
								<ChartSale />
							</CardContent>
						</Card>
					</Box> */}
					<Box className="w-full sm:w-1/2  px-12 mb-40">
						<Card>
							<CardContent>
								<Typography variant="subtitle2" className="mb-12">
									WAU
								</Typography>
								<Typography variant="h4" className="mb-40">
									WAU
								</Typography>
								<ChartOverview />
							</CardContent>
						</Card>
					</Box>
					<Box className="w-full sm:w-1/2  px-12 mb-40">
						<Card>
							<CardContent>
								<Typography variant="subtitle2" className="mb-12">
									INSTALL
								</Typography>
								<Typography variant="h4" className="mb-40">
									全インストール数
								</Typography>
								<ChartInstall />
							</CardContent>
						</Card>
					</Box>
					<Box className="w-full sm:w-1/2  px-12 mb-40">
						<Card>
							<CardContent>
								<Typography variant="subtitle2" className="mb-12">
									DAU
								</Typography>
								<Typography variant="h4" className="mb-40">
									DAU
								</Typography>
								<ChartDAU />
							</CardContent>
						</Card>
					</Box>
					<Box className="w-full sm:w-1/2  px-12 mb-40">
						<Card>
							<CardContent>
								<Typography variant="subtitle2" className="mb-12">
									MAU
								</Typography>
								<Typography variant="h4" className="mb-40">
									MAU
								</Typography>
								<ChartMAU />
							</CardContent>
						</Card>
					</Box>
					<Box className="w-full sm:w-1/2 px-12 mb-40">
						<Card>
							<CardContent>
								<Typography variant="subtitle2" className="mb-12">
									PV/UU
								</Typography>
								<Typography variant="h4" className="mb-40">
									イベントページ閲覧数
								</Typography>
								<ChartPartners />
							</CardContent>
						</Card>
					</Box>
				</Box>
			}
		/>
	)
}

// HomePage.defaultProps = {}

// HomePage.propTypes = {}

export default React.memo(HomePage)
