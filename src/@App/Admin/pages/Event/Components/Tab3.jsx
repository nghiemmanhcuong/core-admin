import React, { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { TRANSLATE_ADMIN } from '@App/Admin/configs/constants'
import {
	Button,
	Paper,
	Typography,
	TextField,
	Box,
	Card,
	FormControlLabel,
	TableFooter,
	Pagination,
	TablePagination
} from '@mui/material'
import CoreInput from '@Core/components/Input/CoreInput'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Yup from '@Core/helper/Yup'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { CoreActionDelete } from '@Core/components/Table/components/CoreTableAction'
import Grid from '@mui/material/Grid'
import { useNavigate } from 'react-router-dom'
import { useAdminPageContext } from '@App/Admin/components/Provider/AdminPageProvider'
import EventEntryTable from './EventEntryTable'

const FontTitle = ({ variant = 'h1', title = '' }) => {
	return (
		<Typography variant={variant} className="text-primary">
			{title}
		</Typography>
	)
}

const Tab3 = props => {
	const { t, eventData, isEdit } = useAdminPageContext()
	const navigate = useNavigate()
	const { control } = useForm({
		mode: 'onTouched',
		defaultValues: {
			event_id: eventData?.id ?? null,
			title: eventData?.title ?? ''
		},
		resolver: yupResolver(
			Yup.object({
				title: Yup.string().required()
			})
		)
	})

	return (
		<form>
			<Box className="grid grid-flow-row-dense grid-cols-12 pb-20">
				<Box className="col-span-12 sm:col-span-10 sm:col-start-2 pt-20">
					<Box className="grid grid-flow-row-dense grid-cols-3 py-5">
						<Box className="col-span-3 sm:col-span-1 pt-10">
							<FontTitle variant="h3" title="イベントID" />
						</Box>
						<Box className="col-span-3 sm:col-span-2">
							<CoreInput
								control={control}
								name="event_id"
								placeholder="Default input"
								size="small"
								readOnly
								className="bg-grey-300"
							/>
						</Box>
					</Box>
					<Box className="grid grid-flow-row-dense grid-cols-3 py-5">
						<Box className="col-span-3 sm:col-span-1 pt-10">
							<FontTitle variant="h3" title="イベント名" />
						</Box>
						<Box className="col-span-3 sm:col-span-2">
							<CoreInput
								control={control}
								name="title"
								placeholder="Default input"
								size="small"
								readOnly
								className="bg-grey-300"
							/>
						</Box>
					</Box>
					<Box className="grid grid-flow-row-dense grid-cols-3 py-5">
						<Box className="col-span-3 sm:col-span-1 pt-10">
							<FontTitle variant="h3" title="エントリー状況" />
						</Box>
					</Box>
				</Box>
			</Box>
			<Box className="grid grid-flow-row-dense grid-cols-3 py-5">
				<Box className="col-span-3">
					<EventEntryTable />
				</Box>
			</Box>
			<Grid className="text-end pt-20">
				<Button variant="contained" className="bg-blue" color="success" size="small">
					登録
				</Button>
			</Grid>
		</form>
	)
}

export default React.memo(Tab3)
