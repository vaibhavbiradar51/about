import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({ 
  state: {
        newTaskName:'',
        tasks:[
          
        ]
  },
  mutations: {
    deleteTask(state,id)
      {
        state.tasks = state.tasks.filter(task => task.id !== id)
        window.localStorage.setItem('tasks',JSON.stringify(state.tasks))
        
      },
      
      addTask(state,newTaskName)
      {
          if (state.newTaskName === '') return 
          let newTask = {
          id : Date.now(),
          name : state.newTaskName,
          done:false
        }
        state.tasks.push(newTask)
        state.newTaskName=''
        window.localStorage.setItem('tasks',JSON.stringify(state.tasks))
      },
      getUnits: function(state) {
        state.tasks = JSON.parse(window.localStorage.getItem('tasks'))
      },
      doneTask(state,id){
        let task = state.tasks.filter(task => task.id === id)[0]
        task.done = !task.done
        window.localStorage.setItem('tasks',JSON.stringify(state.tasks))
      }
  },
  actions: {
  
  },
  modules: {
  }
})
