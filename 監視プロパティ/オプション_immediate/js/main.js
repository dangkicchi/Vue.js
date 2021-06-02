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
			handler: function (newValue, oldValue) {
				console.log('Update!')
				console.log(`newValue: ${JSON.stringify(newValue, null, '\t')}, oldValue: ${JSON.stringify(oldValue, null, '\t')}`)
			},
			deep: true,
			immediate: true
			// immediate: false
		}
	}
})

