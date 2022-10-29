/*
 * Created Date: 29-10-2022, 2:49:02 pm
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

import CoreDialog from '@Core/components/Dialog/CoreDialog'
import { useBoolean } from 'ahooks'
import React, { useCallback, useState } from 'react'
import EventDetailDialog from '../Components/EventDetailDialog'
// import PropTypes from 'prop-types'

export const useEventDetailDialog = (props) => {
    const [open, {setTrue, setFalse}] = useBoolean(false)
    const [data, setData] = useState([])

    const handleOpenEventDetail = (data) => {
        setData(data)
        setTrue()
    }

    const handleCloseEventDetail = () => {
        setFalse()
    }

    const renderEventDetail = useCallback(() => {
        return (
            <CoreDialog 
                open={open}
                handleClose={handleCloseEventDetail}
                dialogTitle='イベント詳細'
                maxWidth='lg'
                dialogContent={<EventDetailDialog data={data} />}
            />
        )
    }, [open, JSON.stringify(data)])
 return {
    handleOpenEventDetail, handleCloseEventDetail, renderEventDetail
 }
}