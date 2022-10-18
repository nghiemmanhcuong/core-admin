import BaseFactory from '@Core/api/Factory'

export const courseFactory = new BaseFactory()
	.setFactoryModel({
		id: i => {
			return i
		},
		name: i => {
			return `course ${i}`
		},
		area: i => {
			return `Area ${i}`
		},
		range: i => {
			return `コース距離-${i}`
		},
		amount: i => {
			return `${i}0000`
		},
		physical: i => {
			return `Physical-${i}`
		},
		author: i => {
			return `Admin ${i}`
		}
	})
	.makeData(20)
