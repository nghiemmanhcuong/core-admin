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
	Pagination
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

const FontTitle = ({ variant = 'h1', title = '' }) => {
	return (
		<Typography variant={variant} className="text-primary">
			{title}
		</Typography>
	)
}
function createData(no, name, fat, carbs, protein, carbs1, protein1) {
	return { no, name, fat, carbs, protein, carbs1, protein1 }
}

const rows = [
	createData(1, 'Frozen yoghurt', 159, 6.0, 2, 4, 1),
	createData(2, 'Ice cream sandwich', 237, 9.0, 7, 3, 1),
	createData(3, 'Eclair', 262, 16.0, 2, 6, 1),
	createData(1, 'Cupcake', 305, 3.7, 6, 4, 1),
	createData(5, 'Gingerbread', 356, 16.0, 49, 9, 1),
	createData(6, 'Cupcake', 305, 3.7, 67, 4.3),
	createData(7, 'Donut', 452, 25.0, 51, 4.9),
	createData(8, 'Eclair', 262, 16.0, 24, 6.0),
	createData(9, 'Frozen yoghurt', 159, 6.0, 24, 4.0),
	createData(10, 'Gingerbread', 356, 16.0, 49, 3.9),
	createData(11, 'Honeycomb', 408, 3.2, 87, 6.5),
	createData(12, 'Ice cream sandwich', 237, 9.0, 37, 4.3),
	createData(13, 'Jelly Bean', 375, 0.0, 94, 0.0),
	createData(14, 'KitKat', 518, 26.0, 65, 7.0),
	createData(15, 'Lollipop', 392, 0.2, 98, 0.0),
	createData(16, 'Marshmallow', 318, 0, 81, 2.0),
	createData(17, 'Nougat', 360, 19.0, 9, 37.0),
	createData(18, 'Oreo', 437, 18.0, 63, 4.0)
]

const tableForm = () => {
	const [page, setPage] = React.useState(0)
	const [rowsPerPage, setRowsPerPage] = React.useState(10)

	const handleChangePage = (event, newPage) => {
		setPage(newPage)
	}

	const handleChangeRowsPerPage = event => {
		setRowsPerPage(+event.target.value)
		setPage(0)
	}
	return (
		<>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell style={{ width: '12%' }}>
								<Box sx={{ fontWeight: 'bold' }}>エントリーID</Box>
							</TableCell>
							<TableCell style={{ width: '20%' }}>
								<Box sx={{ fontWeight: 'bold' }}>ユーザID</Box>
							</TableCell>
							<TableCell style={{ width: '12%' }}>
								<Box sx={{ fontWeight: 'bold' }}>ユーザ名</Box>
							</TableCell>
							<TableCell style={{ width: '14%' }}>
								<Box sx={{ fontWeight: 'bold' }}>エントリー日時</Box>
							</TableCell>
							<TableCell style={{ width: '16%' }}>
								<Box sx={{ fontWeight: 'bold' }}>エントリーカテゴリ</Box>
							</TableCell>
							<TableCell style={{ width: '16%' }}>
								<Box sx={{ fontWeight: 'bold' }}>エントリー料</Box>
							</TableCell>
							<TableCell>
								<Box sx={{ fontWeight: 'bold' }}>決済方法</Box>
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map(row => (
							<TableRow key={row.no}>
								<TableCell>
									<TextField type="number" id="outlined-search" size="small" defaultValue={row.no} />
								</TableCell>
								<TableCell>{row.name}</TableCell>
								<TableCell>{row.fat}</TableCell>
								<TableCell>{row.carbs}</TableCell>
								<TableCell>
									<TextField
										type="number"
										id="outlined-search"
										size="small"
										defaultValue={row.carbs1}
									/>
								</TableCell>
								<TableCell>
									<TextField
										type="number"
										id="outlined-search"
										size="small"
										defaultValue={row.protein1}
									/>
								</TableCell>
								<TableCell>
									<Box className="flex">
										<CoreActionDelete onClick={() => console.log('============= data', data)} />
									</Box>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			<Box className="my-12 flex flex-row-reverse">
				<Pagination
					count={Math.ceil(rows?.length / 10) ?? 1}
					variant="outlined"
					shape="rounded"
					onChange={handleChangeRowsPerPage}
				/>
			</Box>
			{/* <TablePagination
				rowsPerPageOptions={[10, 25, 100]}
				component="div"
				count={rows.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/> */}
		</>
	)
}
const Tab3 = props => {
	const { control } = useForm({
		mode: 'onTouched',
		defaultValues: {
			firstname: '',
			checkbox: false
		},
		resolver: yupResolver(
			Yup.object({
				firstname: Yup.string().required()
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
								name="id"
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
								name="name"
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
				<Box className="col-span-3">{tableForm()}</Box>
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
