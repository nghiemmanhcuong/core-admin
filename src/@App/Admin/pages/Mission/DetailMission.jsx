/*
 * Created Date: 06-11-2022, 10:04:25 am
 * Author: TheAnh58_DELL
 * Email: you@you.you
 * -----
 * Last Modified: Sun Nov 06 2022
 * Modified By: Dell
 * -----
 * Copyright (c) 2022 PROS+ Group , Inc
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	----------------------------------------------------------
 */

import AdminContentPage from '@App/Admin/components/Layout/AdminContentPage'
import { ROUTER_ADMIN, TRANSLATE_ADMIN } from '@App/Admin/configs/constants'
import { Button } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import MissionForm from './Components/MissionForm'
import ListMissionProvider from './ListMissionProvider'
// import PropTypes from 'prop-types'

const DetailMission = (props) => {
    const {t} = useTranslation(TRANSLATE_ADMIN.mission)
    const navigate = useNavigate()
 return <ListMissionProvider>
    <AdminContentPage
        pageTitle={t('title.mission_detail')}
        headerAction={
            <Button variant="contained" color="error" onClick={() => navigate(ROUTER_ADMIN.mission.list)}>
                {t('common:btn.back')}
            </Button>
        }
        content={<MissionForm t={t} />}
    />
 </ListMissionProvider>
}

// DetailMission.defaultProps = {}

// DetailMission.propTypes = {}

export default React.memo(DetailMission)