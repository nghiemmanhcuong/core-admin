/*
 * Created Date: 18-12-2022, 3:58:10 pm
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

import { useAdminPageContext } from '@App/Admin/components/Provider/AdminPageProvider'
import { CoreActionDelete, CoreActionEdit } from '@Core/components/Table/components/CoreTableAction'
import CoreTable, { columnHelper } from '@Core/components/Table/CoreTable'
import { Box } from '@mui/system'
import React, { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
// import PropTypes from 'prop-types'

const EventEntryTable = props => {
	const { t, eventEntryTableHandler, handleDeleteEventEntry } = useAdminPageContext()
	const navigate = useNavigate()

	const columns = useMemo(() => {
		return [
			columnHelper.accessor('id', {
				cell: info => info.getValue(),
				header: t('label.no'),
				className: 'w-[5%]'
			}),
			columnHelper.accessor('user_id', {
				header: 'ユーザID',
				className: 'w-[5%]'
			}),
			columnHelper.accessor('user_name', {
				header: 'ユーザ名'
			}),
			columnHelper.accessor('category_name', {
				className: 'w-[20%] whitespace-normal',
				header: 'カテゴリ名'
			}),
			columnHelper.accessor('entry_fee', {
				header: 'エントリー料金'
			}),
			columnHelper.accessor('payment_method', {
				header: '支払方法'
			}),
			columnHelper.accessor('action', {
				header: t('label.action'),
				className: 'w-[15%]',
				cell: ({ row }) => {
					const data = row.original
					return (
						<div className="flex">
							<CoreActionEdit onClick={() => console.log('========== data')} />
							<CoreActionDelete onConfirmDelete={() => handleDeleteEventEntry(data.id)} />
						</div>
					)
				}
			})
		]
	})

	return (
		<Box>
			{/* <EventFilter /> */}
			<CoreTable
				isShowPagination
				columns={columns}
				{...eventEntryTableHandler}
				data={props?.data?.event_entries}
			/>
		</Box>
	)
}

// EventEntryTable.defaultProps = {}

// EventEntryTable.propTypes = {}

export default React.memo(EventEntryTable)
