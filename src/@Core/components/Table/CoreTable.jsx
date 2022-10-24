/*
 * Created Date: 16-08-2022, 4:50:14 pm
 * Author: Peter
 * Email: phantrung696@gmail.com
 * -----
 * Last Modified:
 * Modified By:
 * -----
 * Copyright (c) 2022 PT CORP, Inc
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	----------------------------------------------------------
 */
// import TableHeader from '@crema/core/AppTable/TableHeader'
import { Box, CircularProgress, Pagination, Table, TableContainer, TablePagination } from '@mui/material'
import { createColumnHelper, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import { useUpdateEffect } from 'ahooks'

import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import CoreTableBody from './components/CoreTableBody'
import CoreTableHead from './components/CoreTableHead'
import CoreTableToolbar from './components/CoreTableToolbar'
// import PropTypes from 'prop-types'
const CoreTableContext = React.createContext()

export const useCoreTableContext = () => useContext(CoreTableContext)

export const columnHelper = createColumnHelper()
const CoreTable = ({
	data = [],
	columns = [],
	total = 0,
	isShowPagination = false,
	pageSize = 10,
	pageIndex = 1,
	handleFetchData = () => {},
	loading = false,
	...restProps
}) => {
	const { t } = useTranslation('common')
	const rerender = React.useReducer(() => ({}), {})[1]
	const defaultData = React.useMemo(() => [], [])

	const pagination = React.useMemo(
		() => ({
			pageIndex,
			pageSize
		}),
		[pageIndex, pageSize]
	)

	const table = useReactTable({
		data: data ?? defaultData,
		columns,
		pageCount: total,
		getCoreRowModel: getCoreRowModel(),
		state: {
			pagination
		},
		// onPaginationChange: setPagination,
		manualPagination: true,
		debugTable: true
	})

	return (
		<CoreTableContext.Provider value={{ table, t }}>
			{/* <CoreTableToolbar handleFetchData={handleFetchData} /> */}
			<TableContainer
				className="relative"
				sx={{
					'& tr > th, & tr > td': {
						whiteSpace: 'nowrap'
					}
				}}
			>
				<Table sx={{ minWidth: 650 }} stickyHeader className="table">
					<CoreTableHead table={table} columns={columns} />
					<CoreTableBody table={table} />
				</Table>
				{loading && (
					<>
						<div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center z-99 table-loading">
							<CircularProgress />
						</div>
						<div className="absolute top-0 bottom-0 left-0 right-0 bg-primary-50 opacity-30" />
					</>
				)}
			</TableContainer>
			{isShowPagination && (
				<Box className="my-12 flex flex-row-reverse">
					<Pagination
						count={Math.ceil(total / pageSize) ?? 1}
						variant="outlined"
						shape="rounded"
						onChange={(e, page) => {
							handleFetchData({ page })
						}}
					/>
				</Box>
				// <TablePagination
				// 	component="div"
				// 	classes={{
				// 		root: 'flex-shrink-0'
				// 	}}
				// 	rowsPerPageOptions={[]}
				// 	colSpan={5}
				// 	count={total ?? 0}
				// 	rowsPerPage={pageSize}
				// 	page={pageIndex}
				// 	SelectProps={{
				// 		inputProps: { 'aria-label': 'rows per page' },
				// 		native: false
				// 	}}
				// 	lang="vi"
				// 	onPageChange={(event, newPage) => {
				// 		handleFetchData({ page: newPage + 1 })
				// 	}}
				// 	onRowsPerPageChange={event => {
				// 		handleFetchData({ size: Number(event.target.value) })
				// 	}}
				// />
			)}
		</CoreTableContext.Provider>
	)
}

//CoreTable.defaultProps = {}

//CoreTable.propTypes = {}

export default React.memo(CoreTable)
