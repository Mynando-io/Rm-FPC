<script setup>
import { ref, computed, h  } from 'vue'

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


// Mengatur Jawaban yang ditampilkan
const isGenap = computed(() => kuisTr.value);

// Membuat component kecil untuk HTML


let JawA = ref(`
<div class="">
<h3>HTTPS</h3>
<p>HTTPS memiliki cara kerja yang hampir sama dengan HTTP, perbedaan adalah disana terdapat enkripsi TLS ( Transport Layer Security )tambah untuk meningkatkan keamanan jaringan. Penambahan kemanan salah satunnya berada di sisi server
  </p>
</div>
`) // JawA(Jawaban A)

const JawB = ref(`
  <div class="alert">
    <h3>Contoh HTML</h3>
    <p>Ini HTML dari script setup!</p>
  </div>
`);
</script>



<template>
<!-- ======================= Awal  dari Template ======================= -->

<h1>Exercise</h1>

<p>Soal: </p>
<p>Protokol jaringan apa yang digunakan oleh "FPC(Free Programming Course)"?</p>



<lu>
  <li><button @click="SkuisTr">SSH</button></li>
  <li><button @click="SkuisFl">HTTPS</button></li>
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