/*
 * Created Date: 19-12-2022, 2:32:07 pm
 * Author: Hai Tran
 * Email: you@you.you
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

import { CoreActionDelete } from '@Core/components/Table/components/CoreTableAction'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect } from 'react'
import { useRequest } from 'ahooks'
import { spotSerivce } from '@App/Admin/services/spotService'
import { useCallback } from 'react'

const FilterDataTableSpot = props => {
	const { ind, event_spot_id, point, special_action_type, spot_id, handleCallback = () => {} } = props

	const {
		data: spotDetail,
		run: getSpotDetail,
		loading: loadingSpotDetail
	} = useRequest(spotSerivce.getSpotById, {
		manual: true,
		onError: (res, params) => {
			if (params) {
				mutate({
					data: []
				})
			} else {
				errorMsg(res?.response?.data?.error_message)
			}
		}
	})

	useEffect(() => {
		if (spot_id) {
			getSpotDetail({ id: spot_id })
		}
	}, [])

	const handleChangePoint = event => {
		handleCallback({ spot_id, point: event.target.value })
	}

	return (
		!loadingSpotDetail && (
			<TableRow>
				<TableCell>
					<TextField disabled type="number" id="outlined-search" size="small" defaultValue={ind + 1} />
				</TableCell>
				<TableCell>{spotDetail?.spots[0].name}</TableCell>
				<TableCell>{spotDetail?.spots[0].type}</TableCell>
				<TableCell>{spotDetail?.spots[0].address}</TableCell>
				<TableCell>
					<TextField
						onChange={handleChangePoint}
						className="w-1/3"
						type="number"
						id="outlined-search"
						size="small"
						defaultValue={point}
					/>
				</TableCell>
				<TableCell>
					<Box className="flex items-center">
						<TextField className="w-1/3 mr-12" type="number" id="outlined-search" size="small" />分
					</Box>
				</TableCell>
				<TableCell>
					<Box className="flex">
						<CoreActionDelete onClick={() => console.log('============= data')} />
					</Box>
				</TableCell>
			</TableRow>
		)
	)
}

// TableSpot.defaultProps = {}

// TableSpot.propTypes = {}

export default React.memo(FilterDataTableSpot)
