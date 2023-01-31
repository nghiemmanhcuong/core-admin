import { useAdminPageContext } from '@App/Admin/components/Provider/AdminPageProvider'
import { CoreActionDelete, CoreActionEdit, CoreActionView } from '@Core/components/Table/components/CoreTableAction'
import CoreTable, { columnHelper } from '@Core/components/Table/CoreTable'
import { Box } from '@mui/system'
import React, { useMemo, useState } from 'react'
import CurrencyFilter from './CurrencyFilter'
import { Link, useNavigate } from 'react-router-dom'
import { ROUTER_ADMIN } from '@App/Admin/configs/constants'

const ListCurrencyTable = props => {
	const { t, currencyTableHandler, handleDeleteCurrency } = useAdminPageContext()

	const navigate = useNavigate()
	const columns = useMemo(() => {
		return [
			columnHelper.accessor('id', {
				cell: info => info.getValue(),
				header: 'No',
				className: 'w-[5%]'
			}),
			columnHelper.accessor('name', {
				header: 'アプリ内通貨名',
				cell: ({ row }) => {
					return <span className="font-500">{row?.original?.name}</span>
				}
			}),
			columnHelper.accessor('unit', {
				header: 'アプリ内通貨単位',
				cell: ({ row }) => {
					return <span className="font-500">{row?.original?.unit}</span>
				}
			}),
			columnHelper.accessor('available_start', {
				header: '使用可能開始日'
			}),
			columnHelper.accessor('available_end', {
				header: '使用可能終了日'
			}),
			columnHelper.accessor('action', {
				header: t('label.action'),
				className: 'w-[15%]',
				cell: ({ row }) => {
					const data = row.original
					console.log('============= data', data)
					return (
						<div className="flex">
							{/* <CoreActionView onClick={() => console.log('============= data', data)} /> */}
							<CoreActionEdit
								onClick={() => navigate(ROUTER_ADMIN.currency.list + `/${data.id}`, { state: data })}
							/>
							<CoreActionDelete onConfirmDelete={() => handleDeleteCurrency(data?.id)} />
						</div>
					)
				}
			})
		]
	})

	return (
		<Box>
			<CurrencyFilter />
			<CoreTable
				isShowPagination
				columns={columns}
				{...currencyTableHandler}
				data={currencyTableHandler?.app_currency}
			/>
		</Box>
	)
}

export default React.memo(ListCurrencyTable)
