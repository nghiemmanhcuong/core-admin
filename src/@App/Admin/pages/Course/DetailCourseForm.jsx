import React, { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import AdminContentPage from '../../components/Layout/AdminContentPage'
import ListCourseProvider from './ListCourseProvider'
import { ROUTER_ADMIN, TRANSLATE_ADMIN } from '@App/Admin/configs/constants'
import { Button, Paper, Typography, TextField, Box, Card } from '@mui/material'
import CoreInput from '@Core/components/Input/CoreInput'
import { FormProvider, useForm } from 'react-hook-form'
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
import CoreAutocomplete from '@Core/components/Input/CoreAutocomplete'
import { useAdminPageContext } from '@App/Admin/components/Provider/AdminPageProvider'
import { errorMsg, successMsg } from '@Core/helper/Message'
import { courseService } from '@App/Admin/services/courseService'
import CoreDatePicker from '@Core/components/Input/CoreDatePicker'
import ChooseRouteFile from './Components/ChooseRouteFile'
import { useCourseForm } from './hooks/useCourseForm'
import TableSpotForm from './Components/TableSpotForm'

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

	const { control, watch } = methodForm

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

						<Box className="flex flex-wrap sm:flex-nowrap mb-16 sm:mb-20">
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
						</Box>

						<Box className="grid grid-flow-row-dense grid-cols-3 py-5">
							<Box className="col-span-3 sm:col-span-1 pt-20 pl-72">
								<Typography variant="h1" color="primary">
									スポットリスト
								</Typography>
							</Box>
						</Box>
					</Box>
				</Box>
				<Box className="p-20">
					<TableSpotForm tableSelected={tableSelected} />
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
