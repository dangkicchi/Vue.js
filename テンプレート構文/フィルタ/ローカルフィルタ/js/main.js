let app = new Vue({
	el: '#app',
	data: {
		price: 298000000000
	},
	filters: {
		numberFormat: function(value) {
			return value.toLocaleString();
		}
	}
})