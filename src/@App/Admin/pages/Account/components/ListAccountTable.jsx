/*
 * Created Date: 24-10-2022, 11:17:24 pm
 * Author: TheAnh58
 * Email: you@you.you
 * -----
 * Last Modified: Tue Oct 25 2022
 * Modified By: TheAnh58
 * -----
 * Copyright (c) 2022 PROS+ Group , Inc
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	----------------------------------------------------------
 */

import { useAdminPageContext } from '@App/Admin/components/Provider/AdminPageProvider'
import { ROUTER_ADMIN } from '@App/Admin/configs/constants'
import { CoreActionDelete, CoreActionEdit, CoreActionView } from '@Core/components/Table/components/CoreTableAction'
import CoreTable, { columnHelper } from '@Core/components/Table/CoreTable'
import { Box } from '@mui/material'
import React, { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import AccountTableFilter from './AccountTableFilter'
// import PropTypes from 'prop-types'

const ListAccountTable = (props) => {
    const { t, accountTableHandler, handleDeleteAccount } = useAdminPageContext()
	const navigate = useNavigate()
    const columns = useMemo(() => {
		return [
			columnHelper.accessor('id', {
				cell: info => info.getValue(),
				header: t('label.no'),
				className: 'w-[5%]'
			}),
			columnHelper.accessor('name', {
				className: 'w-[20%] whitespace-normal',
				header: t('label.name')
			}),
			columnHelper.accessor('mail', {
				header: t('label.mail')
			}),
			columnHelper.accessor('role', {
				header: t('label.role')
			}),
			columnHelper.accessor('roll', {
				header: t('label.roll')
			}),
			columnHelper.accessor('action', {
				header: t('label.action'),
				className: 'w-[15%]',
				cell: ({ row }) => {
					const data = row.original
					return (
						<div className="flex">
							<CoreActionView onClick={() => console.log('============= data', data)} />
							<CoreActionEdit onClick={() => navigate(ROUTER_ADMIN.account.list + `/${data.id}`, {state: {data}})} />
							<CoreActionDelete onConfirmDelete={() => handleDeleteAccount(data.id)} />
						</div>
					)
				}
			})
		]
	})
 return (
    <Box>
        <AccountTableFilter />
		<CoreTable isShowPagination columns={columns} {...accountTableHandler} data={accountTableHandler?.accounts} />

    </Box>
 )
}

// ListAccountTable.defaultProps = {}

// ListAccountTable.propTypes = {}

export default React.memo(ListAccountTable)