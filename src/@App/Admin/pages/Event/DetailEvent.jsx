import React, { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import AdminContentPage from '../../components/Layout/AdminContentPage'
import ListEventProvider from './ListEventProvider'
import { ROUTER_ADMIN, TRANSLATE_ADMIN } from '@App/Admin/configs/constants'
import { Button, Paper, Typography, TextField, Box, Card } from '@mui/material'
import CoreInput from '@Core/components/Input/CoreInput'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Yup from '@Core/helper/Yup'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { CoreActionDelete, CoreActionEdit, CoreActionView } from '@Core/components/Table/components/CoreTableAction'
import FormAutocomplete from '@App/Admin/components/Form/FormAutocomplete'
import CoreCheckbox from '@Core/components/Input/CoreCheckbox'
import TabHeader from './Components/TabHeader'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

const DetailEvent = props => {
	const { t } = useTranslation(TRANSLATE_ADMIN.event)
	const navigate = useNavigate()
	const location = useLocation()
	const { id } = useParams()
	const isEdit = id !== 'new'

	return (
		<ListEventProvider t={t} eventData={location?.state} isEdit={isEdit}>
			<AdminContentPage
				pageTitle="イベント情報詳細"
				headerAction={
					<Button variant="contained" color="error" onClick={() => navigate(ROUTER_ADMIN.event.list)}>
						{t('common:btn.back')}
					</Button>
				}
				tabHeader={<TabHeader />}
			/>
		</ListEventProvider>
	)
}

export default React.memo(DetailEvent)
