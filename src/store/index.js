import Vue from 'vue'
import Vuex from 'vuex'

import feathers from 'feathers-client';
import io from 'socket.io-client'
Vue.use(Vuex)


const host = 'https://backend2-bptzp623xa-uc.a.run.app';
const socket = io(host);

export const app = feathers()
  .configure(feathers.socketio(socket))
  .configure(feathers.hooks());

Vue.prototype.$feathersapp = app;



const todoService = app.service('tasks');
// todoService is an event emitter
todoService.on('created', todo => console.log('Created todo', todo));


export default new Vuex.Store({ 
  state: {
        newTaskName:'',
        tasks:[]
  },
  mutations: {
    deleteTask(state,id)
      {

        let taskt = state.tasks.filter(task => task.id === id)
        console.log(taskt)
        state.tasks = state.tasks.filter(task => task.id !== id)


        app.service('tasks').remove(id).then((result)=>{
          console.log(result)
        }).catch((error)=>{
          console.log(error)
        })
        
      },
      
      addTask(state,newTaskName)
      {
          if (state.newTaskName === '') return 
          var c = state.newTaskName
          
        
        app.service('tasks').create({
          tasks:c,
          done:false
        }).then((result)=>{
          console.log(result)
          let newTask = {
            id : result._id,
            name : c,
            done:false
          }
          state.tasks.push(newTask)
          state.newTaskName=''

        }).catch((error)=>{
          console.log(error)
        })

        
      },
      getUnits: function(state) {
        state.tasks = []
        var dbTasks = []
        app.service('tasks').find().then((result)=>{
          dbTasks = result
          console.log(dbTasks.data,'tdfghj')
          for (let i = 0; i < dbTasks.data.length; i++) {
            let newTask = {
              id : dbTasks.data[i]._id,
              name : dbTasks.data[i].tasks,
              done:dbTasks.data[i].done
            }
            state.tasks.push(newTask)
            console.log(state.tasks)
          }
        }).catch((error)=>{
          console.log(error)
        })  
        
      },
      doneTask(state,id){
        let task = state.tasks.filter(task => task.id === id)[0]
        task.done = !task.done
        
        app.service('tasks').update(task.id,{
          tasks:task.name,
          done:task.done
        }).then((result)=>{
          console.log(result)
        }).catch((error)=>{
          console.log(error)
        })
        
      }
  },
  actions: {
  
  },
  modules: {
  }
})
