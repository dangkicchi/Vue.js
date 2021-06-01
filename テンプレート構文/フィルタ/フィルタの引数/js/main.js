Vue.filter('readMore', function(text, length, suffix) {
	// return text.substring(0, length) + suffix;
	const returnStr = text.substring(0, length) + suffix;
	return `-- ${returnStr} --`
})



let app = new Vue({
	el: '#app',
	data: {
		text: "Lorem ipsum is typically a corrupted version of 'De finibus bonorum et malorum', a 1st century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin."
	},
})


