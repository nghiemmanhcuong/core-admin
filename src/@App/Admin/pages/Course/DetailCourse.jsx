/*
 * Created Date: 13-12-2022, 11:18:33 pm
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

import AdminContentPage from '@App/Admin/components/Layout/AdminContentPage'
import { ROUTER_ADMIN, TRANSLATE_ADMIN } from '@App/Admin/configs/constants'
import { Button, CircularProgress } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useParams } from 'react-router-dom'
import DetailCourseForm from './DetailCourseForm'
import { useCourseDetail } from './hooks/useCourseDetail'
import ListCourseProvider from './ListCourseProvider'
// import PropTypes from 'prop-types'

const DetailCourse = props => {
	const { t } = useTranslation(TRANSLATE_ADMIN.course)
	const navigate = useNavigate()
	const { isEdit, course, loadingCourse, id } = useCourseDetail()

	return (
		<ListCourseProvider t={t} isEdit={isEdit}>
			<AdminContentPage
				pageTitle="コース詳細"
				headerAction={
					<Button variant="contained" color="error" onClick={() => navigate(ROUTER_ADMIN.course)}>
						{t('common:btn.back')}
					</Button>
				}
				content={
					loadingCourse ? (
						<div className="mt-40 text-center">
							<CircularProgress />
						</div>
					) : (
						<DetailCourseForm isEdit={isEdit} courseData={course} courseId={id} />
					)
				}
			/>
		</ListCourseProvider>
	)
}

// DetailCourse.defaultProps = {}

// DetailCourse.propTypes = {}

export default React.memo(DetailCourse)
