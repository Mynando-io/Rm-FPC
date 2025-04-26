<script setup>
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

</script>



<template>
<!-- ======================= Awal  dari Template ======================= -->

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

<nav>
    <RouterLink to="/html">Go too Home</RouterLink>
  </nav>

<!-- ======================= Akhir dari Template ======================= -->
</template>






<style scoped>

.read-the-docs {

  color: #888;

}

</style>