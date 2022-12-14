const { createApp } = Vue;

createApp({
    data(){
        return{
            userToDo : '',
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
    },

    methods:{

        addNewTask(){
            if(this.userToDo.length >= 2){
                this.userToDo = {name : this.userToDo}
                this.toDoList.push(this.userToDo);
            }else{
                alert('Non puoi aggiungere elementi con meno di 2 caratteri nella lista');
            }
            this.userToDo = '';
        },

        removeItem(index){
            this.toDoList.splice(index, 1);
        }
    }

}).mount('#app')
