/*
 * Created Date: 14-11-2022, 10:01:20 pm
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
import { ROUTER_ADMIN, TRANSLATE_ADMIN } from '@App/Admin/configs/constants'
import { CoreActionDelete, CoreActionEdit } from '@Core/components/Table/components/CoreTableAction'
import CoreTable, { columnHelper } from '@Core/components/Table/CoreTable'
import { Box } from '@mui/system'
import React, { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import CardFilter from './CardFilter'
// import PropTypes from 'prop-types'

const ListCardTable = props => {
	const { t } = useTranslation(TRANSLATE_ADMIN.card)
	const navigate = useNavigate()
	const { cardTableHandler, handleDeleteCard } = useAdminPageContext()

	const columns = useMemo(() => {
		return [
			columnHelper.accessor('id', {
				cell: info => info.getValue(),
				header: t('label.no'),
				className: 'w-[5%]'
			}),
			columnHelper.accessor('name', {
				header: t('label.name')
			}),
			columnHelper.accessor('app_currency', {
				header: t('label.app_currency')
			}),
			columnHelper.accessor('image', {
				header: t('label.image')
			}),
			columnHelper.accessor('action', {
				header: t('label.action'),
				className: 'w-[15%]',
				cell: ({ row }) => {
					const data = row.original
					console.log('============= data', data)
					return (
						<div className="flex">
							<CoreActionEdit
								onClick={() => navigate(ROUTER_ADMIN.card.list + `/${data.id}`, { state: data })}
							/>
							<CoreActionDelete onConfirmDelete={() => handleDeleteCard(data.id)} />
						</div>
					)
				}
			})
		]
	})

	return (
		<Box>
			<CardFilter />
			<CoreTable isShowPagination columns={columns} {...cardTableHandler} data={cardTableHandler?.cards} />
		</Box>
	)
}

// ListCardTable.defaultProps = {}

// ListCardTable.propTypes = {}

export default React.memo(ListCardTable)
