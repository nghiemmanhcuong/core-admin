/*
 * Created Date: 20-10-2022, 3:41:46 pm
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

import CoreInput from '@Core/components/Input/CoreInput'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
// import PropTypes from 'prop-types'

const AdminInput = props => {
	const { control, label } = props
	return (
		<Box className="flex w-full flex-wrap sm:flex-nowrap">
			<Box className="w-full sm:w-1/3 mt-12">
				<Typography variant="h3" color="primary">
					{label}
				</Typography>
			</Box>
			<CoreInput control={control} name="id" size="small" className="w-full  sm:w-2/3" />
		</Box>
	)
}

//AdminInput.defaultProps = {}

//AdminInput.propTypes = {}

export default React.memo(AdminInput)
