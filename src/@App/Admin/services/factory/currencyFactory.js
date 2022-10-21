import BaseFactory from '@Core/api/Factory'

export const currencyFactory = new BaseFactory()
	.setFactoryModel({
		id: i => {
			return i
		},
		name: i => {
			return `currency ${i}`
		},
		area: i => {
			return `状態 ${i}`
		},
		range: i => {
			return `ポイント換算レート`
		},
		start_date: i => {
			return `2022-04-15`
		},
		end_date: i => {
			return `2022-04-25`
		},
		author: i => {
			return `状態 ${i}`
		}
	})
	.makeData(20)
