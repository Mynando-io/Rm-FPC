<script setup>
import { ref } from 'vue'

const kuisTr = ref(false) // adalah state note True | Tr(True) | Penempatan: Jawaban Atas(True)
const kuisFl = ref(false) // adalah state note false | Fl(False) | Penempatan: Jawaban bawah(False)
const kuisCC = ref(false) // adalah pilihan ganda lanjutan ( Pilihan C )
const kuisDD = ref(false) // adalah pilihan ganda lanjutan ( Pilihan D )

// Menimpa nilai awal menjadi nilai baru
function SkuisTr(){ // Ini untuk buka catatan kuis True | Skuis(Soal kuis)
  kuisTr.value = !kuisTr.value
  kuisFl.value = false
  kuisCC.value = false
  kuisDD.value = false
}

// Menimpa nilai awal menjadi nilai baru
function SkuisFl(){ // Ini untuk buka catatan kuis False
  kuisFl.value = !kuisFl.value
  kuisTr.value = false
  kuisCC.value = false
  kuisDD.value = false
}

// Pilihan ganda C
function SkuisCC(){ // Ini untuk buka catatan kuis False
  kuisCC.value = !kuisCC.value
  kuisTr.value = false
  kuisFl.value = false
  kuisDD.value = false
}

// Pilihan ganda D
function SkuisDD(){ // Ini untuk buka catatan kuis False
  kuisDD.value = !kuisDD.value
  kuisTr.value = false
  kuisFl.value = false
  kuisCC.value = false
}


// Membuat component kecil untuk HTML


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
<!-- ======================= Awal  dari Template ======================= -->

<h1>Exercise</h1>

<p>Soal: </p>
<p>Protokol jaringan apa yang digunakan oleh "FPC(Free Programming Course)"?</p>



<lu>
  <li><button @click="SkuisTr">SSH</button></li>
  <li><button @click="SkuisFl">HTTPS</button></li>
  <li><button @click="SkuisCC">HTTP</button></li>
  <li><button @click="SkuisDD">LAN</button></li>
</lu>


<div v-if="kuisTr">
  <div v-html="JawA"></div>
</div>

<div v-if="kuisFl">
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