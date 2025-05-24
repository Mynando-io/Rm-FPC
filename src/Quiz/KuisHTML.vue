<script setup>
import { ref } from 'vue'

const kuisAA = ref(false) // Pilihan Ganda A | Tr(True) | Penempatan: Jawaban Atas(True)
const kuisBB = ref(false) // Pilihan ganda B | Penempatan: Jawaban bawah(False)
const kuisCC = ref(false) // adalah pilihan ganda lanjutan ( Pilihan C )
const kuisDD = ref(false) // adalah pilihan ganda lanjutan ( Pilihan D )

// Menimpa nilai awal menjadi nilai baru
function SkuisAA(){ // Ini untuk buka catatan kuis A | Skuis(Soal kuis)
  kuisAA.value = !kuisAA.value
  kuisBB.value = false
  kuisCC.value = false
  kuisDD.value = false
}

// Menimpa nilai awal menjadi nilai baru
function SkuisBB(){ // Ini untuk buka catatan kuis B
  kuisBB.value = !kuisBB.value
  kuisAA.value = false
  kuisCC.value = false
  kuisDD.value = false
}

// Pilihan ganda C
function SkuisCC(){ // Ini untuk buka catatan kuis False
  kuisCC.value = !kuisCC.value
  kuisAA.value = false
  kuisBB.value = false
  kuisDD.value = false
}

// Pilihan ganda D
function SkuisDD(){ // Ini untuk buka catatan kuis False
  kuisDD.value = !kuisDD.value
  kuisAA.value = false
  kuisBB.value = false
  kuisCC.value = false
}


// Membuat component kecil untuk HTML


// ================================== Boleh Diedit! ====================================
// JawaA - JawaB tolong ubah element HTML  sesuai dengan kebutuhan.
// elemen: h3 dan p
let JawA = ref(`
 <div class="alert">
    <h3>SSH adalah </h3>
    <p>
      Secure Shell (SSH), adalah salah satu protokol jaringan dengan nomor port 22. SSH digunakan untuk melakukan komunkiasi dengan server dengan aman, SSH akan melakukan enkripsi kepada data yang terkirim, sehingga data tersebut tidak dapat mudah dibaca.
      </p>
  </div>
`) // JawA(Jawaban A)

const JawB = ref(`

<div class="">
<h3>HTTPS</h3>
<p>HTTPS memiliki cara kerja yang hampir sama dengan HTTP, perbedaan adalah disana terdapat enkripsi TLS ( Transport Layer Security )tambah untuk meningkatkan keamanan jaringan. Penambahan kemanan salah satunnya berada di sisi server
  </p>
</div>


`);// JawaB(Jawaban B)

const JawC = ref(`

<div class="">
<h3>HTTP</h3>
<p>HTTPS memiliki cara kerja yang hampir sama dengan HTTP, perbedaan adalah disana terdapat enkripsi TLS ( Transport Layer Security )tambah untuk meningkatkan keamanan jaringan. Penambahan kemanan salah satunnya berada di sisi server
  </p>
</div>


`);// JawaC(Jawaban C)

const JawD = ref(`

<div class="">
<h3>LAN</h3>
<p>HTTPS memiliki cara kerja yang hampir sama dengan HTTP, perbedaan adalah disana terdapat enkripsi TLS ( Transport Layer Security )tambah untuk meningkatkan keamanan jaringan. Penambahan kemanan salah satunnya berada di sisi server
  </p>
</div>


`);// JawaD(Jawaban D)


</script>



<template>
<!-- ======================= Boleh Di edit ======================= -->
<!-- Tolong Ubah h1, p dan p sesuai kebutuhan -->
<h1>Exercise</h1>

<p>Soal: </p>
<p>Protokol jaringan apa yang digunakan oleh "FPC(Free Programming Course)"?</p>


<!-- ======================= Boleh Di edit ======================= -->
<!-- Tolong Ubah AA hingga DD sesuai kebutuhan -->
<lu>
  <li><button @click="SkuisAA">SSH</button></li>
  <li><button @click="SkuisBB">HTTPS</button></li>
  <li><button @click="SkuisCC">HTTP</button></li>
  <li><button @click="SkuisDD">LAN</button></li>
</lu>


<div v-if="kuisAA">
  <div v-html="JawA"></div>
</div>

<div v-if="kuisBB">
  <div v-html="JawB"></div>
</div>

<div v-if="kuisCC">
  <div v-html="JawC"></div>
</div>

<div v-if="kuisDD">
  <div v-html="JawD"></div>
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