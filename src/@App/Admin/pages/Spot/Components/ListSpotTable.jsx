/*
 * Created Date: 12-10-2022, 3:36:47 pm
 * Author: Peter
 * Email: phantrung696@gmail.com
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
import { CoreActionDelete, CoreActionEdit, CoreActionView } from '@Core/components/Table/components/CoreTableAction'
import CoreTable, { columnHelper } from '@Core/components/Table/CoreTable'
import { Box } from '@mui/system'
import React, { useMemo } from 'react'
import SpotTableFilter from './SpotTableFilter'
import { TextField, Button, Tooltip, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { ROUTER_ADMIN } from '@App/Admin/configs/constants'
import { truncate } from 'lodash'
import { renderTextTruncate } from '@App/Admin/hooks/useHelpRender'
const ListSpotTable = props => {
	const { t, spotTableHandler, handleDeleteSpot } = useAdminPageContext()
	const navigate = useNavigate()
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
			}),
			columnHelper.accessor('action', {
				header: t('label.action'),
				// size: 200,
				className: 'w-[15%]',
				cell: ({ row }) => {
					const data = row.original
					return (
						<div className="flex">
							{/* <CoreActionView onClick={() => navigate(ROUTER_ADMIN.spot.edit)} /> */}
							<CoreActionEdit onClick={() => navigate(ROUTER_ADMIN.spot.edit, { state: data })} />
							<CoreActionDelete onConfirmDelete={() => handleDeleteSpot(data.id)} />
						</div>
					)
				}
			})
		]
	}, [t])

	return (
		<Box>
			<SpotTableFilter />
			<CoreTable isShowPagination columns={columns} {...spotTableHandler} data={spotTableHandler?.spots} />
			<Box className="flex justify-end">
				<Typography
					variant="subtitle2"
					className="p-10 bg-grey-300 rounded flex"
					sx={{ border: '1px solid #cccc' }}
				>
					<span className="m-auto">{t('edit.form.label.csv')}</span>
				</Typography>
				<div className="flex border-grey-300 border-1 rounded-4 relative" htmlFor="formId">
					<Typography
						className="ml-10 mr-5 my-auto text-white rounded-4 p-6"
						sx={{ backgroundColor: '#19A2B8' }}
					>
						ファイルを選択
					</Typography>
					<Typography className="ml-5 mr-10 my-auto">選択されていません</Typography>
					<input
						type="file"
						id="formId"
						value=""
						className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
					/>
				</div>

				<Button variant="contained" color="primary" className="ml-[2px]">
					{t('btn.upload')}
				</Button>
			</Box>
		</Box>
	)
}

//ListSpotTable.defaultProps = {}

//ListSpotTable.propTypes = {}

export default React.memo(ListSpotTable)
