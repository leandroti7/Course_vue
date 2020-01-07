var hello = new Vue({
    el: '#hello',
    data:{
        msg: 'Hallo Vue!',
        peoples:[
            {name:"Maria"},
            {name:"Leandro"},
            {name:"José"},
            {name:"Thomas"},
            {name:"EU mesmo"}
        ],
        newElement:'',
        elements: []
    },
    methods:{
        addElement: function(e){
            let title = this.newElement.trim();
            if (title) {
                this.elements.push({title:title});
                this.newElement = "";
            }
        },
        removeElement: function(e, index) {
            e.preventDefault();
            this.elements.splice(index, 1);
        }
    }
});