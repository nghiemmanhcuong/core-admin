/*
 * Created Date: 29-10-2022, 1:53:35 pm
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

import { eventService } from '@App/Admin/services/eventService'
import CoreDialog from '@Core/components/Dialog/CoreDialog'
import { errorMsg } from '@Core/helper/Message'
import { useBoolean } from 'ahooks'
import React, { useCallback, useState } from 'react'
import EventReviewTable from '../Components/EventReviewTable'
// import PropTypes from 'prop-types'

export const useEventReviewDialog = (props) => {
    const [open, {setTrue, setFalse}] = useBoolean(false)
    const [data, setData] = useState([])

    const handleOpen = async (event_id) => {
        try {
            const res = await eventService.getEventReview({event_id})
            setData(res)
            setTrue()
            
        } catch (error) {
            errorMsg(error?.response?.data?.error_message)
        }
    }

    const handleClose = () => {
        setFalse()
    }

    const renderEventReview = useCallback(() => {
        return (
            <CoreDialog 
                open={open}
                handleClose={handleClose}
                dialogTitle='イベントレビュー'
                maxWidth='lg'
                dialogContent={<EventReviewTable data={data} setData={setData} />}
            />
        )
    }, [open, JSON.stringify(data)])
 return {
    handleOpen, handleClose, renderEventReview
 }
}

