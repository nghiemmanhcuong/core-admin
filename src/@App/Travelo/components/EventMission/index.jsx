/*
 * Created Date: 09-10-2022, 1:32:02 am
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

import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
// import PropTypes from 'prop-types'

const EventMission = props => {
	const { number, title } = props
	return (
		<Box>
			<Box className="w-92 h-92 rounded-full bg-[#D9D9D9] overflow-hidden">
				<Box className="flex flex-col-reverse items-center h-full ">
					<Typography variant="subtitle1" className="bg-mission text-white w-full text-center">
						+ {number}
					</Typography>
				</Box>
			</Box>
			{title && (
				<Box className="w-92 mt-12">
					<Typography component="p" variant="caption" className="text-center">
						{title}
					</Typography>
				</Box>
			)}
		</Box>
	)
}

EventMission.defaultProps = {
	number: 100
}

//EventMission.propTypes = {}

export default React.memo(EventMission)
