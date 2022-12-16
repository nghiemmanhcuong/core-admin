/*
 * Created Date: 23-10-2022, 11:42:04 am
 * Author: TheAnh58
 * Email: you@you.you
 * -----
 * Last Modified: Fri Dec 16 2022
 * Modified By: haitran
 * -----
 * Copyright (c) 2022 PROS+ Group , Inc
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	----------------------------------------------------------
 */

import React, { useRef } from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js'
import { Chart } from 'react-chartjs-2'
// import PropTypes from 'prop-types'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend)

const ChartOverview = props => {
	const chartRef = useRef(null)
	const labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6']
	const data = {
		labels: labels,
		datasets: [
			{
				label: 'Shose',
				data: [30, 30, 60, 120, 70, 70],
				borderColor: 'rgb(254,185,105)'
			},
			{
				label: 'Suits',
				data: [90, 180, 50, 70, 70, 30],
				borderColor: 'rgb(251,99,64)'
			},
			{
				label: 'Jeans',
				data: [60, 190, 80, 170, 70, 80],
				borderColor: 'rgb(119,100,228)'
			}
		]
	}

	return <Chart ref={chartRef} type="line" data={data} />
}

// ChartOverview.defaultProps = {}

// ChartOverview.propTypes = {}

export default React.memo(ChartOverview)
