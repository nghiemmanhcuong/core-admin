/*
 * Created Date: 10-10-2022, 9:44:16 pm
 * Author: Peter
 * Email: phantrung696@gmail.com
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

// import { flatten } from 'flattenjs'
import i18n from 'i18next'
import Backend from 'i18next-xhr-backend'
import { initReactI18next } from 'react-i18next'
// import { i18nextPlugin } from 'translation-check'

i18n
	// load translation using xhr -> see /public/locales
	// learn more: https://github.com/i18next/i18next-xhr-backend
	.use(Backend)
	// pass the i18n instance to react-i18next.
	.use(initReactI18next)
	// init i18next
	// for all options read: https://www.i18next.com/overview/configuration-options
	// .use(i18nextPlugin)
	.init({
		backend: {
			loadPath: () => {
				// const query = getQueryUrlObject()
				// console.log('=======> query', query)
				return '/locales/{{lng}}/{{ns}}.json'
			},
			allowMultiLoading: true
			// parse(data) {
			// 	const newData = flatten(JSON.parse(data))
			// 	console.log('============= data', JSON.stringify(newData))
			// 	return newData
			// }
			// parse
		},
		// preload: ['vi'],
		fallbackLng: 'en',
		lng: 'en',
		debug: false,
		ns: ['common'],
		defaultNS: 'common',
		interpolation: {
			escapeValue: false // not needed for react as it escapes by default
		},
		saveMissing: true,
		appendNamespaceToMissingKey: true,
		partialBundledLanguages: true
	})

export default i18n
