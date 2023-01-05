import React, { useEffect } from 'react'
import { Button, Paper, Typography, TextField, Box, Card, CircularProgress } from '@mui/material'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Yup from '@Core/helper/Yup'
import Grid from '@mui/material/Grid'
import AdminInput from '@App/Admin/components/Input/AdminInput'
import AdminInputUpload from '@App/Admin/components/Input/AdminInputUpload'
import CoreCheckboxGroup from '@Core/components/Input/CoreCheckboxGroup'
import { useAdminPageContext } from '@App/Admin/components/Provider/AdminPageProvider'
import { useNavigate, useParams } from 'react-router-dom'
import CoreAutocomplete from '@Core/components/Input/CoreAutocomplete'
import CoreDatePicker from '@Core/components/Input/CoreDatePicker'
import TableSpot from './TableSpot'
import { LoadingButton } from '@mui/lab'
import { eventService } from '@App/Admin/services/eventService'
import { useRequest } from 'ahooks'
import { errorMsg, successMsg } from '@Core/helper/Message'

const FontTitle = ({ variant = 'h1', title = '' }) => {
	return (
		<Typography variant={variant} className="text-primary">
			{title}
		</Typography>
	)
}

const Tab2 = props => {
	const { t, eventData, isEdit, tags, courses, courseDetail, getCourseDetail, loadingCourseDetail } =
		useAdminPageContext()
	const navigate = useNavigate()
	const { id: eventId } = useParams()
	const {
		control,
		watch,
		handleSubmit,
		setValue,
		getValues,
		formState: { isSubmitting, isDirty }
	} = useForm({
		mode: 'onTouched',
		defaultValues: {
			event_id: eventData?.id ?? null,
			title: eventData?.title ?? '',
			course_id: null,
			tag: [],
			course_name: '',
			catchphrase: null,
			course_summary: '',
			course_distance: null,
			average_gradient: '',
			elevation: null,
			goal_approximate_time: null,
			route_url: '',
			course_map_image: '',
			route_file: '',
			elevation_chart_url: '',
			spot_list: []
		},
		resolver: yupResolver(
			Yup.object({
				title: Yup.string().required()
			})
		)
	})

	const {
		data: eventCourseDetail,
		run: getEventCourseDetail,
		loading: loadingEventCourseDetail
	} = useRequest(eventService.eventCourseDetail, {
		manual: true,
		onError: (res, params) => {
			if (params) {
				mutate({
					data: []
				})
			} else {
				errorMsg(res?.response?.data?.error_message)
			}
		}
	})

	useEffect(() => {
		if (eventId) {
			getEventCourseDetail(eventId)
		}
	}, [])

	const tagOptions = tags?.tags?.reduce((result, currentValue) => {
		const formatResult = {
			key: `${currentValue?.id}`,
			value: currentValue?.id,
			label: currentValue?.name
		}

		result.push(formatResult)

		return result
	}, [])

	useEffect(() => {
		setValue('course_name', courseDetail?.course?.course_name)
		setValue('catchphrase', courseDetail?.course?.catchphrase)
		setValue('course_summary', courseDetail?.course?.course_summary)
		setValue('course_distance', courseDetail?.course?.course_distance)
		setValue('average_gradient', courseDetail?.course?.average_gradient)
		setValue('elevation', courseDetail?.course?.elevation)
		setValue('route_url', courseDetail?.course?.route_url)
		setValue('course_map_image', courseDetail?.course?.course_map_image)
		setValue('route_file', courseDetail?.course?.route_file)
		setValue('elevation_chart_url', courseDetail?.course?.elevation_chart_url)
	}, [JSON.stringify(courseDetail)])

	const onSubmit = handleSubmit(async data => {
		try {
			if (!eventId) {
				return
			}

			const formData = new FormData()
			if (eventCourseDetail && eventCourseDetail.event_course && eventCourseDetail.event_course.course_id) {
				formData.append('course_id', eventCourseDetail.event_course.course_id)
			}
			if (
				eventCourseDetail &&
				eventCourseDetail.event_course &&
				eventCourseDetail.event_course.spot_list &&
				eventCourseDetail.event_course.spot_list.length > 0
			) {
				eventCourseDetail?.event_course?.spot_list.forEach(item => {
					formData.append('spot_list', JSON.stringify(item))
				})
			}

			eventService.updateEventCourse(eventId, formData)
			successMsg('Update Event Course Details successfull!')
		} catch (error) {
			errorMsg('Submit faild')
			console.log('============= e', error)
		}
	})

	return (
		<form onSubmit={onSubmit}>
			<Box className="grid grid-flow-row-dense grid-cols-12 pb-20">
				<Box className="col-span-12 sm:col-span-10 sm:col-start-2 pt-20">
					<AdminInput
						control={control}
						label="イベントID"
						name="event_id"
						placeholder="デフォルト入力"
						size="small"
						readOnlydisabled={!isDirty}
						classNameField="bg-grey-300"
						className="mb-16 sm:mb-20"
						required
					/>
					<AdminInput
						control={control}
						label="イベントタイトル"
						name="title"
						placeholder="デフォルト入力"
						className="mb-16 sm:mb-20"
						size="small"
						readOnly
						classNameField="bg-grey-300"
						required
					/>
					<Box className="grid grid-flow-row-dense grid-cols-3 py-5">
						<Box className="col-span-3 sm:col-span-1 pt-10 flex items-center">
							<Typography className="text-black py-4 px-16 rounded-4 bg-yellow mx-8">必須</Typography>
							<FontTitle variant="h3" title="イベントコース" />
						</Box>
						<Box className="col-span-3 sm:col-span-2 mb-20">
							<Grid container rowSpacing={1} columnSpacing={12}>
								<Grid item xs={6}>
									<CoreAutocomplete
										control={control}
										name="course_id"
										size="small"
										fullWidth
										variant="outlined"
										placeholder="デフォルト選択"
										options={courses?.courses}
										valuePath="id"
										labelPath="course_name"
										returnValueType="enum"
									/>
								</Grid>
								<Grid item xs={6}>
									<Button
										variant="contained"
										color="primary"
										className="px-8 py-6 text-14 mr-3"
										size="small"
										onClick={() => getCourseDetail(watch('course_id'))}
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
						name="course_name"
						placeholder="デフォルト入力"
						size="small"
						readOnly
						classNameField="bg-grey-300"
						className="mb-16 sm:mb-20"
					/>
					<AdminInput
						control={control}
						label="キャッチフレーズ"
						name="catchphrase"
						placeholder="デフォルト入力"
						size="small"
						readOnly
						classNameField="bg-grey-300"
						className="mb-16 sm:mb-20"
					/>

					<AdminInput
						control={control}
						label="コース説明"
						name="course_summary"
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
						name="course_distance"
						placeholder="デフォルト入力"
						size="small"
						readOnly
						classNameField="bg-grey-300"
						className="mb-16 sm:mb-20"
					/>

					<AdminInput
						control={control}
						label="平均勾配"
						name="average_gradient"
						placeholder="デフォルト入力"
						size="small"
						readOnly
						classNameField="bg-grey-300"
						className="mb-16 sm:mb-20"
					/>

					<AdminInput
						control={control}
						label="獲得標高"
						name="elevation"
						placeholder="デフォルト入力"
						size="small"
						readOnly
						classNameField="bg-grey-300"
						className="mb-16 sm:mb-20"
					/>

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
								placeholder="デフォルト入力"
								size="small"
								className="mb-16 sm:mb-20"
								showTimeSelect={true}
								timeFormat="HH:mm:ss"
							/>
						</Box>
					</Box>

					<AdminInput
						control={control}
						label="ルートURL"
						name="route_url"
						placeholder="デフォルト入力"
						size="small"
						readOnly
						classNameField="bg-grey-300"
						className="mb-16 sm:mb-20"
					/>
					<AdminInputUpload
						label="ルート画像"
						control={control}
						name="course_map_image"
						size="small"
						className="w-full sm:w-2/3 mb-16 sm:mb-20"
						helperText
						hideButton
					/>

					<AdminInput
						control={control}
						label="ルートファイル（kml形式）"
						name="route_file"
						placeholder="デフォルト入力"
						size="small"
						readOnly
						classNameField="bg-grey-300"
						className="mb-16 sm:mb-20"
					/>

					<AdminInput
						control={control}
						label="高低図URL"
						name="elevation_chart_url"
						placeholder="デフォルト入力"
						size="small"
						readOnly
						classNameField="bg-grey-300"
						className="mb-16 sm:mb-20"
					/>

					<CoreCheckboxGroup
						control={control}
						name="tag"
						options={tagOptions}
						legendLabel={t('edit.form.label.tag')}
						row
						disabledInp={true}
					/>

					<Box className="grid grid-flow-row-dense grid-cols-3 py-5">
						<Box className="col-span-3 sm:col-span-1 pt-10 pl-72">
							<FontTitle variant="h3" title="スポットリスト" />
						</Box>
					</Box>
				</Box>
			</Box>
			<Box className="grid grid-flow-row-dense grid-cols-3 py-5">
				<Box className="col-span-3">
					{!loadingEventCourseDetail && (
						<TableSpot
							name="spot_list"
							eventId={eventId}
							courseId={eventCourseDetail?.event_course?.course_id}
							spotList={eventCourseDetail?.event_course?.spot_list}
						/>
					)}
				</Box>
			</Box>
			{/* <Grid className="text-end pt-20">
				<LoadingButton
					loading={isSubmitting}
					// disabled={!isDirty}
					variant="contained"
					className="bg-blue text-white h-32"
					size="small"
					type="submit"
				>
					登録
				</LoadingButton>
			</Grid> */}
		</form>
	)
}

export default React.memo(Tab2)
