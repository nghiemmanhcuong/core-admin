import React, { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import AdminContentPage from '../../components/Layout/AdminContentPage'
import ListEventProvider from './ListEventProvider'
import { ROUTER_ADMIN, TRANSLATE_ADMIN } from '@App/Admin/configs/constants'
import { Button, Paper, Typography, TextField, Box, Card } from '@mui/material'
import TabHeader from './Components/TabHeader'
import { useLocation, useParams } from 'react-router-dom'

const DetailEvent = props => {
	const { t } = useTranslation(TRANSLATE_ADMIN.event)
	const location = useLocation()
	const { id } = useParams()
	const isEdit = id !== 'new'

	return (
		<ListEventProvider t={t} eventData={location?.state} isEdit={isEdit}>
			<AdminContentPage
				pageTitle="イベント情報詳細"
				tabHeader={<TabHeader />}
			/>
		</ListEventProvider>
	)
}

export default React.memo(DetailEvent)
