/*
 * Created Date: 09-11-2022, 9:42:26 pm
 * Author: TheAnh58
 * Email: you@you.you
 * -----
 * Last Modified: Wed Nov 09 2022
 * Modified By: TheAnh58
 * -----
 * Copyright (c) 2022 PROS+ Group , Inc
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	----------------------------------------------------------
 */

import { TRANSLATE_ADMIN } from '@App/Admin/configs/constants'
import CoreDialog from '@Core/components/Dialog/CoreDialog'
import { useBoolean } from 'ahooks'
import React, { useCallback, useState, useTransition } from 'react'
import { useTranslation } from 'react-i18next'
import ListSpotProvider from '../../Spot/ListSpotProvider'
import TableSpotDialog from '../Components/TableSpotDialog'
// import PropTypes from 'prop-types'

export const useListSpotDialog = (props) => {
    const { t } = useTranslation(TRANSLATE_ADMIN.spot)

    const [open, {setTrue, setFalse}] = useBoolean()
    const [data, setData] = useState(null)

    const handleOpen = () => {
        setTrue()
    }

    const handleClose = () => {
        setFalse()
    }

    const renderListSpotDialog = useCallback(() => {
        return open && (<CoreDialog 
            open={open}
            dialogTitle='スポット選択'
            handleClose={handleClose}
            maxWidth='lg'
            dialogContent={<ListSpotProvider t={t}>
                <TableSpotDialog  handleClose={handleClose} />
            </ListSpotProvider>}            

        />)
    }, [open])
 return {handleClose, handleOpen, renderListSpotDialog}
}

