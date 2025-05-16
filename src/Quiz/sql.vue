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
<h3>SELECT * FROM table_name;</h3>
<p><strong>Benar!</strong> Ini adalah syntax SQL yang digunakan untuk mengambil semua data dari sebuah tabel.
     </p>
</div>
`) // JawA(Jawaban A)

const JawB = ref(`
  <div class="alert">
    <h3>GET ALL FROM table_name;</h3>
    <p><strong>Salah!</strong> Ini bukan syntax SQL yang valid. Yang benar adalah menggunakan <code>SELECT</code>.</p>
  </div>
`);// JawaB(Jawaban B)
</script>



<template>
<!-- ======================= Awal  dari Template ======================= -->

<h1>Exercise</h1>

<p>Soal: </p>
<p>Perintah SQL manakah yang digunakan untuk mengambil semua data dari sebuah tabel?</p>



<lu>
  <li><button @click="SkuisTr">SELECT * FROM table_name;</button></li>
  <li><button @click="SkuisFl">GET ALL FROM table_name;</button></li>
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