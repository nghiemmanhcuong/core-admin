/*
 * Created Date: 16-08-2022, 5:31:05 pm
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

import { TableHead } from '@mui/material'
import { flexRender } from '@tanstack/react-table'
import React from 'react'
import CoreTableCell from './CoreTableCell'
import CoreTableHeader from './CoreTableHeader'
// import PropTypes from 'prop-types'

const CoreTableHead = ({ table }) => {
	return (
		<TableHead>
			{table.getHeaderGroups().map(headerGroup => (
				<CoreTableHeader key={headerGroup.id}>
					{headerGroup.headers.map(header => {
						return (
							<CoreTableCell
								key={header.id}
								{...{
									colSpan: header.colSpan,
									style: {
										width: header.getSize()
									}
								}}
							>
								{header.isPlaceholder
									? null
									: flexRender(header.column.columnDef.header, header.getContext())}
							</CoreTableCell>
						)
					})}
				</CoreTableHeader>
			))}
		</TableHead>
	)
}

//CoreTableHead.defaultProps = {}

//CoreTableHead.propTypes = {}

export default React.memo(CoreTableHead)
