Vue.filter('numberFormat', function(value) {
	return value.toLocaleString();
})

let app = new Vue({
	el: '#app',
	data: {
		price: 29800
	},
	// filters: {
	// 	numberFormat: function(value) {
	// 		return value.toLocaleString();
	// 	}
	// }
})