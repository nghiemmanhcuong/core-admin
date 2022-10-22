import { useAdminPageContext } from '@App/Admin/components/Provider/AdminPageProvider'
import { CoreActionDelete, CoreActionEdit, CoreActionView } from '@Core/components/Table/components/CoreTableAction'
import CoreTable, { columnHelper } from '@Core/components/Table/CoreTable'
import { Box } from '@mui/system'
import React, { useMemo, useState } from 'react'
import CurrencyFilter from './CurrencyFilter'
import { Link } from 'react-router-dom'
import ConfirmDialog from '@Core/components/Dialog/ConfirmDialog'

const ListCurrencyTable = props => {
	const { t, currencyTableHandler } = useAdminPageContext()
	const columns = useMemo(() => {
		return [
			columnHelper.accessor('id', {
				cell: info => info.getValue(),
				header: 'No',
				className: 'w-[5%]'
			}),
			columnHelper.accessor('name', {
				header: 'アプリ内通貸名'
			}),
			columnHelper.accessor('area', {
				header: '通貸単位名'
			}),
			columnHelper.accessor('range', {
				header: 'ポイント換算レート'
			}),
			columnHelper.accessor('start_date', {
				header: '使用可能開始日'
			}),
			columnHelper.accessor('end_date', {
				header: '使用可能終了日'
			}),
			columnHelper.accessor('author', {
				header: '状態'
			}),
			columnHelper.accessor('action', {
				header: t('label.action'),
				className: 'w-[15%]',
				cell: ({ row }) => {
					const data = row.original
					return (
						<div className="flex">
							<CoreActionView onClick={() => console.log('============= data', data)} />
							<Link to={`/admin/currency/${data.id}`}>
								<CoreActionEdit />
							</Link>
							<CoreActionDelete />
						</div>
					)
				}
			})
		]
	})

	return (
		<Box>
			<CurrencyFilter />
			<CoreTable isShowPagination columns={columns} {...currencyTableHandler} />
		</Box>
	)
}

export default React.memo(ListCurrencyTable)
