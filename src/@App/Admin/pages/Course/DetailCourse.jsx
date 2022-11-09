import React, { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import AdminContentPage from '../../components/Layout/AdminContentPage'
import ListCourseProvider from './ListCourseProvider'
import { TRANSLATE_ADMIN } from '@App/Admin/configs/constants'
import { Button, Paper, Typography, TextField, Box, Card} from '@mui/material'
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
import AdminInput from '@App/Admin/components/Input/AdminInput'
import AdminInputUpload from '@App/Admin/components/Input/AdminInputUpload'
import { useListSpotDialog } from './hooks/useListSpotDialog'

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
						<TableCell style={{ width: '10%' }}>
                            <Box sx={{ fontWeight: 'bold'}}>スポット名</Box>
                        </TableCell>
						<TableCell style={{ width: '20%' }}>
                            <Box sx={{ fontWeight: 'bold'}}>スポット種別</Box>
                        </TableCell>
						<TableCell style={{ width: '10%' }}>
                            <Box sx={{ fontWeight: 'bold'}}>住所</Box>
                        </TableCell>
						<TableCell style={{ width: '20%' }}>
                            <Box sx={{ fontWeight: 'bold'}}>獲得ポイント</Box>
                        </TableCell>
						<TableCell style={{ width: '20%' }}>
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
								<TextField className='w-1/3' type="number" id="outlined-search" size="small" defaultValue={row.carbs1} />
							</TableCell>
							<TableCell className='flex items-center'>
								<TextField className='w-1/3 mr-12' type="number" id="outlined-search" size="small" defaultValue={row.protein1} /> 分
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
	const {handleClose, handleOpen, renderListSpotDialog} = useListSpotDialog()
	const { control } = useForm({
		mode: 'onTouched',
		defaultValues: {
			firstname: '',
			checkbox: false
		},
		resolver: yupResolver(
			Yup.object({
				firstname: Yup.string().required(),
				name: Yup.string().required(),
				creator: Yup.string().required(),
				catchphrase: Yup.string().required(),
				description: Yup.string().required(),
				course_distance: Yup.string().required(),
				average_gradient: Yup.string().required(),
				elevation_gain: Yup.string().required(),
				area: Yup.mixed().nullable().required(),
				approximate_finish: Yup.string().required(),
				// catchphrase: Yup.string().required(),
			})
		)
	})
	return (
		<>
		<form>
			<Box className="grid grid-flow-row-dense grid-cols-12 pb-20">
				<Box className="col-span-12 sm:col-span-10 sm:col-start-2 pt-20">
					<AdminInput
						label='コースID'
						control={control}
						name="id"
						placeholder="Default input"
						size="small"
						classNameField='bg-grey-300'
						readOnly
					/>
					<AdminInput
						label='コースタイトル'
						control={control}
						name="name"
						placeholder="Default input"
						size="small"
						required
					/>
					<AdminInput
						label='キャッチフレーズ'
						control={control}
						name="catchphrase"
						placeholder="Default input"
						size="small"
						required
					/>
					<AdminInput
						label='コース説明'
						control={control}
						name="description"
						placeholder="Default input"
						size="small"
						minRows={5}
						multiline
						required
					/>
					<AdminInputUpload
						label='コース画像'
						control={control}
						name="image"
						size="small"
						className="w-full sm:w-2/3"
						helperText
					/>
				
					<AdminInput
						label='コース距離'
						control={control}
						name="course_distance"
						placeholder="Default input"
						size="small"
						required
					/>
					
					<AdminInput
						label='平均勾配'
						control={control}
						name="average_gradient"
						placeholder="Default input"
						size="small"
						required
					/>
					
					<AdminInput
						label='獲得標高'
						control={control}
						name="elevation_gain"
						placeholder="Default input"
						size="small"
						required
					/>
					
					<Box className="flex flex-wrap sm:flex-nowrap mb-20">
						<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
							<Typography variant="h3" color="primary" className='flex items-center'>
							<Typography className="text-black py-4 px-16 rounded-4 bg-yellow mx-8">必須</Typography> 体力度 
							</Typography>
						</Box>
						<Box className="w-full sm:w-2/3 sm:flex">
							<FormAutocomplete
								control={control}
								size="small"
								fullWidth
								variant="outlined"
								placeholder="Choose..."
								name="area"
								className="w-full sm:w-2/3"
							/>
						</Box>
					</Box>
					
					<AdminInput
						label='完走目安'
						control={control}
						name="approximate_finish"
						placeholder="Default input"
						size="small"
						required
					/>
				
					<AdminInput
						label='ルートURL'
						control={control}
						name="root_url"
						placeholder="Default input"
						size="small"
					/>
					<AdminInputUpload
						label='ルート画像'
						control={control}
						name="image"
						size="small"
						className="w-full sm:w-2/3"
						helperText
					/>
	
					<AdminInput
						label='ルートファイル（kml形式）'
						control={control}
						name="route_file"
						placeholder="Default input"
						size="small"
					/>
			
					<AdminInput
						label='高低図URL'
						control={control}
						name="height_map"
						placeholder="Default input"
						size="small"
					/>
					<Box className="grid grid-flow-row-dense grid-cols-3 py-5">
						<Box className="col-span-3 sm:col-span-1 pt-10">
							<Typography variant="h3" color="primary" className='flex items-center'>
							<Typography className="text-black py-4 px-16 rounded-4 bg-yellow mx-8">必須</Typography> コースタグ 
							</Typography>
						</Box>
						<Box className="col-span-3 sm:col-span-2">
							<Card variant="outlined">
								<Box className="grid grid-flow-row-dense grid-cols-4 p-5 pl-20">
									<Box className="col-span-2 sm:col-span-1">
										<CoreCheckbox control={control} name="checkbox" label="獲得標高" />
									</Box>
									<Box className="col-span-2 sm:col-span-1">
										<CoreCheckbox control={control} name="checkbox" label="獲得標高" />
									</Box>
									<Box className="col-span-2 sm:col-span-1">
										<CoreCheckbox control={control} name="checkbox" label="獲得標高" />
									</Box>
									<Box className="col-span-2 sm:col-span-1">
										<CoreCheckbox control={control} name="checkbox" label="獲得標高" />
									</Box>
									<Box className="col-span-2 sm:col-span-1">
										<CoreCheckbox control={control} name="checkbox" label="獲得標高" />
									</Box>
									<Box className="col-span-2 sm:col-span-1">
										<CoreCheckbox control={control} name="checkbox" label="獲得標高" />
									</Box>
									<Box className="col-span-2 sm:col-span-1">
										<CoreCheckbox control={control} name="checkbox" label="獲得標高" />
									</Box>
									<Box className="col-span-2 sm:col-span-1">
										<CoreCheckbox control={control} name="checkbox" label="獲得標高" />
									</Box>
									<Box className="col-span-2 sm:col-span-1">
										<CoreCheckbox control={control} name="checkbox" label="獲得標高" />
									</Box>
									<Box className="col-span-2 sm:col-span-1">
										<CoreCheckbox control={control} name="checkbox" label="獲得標高" />
									</Box>
									<Box className="col-span-2 sm:col-span-1">
										<CoreCheckbox control={control} name="checkbox" label="獲得標高" />
									</Box>
									<Box className="col-span-2 sm:col-span-1">
										<CoreCheckbox control={control} name="checkbox" label="獲得標高" />
									</Box>
								</Box>
							</Card>
						</Box>
					</Box>
					<Box className="grid grid-flow-row-dense grid-cols-3 py-5">
						<Box className="col-span-3 sm:col-span-1 pt-20 pl-72">
							<FontTitle variant="h3" title="スポットリスト" />
						</Box>
					</Box>
				</Box>
			</Box>
			<Box className="p-20">
				{tableForm()}
			</Box>
			<Box className="grid grid-flow-row-dense grid-cols-12 pb-20">
				<Box className="col-span-12 sm:col-span-10 sm:col-start-2 pt-20">
					<Box className="text-end pt-40">
						<Button variant="contained" className='bg-blue w-160 text-16' onClick={() => handleOpen()} size="small">
							スポット追加
						</Button>
					</Box>
					<Box className="grid grid-flow-row-dense grid-cols-3 pt-40">
						<Box className="col-span-3 sm:col-span-1 pt-10">
							<Typography variant="h3" color="primary" className='flex items-center'>
							<Typography className="text-black py-4 px-16 rounded-4 bg-yellow mx-8">必須</Typography> コース作成者 
								</Typography>
						</Box>
						<Box className="col-span-3 sm:col-span-1">
							<Box className='flex'>
							<CoreInput control={control} name='creator' type="text" size="small" />
							<Button variant="contained" color="third">
								選択
							</Button>
							</Box>
						</Box>
						<Box className="col-span-3 sm:col-span-1">
							<Box className="text-end">
								<Button variant="contained" color="error" className="mr-10" size="small">
									削除
								</Button>
								<Button variant="contained" className='bg-blue' size="small">
									登録
								</Button>
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
		</form>
		{renderListSpotDialog()} 
		</>
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
