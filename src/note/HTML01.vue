<script setup>

const count = 'Saya komponen HTML'

</script>



<template>

<h1>{{ count }}</h1>

<p>Selamat datang di HTML Page</p>


<nav>
    <RouterLink to="/html">Go to Home</RouterLink>
    <RouterLink to="/html-kuis-01">Go to Kuis 1</RouterLink>
    <RouterLink to="/latihanHTML03">Go to Latihan 3</RouterLink>
  </nav>


</template>






<style scoped>

.read-the-docs {

  color: #888;

}

</style>