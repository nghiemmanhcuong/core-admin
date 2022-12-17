/*
 * Created Date: 23-10-2022, 4:07:39 pm
 * Author: TheAnh58
 * Email: you@you.you
 * -----
 * Last Modified: Sat Dec 17 2022
 * Modified By: Peter
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
import 'chart.js/auto'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend)

const ChartPartners = props => {
	const chartRef = useRef(null)

	const labels = ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov']
	const data = {
		labels,
		datasets: [
			{
				label: 'Germany',
				data: [20, 28, 17, 21, 11, 18],
				borderColor: 'rgb(17,205,239)'
			},
			{
				label: 'France',
				data: [34, 21, 10, 12, 23, 33],
				borderColor: 'rgb(119,100,228)'
			},
			{
				label: 'Russia',
				data: [11, 39, 13, 6, 45, 31],
				borderColor: 'rgb(45,206,152)'
			}
		]
	}

	return <Chart ref={chartRef} type="line" data={data} />
}

// ChartPartners.defaultProps = {}

// ChartPartners.propTypes = {}

export default React.memo(ChartPartners)
