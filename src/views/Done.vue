<template>
  <div class="about pa-10"  >
    <v-list min-width="200px">
      <v-list-item>
        <v-list-item-content
            class="pa-2"
            elevation="4"
            outlined
          >
          <v-list-item-title>
            <h2>Done Items</h2>  
          </v-list-item-title>


          
            <v-list-item 
              class="pa-0 ma-0" 
              v-if="$store.state.tasks.length ===0">
              No Tasks Done
            </v-list-item>  
          
           <div
            
              class="pa-0 ma-0"
              v-for="task in $store.state.tasks"
              :key="task.id"  
            >
            
             <v-list-item
                v-if="task.done"
              >
              <template 
                
              >
            
                <v-list-item-content>
                  <v-list-item-title>{{task.name}}</v-list-item-title>
                </v-list-item-content>
                

                <v-list-item-action>
                  <v-btn 
                    @click.stop="$store.commit('doneTask',task.id)"
                    icon
                  >
                    <v-icon color="blue lighten-2" >mdi-restore</v-icon>
                  </v-btn>
                </v-list-item-action>

              </template>
              
            </v-list-item>
            </div>
      
          
        </v-list-item-content>

      </v-list-item>

    </v-list>
    
  </div>
</template>

<script>


  export default {
    name: 'ToDo',
      beforeMount(){
          this.$store.commit('getUnits')
      },
    components: {
      
    },
  }
</script>
