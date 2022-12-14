const { createApp } = Vue;

createApp({
    data(){
        return{
            toDoList :[
                {
                    name : 'fare la spesa',
                    done : true,
            },
            {
                    name : 'preparare il pranzo',
                    done : true,
            },
            {
                    name : 'preparare lo spuntino',
                    done : false,
            },
            {
                    name : 'preparare la cena',
                    done : false,
            },
            {
                    name : 'rifare il letto',
                    done : true,
            },
        ],
        }
    }
}).mount('#app')