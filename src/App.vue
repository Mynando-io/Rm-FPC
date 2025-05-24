<script setup>
import './style.css'
import './main.js'
import README from './components/README.vue'


const count = 'Saya komponen baru'



</script>


<template>
<!-- ========================= Template start ================== -->

 <!-- ========================= Mobile Menu Start ================== -->
 <div class="mobile-menu">


  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <div class="mobile-my-navbar">
      <img src="./assets/FPC-ori.svg" alt="Logo title" height="auto" width="140px">
    </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink to="/" class="LFT-Item"> <span class="icon">🏠</span> FPC Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/HTML-Mapel" class="LFT-Item"> <span class="icon">📄</span> HTML Course</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/vim" class="LFT-Item"><span class="icon">🔄</span> Vim Course</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/css" class="LFT-Item"> <span class="icon">🔄</span> CSS Course</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/javascript" class="LFT-Item"> <span class="icon">🔄</span> Javascript Course</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/java" class="LFT-Item"> <span class="icon">🔄</span> Java Course</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/python" class="LFT-Item"> <span class="icon">🔄</span> Python Course</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/r" class="LFT-Item"> <span class="icon">🔄</span> R Course</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/react" class="LFT-Item"> <span class="icon">🔄</span> React Course</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/reactexpo" class="LFT-Item"> <span class="icon">🔄</span> React Expo Course</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/vue" class="LFT-Item"> <span class="icon">🔄</span> Vue Course</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/ruby" class="LFT-Item"> <span class="icon">🔄</span> Ruby Course</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/typescript" class="LFT-Item"> <span class="icon">🔄</span> Typescript Course</RouterLink>
        </li>

        <li class="nav-item">
          <RouterLink to="/git" class="LFT-Item"> <span class="icon">🔄</span> Git Course</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/sql" class="LFT-Item"> <span class="icon">🔄</span> SQL Course</RouterLink>
        </li>


      </ul>
    </div>
  </div>
</nav>


</div>
<!-- ============================= Mobile Menu End  ================ -->

  
<div class="Homepage">

 
  
    <RouterLink to="/" class="Home-title">
<img src="./assets/FPC-ori.svg" alt="Logo title" height="auto" width="200px">
<h3>FPC(Free Programming Course)</h3>

    </RouterLink>
  <!--============== Item01 ====================-->

  <div class="Home-container">
<nav class="left-content-item">
  <h3>Contents</h3>
  <hr/>
  <RouterLink to="/" class="LFT-Item"> <span class="icon">🏠</span> Home</RouterLink>
  
  <RouterLink to="/HTML-Mapel" class="LFT-Item"> <span class="icon">📄</span> HTML Course</RouterLink>
  
  <RouterLink to="/vim" class="LFT-Item"><span class="icon">🔄</span> Vim Course</RouterLink>
  
  <RouterLink to="/git" class="LFT-Item"> <span class="icon">🔄</span> Git Course</RouterLink>
  
  <RouterLink to="/css" class="LFT-Item"> <span class="icon">🔄</span> CSS Course</RouterLink>

  <RouterLink to="/javascript" class="LFT-Item"> <span class="icon">🔄</span> Javascript Course</RouterLink>

  <RouterLink to="/java" class="LFT-Item"> <span class="icon">🔄</span> Java Course</RouterLink>

  <RouterLink to="/python" class="LFT-Item"> <span class="icon">🔄</span> Python Course</RouterLink>

  <RouterLink to="/r" class="LFT-Item"> <span class="icon">🔄</span> R Course</RouterLink>

  <RouterLink to="/react" class="LFT-Item"> <span class="icon">🔄</span> React Course</RouterLink>

  <RouterLink to="/reactexpo" class="LFT-Item"> <span class="icon">🔄</span> React Expo Course</RouterLink>

  <RouterLink to="/vue" class="LFT-Item"> <span class="icon">🔄</span> Vue Course</RouterLink>

  <RouterLink to="/ruby" class="LFT-Item"> <span class="icon">🔄</span> Ruby Course</RouterLink>

  <RouterLink to="/sql" class="LFT-Item"> <span class="icon">🔄</span> SQL Course</RouterLink>

  <RouterLink to="/typescript" class="LFT-Item"> <span class="icon">🔄</span> Typescript Course</RouterLink>


  <RouterLink to="/quiz">Quiz Course</RouterLink>
</nav>



<main class="right-content">
  <RouterView />
</main>
</div><!--============== Item02 ====================-->


<div class="footer-links">
      <a href="#">Privacy Policy</a>
      <span class="separator">•</span>
      <a href="#">About FPC</a>
      <span class="separator">•</span>
      <a href="#">Disclaimers</a>
      <span class="separator">•</span>
      <a href="#">Contact Us</a>
</div><!--============== Item03 ====================-->
</div>

<!-- ========================= Template End ================== -->
</template>



<style scoped>
/* Pakai Saja style.css */

.Homepage{
  display: flex;
  justify-content: center;
  max-width: 100%;
  flex-direction: column;
  padding:0 10%;
  background-color: #d3d8ddba;
}

.Home-title{
  background-color: white;
  display: flex;
  align-items:center;
  font-size: 12px;
}

.Home-title h3{
margin-left:-1.5%;
text-decoration: none !important;
color: black;
}

.Home-container{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background-color: white;
  min-height:1000px;
  padding-top:2%;
  padding-right: 2%;
  padding-left: 2%;
}

.footer-links{
  background-color: white;
  padding: 1%;
}

.left-content-item{
flex-wrap: wrap;
flex-direction: column;
padding: 0 7% 0 1%;
max-height: 80em; 
}

/* class="LFT-Item" */
.LFT-Item{
  padding:0 0 1.5em 0px;
}
.right-content{
  flex-grow: 4;
  
}

nav{
    display: flex;
    padding: 20px 0;
    justify-content: space-between;
}

.mobile-menu{
  display: none;
}

@media (max-width: 991.98px) { 
/* ====================== Buat Aturan untuk smartphone =============== */

.Homepage{
  padding: 0 5%;
}

.left-content-item {
  display: none;
}

.mobile-menu{
  display: block;
}

.Home-title{
  display: none;
}

.mobile-my-navbar{
  display: flex;
  align-items:center;
  font-size: 28px;
  height: 20px;
  padding: 0;
}

nav{
  padding: 5px 0px;
}

.container-fluid{
  padding: 0 2% 0 0;
}

.navbar-nav {
  padding: 5px;
}

.navbar-nav .nav-item{
  padding-top: 7px;
}



 }
 /* =================== END Buat Aturan untuk smartphone =============== */

 @media (max-width: 500px) { 
  .right-content{
  font-size: 12px; /* Ukuran font lebih kecil untuk mobile */
  line-height: 1.4; /* Spasi garis optimal untuk mobile */
  overflow-wrap: break-word; /* Memaksa kata panjang untuk dipotong */
  word-wrap: break-word; /* Untuk kompatibilitas browser lama */
}

.Homepage{
  padding: 0 0;
}
.home-container{
  padding: 0 2px;
}

.nav-item{
  padding: 2% 0 0 0;
}

 }/* =================== END Aturan ================ */

</style>