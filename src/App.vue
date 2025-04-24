<script setup>
import './style.css'
import './main.js'
import README from './components/HTML.vue'
const count = 'Saya komponen baru'

</script>





<template>

<p>Hai</p>

<nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/html">Go to HTML</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>

</template>





<style scoped>
/* Pakai Saja style.css */
</style>