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
import React, { useCallback, useMemo } from 'react'
import SurroundingTableFilter from './SurroundingTableFilter'
import { TextField, Button, Typography } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import { ROUTER_ADMIN } from '@App/Admin/configs/constants'
import { errorMsg } from '@Core/helper/Message'
import { surroundingService } from '@App/Admin/services/surroundingService'

const ListSurroundingTable = props => {
	const { t, surroundingTableHandler, handleDeleteSurrounding } = useAdminPageContext()
	const navigate = useNavigate()
	const location = useLocation()

	const onUploadFile = useCallback(async e => {
		const newFile = e.target.files[0]

		if (newFile) {
			try {
				await surroundingService.csvUploadFile(newFile)
			} catch (error) {
				errorMsg(error)
			}
		}
	})

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
				header: t('label.area')
			}),
			columnHelper.accessor('type', {
				header: t('label.type')
			}),
			columnHelper.accessor('position', {
				header: t('label.lat_long'),
				cell: ({ row }) => {
					return `${row?.original?.location_info_latitude} ・ ${row?.original?.location_info_longitude}`
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
							<CoreActionEdit
								onClick={() => navigate(ROUTER_ADMIN.surrounding.list + `/${data.id}`, { state: data })}
							/>
							<CoreActionDelete onConfirmDelete={() => handleDeleteSurrounding(data.id)} />
						</div>
					)
				}
			})
		]
	}, [t])

	return (
		<Box>
			<SurroundingTableFilter />
			<CoreTable
				isShowPagination
				columns={columns}
				{...surroundingTableHandler}
				data={surroundingTableHandler?.surrounding_info}
			/>
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
						onChange={onUploadFile}
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

export default React.memo(ListSurroundingTable)
