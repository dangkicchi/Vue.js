let app = new Vue({
	el: '#app',
	data: {
		colors: [
			{ name: 'Red' },
			{ name: 'Green' },
			{ name: 'Blue' }
		]
	},
	watch: {
		colors: {
			/* このままだと this の中身が変わるので newValue も oldValue も書き換わってしまう。 */
			handler: function (newValue, oldValue) {
				console.log('Update!')
				console.log(`newValue: ${JSON.stringify(newValue, null, '\t')}, oldValue: ${JSON.stringify(oldValue, null, '\t')}`)
			},
			deep: true
			// deep: false
		}
	}
})

