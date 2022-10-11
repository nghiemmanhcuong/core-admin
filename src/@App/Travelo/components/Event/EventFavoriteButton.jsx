/*
 * Created Date: 08-10-2022, 11:39:16 pm
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

import { Box, Icon, IconButton } from '@mui/material'
import React, { useState } from 'react'
// import PropTypes from 'prop-types'

const EventFavoriteButton = props => {
	const [isFavorited, setIsFavorited] = useState(false)

	const handleToggleFavorite = () => {
		setIsFavorited(!isFavorited)
	}

	return (
		<Box>
			{isFavorited ? (
				<IconButton color="error" onClick={handleToggleFavorite}>
					<Icon>favorite</Icon>
				</IconButton>
			) : (
				<IconButton onClick={handleToggleFavorite}>
					<Icon>favorite_border</Icon>
				</IconButton>
			)}
		</Box>
	)
}

//EventFavoriteButton.defaultProps = {}

//EventFavoriteButton.propTypes = {}

export default React.memo(EventFavoriteButton)
