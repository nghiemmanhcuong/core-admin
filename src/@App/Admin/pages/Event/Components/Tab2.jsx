import React, { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { TRANSLATE_ADMIN } from '@App/Admin/configs/constants'
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
import CoreRadioGroup from '@Core/components/Input/CoreRadioGroup'
import Grid from '@mui/material/Grid'
import AdminInput from '@App/Admin/components/Input/AdminInput'
import AdminInputUpload from '@App/Admin/components/Input/AdminInputUpload'
import CoreCheckboxGroup from '@Core/components/Input/CoreCheckboxGroup'

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
					<TableRow>
						<TableCell style={{ width: '10%' }}>
							<Box sx={{ fontWeight: 'bold' }}>No</Box>
						</TableCell>
						<TableCell style={{ width: '20%' }}>
							<Box sx={{ fontWeight: 'bold' }}>スポット名</Box>
						</TableCell>
						<TableCell style={{ width: '20%' }}>
							<Box sx={{ fontWeight: 'bold' }}>スポット種別</Box>
						</TableCell>
						<TableCell style={{ width: '15%' }}>
							<Box sx={{ fontWeight: 'bold' }}>住所</Box>
						</TableCell>
						<TableCell style={{ width: '15%' }}>
							<Box sx={{ fontWeight: 'bold' }}>推奨ポイント</Box>
						</TableCell>
						<TableCell style={{ width: '16%' }}>
							<Box sx={{ fontWeight: 'bold' }}>次スポットへの時間</Box>
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map(row => (
						<TableRow key={row.no}>
							<TableCell>
								<TextField
									type="number"
									id="outlined-search"
									size="small"
									defaultValue={row.no}
									readOnly
									className="bg-grey-300"
									disabled
								/>
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
									readOnly
									className="bg-grey-300"
									disabled
								/>
							</TableCell>
							<TableCell className="flex items-center">
								<TextField
									type="number"
									id="outlined-search"
									size="small"
									defaultValue={row.protein1}
									readOnly
									className="bg-grey-300 w-80 mr-12"
									disabled
								/>
								分
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	)
}
const Tab2 = props => {
	const tagDatas = [
		{ key: '1', value: 1, label: '温泉あり' },
		{ key: '2', value: 2, label: '景色最高' },
		{ key: '3', value: 3, label: '秋におすすめ' },
		{ key: '4', value: 4, label: '初心者におすすめ' },
		{ key: '5', value: 5, label: '温泉あり' },
		{ key: '6', value: 6, label: '景色最高' },
		{ key: '7', value: 7, label: '秋におすすめ' },
		{ key: '8', value: 8, label: '初心者におすすめ' },
		{ key: '9', value: 9, label: '温泉あり' },
		{ key: '10', value: 10, label: '景色最高' },
		{ key: '11', value: 11, label: '秋におすすめ' },
		{ key: '12', value: 12, label: '初心者におすすめ' }
	]

	const { control } = useForm({
		mode: 'onTouched',
		defaultValues: {
			firstname: '',
			tag: '',
			course: null,
			title: ''
		},
		resolver: yupResolver(
			Yup.object({
				// firstname: Yup.string().required()
				course: Yup.mixed().nullable().required(),
				title: Yup.string().required()
			})
		)
	})

	return (
		<form>
			<Box className="grid grid-flow-row-dense grid-cols-12 pb-20">
				<Box className="col-span-12 sm:col-span-10 sm:col-start-2 pt-20">
					<AdminInput
						control={control}
						label="イベントID"
						name="firstname"
						placeholder="Default input"
						size="small"
						readOnly
						classNameField="bg-grey-300"
						className="mb-16 sm:mb-20"
						required
					/>
					<AdminInput
						control={control}
						label="イベントタイトル"
						name="firstname"
						placeholder="Default input"
						className="mb-16 sm:mb-20"
						size="small"
						readOnly
						classNameField="bg-grey-300"
						required
					/>
					<Box className="grid grid-flow-row-dense grid-cols-3 py-5">
						<Box className="col-span-3 sm:col-span-1 pt-10 flex items-center">
							<Typography className="text-black py-4 px-16 rounded-4 bg-yellow mx-8">必須</Typography>{' '}
							<FontTitle variant="h3" title="イベントコース" />
						</Box>
						<Box className="col-span-3 sm:col-span-2 mb-20">
							<Grid container rowSpacing={1} columnSpacing={12}>
								<Grid item xs={6}>
									<FormAutocomplete
										control={control}
										name="course"
										size="small"
										fullWidth
										variant="outlined"
										placeholder="Default Select"
										options={[
											{
												value: 1,
												label: 'イベントコース1'
											},
											{
												value: 2,
												label: 'イベントコース2'
											}
										]}
									/>
								</Grid>
								<Grid item xs={6}>
									<Button
										variant="contained"
										color="primary"
										className="px-8 py-6 text-14 mr-3"
										size="small"
									>
										選択
									</Button>
									<Button
										variant="contained"
										className="px-8 py-6 text-14 mr-3 bg-[#E97B86]"
										size="small"
									>
										削除
									</Button>
									<Button
										variant="contained"
										color="success"
										className="px-8 py-6 text-14 bg-blue mr-3"
										size="small"
									>
										追加
									</Button>
								</Grid>
							</Grid>
						</Box>
					</Box>
					<AdminInput
						control={control}
						label="コースタイトル"
						name="firstname"
						placeholder="Default input"
						size="small"
						readOnly
						classNameField="bg-grey-300"
						className="mb-16 sm:mb-20"
					/>
					<AdminInput
						control={control}
						label="キャッチフレーズ"
						name="firstname"
						placeholder="Default input"
						size="small"
						readOnly
						classNameField="bg-grey-300"
						className="mb-16 sm:mb-20"
					/>

					<AdminInput
						control={control}
						label="コース説明"
						name="firstname"
						multiline
						rows={4}
						size="small"
						readOnly
						classNameField="bg-grey-300"
						className="mb-16 sm:mb-20"
					/>

					<AdminInput
						control={control}
						label="コース距離"
						name="firstname"
						placeholder="Default input"
						size="small"
						readOnly
						classNameField="bg-grey-300"
						className="mb-16 sm:mb-20"
					/>

					<AdminInput
						control={control}
						label="平均勾配"
						name="firstname"
						placeholder="Default input"
						size="small"
						readOnly
						classNameField="bg-grey-300"
						className="mb-16 sm:mb-20"
					/>

					<AdminInput
						control={control}
						label="獲得標高"
						name="firstname"
						placeholder="Default input"
						size="small"
						readOnly
						classNameField="bg-grey-300"
						className="mb-16 sm:mb-20"
					/>

					<AdminInput
						control={control}
						label="完走目安"
						name="firstname"
						placeholder="Default input"
						size="small"
						readOnly
						classNameField="bg-grey-300"
						className="mb-16 sm:mb-20"
					/>

					<AdminInput
						control={control}
						label="ルートURL"
						name="firstname"
						placeholder="Default input"
						size="small"
						readOnly
						classNameField="bg-grey-300"
						className="mb-16 sm:mb-20"
					/>
					<AdminInputUpload
						label="ルート画像"
						control={control}
						name="image"
						size="small"
						className="w-full sm:w-2/3 mb-16 sm:mb-20"
						helperText
						hideButton
					/>

					<AdminInput
						control={control}
						label="ルートファイル（kml形式）"
						name="firstname"
						placeholder="Default input"
						size="small"
						readOnly
						classNameField="bg-grey-300"
						className="mb-16 sm:mb-20"
					/>

					<AdminInput
						control={control}
						label="高低図URL"
						name="firstname"
						placeholder="Default input"
						size="small"
						readOnly
						classNameField="bg-grey-300"
						className="mb-16 sm:mb-20"
					/>

					<CoreCheckboxGroup control={control} name="tag" options={tagDatas} legendLabel="コースタグ" row />
					<Box className="grid grid-flow-row-dense grid-cols-3 py-5">
						<Box className="col-span-3 sm:col-span-1 pt-10 pl-72">
							<FontTitle variant="h3" title="スポットリスト" />
						</Box>
					</Box>
				</Box>
			</Box>
			<Box className="grid grid-flow-row-dense grid-cols-3 py-5">
				<Box className="col-span-3">{tableForm()}</Box>
			</Box>
			<Grid className="text-end pt-20">
				<Button variant="contained" className="bg-blue text-white" size="small">
					登録
				</Button>
			</Grid>
		</form>
	)
}

export default React.memo(Tab2)
