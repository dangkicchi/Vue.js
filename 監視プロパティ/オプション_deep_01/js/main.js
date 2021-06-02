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
			handler: function (val, oldVal) {
				console.log('someObj changed')
			},
			deep: true
			// deep: false
		}
	}
})

