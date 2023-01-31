/*
 * Created Date: 29-10-2022, 11:33:39 am
 * Author: TheAnh58_DELL
 * Email: you@you.you
 * -----
 * Last Modified: Tue Jan 31 2023
 * Modified By: haitran
 * -----
 * Copyright (c) 2022 PROS+ Group , Inc
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	----------------------------------------------------------
 */

import { Tooltip } from '@mui/material'
import { truncate } from 'lodash'

export const renderTextTruncate = title => {
	if (title?.length > 30) {
		return (
			<Tooltip title={title}>
				<span className="font-500">{truncate(title)}</span>
			</Tooltip>
		)
	}
	return <span className="font-500">{title}</span>
}
