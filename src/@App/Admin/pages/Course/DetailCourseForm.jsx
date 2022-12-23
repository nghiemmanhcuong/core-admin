import React, { useMemo, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import AdminContentPage from '../../components/Layout/AdminContentPage'
import ListCourseProvider from './ListCourseProvider'
import { ROUTER_ADMIN, TRANSLATE_ADMIN } from '@App/Admin/configs/constants'
// import { Button, Paper, Typography, TextField, Box, Card } from '@mui/material'
import CoreInput from '@Core/components/Input/CoreInput'
import { FormProvider, useForm } from 'react-hook-form'
import { CoreActionDelete, CoreActionEdit, CoreActionView } from '@Core/components/Table/components/CoreTableAction'
import FormAutocomplete from '@App/Admin/components/Form/FormAutocomplete'
import CoreCheckbox from '@Core/components/Input/CoreCheckbox'
import AdminInput from '@App/Admin/components/Input/AdminInput'
import AdminInputUpload from '@App/Admin/components/Input/AdminInputUpload'
import { useListSpotDialog } from './hooks/useListSpotDialog'
import CoreAutocomplete from '@Core/components/Input/CoreAutocomplete'
import { useAdminPageContext } from '@App/Admin/components/Provider/AdminPageProvider'
import { errorMsg, successMsg } from '@Core/helper/Message'
import { courseService } from '@App/Admin/services/courseService'
import CoreDatePicker from '@Core/components/Input/CoreDatePicker'
import ChooseRouteFile from './Components/ChooseRouteFile'
import { useCourseForm } from './hooks/useCourseForm'
import TableSpotForm from './Components/TableSpotForm'
import { useFieldArray } from 'react-hook-form'

import {
	Button,
	Typography,
	Box,
	Card,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	TextField
} from '@mui/material'

const tableForm = () => {
	return null
}
const DetailCourseForm = props => {
	const [changeCourseImage, setChangeCourseImage] = useState(false)
	const [changeCourseMapImage, setChangeCourseMapImage] = useState(false)
	const [changeFileUpload, setChangeFileUpload] = useState(false)
	const [tableSelected, setTableSelected] = useState(null)
	const { handleClose, handleOpen, renderListSpotDialog } = useListSpotDialog()
	const { tags, spots } = useAdminPageContext()
	const { methodForm, onSubmit } = useCourseForm({
		changeCourseImage,
		changeCourseMapImage,
		changeFileUpload,
		tableSelected,
		...props
	})

	const {
		control,
		watch,
		register,
		formState: { errors },
		reset
	} = methodForm

	console.log('============= tableSelected', tableSelected)

	const callbackCourseImageFunction = childData => {
		setChangeCourseImage(childData)
	}
	const callbackCourseMapFunction = childData => {
		setChangeCourseMapImage(childData)
	}
	const callbackUploadfileFunction = childData => {
		setChangeFileUpload(childData)
	}

	const {
		fields: fieldsSpot,
		append: appendSpot,
		remove: removeSpot
	} = useFieldArray({
		control,
		name: 'spot'
	})

	console.log('============== fieldsSpot', fieldsSpot)

	useEffect(() => {
		console.log(watch('course_map_image'))
		const dataTableSelected =
			tableSelected && tableSelected.length > 0
				? tableSelected.map(item => {
						return { course_spot_id: item.id, spot_id: item.id, route_number: item.id, ...item }
				  })
				: []
		const dataReset = {
			id: watch('id'),
			course_name: watch('course_name'),
			catchphrase: watch('catchphrase'),
			course_summary: watch('course_summary'),
			course_image: watch('course_image'),
			course_distance: watch('course_distance'),
			average_gradient: watch('average_gradient'),
			elevation: watch('average_gradient'),
			goal_approximate_time: watch('goal_approximate_time'),
			route_url: watch('route_url'),
			course_map_image: watch('course_map_image'),
			route_file: watch('route_file'),
			elevation_chart_url: watch('elevation_chart_url'),
			course_tag: watch('course_tag'),
			author: watch('author')
		}
		reset(dataReset)
		if (dataTableSelected && Array.isArray(dataTableSelected) && dataTableSelected.length > 0) {
			console.log('reset data form=====')
			reset({ spot: dataTableSelected, ...dataReset })
		}
	}, [tableSelected])

	return (
		<FormProvider setTableSelected={setTableSelected}>
			<form onSubmit={onSubmit}>
				<Box className="grid grid-flow-row-dense grid-cols-12 pb-20">
					<Box className="col-span-12 sm:col-span-10 sm:col-start-2 pt-20">
						<AdminInput
							label="コースID"
							control={control}
							name="id"
							placeholder="Default input"
							size="small"
							className="mb-16 sm:mb-20"
							classNameField="bg-grey-300"
							readOnly
						/>

						<AdminInput
							label="コースタイトル"
							control={control}
							name="course_name"
							placeholder="Default input"
							size="small"
							className="mb-16 sm:mb-20"
							required
						/>

						<AdminInput
							label="キャッチフレーズ"
							control={control}
							name="catchphrase"
							placeholder="Default input"
							size="small"
							className="mb-16 sm:mb-20"
							required
						/>

						<AdminInput
							label="コース説明"
							control={control}
							name="course_summary"
							placeholder="Default input"
							size="small"
							className="mb-16 sm:mb-20"
						/>

						<AdminInputUpload
							label="コース画像"
							parentCallback={callbackCourseImageFunction}
							control={control}
							name="course_image"
							size="small"
							className="mb-16 sm:mb-20"
							helperText
						/>

						<AdminInput
							label="コース距離（km）"
							control={control}
							name="course_distance"
							placeholder="Default input"
							size="small"
							className="mb-16 sm:mb-20"
						/>

						<AdminInput
							label="平均勾配（%）"
							control={control}
							name="average_gradient"
							placeholder="Default input"
							size="small"
							className="mb-16 sm:mb-20"
						/>

						<AdminInput
							label="獲得標高（m）"
							control={control}
							name="elevation"
							placeholder="Default input"
							size="small"
							className="mb-16 sm:mb-20"
						/>

						{/* <AdminInput
							label="体力度"
							control={control}
							name="strength"
							placeholder="Default input"
							size="small"
							className="mb-16 sm:mb-20"
						/> */}

						<Box className="flex flex-wrap sm:flex-nowrap mb-16 sm:mb-20">
							<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
								<Typography variant="h3" color="primary" className="flex items-center mb-4">
									<Typography className="text-black py-4 px-16 rounded-4 w-60  mx-8">
										{/* 必須 */}
									</Typography>
									完走目安
								</Typography>
							</Box>
							<Box className="rounded-md w-full sm:w-2/3">
								<CoreDatePicker
									// label="完走目安"
									control={control}
									name="goal_approximate_time"
									placeholder="Default input"
									size="small"
									className="mb-16 sm:mb-20"
									showTimeSelect={true}
									timeFormat="HH:mm:ss"
								/>
							</Box>
						</Box>

						<AdminInput
							label="ルートURL"
							control={control}
							name="route_url"
							placeholder="Default input"
							size="small"
							className="mb-16 sm:mb-20"
						/>

						<AdminInputUpload
							label="ルート画像"
							parentCallback={callbackCourseMapFunction}
							control={control}
							name="course_map_image"
							size="small"
							required
							className="w-full sm:w-2/3 mb-16 sm:mb-20"
							helperText
						/>

						<ChooseRouteFile
							label="ルートファイル"
							parentCallback={callbackUploadfileFunction}
							control={control}
							name="route_file"
							size="small"
							className="w-full sm:w-2/3 mb-16 sm:mb-20"
							helperText
							required
						/>

						<AdminInput
							label="高低図URL"
							control={control}
							name="elevation_chart_url"
							placeholder="Default input"
							size="small"
							className="mb-16 sm:mb-20"
						/>

						<Box className="flex flex-wrap sm:flex-nowrap mb-16 sm:mb-20">
							<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
								<Typography variant="h3" color="primary" className="flex items-center mb-4">
									<Typography className="text-black py-4 px-16 rounded-4 w-60  mx-8">
										{/* 必須 */}
									</Typography>
									コースタグID
								</Typography>
							</Box>
							<Box className="rounded-md w-full sm:w-2/3">
								<CoreAutocomplete
									control={control}
									name="course_tag"
									options={tags?.tags}
									size="small"
									multiple
									className="w-full"
									variant="outlined"
									placeholder="Choose..."
									valuePath="id"
									labelPath="name"
									returnValueType="enum"
								/>
							</Box>
						</Box>

						{/* <Box className="flex flex-wrap sm:flex-nowrap mb-16 sm:mb-20">
							<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
								<Typography variant="h3" color="primary" className="flex items-center mb-4">
									<Typography className="text-black py-4 px-16 rounded-4 bg-yellow mx-8">
										必須
									</Typography>
									スポット
								</Typography>
							</Box>
							<Box className="rounded-md w-full sm:w-2/3">
								<CoreAutocomplete
									control={control}
									name="spot"
									options={spots?.spots}
									size="small"
									className="w-full"
									variant="outlined"
									placeholder="Choose..."
									labelPath="name"
									valuePath="id"
									multiple
								/>
							</Box>
						</Box> */}

						<Box className="grid grid-flow-row-dense grid-cols-3 py-5">
							<Box className="col-span-3 sm:col-span-1 pt-20 pl-72">
								<Typography variant="h1" color="primary">
									スポットリスト
								</Typography>
							</Box>
							<Box>
								{errors && errors.spot && <Typography color="error">{errors.spot.message}</Typography>}
							</Box>
						</Box>
					</Box>
				</Box>
				<Box className="p-20">
					{/* <TableSpotForm tableSelected={tableSelected} /> */}
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
									<TableCell style={{ width: '10%' }}>
										<Box sx={{ fontWeight: 'bold' }}>スポット種別</Box>
									</TableCell>
									<TableCell style={{ width: '30%' }}>
										<Box sx={{ fontWeight: 'bold' }}>住所</Box>
									</TableCell>
									<TableCell style={{ width: '15%' }}>
										<Box sx={{ fontWeight: 'bold' }}>獲得ポイント</Box>
									</TableCell>
									<TableCell style={{ width: '15%' }}>
										<Box sx={{ fontWeight: 'bold' }}>次スポットへの時間</Box>
									</TableCell>
									<TableCell>
										<Box sx={{ fontWeight: 'bold' }}>アクション</Box>
									</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{fieldsSpot && Array.isArray(fieldsSpot) && fieldsSpot.length > 0 ? (
									fieldsSpot?.map((row, indRow) => (
										<TableRow key={indRow}>
											<TableCell>
												<TextField
													id="outlined-search"
													size="small"
													value={indRow + 1}
													readOnly
												/>
											</TableCell>
											<TableCell>
												{row?.name}
												<CoreInput
													control={control}
													name={`fieldsSpot.${indRow}.name`}
													defaultValue={row?.name}
													size="small"
													className="mb-16 sm:mb-20 hidden"
												/>
												<CoreInput
													control={control}
													name={`fieldsSpot.${indRow}.course_spot_id`}
													defaultValue={row?.course_spot_id}
													size="small"
													className="mb-16 sm:mb-20 hidden"
												/>
												<CoreInput
													control={control}
													name={`fieldsSpot.${indRow}.spot_id`}
													defaultValue={row?.spot_id}
													size="small"
													className="mb-16 sm:mb-20 hidden"
												/>
												<CoreInput
													control={control}
													name={`fieldsSpot.${indRow}.route_number`}
													defaultValue={row?.route_number}
													size="small"
													className="mb-16 sm:mb-20 hidden"
												/>
											</TableCell>
											<TableCell>
												{row?.type}
												<CoreInput
													control={control}
													defaultValue={row?.type}
													name={`fieldsSpot.${indRow}.type`}
													className="w-1/3 text-[#6e6e6e] hidden"
													size="small"
												/>
											</TableCell>
											<TableCell>
												{row?.address}
												<CoreInput
													control={control}
													defaultValue={row?.address}
													name={`fieldsSpot.${indRow}.address`}
													className="w-1/3 text-[#6e6e6e] hidden"
													size="small"
												/>
											</TableCell>
											<TableCell>
												<CoreInput
													type="number"
													control={control}
													defaultValue={row?.distance_between_next_spot ?? 0}
													name={`fieldsSpot.${indRow}.distance_between_next_spot`}
													className="w-1/3 text-[#6e6e6e]"
													size="small"
												/>
											</TableCell>
											<TableCell>
												<Box className="flex items-center">
													<CoreInput
														type="number"
														control={control}
														defaultValue={row?.time_between_next_spot ?? 0}
														name={`fieldsSpot.${indRow}.time_between_next_spot`}
														className="w-1/3 text-[#6e6e6e] mr-8"
														size="small"
													/>
													分
												</Box>
											</TableCell>
											<TableCell>
												<Box className="flex">
													<CoreActionDelete
														onClick={() => console.log('============= data')}
													/>
												</Box>
											</TableCell>
										</TableRow>
									))
								) : (
									<TableRow>
										<TableCell colSpan={10}>
											<Box className="w-full text-center">データなし</Box>
										</TableCell>
									</TableRow>
								)}
							</TableBody>
						</Table>
					</TableContainer>
				</Box>
				<Box className="grid grid-flow-row-dense grid-cols-12 pb-20">
					<Box className="col-span-12 sm:col-span-10 sm:col-start-2 pt-20">
						<Box className="text-end pt-40">
							<Button
								variant="contained"
								className="bg-blue w-160 text-16"
								onClick={() => handleOpen()}
								size="small"
							>
								スポット追加
							</Button>
						</Box>
						<Box className="grid grid-flow-row-dense grid-cols-3 pt-40">
							<Box className="col-span-3 sm:col-span-1 pt-10">
								<Typography variant="h3" color="primary" className="flex items-center">
									<Typography className="text-black py-4 px-16 rounded-4 mx-8">必須</Typography>
									コース作成者
								</Typography>
							</Box>
							<Box className="col-span-3 sm:col-span-1">
								<Box className="flex">
									<AdminInput
										control={control}
										name="author"
										type="text"
										size="small"
										className="w-full h-32"
									/>
									<Button variant="contained" color="third">
										選択
									</Button>
								</Box>
							</Box>
							<Box className="col-span-3 sm:col-span-1">
								<Box className="text-end">
									<Button variant="contained" color="error" className="mr-10 h-32" size="small">
										削除
									</Button>
									<Button
										type="submit"
										variant="contained"
										className="bg-blue text-white h-32"
										size="small"
									>
										登録
									</Button>
								</Box>
							</Box>
						</Box>
					</Box>
				</Box>
			</form>
			{renderListSpotDialog()}
		</FormProvider>
	)
}

export default React.memo(DetailCourseForm)
