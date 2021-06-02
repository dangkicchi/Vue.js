var app = new Vue({
    el: '#app',
    data: {
        message: ''
    },
    methods: {
        clickHandler: function($event, message) {
            this.message = message;
            console.log($event);
            console.log($event.target.tagName);
            console.log($event.target.innerHTML);
            console.log($event.target.type);
        }
    }
})