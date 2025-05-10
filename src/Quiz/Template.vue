<script setup>
// ======================================== Script area start =======================================================
import { ref, computed } from 'vue'

const kuisTr = ref(false) // adalah state note True
const kuisFl = ref(false) // adalah state note false

// Menimpa nilai awal menjadi nilai baru
function SkuisTr(){ // Ini untuk buka catatan kuis True
  kuisTr.value = !kuisTr.value
}

// Menimpa nilai awal menjadi nilai baru
function SkuisFl(){ // Ini untuk buka catatan kuis False
  kuisFl.value = !kuisFl.value
}


// ======================================== Script area End =======================================================
</script>





<template>
<!-- 0000000000000000000000000000000000000000000000000000000 Template Area start 0000000000000000000000000000000000000000-->


<h1>Exercise</h1>

<p>Soal: </p>
<p>True or False. Empty elements must have a close tag.</p>



<lu>
  <li><button @click="SkuisTr">True</button></li>
  <li><button @click="SkuisFl">False</button></li>
</lu>

{{ kuisTr ? 'Ini adalah catatan True' : '' }}
<br>
{{ kuisFl ? 'Ini adalah catatan False' : '' }}

<!-- biarkan code dibawah ini -->
<nav>
    <RouterLink to="/">Go to Home</RouterLink>
</nav>
<!-- 000000000000000000000000000000000000000000000000000000 Template area end  000000000000000000000000000000000000000000 -->
</template>






<style scoped>

/* ============================================== Style area start ======================================= */


/* ============================================== Style area end ======================================= */
</style>