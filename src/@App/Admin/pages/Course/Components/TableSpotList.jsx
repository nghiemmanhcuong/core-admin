/*
 * Created Date: 27-01-2023, 4:07:14 pm
 * Author: Hai Tran
 * Email: you@you.you
 * -----
 * Last Modified:
 * Modified By:
 * -----
 * Copyright (c) 2023 PROS+ Group , Inc
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	----------------------------------------------------------
 */

import CoreInput from '@Core/components/Input/CoreInput'
import { CoreActionDelete } from '@Core/components/Table/components/CoreTableAction'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import React from 'react'
import { useFormContext } from 'react-hook-form'
// import PropTypes from 'prop-types'

const TableSpotList = props => {
	const { fieldsSpot } = props
	const { control, removeSpot, setTableSelected } = useFormContext()

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
					{fieldsSpot && Array.isArray(fieldsSpot) && fieldsSpot.length > 0 ? (
						fieldsSpot?.map((row, indRow) => (
							<TableRow key={indRow}>
								<TableCell>
									<TextField id="outlined-search" size="small" value={indRow + 1} readOnly />
								</TableCell>
								<TableCell className='font-500'>
									{row?.name}
									<CoreInput
										control={control}
										name={`fieldsSpot.${indRow}.name`}
										defaultValue={row?.name}
										size="small"
										className="mb-16 sm:mb-20 hidden"
									/>
									<CoreInput
										control={control}
										name={`fieldsSpot.${indRow}.course_spot_id`}
										defaultValue={row?.course_spot_id}
										size="small"
										className="mb-16 sm:mb-20 hidden"
									/>
									<CoreInput
										control={control}
										name={`fieldsSpot.${indRow}.spot_id`}
										defaultValue={row?.spot_id}
										size="small"
										className="mb-16 sm:mb-20 hidden"
									/>
									<CoreInput
										control={control}
										name={`fieldsSpot.${indRow}.route_number`}
										defaultValue={row?.route_number}
										size="small"
										className="mb-16 sm:mb-20 hidden"
									/>
								</TableCell>
								<TableCell  className='font-500'>
									{row?.type}
									<CoreInput
										control={control}
										defaultValue={row?.type}
										name={`fieldsSpot.${indRow}.type`}
										className="w-1/3 text-[#6e6e6e] hidden"
										size="small"
									/>
								</TableCell>
								<TableCell  className='font-500'>
									{row?.address}
									<CoreInput
										control={control}
										defaultValue={row?.address}
										name={`fieldsSpot.${indRow}.address`}
										className="w-1/3 text-[#6e6e6e] hidden"
										size="small"
									/>
								</TableCell>
								<TableCell  className='font-500'>
									<CoreInput
										type="number"
										control={control}
										defaultValue={row?.distance_between_next_spot ?? 0}
										name={`fieldsSpot.${indRow}.distance_between_next_spot`}
										className="w-1/3 text-[#6e6e6e]"
										size="small"
									/>
								</TableCell>
								<TableCell  className='font-500'>
									<Box className="flex items-center">
										<CoreInput
											type="number"
											control={control}
											defaultValue={row?.time_between_next_spot ?? 0}
											name={`fieldsSpot.${indRow}.time_between_next_spot`}
											className="w-1/3 text-[#6e6e6e] mr-8"
											size="small"
										/>
										分
									</Box>
								</TableCell>
								<TableCell>
									<Box className="flex">
										<CoreActionDelete onConfirmDelete={() => removeSpot(indRow)} />
									</Box>
								</TableCell>
							</TableRow>
						))
					) : (
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

// TableSpotList.defaultProps = {}

// TableSpotList.propTypes = {}

export default React.memo(TableSpotList)
