
<script setup>

const count = 'Saya komponen HTML'

</script>





<template>

<h1>{{ count }}</h1>

<p>Selamat datang di HTML Page</p>


<nav>
    <RouterLink to="/">Go to Home</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>


</template>






<style scoped>

.read-the-docs {

  color: #888;

}

</style>