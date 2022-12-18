/*
 * Created Date: 17-12-2022, 9:40:54 pm
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
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import React from 'react'
// import PropTypes from 'prop-types'

const TableSpotForm = props => {
	const { tableSelected } = props

	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell style={{ width: '10%' }}>
							<Box sx={{ fontWeight: 'bold' }}>No</Box>
						</TableCell>
						<TableCell style={{ width: '20%' }}>
							<Box sx={{ fontWeight: 'bold' }}>スポット名</Box>
						</TableCell>
						<TableCell style={{ width: '10%' }}>
							<Box sx={{ fontWeight: 'bold' }}>スポット種別</Box>
						</TableCell>
						<TableCell style={{ width: '30%' }}>
							<Box sx={{ fontWeight: 'bold' }}>住所</Box>
						</TableCell>
						<TableCell style={{ width: '15%' }}>
							<Box sx={{ fontWeight: 'bold' }}>獲得ポイント</Box>
						</TableCell>
						<TableCell style={{ width: '15%' }}>
							<Box sx={{ fontWeight: 'bold' }}>次スポットへの時間</Box>
						</TableCell>
						<TableCell>
							<Box sx={{ fontWeight: 'bold' }}>アクション</Box>
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{tableSelected?.map(row => (
						<TableRow key={row?.id}>
							<TableCell>
								<TextField type="number" id="outlined-search" size="small" defaultValue={row?.id} />
							</TableCell>
							<TableCell>{row?.name}</TableCell>
							<TableCell>{row?.type}</TableCell>
							<TableCell>{row?.address}</TableCell>
							<TableCell>
								<TextField
									className="w-1/3"
									type="number"
									id="outlined-search"
									size="small"
									defaultValue={row?.address}
								/>
							</TableCell>
							<TableCell className="flex items-center">
								<TextField
									className="w-1/3 mr-12"
									type="number"
									id="outlined-search"
									size="small"
									defaultValue={row?.protein1}
								/>
								分
							</TableCell>
							<TableCell>
								<Box className="flex">
									<CoreActionDelete onClick={() => console.log('============= data')} />
								</Box>
							</TableCell>
						</TableRow>
					)) ?? (
						<TableRow>
							<TableCell colSpan={10}>
								<Box className="w-full text-center">データなし</Box>
							</TableCell>
						</TableRow>
					)}
				</TableBody>
			</Table>
		</TableContainer>
	)
}

// TableSpotForm.defaultProps = {}

// TableSpotForm.propTypes = {}

export default React.memo(TableSpotForm)
