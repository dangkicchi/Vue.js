let app = new Vue({
	el: '#app',
	data: {
		message: 'Hello vue.js!'
	},
	computed: {
		reversedMessage: function() {
			return this.message.split('').reverse().join('');
		}
	}
})


