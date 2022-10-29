/*
 * Created Date: 29-10-2022, 2:02:24 pm
 * Author: TheAnh58_DELL
 * Email: you@you.you
 * -----
 * Last Modified: Sat Oct 29 2022
 * Modified By: Dell
 * -----
 * Copyright (c) 2022 PROS+ Group , Inc
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	----------------------------------------------------------
 */

import { useAdminPageContext } from '@App/Admin/components/Provider/AdminPageProvider'
import { renderTextTruncate } from '@App/Admin/hooks/useHelpRender'
import { eventService } from '@App/Admin/services/eventService'
import { CoreActionDelete, CoreActionView } from '@Core/components/Table/components/CoreTableAction'
import CoreTable, { columnHelper } from '@Core/components/Table/CoreTable'
import { errorMsg, successMsg } from '@Core/helper/Message'
import React, { useMemo } from 'react'
// import PropTypes from 'prop-types'

const EventReviewTable = (props) => {
    const {t} = useAdminPageContext()
    const {data, setData} = props

    const handleDeleteEventReview = async id => {
        try {
            await eventService.deleteEventReview(id)
            const res = await eventService.getEventReview({event_id: data?.search_params?.event_id})
            setData(res)
            successMsg('delete event review success')
        } catch (error) {
            errorMsg(error)
        }
    }
    const columns = useMemo(() => {
		return [
			columnHelper.accessor('id', {
				cell: info => info.getValue(),
				header: t('label.no'),
				className: 'w-[5%]'
			}),
			columnHelper.accessor('text', {
				className: 'w-[20%] whitespace-normal',
				header: t('label.text'),
				cell: info => renderTextTruncate(info.getValue())
			}),
			columnHelper.accessor('event_id', {
				header: t('label.event_id')
			}),
			columnHelper.accessor('course_id', {
				header: t('label.course_id')
			}),
			columnHelper.accessor('rating', {
				header: t('label.rating')
			}),
			columnHelper.accessor('image', {
				header: t('label.image'),
				className: 'w-[10%]',
				cell: ({ row }) => {
					return <img src={row.original.image} />
				}
			}),
			columnHelper.accessor('action', {
				header: t('label.action'),
				className: 'w-[15%]',
				cell: ({ row }) => {
					const data = row.original
					return (
						<div className="flex">
							<CoreActionDelete onConfirmDelete={() => handleDeleteEventReview(row.original.id)} />
						</div>
					)
				}
			})
		]
	})
 return <CoreTable isShowPagination columns={columns} {...data} data={data?.event_reviews} />
}

// EventReviewTable.defaultProps = {}

// EventReviewTable.propTypes = {}

export default React.memo(EventReviewTable)