import React, { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { TRANSLATE_ADMIN } from '@App/Admin/configs/constants'
import { Button, Paper, Typography, TextField, Box, Card } from '@mui/material'
import CoreInput from '@Core/components/Input/CoreInput'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Yup from '@Core/helper/Yup'
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
							<FontTitle variant="h3" title="イベントID" />
						</Box>
						<Box className="col-span-3 sm:col-span-2">
							<CoreInput control={control} name="firstname" placeholder="Default input" size="small" />
						</Box>
					</Box>
					<Box className="grid grid-flow-row-dense grid-cols-3 py-5">
						<Box className="col-span-3 sm:col-span-1 pt-10">
							<FontTitle variant="h3" title="イベントタイトル" />
						</Box>
						<Box className="col-span-3 sm:col-span-2">
							<CoreInput control={control} name="firstname" placeholder="Default input" size="small" />
						</Box>
					</Box>
					<Box className="grid grid-flow-row-dense grid-cols-3 py-5">
						<Box className="col-span-3 sm:col-span-1 pt-10">
							<FontTitle variant="h3" title="イベント説明" />
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
							<FontTitle variant="h3" title="状態" />
						</Box>
						<Box className="col-span-3 sm:col-span-2">
							<Box className="grid grid-flow-row-dense">
								<Card variant="outlined" className="sm:w-1/2">
									<Box className="grid grid-flow-row-dense grid-cols-2 ml-5">
										<Box className="col-span-1">
											<CoreCheckbox control={control} name="checkbox" label="表示" />
										</Box>
										<Box className="col-span-1">
											<CoreCheckbox control={control} name="checkbox" label="非表示" />
										</Box>
									</Box>
								</Card>
							</Box>
						</Box>
					</Box>
					<Box className="grid grid-flow-row-dense grid-cols-3">
						<Box className="col-span-3 sm:col-span-1 pt-10">
							<FontTitle variant="h3" title="イベントカテゴリ" />
						</Box>
						<Box className="col-span-3 sm:col-span-2">
							<Box className="grid grid-flow-row-dense">
								<Card variant="outlined">
									<Box className="grid grid-flow-row-dense grid-cols-4 ml-5">
										<Box className="col-span-1">
											<CoreCheckbox control={control} name="checkbox" label="男性限定" />
										</Box>
										<Box className="col-span-1">
											<CoreCheckbox control={control} name="checkbox" label="女性限定" />
										</Box>
										<Box className="col-span-1">
											<CoreCheckbox control={control} name="checkbox" label="男性50代以上" />
										</Box>
										<Box className="col-span-1">
											<CoreCheckbox control={control} name="checkbox" label="参加者全員" />
										</Box>
									</Box>
								</Card>
							</Box>
						</Box>
					</Box>
					<Box className="grid grid-flow-row-dense grid-cols-3 py-5">
						<Box className="col-span-3 sm:col-span-1 pt-10">
							<FontTitle variant="h3" title="イベント開催場所" />
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
									<FontTitle variant="h3" title="イベントタイプ" />
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
							<FontTitle variant="h3" title="イベント開催期間" />
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
							<FontTitle variant="h3" title="イベントエントリ期間" />
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
							<FontTitle variant="h3" title="エントリー料金" />
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
							<FontTitle variant="h3" title="エントリー料金" />
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
												<FontTitle variant="h3" title="支払方法" />
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
							<FontTitle variant="h3" title="エントリーオプション" />
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
												<Box className="pt-10">円</Box>
											</Grid>
										</Grid>
										<Grid container spacing={2}>
											<Grid item xs={8}>
												<CoreInput control={control} name="" size="small" />
											</Grid>
											<Grid item xs={4}>
												<Box className="pt-10">円</Box>
											</Grid>
										</Grid>
									</Box>
								</Box>
							</Card>
						</Box>
					</Box>
					<Box className="grid grid-flow-row-dense grid-cols-3 py-5">
						<Box className="col-span-3 sm:col-span-1 pt-10">
							<FontTitle variant="h3" title="イベントミッション" />
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
							<FontTitle variant="h3" title="イベント報酬" />
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
							<FontTitle variant="h3" title="イベントタグ" />
						</Box>
						<Box className="col-span-3 sm:col-span-2">
							<Card variant="outlined">
								<Box className="grid grid-flow-row-dense grid-cols-4 p-5">
									<Box className="col-span-2 sm:col-span-1">
										<CoreCheckbox control={control} name="checkbox" label="温泉あり" />
									</Box>
									<Box className="col-span-2 sm:col-span-1">
										<CoreCheckbox control={control} name="checkbox" label="温泉あり" />
									</Box>
									<Box className="col-span-2 sm:col-span-1">
										<CoreCheckbox control={control} name="checkbox" label="温泉あり" />
									</Box>
									<Box className="col-span-2 sm:col-span-1">
										<CoreCheckbox control={control} name="checkbox" label="温泉あり" />
									</Box>
									<Box className="col-span-2 sm:col-span-1">
										<CoreCheckbox control={control} name="checkbox" label="温泉あり" />
									</Box>
									<Box className="col-span-2 sm:col-span-1">
										<CoreCheckbox control={control} name="checkbox" label="温泉あり" />
									</Box>
									<Box className="col-span-2 sm:col-span-1">
										<CoreCheckbox control={control} name="checkbox" label="温泉あり" />
									</Box>
									<Box className="col-span-2 sm:col-span-1">
										<CoreCheckbox control={control} name="checkbox" label="温泉あり" />
									</Box>
									<Box className="col-span-2 sm:col-span-1">
										<CoreCheckbox control={control} name="checkbox" label="温泉あり" />
									</Box>
									<Box className="col-span-2 sm:col-span-1">
										<CoreCheckbox control={control} name="checkbox" label="温泉あり" />
									</Box>
									<Box className="col-span-2 sm:col-span-1">
										<CoreCheckbox control={control} name="checkbox" label="温泉あり" />
									</Box>
									<Box className="col-span-2 sm:col-span-1">
										<CoreCheckbox control={control} name="checkbox" label="温泉あり" />
									</Box>
								</Box>
							</Card>
						</Box>
					</Box>
					<Box className="grid grid-flow-row-dense grid-cols-3 py-5">
						<Box className="col-span-3 sm:col-span-1 pt-20">
							<FontTitle variant="h3" title="エントリー時の" />
							<FontTitle variant="h3" title="注意事項" />
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
							<FontTitle variant="h3" title="トラブル時連絡先名称" />
						</Box>
						<Box className="col-span-3 sm:col-span-2">
							<CoreInput control={control} name="firstname" placeholder="Default input" size="small" />
						</Box>
					</Box>
					<Box className="grid grid-flow-row-dense grid-cols-3 py-5">
						<Box className="col-span-3 sm:col-span-1 pt-20">
							<FontTitle variant="h3" title="連絡先" />
						</Box>
						<Box className="col-span-3 sm:col-span-2">
							<CoreInput control={control} name="firstname" placeholder="Default input" size="small" />
						</Box>
					</Box>
					<Box className="grid grid-flow-row-dense grid-cols-3 py-5">
						<Box className="col-span-3 sm:col-span-1 pt-20">
							<FontTitle variant="h3" title="関連イベント" />
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
						<FontTitle variant="h3" title="イベント作成者" />
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
