var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!'
    },
    methods: {
        clickHandler: function() {
            alert('clicked!');
        }
    }
})