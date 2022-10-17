import React, { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
// import CoreTable, { columnHelper } from '@Core/components/Table/CoreTable'
import AdminContentPage from '../../components/Layout/AdminContentPage'
// import TableFilter from './Components/SpotTableFilter'
// import { Box } from '@mui/system'
import ListCourseProvider from './ListCourseProvider'
import { TRANSLATE_ADMIN } from '@App/Admin/configs/constants'
import { Button, Paper, Typography, TextField, Box, Card, Checkbox, Select, FormControlLabel, MenuItem } from '@mui/material'
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
								<Box className="flex">
									<CoreActionDelete onClick={() => console.log('============= data', data)} />
								</Box>
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
			<Box className="grid grid-flow-row-dense grid-cols-12 pb-20">
				<Box className="col-span-12 sm:col-span-10 sm:col-start-2 pt-20">
                    <Box className="grid grid-flow-row-dense grid-cols-3 py-5">
						<Box className="col-span-3 sm:col-span-1 pt-10">
							<FontTitle variant="h3" title="コースID" />
						</Box>
						<Box className="col-span-3 sm:col-span-2">
							<CoreInput control={control} name="firstname" placeholder="Default input" size="small" />
						</Box>
					</Box>
					<Box className="grid grid-flow-row-dense grid-cols-3 py-5">
						<Box className="col-span-3 sm:col-span-1 pt-10">
							<FontTitle variant="h3" title="獲得標高" />
						</Box>
						<Box className="col-span-3 sm:col-span-2">
							<CoreInput control={control} name="firstname" placeholder="Default input" size="small" />
						</Box>
					</Box>
					<Box className="grid grid-flow-row-dense grid-cols-3 py-5">
						<Box className="col-span-3 sm:col-span-1 pt-10">
							<FontTitle variant="h3" title="コースタイトル" />
						</Box>
						<Box className="col-span-3 sm:col-span-2">
							<CoreInput control={control} name="firstname" placeholder="Default input" size="small" />
						</Box>
					</Box>
					<Box className="grid grid-flow-row-dense grid-cols-3 py-5">
						<Box className="col-span-3 sm:col-span-1 pt-10">
							<FontTitle variant="h3" title="コース説明" />
						</Box>
						<Box className="col-span-3 sm:col-span-2">
							<CoreInput multiline rows={4} control={control} name="firstname" placeholder="Default input" size="small" />
						</Box>
					</Box>
					<Box className="grid grid-flow-row-dense grid-cols-3 py-5">
						<Box className="col-span-3 sm:col-span-1 pt-10">
							<FontTitle variant="h3" title="コース画像" />
						</Box>
						<Box className="col-span-3 sm:col-span-2">
                            <Box className="grid grid-flow-row-dense grid-cols-3">
								<Box className="col-span-2">
									<Box className="relative" style={{ backgroundColor:"darkgray", height:"150px" }}>
										<img className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" src="https://vnpi-hcm.vn/wp-content/uploads/2018/01/no-image-800x600.png" alt="" style={{width:"150px"}} />
									</Box>
									<Card variant="outlined" className="text-center">
										<CardMedia class="py-5">推奨サイズ：100px x 100px</CardMedia>
									</Card>
								</Box>
								<Box className="col-span-1 relative">
									<Box className="absolute top-1/3 pl-10">
										<Button variant="contained" color="error" size="small">
											削除
										</Button>
										<Button variant="contained" color="success" size="small">
											登録
										</Button>
									</Box>
								</Box>
							</Box>
						</Box>
					</Box>
					<Box className="grid grid-flow-row-dense grid-cols-3 py-5">
						<Box className="col-span-3 sm:col-span-1 pt-10">
							<FontTitle variant="h3" title="コース距離" />
						</Box>
						<Box className="col-span-3 sm:col-span-2">
							<CoreInput control={control} name="firstname" placeholder="Default input" size="small" />
						</Box>
					</Box>
					<Box className="grid grid-flow-row-dense grid-cols-3 py-5">
						<Box className="col-span-3 sm:col-span-1 pt-10">
							<FontTitle variant="h3" title="平均勾配" />
						</Box>
						<Box className="col-span-3 sm:col-span-2">
							<CoreInput control={control} name="firstname" placeholder="Default input" size="small" />
						</Box>
					</Box>
					<Box className="grid grid-flow-row-dense grid-cols-3 py-5">
						<Box className="col-span-3 sm:col-span-1 pt-10">
							<FontTitle variant="h3" title="獲得標高" />
						</Box>
						<Box className="col-span-3 sm:col-span-2">
							<CoreInput control={control} name="firstname" placeholder="Default input" size="small" />
						</Box>
					</Box>
					<Box className="grid grid-flow-row-dense grid-cols-3 py-5">
						<Box className="col-span-3 sm:col-span-1 pt-10">
							<FontTitle variant="h3" title="体力度" />
						</Box>
						<Box className="col-span-3 sm:col-span-2">
							<Select
								value={10}
								size="small"
								sx={{ width: 300 }}
							>
								<MenuItem value={10}>10</MenuItem>
								<MenuItem value={20}>20</MenuItem>
								<MenuItem value={30}>30</MenuItem>
							</Select>
						</Box>
					</Box>
					<Box className="grid grid-flow-row-dense grid-cols-3 py-5">
						<Box className="col-span-3 sm:col-span-1 pt-10">
							<FontTitle variant="h3" title="完走目安" />
						</Box>
						<Box className="col-span-3 sm:col-span-2">
							<CoreInput control={control} name="firstname" placeholder="Default input" size="small" />
						</Box>
					</Box>
					<Box className="grid grid-flow-row-dense grid-cols-3 py-5">
						<Box className="col-span-3 sm:col-span-1 pt-10">
							<FontTitle variant="h3" title="ルートURL" />
						</Box>
						<Box className="col-span-3 sm:col-span-2">
							<CoreInput control={control} name="firstname" placeholder="Default input" size="small" />
						</Box>
					</Box>
					<Box className="grid grid-flow-row-dense grid-cols-3 py-5">
						<Box className="col-span-3 sm:col-span-1 pt-10">
							<FontTitle variant="h3" title="ルート画像" />
						</Box>
						<Box className="col-span-3 sm:col-span-2">
							<Box className="grid grid-flow-row-dense grid-cols-3">
								<Box className="col-span-2">
									<Box className="relative" style={{ backgroundColor:"darkgray", height:"150px" }}>
										<img className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" src="https://vnpi-hcm.vn/wp-content/uploads/2018/01/no-image-800x600.png" alt="" style={{width:"150px"}} />
									</Box>
									<Card variant="outlined" className="text-center">
										<CardMedia class="py-5">推奨サイズ：100px x 100px</CardMedia>
									</Card>
								</Box>
								<Box className="col-span-1 relative">
									<Box className="absolute top-1/3 pl-10">
										<Button variant="contained" color="error" size="small">
											削除
										</Button>
										<Button variant="contained" color="success" size="small">
											登録
										</Button>
									</Box>
								</Box>
							</Box>
						</Box>
					</Box>
					<Box className="grid grid-flow-row-dense grid-cols-3 py-5">
						<Box className="col-span-3 sm:col-span-1 pt-10">
							<FontTitle variant="h3" title="ルートファイル（kml形式）" />
						</Box>
						<Box className="col-span-3 sm:col-span-2">
							<CoreInput control={control} name="firstname" placeholder="Default input" size="small" />
						</Box>
					</Box>
					<Box className="grid grid-flow-row-dense grid-cols-3 py-5">
						<Box className="col-span-3 sm:col-span-1 pt-10">
							<FontTitle variant="h3" title="高低図URL" />
						</Box>
						<Box className="col-span-3 sm:col-span-2">
							<CoreInput control={control} name="firstname" placeholder="Default input" size="small" />
						</Box>
					</Box>
					<Box className="grid grid-flow-row-dense grid-cols-3 py-5">
						<Box className="col-span-3 sm:col-span-1 pt-10">
							<FontTitle variant="h3" title="コースタグ" />
						</Box>
						<Box className="col-span-3 sm:col-span-2">
							<Card variant="outlined">
								<CardContent>
									<Box className="grid grid-flow-row-dense grid-cols-4 py-5">
										<Box className="col-span-2 sm:col-span-1">
											<FormControlLabel control={<Checkbox />} label="獲得標高" />
										</Box>
										<Box className="col-span-2 sm:col-span-1">
											<FormControlLabel control={<Checkbox />} label="獲得標高" />
										</Box>
										<Box className="col-span-2 sm:col-span-1">
											<FormControlLabel control={<Checkbox />} label="獲得標高" />
										</Box>
										<Box className="col-span-2 sm:col-span-1">
											<FormControlLabel control={<Checkbox />} label="獲得標高" />
										</Box>
										<Box className="col-span-2 sm:col-span-1">
											<FormControlLabel control={<Checkbox />} label="獲得標高" />
										</Box>
										<Box className="col-span-2 sm:col-span-1">
											<FormControlLabel control={<Checkbox />} label="獲得標高" />
										</Box>
										<Box className="col-span-2 sm:col-span-1">
											<FormControlLabel control={<Checkbox />} label="獲得標高" />
										</Box>
										<Box className="col-span-2 sm:col-span-1">
											<FormControlLabel control={<Checkbox />} label="獲得標高" />
										</Box>
										<Box className="col-span-2 sm:col-span-1">
											<FormControlLabel control={<Checkbox />} label="獲得標高" />
										</Box>
										<Box className="col-span-2 sm:col-span-1">
											<FormControlLabel control={<Checkbox />} label="獲得標高" />
										</Box>
										<Box className="col-span-2 sm:col-span-1">
											<FormControlLabel control={<Checkbox />} label="獲得標高" />
										</Box>
										<Box className="col-span-2 sm:col-span-1">
											<FormControlLabel control={<Checkbox />} label="獲得標高" />
										</Box>
									</Box>
								</CardContent>
							</Card>
						</Box>
					</Box>
					<Box className="grid grid-flow-row-dense grid-cols-3 py-5">
						<Box className="col-span-3 sm:col-span-1 pt-20">
							<FontTitle variant="h3" title="スポットリスト" />
						</Box>
					</Box>
				</Box>
			</Box>
			<Box className="p-20">
				{tableForm()}
				<Box className="text-end pt-40">
					<Button variant="contained" color="success" size="small">
                        スポット追加
					</Button>
				</Box>
				<Box className="grid grid-flow-row-dense grid-cols-3 pt-40">
					<Box className="col-span-3 sm:col-span-1 pt-10">
						<FontTitle variant="h3" title="コース作成者" />
					</Box>
					<Box className="col-span-3 sm:col-span-1">
                        <Box style={{position:"relative"}}>
                        <TextField fullWidth type="text" size="small" />
                        <Button variant="contained" color="third" style={{position:"absolute"}}>
                            選択
                        </Button>
                        </Box>
					</Box>
					<Box className="col-span-3 sm:col-span-1">
						<Box className="text-end">
							<Button variant="contained" color="error" className="mr-10" size="small">
                                削除
							</Button>
							<Button variant="contained" color="success" size="small">
                                登録
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
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
