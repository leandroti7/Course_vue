var app = new Vue({
    el: '#app',
    data: {
        books:[],
        mySearch:''
    },
    methods: {
       
    },
    created:function(){
        let self = this;
        self.$http.get('dataSever.json').then(function(response){
            // console.log(response);
            self.books = response.data;
        });
    },
});