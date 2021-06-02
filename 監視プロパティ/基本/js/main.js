let app = new Vue({
	el: '#app',
	data: {
		message: 'Hello vue.js!'
	},
	watch: {
		message: function(newValue, oldValue) {
			console.log(`new: ${newValue}, oldValue: ${oldValue}`);
		}
	}
})
