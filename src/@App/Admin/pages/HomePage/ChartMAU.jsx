/*
 * Created Date: 23-10-2022, 11:40:14 am
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

import React, { useEffect, useRef, useState } from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js'
import { Chart } from 'react-chartjs-2'
// import PropTypes from 'prop-types'
import 'chart.js/auto'
import { useRequest } from 'ahooks'
import { errorMsg, successMsg } from '@Core/helper/Message'
import { maintainceService } from '@App/Admin/services/maintainceService'
import moment from 'moment/moment'
import { CircularProgress } from '@mui/material'
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend)

const labels = ['1', '2', '3', '4', '5', '6', '7']
const colors = ['#ff5436', '#f77900', '#f9fa93', '#00ea00', '#199111', '#00b9c1', '#0000f9', '#910887']
const colors1 = colors[Math.round(Math.random() * colors.length)]
const colors2 = colors.filter(item => item !== colors1)[
	Math.round(Math.random() * colors.filter(item => item !== colors1).length)
]
const ChartMAU = props => {
	const chartRef = useRef(null)
	const [data, setData] = useState({ labels, datasets: [] })

	const {
		data: dataSale,
		run: getDataSale,
		loading: loadingDataSale
	} = useRequest(maintainceService.handleDownload, {
		manual: true,
		onSuccess: (result, params) => {
			handleMapDataToChart(result)
		},
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

	const handeleGetDataSale = async () => {
		const params = {
			export_format: 'JSON',
			collect_duration: 'all',
			// collect_duration_from: '2022-08',
			report_display: 'monthly',
			export_app: ['mau']
		}

		await getDataSale(params)
	}

	const handleMapDataToChart = async dataReponse => {
		const dataMau = dataReponse?.export_app?.mau
		if (!dataMau) {
			setData({
				labels: [],
				datasets: []
			})
			return
		}

		const labelChart = []
		const dataChartMau = []
		dataMau.forEach(item => {
			labelChart.push(item?.year_month)
			dataChartMau.push(item?.number)
		})

		setData({
			labels: labelChart,
			datasets: [
				{
					label: 'MAU',
					data: dataChartMau,
					borderColor: '#910887'
				}
			]
		})
	}

	useEffect(() => {
		handeleGetDataSale()
	}, [])

	return loadingDataSale ? <CircularProgress /> : <Chart ref={chartRef} type="line" data={data} />
}

// ChartSale.defaultProps = {}

// ChartSale.propTypes = {}

export default React.memo(ChartMAU)
