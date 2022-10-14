import React, { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
// import CoreTable, { columnHelper } from '@Core/components/Table/CoreTable'
import AdminContentPage from '../../components/Layout/AdminContentPage'
// import TableFilter from './Components/SpotTableFilter'
// import { Box } from '@mui/system'
import ListCourseProvider from './ListCourseProvider'
import { TRANSLATE_ADMIN } from '@App/Admin/configs/constants'
import { Button, Paper, Typography, TextField, Box, Card, Checkbox, FormGroup, FormControlLabel } from '@mui/material'
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
	createData(5, 'Gingerbread', 356, 16.0, 49, 9, 1)
]
const tableForm = () => {
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead>
					<TableRow >
						<TableCell style={{ width: '10%' }}>
                            <Box sx={{ fontWeight: 'bold'}}>No</Box>
                        </TableCell>
						<TableCell style={{ width: '20%' }}>
                            <Box sx={{ fontWeight: 'bold'}}>スポット名</Box>
                        </TableCell>
						<TableCell style={{ width: '20%' }}>
                            <Box sx={{ fontWeight: 'bold'}}>スポット種別</Box>
                        </TableCell>
						<TableCell style={{ width: '20%' }}>
                            <Box sx={{ fontWeight: 'bold'}}>住所</Box>
                        </TableCell>
						<TableCell style={{ width: '10%' }}>
                            <Box sx={{ fontWeight: 'bold'}}>推奨ポイント</Box>
                        </TableCell>
						<TableCell style={{ width: '10%' }}>
                            <Box sx={{ fontWeight: 'bold'}}>次スポットへの時間</Box>
                        </TableCell>
						<TableCell>
                            <Box sx={{ fontWeight: 'bold'}}>アクション</Box>
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
								<TextField type="number" id="outlined-search" size="small" defaultValue={row.carbs1} />
							</TableCell>
							<TableCell>
								<TextField type="number" id="outlined-search" size="small" defaultValue={row.protein1} />
							</TableCell>
							<TableCell>
								<div className="flex">
									<CoreActionDelete onClick={() => console.log('============= data', data)} />
								</div>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	)
}
const contentCourse = () => {
	const { control } = useForm({
		mode: 'onTouched',
		defaultValues: {
			firstname: ''
		},
		resolver: yupResolver(
			Yup.object({
				firstname: Yup.string().required()
			})
		)
	})
	return (
		<form>
			<div className="grid grid-flow-row-dense grid-cols-12 pb-20">
				<div className="col-span-12 sm:col-span-10 sm:col-start-2 pt-20">
                    <div className="grid grid-flow-row-dense grid-cols-3 py-5">
						<div className="col-span-3 sm:col-span-1 pt-10">
							<FontTitle variant="h3" title="コースID" />
						</div>
						<div className="col-span-3 sm:col-span-2">
							<CoreInput control={control} name="firstname" placeholder="Default input" size="small" />
						</div>
					</div>
					<div className="grid grid-flow-row-dense grid-cols-3 py-5">
						<div className="col-span-3 sm:col-span-1 pt-10">
							<FontTitle variant="h3" title="獲得標高" />
						</div>
						<div className="col-span-3 sm:col-span-2">
							<CoreInput control={control} name="firstname" placeholder="Default input" size="small" />
						</div>
					</div>
					<div className="grid grid-flow-row-dense grid-cols-3 py-5">
						<div className="col-span-3 sm:col-span-1 pt-10">
							<FontTitle variant="h3" title="コースタイトル" />
						</div>
						<div className="col-span-3 sm:col-span-2">
							<CoreInput control={control} name="firstname" placeholder="Default input" size="small" />
						</div>
					</div>
					<div className="grid grid-flow-row-dense grid-cols-3 py-5">
						<div className="col-span-3 sm:col-span-1 pt-10">
							<FontTitle variant="h3" title="コース説明" />
						</div>
						<div className="col-span-3 sm:col-span-2">
							<CoreInput control={control} name="firstname" placeholder="Default input" size="small" />
						</div>
					</div>
					<div className="grid grid-flow-row-dense grid-cols-3 py-5">
						<div className="col-span-3 sm:col-span-1 pt-10">
							<FontTitle variant="h3" title="コース画像" />
						</div>
						<div className="col-span-3 sm:col-span-2">
                            <CoreInput control={control} name="firstname" placeholder="Default input" size="small" />
						</div>
					</div>
					<div className="grid grid-flow-row-dense grid-cols-3 py-5">
						<div className="col-span-3 sm:col-span-1 pt-10">
							<FontTitle variant="h3" title="コース距離" />
						</div>
						<div className="col-span-3 sm:col-span-2">
							<CoreInput control={control} name="firstname" placeholder="Default input" size="small" />
						</div>
					</div>
					<div className="grid grid-flow-row-dense grid-cols-3 py-5">
						<div className="col-span-3 sm:col-span-1 pt-10">
							<FontTitle variant="h3" title="平均勾配" />
						</div>
						<div className="col-span-3 sm:col-span-2">
							<CoreInput control={control} name="firstname" placeholder="Default input" size="small" />
						</div>
					</div>
					<div className="grid grid-flow-row-dense grid-cols-3 py-5">
						<div className="col-span-3 sm:col-span-1 pt-10">
							<FontTitle variant="h3" title="獲得標高" />
						</div>
						<div className="col-span-3 sm:col-span-2">
							<CoreInput control={control} name="firstname" placeholder="Default input" size="small" />
						</div>
					</div>
					<div className="grid grid-flow-row-dense grid-cols-3 py-5">
						<div className="col-span-3 sm:col-span-1 pt-10">
							<FontTitle variant="h3" title="体力度" />
						</div>
						<div className="col-span-3 sm:col-span-2">
							<CoreInput control={control} name="firstname" placeholder="Default input" size="small" />
						</div>
					</div>
					<div className="grid grid-flow-row-dense grid-cols-3 py-5">
						<div className="col-span-3 sm:col-span-1 pt-10">
							<FontTitle variant="h3" title="完走目安" />
						</div>
						<div className="col-span-3 sm:col-span-2">
							<CoreInput control={control} name="firstname" placeholder="Default input" size="small" />
						</div>
					</div>
					<div className="grid grid-flow-row-dense grid-cols-3 py-5">
						<div className="col-span-3 sm:col-span-1 pt-10">
							<FontTitle variant="h3" title="ルートURL" />
						</div>
						<div className="col-span-3 sm:col-span-2">
							<CoreInput control={control} name="firstname" placeholder="Default input" size="small" />
						</div>
					</div>
					<div className="grid grid-flow-row-dense grid-cols-3 py-5">
						<div className="col-span-3 sm:col-span-1 pt-10">
							<FontTitle variant="h3" title="ルート画像" />
						</div>
						<div className="col-span-3 sm:col-span-2">
							<CoreInput control={control} name="firstname" placeholder="Default input" size="small" />
						</div>
					</div>
					<div className="grid grid-flow-row-dense grid-cols-3 py-5">
						<div className="col-span-3 sm:col-span-1 pt-10">
							<FontTitle variant="h3" title="ルートファイル（kml形式）" />
						</div>
						<div className="col-span-3 sm:col-span-2">
							<CoreInput control={control} name="firstname" placeholder="Default input" size="small" />
						</div>
					</div>
					<div className="grid grid-flow-row-dense grid-cols-3 py-5">
						<div className="col-span-3 sm:col-span-1 pt-10">
							<FontTitle variant="h3" title="高低図URL" />
						</div>
						<div className="col-span-3 sm:col-span-2">
							<CoreInput control={control} name="firstname" placeholder="Default input" size="small" />
						</div>
					</div>
					<div className="grid grid-flow-row-dense grid-cols-3 py-5">
						<div className="col-span-3 sm:col-span-1 pt-10">
							<FontTitle variant="h3" title="コースタグ" />
						</div>
						<div className="col-span-3 sm:col-span-2">
							<Card variant="outlined">
								<CardContent>
									<div className="grid grid-flow-row-dense grid-cols-4 py-5">
										<div className="col-span-2 sm:col-span-1">
											<FormControlLabel control={<Checkbox />} label="獲得標高" />
										</div>
										<div className="col-span-2 sm:col-span-1">
											<FormControlLabel control={<Checkbox />} label="獲得標高" />
										</div>
										<div className="col-span-2 sm:col-span-1">
											<FormControlLabel control={<Checkbox />} label="獲得標高" />
										</div>
										<div className="col-span-2 sm:col-span-1">
											<FormControlLabel control={<Checkbox />} label="獲得標高" />
										</div>
										<div className="col-span-2 sm:col-span-1">
											<FormControlLabel control={<Checkbox />} label="獲得標高" />
										</div>
										<div className="col-span-2 sm:col-span-1">
											<FormControlLabel control={<Checkbox />} label="獲得標高" />
										</div>
										<div className="col-span-2 sm:col-span-1">
											<FormControlLabel control={<Checkbox />} label="獲得標高" />
										</div>
									</div>
								</CardContent>
							</Card>
						</div>
					</div>
					<div className="grid grid-flow-row-dense grid-cols-3 py-5">
						<div className="col-span-3 sm:col-span-1 pt-20">
							<FontTitle variant="h3" title="スポットリスト" />
						</div>
					</div>
				</div>
			</div>
			<div className="p-20">
				{tableForm()}
				<Box className="text-end pt-40">
					<Button variant="contained" color="success" size="small">
                        スポット追加
					</Button>
				</Box>
				<div className="grid grid-flow-row-dense grid-cols-3 pt-40">
					<div className="col-span-3 sm:col-span-1 pt-10">
						<FontTitle variant="h3" title="コース作成者" />
					</div>
					<div className="col-span-3 sm:col-span-1">
                        <div style={{position:"relative"}}>
                        <TextField fullWidth type="text" size="small" />
                        <Button variant="contained" color="third" style={{position:"absolute"}}>
                            選択
                        </Button>
                        </div>
					</div>
					<div className="col-span-3 sm:col-span-1">
						<Box className="text-end">
							<Button variant="contained" color="error" className="mr-10" size="small">
                                削除
							</Button>
							<Button variant="contained" color="success" size="small">
                                登録
							</Button>
						</Box>
					</div>
				</div>
			</div>
		</form>
	)
}
const DetailCourse = props => {
	const { t } = useTranslation(TRANSLATE_ADMIN.course)
	return (
		<ListCourseProvider t={t}>
			<AdminContentPage
				pageTitle="コース詳細"
				content={contentCourse()}
			/>
		</ListCourseProvider>
	)
}

export default React.memo(DetailCourse)
