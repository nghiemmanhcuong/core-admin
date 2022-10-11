/*
 * Created Date: 07-10-2022, 5:14:14 pm
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

import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import CopyrightIcon from '@mui/icons-material/Copyright'
// import PropTypes from 'prop-types'

const AppFooter = props => {
	
	const dataFooter = [
		{
			label: 'TOP',
			id: 1
		},
		{
			label: 'お問い合わせ',
			id: 2
		},
		{
			label: '利用規約',
			id: 3
		},
		{
			label: 'プライバシーポリシー',
			id: 4
		},
		{
			label: 'TraVelo事務局',
			id: 5
		}
	]
	return (
		<Box className="pt-12 mt-auto bg-primary-50">
			<Typography component="div" className="flex justify-center divide-x divide-green-500 px-12 flex-wrap ">
				{dataFooter?.map(item => {
					return (
						<Typography
							sx={{ marginBottom: '8px' }}
							className="px-12 sm:mt-20 font-bold"
							variant='h3'
							color='primary'
							key={item?.id}
						>
							{item?.label}
						</Typography>
					)
				})}
			</Typography>
			<Divider  sx={{ mt: '4px', mb: '12px' }} />
			<div className="text-center text-16 mb-20 sm:mb-40 px-12 text-primary" >
			一般社団法人ルーツ・スポーツ・ジャパン  〒160-0002  東京都新宿区四谷坂町12-21 コモンズビル7F
			</div>
			<Typography
				component="div"
				variant='subtitle2'
				className="text-center text-white py-8 bg-primary-500"
			>
				<CopyrightIcon />
				tour de nippon. All Rights Reserved
			</Typography>
		</Box>
	)
}

//AppFooter.defaultProps = {}

//AppFooter.propTypes = {}

export default React.memo(AppFooter)
