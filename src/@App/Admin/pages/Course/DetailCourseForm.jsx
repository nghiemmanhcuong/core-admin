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
	TextField,
	FormHelperText
} from '@mui/material'
import clsx from 'clsx'
import CoreTimePicker from '@Core/components/Input/CoreTimePicker'
import TableSpotList from './Components/TableSpotList'

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
		formState: { errors, isDirty },
		reset
	} = methodForm

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

	useEffect(() => {
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
			author: watch('author'),
			strength: watch('strength')
		}

		if (dataTableSelected && Array.isArray(dataTableSelected) && dataTableSelected.length > 0) {
			reset({ spot: dataTableSelected, ...dataReset })
		} else {
			reset({ spot: watch('spot'), ...dataReset })
		}
	}, [tableSelected])

	return (
		<FormProvider {...methodForm} removeSpot={removeSpot} setTableSelected={setTableSelected}>
			<form onSubmit={onSubmit}>
				<Box className="grid grid-flow-row-dense grid-cols-12 pb-20">
					<Box className="col-span-12 sm:col-span-10 sm:col-start-2 pt-20">
						<AdminInput
							label="?????????ID"
							control={control}
							name="id"
							placeholder="?????????????????????"
							size="small"
							className="mb-16 sm:mb-20"
							classNameField="bg-grey-300"
							readOnly
						/>

						<AdminInput
							label="?????????????????????"
							control={control}
							name="course_name"
							placeholder="?????????????????????"
							size="small"
							className="mb-16 sm:mb-20"
							required
						/>

						<AdminInput
							label="????????????????????????"
							control={control}
							name="catchphrase"
							placeholder="?????????????????????"
							size="small"
							className="mb-16 sm:mb-20"
							required
						/>

						<AdminInput
							label="???????????????"
							control={control}
							name="course_summary"
							placeholder="?????????????????????"
							size="small"
							className="mb-16 sm:mb-20"
						/>

						<AdminInputUpload
							label="???????????????"
							parentCallback={callbackCourseImageFunction}
							control={control}
							name="course_image"
							size="small"
							className="mb-16 sm:mb-20"
							helperText
						/>

						<AdminInput
							label="??????????????????km???"
							control={control}
							name="course_distance"
							placeholder="?????????????????????"
							size="small"
							className="mb-16 sm:mb-20"
						/>

						<AdminInput
							label="???????????????%???"
							control={control}
							name="average_gradient"
							placeholder="?????????????????????"
							size="small"
							className="mb-16 sm:mb-20"
						/>

						<AdminInput
							label="???????????????m???"
							control={control}
							name="elevation"
							placeholder="?????????????????????"
							size="small"
							className="mb-16 sm:mb-20"
						/>

						<Box className="flex flex-wrap sm:flex-nowrap mb-16 sm:mb-20">
							<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
								<Typography variant="h3" color="primary" className="flex items-center mb-4">
									<Typography className="text-black py-4 px-16 rounded-4 w-60  mx-8">
										{/* ?????? */}
									</Typography>
									?????????
								</Typography>
							</Box>
							<Box className="rounded-md w-full sm:w-2/3">
								<CoreAutocomplete
									control={control}
									name="strength"
									options={[{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }, { value: 5 }]}
									size="small"
									className="w-full"
									variant="outlined"
									placeholder="????????????"
									valuePath="value"
									labelPath="value"
									returnValueType="enum"
								/>
							</Box>
						</Box>

						<Box className="flex flex-wrap sm:flex-nowrap mb-16 sm:mb-20">
							<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
								<Typography variant="h3" color="primary" className="flex items-center mb-4">
									<Typography className="text-black py-4 px-16 rounded-4 w-60  mx-8">
										{/* ?????? */}
									</Typography>
									????????????
								</Typography>
							</Box>
							<Box className="rounded-md w-full sm:w-2/3">
								<CoreTimePicker
									// label="????????????"
									control={control}
									name="goal_approximate_time"
									placeholder="?????????????????????"
									size="small"
									className="mb-16 sm:mb-20"
								/>
							</Box>
						</Box>

						<AdminInput
							label="?????????URL"
							control={control}
							name="route_url"
							placeholder="?????????????????????"
							size="small"
							className="mb-16 sm:mb-20"
						/>

						<AdminInputUpload
							label="???????????????"
							parentCallback={callbackCourseMapFunction}
							control={control}
							name="course_map_image"
							size="small"
							required
							className="w-full sm:w-2/3 mb-16 sm:mb-20"
							helperText
						/>

						<ChooseRouteFile
							label="?????????????????????"
							parentCallback={callbackUploadfileFunction}
							control={control}
							name="route_file"
							size="small"
							className="w-full sm:w-2/3 mb-16 sm:mb-20"
							helperText
							required
						/>

						<AdminInput
							label="?????????URL"
							control={control}
							name="elevation_chart_url"
							placeholder="?????????????????????"
							size="small"
							className="mb-16 sm:mb-20"
						/>

						<Box className="flex flex-wrap sm:flex-nowrap mb-16 sm:mb-20">
							<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
								<Typography variant="h3" color="primary" className="flex items-center mb-4">
									<Typography className="text-black py-4 px-16 rounded-4 w-60  mx-8">
										{/* ?????? */}
									</Typography>
									???????????????ID
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
									placeholder="????????????"
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
										??????
									</Typography>
									????????????
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
									placeholder="????????????"
									labelPath="name"
									valuePath="id"
									multiple
								/>
							</Box>
						</Box> */}

						<Box className="flex flex-wrap items-center sm:flex-nowrap mb-16 sm:mb-20">
							<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
								<Typography variant="h3" color="primary" className="flex items-center mb-4">
									<Typography className="text-black py-4 px-16 rounded-4 w-60 bg-[#FFC107] mx-8">
										??????
									</Typography>
									?????????????????????
								</Typography>
							</Box>
							<Box className="w-full sm:w-2/3">
								{errors && errors.spot && <Typography color="error">{errors.spot.message}</Typography>}
							</Box>
						</Box>
					</Box>
				</Box>
				<Box className="p-20">
					{/* <TableSpotForm tableSelected={tableSelected} /> */}
					<TableSpotList fieldsSpot={fieldsSpot} />
				</Box>
				<Box className="grid grid-flow-row-dense grid-cols-12 pb-20">
					<Box className="col-span-12 sm:col-span-10 sm:col-start-2 pt-20">
						<Box className="text-end pt-40">
							<Button
								variant="contained"
								className="bg-blue w-160 text-13 h-32"
								onClick={() => handleOpen()}
								size="small"
							>
								??????????????????
							</Button>
						</Box>
						<Box className="grid grid-flow-row-dense grid-cols-3 pt-40">
							<Box className="col-span-3 sm:col-span-1 pt-10">
								<Typography variant="h3" color="primary" className="flex items-center">
									<Typography className="text-black py-4 px-16 rounded-4 bg-[#FFC107] mx-8">
										??????
									</Typography>
									??????????????????
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
									<Button variant="contained" color="third" className="h-32">
										??????
									</Button>
								</Box>
							</Box>
							<Box className="col-span-3 sm:col-span-1">
								<Box className="text-end">
									<Button
										variant="contained"
										color="error"
										className="mr-10 text-13 h-32"
										size="small"
									>
										??????
									</Button>
									<Button
										type="submit"
										variant="contained"
										size="small"
										disabled={!isDirty}
										className={clsx(
											'mr-10 h-32 text-13 text-white',
											!isDirty ? 'bg-gray-500' : 'bg-blue'
										)}
									>
										??????
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
