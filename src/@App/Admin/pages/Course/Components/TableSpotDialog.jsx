/*
 * Created Date: 09-11-2022, 9:46:03 pm
 * Author: TheAnh58
 * Email: you@you.you
 * -----
 * Last Modified: Sat Dec 17 2022
 * Modified By: Hai Tran
 * -----
 * Copyright (c) 2022 PROS+ Group , Inc
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	----------------------------------------------------------
 */

import { useAdminPageContext } from '@App/Admin/components/Provider/AdminPageProvider'
import { renderTextTruncate } from '@App/Admin/hooks/useHelpRender'
import CoreCheckbox from '@Core/components/Input/CoreCheckbox'
import CoreTable, { columnHelper } from '@Core/components/Table/CoreTable'
import { Box, Button } from '@mui/material'
import React, { useMemo, useState } from 'react'
import { useForm, useFormContext } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import SpotTableFilter from '../../Spot/Components/SpotTableFilter'
// import PropTypes from 'prop-types'

const TableSpotDialog = props => {
	const { handleClose } = props
	const { t, spotTableHandler, handleDeleteSpot } = useAdminPageContext()
	const { setTableSelected } = useFormContext()
	const [data, setData] = useState()

	const navigate = useNavigate()
	const columns = useMemo(() => {
		return [
			columnHelper.accessor('id', {
				header: t('label.no'),
				className: 'w-[5%]',
				cell: info => <span className="font-500">{info.getValue()}</span>
			}),
			columnHelper.accessor('name', {
				header: t('label.name'),
				cell: ({ row }) => {
					return <span className="font-500">{row?.original?.name}</span>
				}
			}),
			columnHelper.accessor('address', {
				header: t('label.address'),
				cell: info => {
					return renderTextTruncate(info.getValue())
				}
			}),
			columnHelper.accessor('tel', {
				header: t('label.phone')
			}),
			columnHelper.accessor('url', {
				header: 'URL', //t('label.point'),
				cell: info => {
					return renderTextTruncate(info.getValue())
				}
			})
			// columnHelper.accessor('action', {
			// 	header: t('label.action'),
			// 	// size: 200,
			// 	className: 'w-[15%]',
			// 	cell: ({ row }) => {
			// 		const data = row.original
			// 		return (
			// 			<div className="flex">
			// 				{/* <CoreActionView onClick={() => navigate(ROUTER_ADMIN.spot.edit)} /> */}
			// 				<CoreActionEdit onClick={() => navigate(ROUTER_ADMIN.spot.edit, { state: data })} />
			// 				<CoreActionDelete onConfirmDelete={() => handleDeleteSpot(data.id)} />
			// 			</div>
			// 		)
			// 	}
			// })
		]
	}, [t])

	return (
		<Box>
			<SpotTableFilter />
			<CoreTable
				isShowPagination
				hasRowSelection
				columns={columns}
				onRowSelectionChange={rows => setData(rows)}
				{...spotTableHandler}
				data={spotTableHandler?.spots}
			/>
			{/* <Box className="flex justify-end">
				<TextField type="file"/>
				<Button variant="contained" color="primary" className="ml-[2px]" >
					{t('btn.upload')}
				</Button>
			</Box> */}
			<Box className="text-right my-20">
				<Button
					className="bg-blue px-12"
					onClick={() => {
						setTableSelected(data)
						handleClose()
					}}
					variant="contained"
				>
					??????
				</Button>
			</Box>
		</Box>
	)
}

// TableSpotDialog.defaultProps = {}

// TableSpotDialog.propTypes = {}

export default React.memo(TableSpotDialog)
