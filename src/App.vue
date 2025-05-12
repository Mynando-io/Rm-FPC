<script setup>
import './style.css'
import './main.js'
import README from './components/README.vue'


const count = 'Saya komponen baru'



</script>


<template>
<!-- ========================= Template start ================== -->

  
<div class="Homepage">

  
    <RouterLink to="/" class="Home-title">
<img src="./assets/FPC-ori.svg" alt="Logo title" height="auto" width="7%">
<h3>FPC(Free Programming Course)</h3>
    </RouterLink>
  <!--============== Item01 ====================-->

  <div class="Home-container">
<nav class="left-content-item">
  <h3>Contents</h3>
  <hr/>
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/HTML-Mapel">HTML Course</RouterLink>
  <RouterLink to="/html-kuis-02">Testing</RouterLink>
  <RouterLink to="/latihanHTML01">Go to Latihan HTML 1</RouterLink>
  <RouterLink to="/latihanHTML02">Go to Latihan HTML 2</RouterLink>
</nav>


<main class="right-content">
  <RouterView />
</main>
</div><!--============== Item02 ====================-->


<div class="contact-us">
  <hr/>
<p>This page was last edited on 29 December 2023, at 18:14.</p>
<BButton>Button</BButton>
<BButton variant="danger">Button</BButton>
<BButton variant="success">Button</BButton>
<BButton variant="outline-primary">Button</BButton>
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
}

.contact-us{
  background-color: white;
  padding: 1%;
}

.left-content-item{
flex-wrap: wrap;
flex-direction: column;
padding: 0 7% 0 1%;
max-height:300px;
}

.right-content{
  flex-grow: 4;
}

nav{
    display: flex;
    padding: 20px 0;
    justify-content: space-between;
}

</style>