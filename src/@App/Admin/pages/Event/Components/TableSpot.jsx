/*
 * Created Date: 19-12-2022, 2:32:07 pm
 * Author: Hai Tran
 * Email: you@you.you
 * -----
 * Last Modified:
 * Modified By:
 * -----
 * Copyright (c) 2022 PROS+ Group , Inc
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	----------------------------------------------------------
 */

import { CoreActionDelete } from '@Core/components/Table/components/CoreTableAction'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useCallback } from 'react'
import FilterDataTableSpot from './FilterDataTableSpot'
import { LoadingButton } from '@mui/lab'
import Grid from '@mui/material/Grid'
import { errorMsg, successMsg } from '@Core/helper/Message'
import { eventService } from '@App/Admin/services/eventService'
import { useEffect } from 'react'

const TableSpot = props => {
	const { eventId, courseId, spotList, saveMode, newCourseId } = props
	console.log(saveMode)

	useEffect(() => {
		console.log(courseId)
		console.log('=====new course id', newCourseId)
	}, [])

	const handleChangePoint = newData => {
		const itemIsChange = spotList.filter(item => item.spot_id === newData.spot_id)
		if (itemIsChange[0]) {
			itemIsChange[0].point = parseInt(newData.point)
		}
	}

	const createEventCourse = async () => {
		try {
			if (!eventId || !courseId) {
				return
			}

			const sportData = spotList != null && spotList.length > 0 ? spotList.map((elm, idx) => {
				if (elm.special_action_type == null) {
					elm.special_action_type = [];
				}

			  	return elm
			}) : spotList

			const dataRequest = {
				event_id: eventId,
				course_id: courseId,
				spot: spotList
			}
			await eventService.createEventCourse(dataRequest)
			successMsg('イベントコースの更新が成功しました。')
		} catch (error) {
			errorMsg('イベントコースの更新に失敗しました。')
			console.log('============= e', error)
		}
	}

	const updateEventCourse = async () => {
		try {
			if (!eventId) {
				return
			}

			const sportData = spotList != null && spotList.length > 0 ? spotList.map((elm, idx) => {
				if (elm.special_action_type == null) {
					elm.special_action_type = [];
				}

			  	return elm
			}) : spotList

			const dataRequest = {
				event_id: eventId,
				course_id: courseId,
				spot_list: spotList
			}
			await eventService.updateEventCourse(eventId, dataRequest)
			successMsg('イベントコースの更新が成功しました。')
		} catch (error) {
			errorMsg('イベントコースの更新に失敗しました。')
			console.debug('============= e', error)
		}
	}

	const renderTable = useCallback(() => {
		return (
			spotList?.map((row, index) => (
				<FilterDataTableSpot key={index} ind={index} {...row} handleCallback={handleChangePoint} />
			)) ?? (
				<TableRow>
					<TableCell colSpan={10}>
						<Box className="w-full text-center">データなし</Box>
					</TableCell>
				</TableRow>
			)
		)
	}, [spotList])

	return (
		<>
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
					<TableBody>{renderTable()}</TableBody>
				</Table>
			</TableContainer>
			<Grid className="text-end pt-20">
				<LoadingButton
					variant="contained"
					className="bg-blue text-white h-32 text-13"
					size="small"
					onClick={saveMode == 'update' ? updateEventCourse : createEventCourse}
				>
					登録
				</LoadingButton>
			</Grid>
		</>
	)
}

export default React.memo(TableSpot)
