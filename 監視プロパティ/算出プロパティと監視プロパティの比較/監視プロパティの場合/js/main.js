let app = new Vue({
	el: '#app',
	data: {
		firstName: '',
		lastName: '',
		fullName: ''
	},
	watch: {
		firstName: function(value) {
			// console.log(`value: ${value}`);
			this.fullName = value + ' ' + this.lastName;
		},
		lastName: function(value) {
			this.fullName = this.firstName + ' ' + value;
		}
	}
})
