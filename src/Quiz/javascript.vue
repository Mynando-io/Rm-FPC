<script setup>
import { ref } from 'vue'

const kuisTr = ref(false) // adalah state note True | Tr(True) | Penempatan: Jawaban Atas(True)
const kuisFl = ref(false) // adalah state note false | Fl(False) | Penempatan: Jawaban bawah(False)

// Menimpa nilai awal menjadi nilai baru
function SkuisTr(){ // Ini untuk buka catatan kuis True | Skuis(Soal kuis)
  kuisTr.value = !kuisTr.value
  kuisFl.value = false
}

// Menimpa nilai awal menjadi nilai baru
function SkuisFl(){ // Ini untuk buka catatan kuis False
  kuisFl.value = !kuisFl.value
  kuisTr.value = false
}


// Membuat component kecil untuk HTML


let JawA = ref(`
<div class="">
<h3>UpperCase()</h3>
<p>Ini bukan method bawaan JavaScript!</p>
</div>
`) // JawA(Jawaban A)

const JawB = ref(`
  <div class="alert">
    <h3>toUpperCase()</h3>
    <p>toUpperCase() adalah method bawaan JavaScript yang digunakan untuk mengubah semua huruf dalam sebuah string menjadi huruf kapital (uppercase)</p>
  </div>
`);// JawaB(Jawaban B)
</script>



<template>
<!-- ======================= Awal  dari Template ======================= -->

<h1>Exercise</h1>

<p>Soal: </p>
<p>Fungsi apa yang digunakan untuk mengubah semua huruf dalam string menjadi huruf besar?</p>



<lu>
  <li><button @click="SkuisTr">upperCase()</button></li>
  <li><button @click="SkuisFl">toUpperCase()</button></li>
</lu>


<div v-if="kuisTr">
  <div v-html="JawA"></div>
</div>

<div v-if="kuisFl">
  <div v-html="JawB"></div>
</div>

<!-- ================================= Biarkan code dibawah ini =============================== -->
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