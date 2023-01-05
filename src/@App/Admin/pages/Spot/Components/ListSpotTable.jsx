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
import React, { useCallback, useMemo, useState, useEffect } from 'react'
import SpotTableFilter from './SpotTableFilter'
import { TextField, Button, Tooltip, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { ROUTER_ADMIN } from '@App/Admin/configs/constants'
import { truncate } from 'lodash'
import { renderTextTruncate } from '@App/Admin/hooks/useHelpRender'
import { spotSerivce } from '@App/Admin/services/spotService'
import { errorMsg } from '@Core/helper/Message'

const ListSpotTable = props => {
	const { t, spotTableHandler, handleDeleteSpot, tags } = useAdminPageContext()
	const navigate = useNavigate()

	const [listTag, setListTag] = useState(null)
	useEffect(() => {
		if (tags) {
			setListTag(tags.tags)
		}
	}, [tags])

	const onUploadFile = useCallback(async e => {
		const newFile = e.target.files[0]

		if (newFile) {
			try {
				await spotSerivce.csvUploadFile(newFile)
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
							{listTag && (
								<CoreActionEdit
									onClick={() =>
										navigate(ROUTER_ADMIN.spot.edit, { state: { tags: listTag, ...data } })
									}
								/>
							)}

							<CoreActionDelete onConfirmDelete={() => handleDeleteSpot(data.id)} />
						</div>
					)
				}
			})
		]
	}, [t, listTag])

	return (
		<Box>
			<SpotTableFilter />
			<CoreTable isShowPagination columns={columns} {...spotTableHandler} data={spotTableHandler?.spots} />
			<Box className="flex justify-end">
				<Typography
					variant="subtitle2"
					className="pl-16 pt-6 pr-16 bg-grey-300 rounded flex h-32 w-auto text-13"
				>
					{t('edit.form.label.csv')}
				</Typography>
				<div className="flex border-grey-300 border-1 rounded-4 relative" htmlFor="formId">
					<Typography
						className="mr-5 my-auto text-white rounded-4 p-6"
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
				<Button
					variant="contained"
					color="primary"
					className="mr-2 h-32 w-auto text-13"
				>
					{t('btn.upload')}
				</Button>
			</Box>
		</Box>
	)
}

//ListSpotTable.defaultProps = {}

//ListSpotTable.propTypes = {}

export default React.memo(ListSpotTable)
