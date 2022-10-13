import BaseFactory from '@Core/api/Factory'

export const courseFactory = new BaseFactory()
	.setFactoryModel({
		id: i => {
			return i
		},
		name: i => {
			return `course ${i}`
		},
		code: i => {
			return 'Code ' + i
		},
		address: i => {
			return 'Address ' + i
		},
		phone: i => {
			return 'Phone-' + i
		},
		point: i => {
			return 'Point ' + i
		}
	})
	.makeData(20)
