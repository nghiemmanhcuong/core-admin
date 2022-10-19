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

const FontTitle = ({ variant = 'h1', title = '' }) => {
	return (
		<Typography variant={variant} className="text-primary">
			{title}
		</Typography>
	)
}
const Tab1 = props => {
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
							<FontTitle variant="h3" title="コース説明" />
						</Box>
						<Box className="col-span-3 sm:col-span-2">
							<CoreInput
								multiline
								rows={4}
								control={control}
								name="firstname"
								placeholder="Default input"
								size="small"
							/>
						</Box>
					</Box>
					<Box className="grid grid-flow-row-dense grid-cols-3 py-5">
						<Box className="col-span-3 sm:col-span-1 pt-10">
							<FontTitle variant="h3" title="コース画像" />
						</Box>
						<Box className="col-span-3 sm:col-span-2">
							<Box className="grid grid-flow-row-dense">
								<Card variant="outlined" className="sm:w-1/2">
									<Box className="grid grid-flow-row-dense grid-cols-2 ml-5">
										<Box className="col-span-1">
											<CoreCheckbox control={control} name="checkbox" label="獲得標高" />
										</Box>
										<Box className="col-span-1">
											<CoreCheckbox control={control} name="checkbox" label="獲得標高" />
										</Box>
									</Box>
								</Card>
							</Box>
						</Box>
					</Box>
					<Box className="grid grid-flow-row-dense grid-cols-3">
						<Box className="col-span-3 sm:col-span-1 pt-10">
							<FontTitle variant="h3" title="コース距離" />
						</Box>
						<Box className="col-span-3 sm:col-span-2">
							<Box className="grid grid-flow-row-dense">
								<Card variant="outlined">
									<Box className="grid grid-flow-row-dense grid-cols-4 ml-5">
										<Box className="col-span-1">
											<CoreCheckbox control={control} name="checkbox" label="獲得標高" />
										</Box>
										<Box className="col-span-1">
											<CoreCheckbox control={control} name="checkbox" label="獲得標高" />
										</Box>
										<Box className="col-span-1">
											<CoreCheckbox control={control} name="checkbox" label="獲得標高" />
										</Box>
										<Box className="col-span-1">
											<CoreCheckbox control={control} name="checkbox" label="獲得標高" />
										</Box>
									</Box>
								</Card>
							</Box>
						</Box>
					</Box>
					<Box className="grid grid-flow-row-dense grid-cols-3 py-5">
						<Box className="col-span-3 sm:col-span-1 pt-10">
							<FontTitle variant="h3" title="平均勾配" />
						</Box>
						<Box className="col-span-3 sm:col-span-2">
							<Box className="grid grid-flow-row-dense grid-cols-3">
								<Box className="col-span-1">
									<FormAutocomplete
										control={control}
										name="course"
										size="small"
										fullWidth
										variant="outlined"
										placeholder="Choose..."
									/>
								</Box>
								<Box className="col-span-1 text-center pt-10">
									<FontTitle variant="h3" title="平均勾配" />
								</Box>
								<Box className="col-span-1">
									<FormAutocomplete
										control={control}
										name="course"
										size="small"
										fullWidth
										variant="outlined"
										placeholder="Choose..."
									/>
								</Box>
							</Box>
						</Box>
					</Box>
					<Box className="grid grid-flow-row-dense grid-cols-3 py-5">
						<Box className="col-span-3 sm:col-span-1 pt-10">
							<FontTitle variant="h3" title="獲得標高" />
						</Box>
						<Box className="col-span-3 sm:col-span-2">
							<Box className="grid grid-flow-row-dense grid-cols-3">
								<Box className="col-span-1">
									<FormAutocomplete
										control={control}
										name="course"
										size="small"
										fullWidth
										variant="outlined"
										placeholder="Choose..."
									/>
								</Box>
								<Box className="col-span-1 text-center pt-10">
									<FontTitle variant="h3" title="~" />
								</Box>
								<Box className="col-span-1">
									<FormAutocomplete
										control={control}
										name="course"
										size="small"
										fullWidth
										variant="outlined"
										placeholder="Choose..."
									/>
								</Box>
							</Box>
						</Box>
					</Box>
					<Box className="grid grid-flow-row-dense grid-cols-3 py-5">
						<Box className="col-span-3 sm:col-span-1 pt-10">
							<FontTitle variant="h3" title="体力度" />
						</Box>
						<Box className="col-span-3 sm:col-span-2">
							<FormAutocomplete
								control={control}
								name="spot_id"
								size="small"
								className="w-2/3"
								fullWidth
								variant="outlined"
								placeholder="Choose..."
							/>
						</Box>
					</Box>
					<Box className="grid grid-flow-row-dense grid-cols-3 py-5">
						<Box className="col-span-3 sm:col-span-1 pt-10">
							<FontTitle variant="h3" title="完走目安" />
						</Box>
						<Box className="col-span-3 sm:col-span-2">
							<Box className="grid grid-flow-row-dense grid-cols-3">
								<Box className="col-span-1">
									<FormAutocomplete
										control={control}
										name="course"
										size="small"
										fullWidth
										variant="outlined"
										placeholder="Choose..."
									/>
								</Box>
								<Box className="col-span-1 text-center pt-10">
									<FontTitle variant="h3" title="~" />
								</Box>
								<Box className="col-span-1">
									<FormAutocomplete
										control={control}
										name="course"
										size="small"
										fullWidth
										variant="outlined"
										placeholder="Choose..."
									/>
								</Box>
							</Box>
						</Box>
					</Box>
					<Box className="grid grid-flow-row-dense grid-cols-3 py-5">
						<Box className="col-span-3 sm:col-span-1 pt-10">
							<FontTitle variant="h3" title="ルートURL" />
						</Box>
						<Box className="col-span-3 sm:col-span-2">
							<Box className="grid grid-flow-row-dense grid-cols-2">
								<Box className="col-span-1">
									<CoreInput
										control={control}
										name="firstname"
										placeholder="Default input"
										size="small"
									/>
								</Box>
								<Box className="col-span-1">
									<Box className="col-span-3 sm:col-span-2">
										<Box className="grid grid-flow-row-dense grid-cols-2">
											<Box className="col-span-1 pt-10 text-center">
												<FontTitle variant="h3" title="ルートURL" />
											</Box>

											<Box className="col-span-1">
												<Card variant="outlined">
													<Box className="grid grid-flow-row-dense grid-cols-2 ml-5">
														<Box className="col-span-1">
															<CoreCheckbox
																control={control}
																name="checkbox"
																label="QR"
															/>
														</Box>
														<Box className="col-span-1">
															<CoreCheckbox
																control={control}
																name="checkbox"
																label="QR"
															/>
														</Box>
													</Box>
												</Card>
											</Box>
										</Box>
									</Box>
								</Box>
							</Box>
						</Box>
					</Box>
					<Box className="grid grid-flow-row-dense grid-cols-3 py-5">
						<Box className="col-span-3 sm:col-span-1 pt-10">
							<FontTitle variant="h3" title="ルート画像" />
						</Box>
						<Box className="col-span-3 sm:col-span-2 sm:w-2/3">
							<Card variant="outlined">
								<Box className="grid grid-flow-row-dense grid-cols-4 p-5">
									<Box className="col-span-2">
										<CoreCheckbox control={control} name="checkbox" label="獲得標高" />
										<CoreCheckbox control={control} name="checkbox" label="獲得標高" />
									</Box>
									<Box className="col-span-2">
										<Grid container spacing={2}>
											<Grid item xs={8}>
												<CoreInput control={control} name="" size="small" />
											</Grid>
											<Grid item xs={4}>
												<Box className="pt-10">獲</Box>
											</Grid>
										</Grid>
										<Grid container spacing={2}>
											<Grid item xs={8}>
												<CoreInput control={control} name="" size="small" />
											</Grid>
											<Grid item xs={4}>
												<Box className="pt-10">獲</Box>
											</Grid>
										</Grid>
									</Box>
								</Box>
							</Card>
						</Box>
					</Box>
					<Box className="grid grid-flow-row-dense grid-cols-3 py-5">
						<Box className="col-span-3 sm:col-span-1 pt-10">
							<FontTitle variant="h3" title="ルートファイル（kml形式）" />
						</Box>
						<Box className="col-span-3 sm:col-span-2 w-1/2">
							<Box style={{ position: 'relative' }}>
								<TextField fullWidth type="text" size="small" />
								<Button variant="contained" color="third" style={{ position: 'absolute' }}>
									選択
								</Button>
							</Box>
						</Box>
					</Box>
					<Box className="grid grid-flow-row-dense grid-cols-3 py-5">
						<Box className="col-span-3 sm:col-span-1 pt-10">
							<FontTitle variant="h3" title="高低図URL" />
						</Box>
						<Box className="col-span-3 sm:col-span-2 w-1/2">
							<Box style={{ position: 'relative' }}>
								<TextField fullWidth type="text" size="small" />
								<Button variant="contained" color="third" style={{ position: 'absolute' }}>
									選択
								</Button>
							</Box>
						</Box>
					</Box>
					<Box className="grid grid-flow-row-dense grid-cols-3 py-5">
						<Box className="col-span-3 sm:col-span-1 pt-10">
							<FontTitle variant="h3" title="コースタグ" />
						</Box>
						<Box className="col-span-3 sm:col-span-2">
							<Card variant="outlined">
								<Box className="grid grid-flow-row-dense grid-cols-4 p-5">
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
						<Box className="col-span-3 sm:col-span-1 pt-20">
							<FontTitle variant="h3" title="スポットリスト" />
						</Box>
						<Box className="col-span-3 sm:col-span-2">
							<CoreInput
								multiline
								rows={4}
								control={control}
								name="firstname"
								placeholder="Default input"
								size="small"
							/>
						</Box>
					</Box>
					<Box className="grid grid-flow-row-dense grid-cols-3 py-5">
						<Box className="col-span-3 sm:col-span-1 pt-20">
							<FontTitle variant="h3" title="スポットリスト" />
						</Box>
						<Box className="col-span-3 sm:col-span-2">
							<CoreInput control={control} name="firstname" placeholder="Default input" size="small" />
						</Box>
					</Box>
					<Box className="grid grid-flow-row-dense grid-cols-3 py-5">
						<Box className="col-span-3 sm:col-span-1 pt-20">
							<FontTitle variant="h3" title="スポットリスト" />
						</Box>
						<Box className="col-span-3 sm:col-span-2">
							<CoreInput control={control} name="firstname" placeholder="Default input" size="small" />
						</Box>
					</Box>
					<Box className="grid grid-flow-row-dense grid-cols-3 py-5">
						<Box className="col-span-3 sm:col-span-1 pt-20">
							<FontTitle variant="h3" title="スポットリスト" />
						</Box>
						<Box className="col-span-3 sm:col-span-2">
							<FormAutocomplete
								control={control}
								name="course"
								size="small"
								fullWidth
								variant="outlined"
								placeholder="Choose..."
							/>
						</Box>
					</Box>
				</Box>
			</Box>
			<Box className="p-20">
				<Box className="grid grid-flow-row-dense grid-cols-3 pt-40">
					<Box className="col-span-3 sm:col-span-1 pt-10">
						<FontTitle variant="h3" title="コース作成者" />
					</Box>
					<Box className="col-span-3 sm:col-span-1">
						<Box style={{ position: 'relative' }}>
							<TextField fullWidth type="text" size="small" />
							<Button variant="contained" color="third" style={{ position: 'absolute' }}>
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

export default React.memo(Tab1)
