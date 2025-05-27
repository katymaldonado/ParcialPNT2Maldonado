<script setup>
import { RouterView } from 'vue-router';
import Navbar from './Navbar.vue';


</script>

<template>
  <div>
    <header>
      <h1>Parcial - Katherine Maldonado</h1>
      <Navbar/>
    </header>
    <main>
      <RouterView></RouterView>
      
    </main>
  </div>
 
</template>

<style scoped>

</style>
