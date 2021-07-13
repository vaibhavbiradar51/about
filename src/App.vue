<template>
  <v-app id="inspire">
        <div id="about">
            <router-link to="/about">About</router-link>
        </div>
        <router-view/>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ 
      drawer: null, 
      items: [
          { title: 'To-Do List', icon: 'mdi-view-dashboard',to:'/' },
          { title: 'Done', icon: 'mdi-check-all',to:'/Done' },
          { title: 'About', icon: 'mdi-help-box',to:'/about' },
          
        ],  
      }),
    
  }
</script>
<style scoped>
  #a
  {
    background-color:rgb(244, 250, 252)
  }
</style>