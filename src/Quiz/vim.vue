<script setup>
/*
================================ Catatan untuk Anggota Bagian 1 ===============================
pada file ini ada yang boleh di edit. dan ada yang tidak. 

Aturan disini sederhana. scroll code ini kebawah secara perlahan, dan baca komentar yang saya berikan.

komentar saya pasti berbentuk seperti ini:
     <!--- ====== Diantara ini adalah komentar ==== --->

Ikuti panduan yang ada dikomentar dan selesai.
================================ Catatan untuk Anggota Bagian 1 ===============================
*/
import { ref } from 'vue'

const kuisAA = ref(false) // Pilihan Ganda A | Tr(True) | Penempatan: Jawaban Atas(True)
const kuisBB = ref(false) // Pilihan ganda B | Penempatan: Jawaban bawah(False)
const kuisCC = ref(false) // adalah pilihan ganda lanjutan ( Pilihan C )
const kuisDD = ref(false) // adalah pilihan ganda lanjutan ( Pilihan D )

const selectedAnswer = ref(null) // Track selected answer
const showResult = ref(false) // Show result state

// Menimpa nilai awal menjadi nilai baru
function SkuisAA(){ // Ini untuk buka catatan kuis A | Skuis(Soal kuis)
  kuisAA.value = !kuisAA.value
  kuisBB.value = false
  kuisCC.value = false
  kuisDD.value = false
  showResult.value = true
}

// Menimpa nilai awal menjadi nilai baru
function SkuisBB(){ // Ini untuk buka catatan kuis B
  kuisBB.value = !kuisBB.value
  kuisAA.value = false
  kuisCC.value = false
  kuisDD.value = false
  showResult.value = true
}

// Pilihan ganda C
function SkuisCC(){ // Ini untuk buka catatan kuis False
  kuisCC.value = !kuisCC.value
  kuisAA.value = false
  kuisBB.value = false
  kuisDD.value = false
  showResult.value = true
}

// Pilihan ganda D
function SkuisDD(){ // Ini untuk buka catatan kuis False
  kuisDD.value = !kuisDD.value
  kuisAA.value = false
  kuisBB.value = false
  kuisCC.value = false
  showResult.value = true
}

// Button Reset Quiz
function resetQuiz() {

  kuisAA.value = false
  kuisBB.value = false
  kuisCC.value = false
  kuisDD.value = false
  selectedAnswer.value = null
  showResult.value = false
}

// ======================= Silahkan ubah isi content didalam elemen JawA =====================
let JawA = ref(`
<div class="answer-content 

correct-answer  <!--Ubah bagian kiri ini, yaitu "wrong-answer" ini menjadi "correct-answer" jika pilihan ganda A adalah benar -->

  <div class="answer-header">

    <!-- ================== Edit Diantara ini ============= -->
    <span class="icon">✅</span>
    <h3>Jawaban Benar</h3>
  </div>
  <p>:wq digunakan untuk menyimpan perubahan dan keluar dari Vim.</p>
  <div class="extra-info">
    <p>Perintah :wq menggabungkan dua perintah: :w (write/save) dan :q (quit). Ini adalah cara efisien untuk menyimpan perubahan dan keluar dari editor.</p>
    <!-- ================== Edit Diantara ini ============= -->
  
    </div>
</div>
`) // JawA(Jawaban A)

// ==================== Silahkan ubah isi content didalam elemen JawB ======================
const JawB = ref(`
<div class="answer-content 

wrong-answer  <!--Ubah bagian kiri ini, yaitu "correct-answer" ini menjadi "wrong-answer" jika pilihan ganda B adalah salah -->

  <div class="answer-header">

    <span class="icon">❌</span>
    <h3>Jawaban Salah</h3>
  </div>
  <p>:q! digunakan untuk keluar tanpa menyimpan perubahan./p>
  <div class="correct-info">
    <p>:wq digunakan untuk menyimpan perubahan dan keluar dari Vim.</p>
  
    </div>
</div>
`);// JawaB(Jawaban B)

// ============================= Silahkan ubah isi content didalam elemen JawC ====================
let JawC = ref(`
<div class="answer-content 

wrong-answer  <!--Ubah bagian kiri ini, yaitu "wrong-answer" ini menjadi "correct-answer" jika pilihan ganda C adalah benar -->

  <div class="answer-header">

    <!-- ================== Edit Diantara ini ============= -->
    <span class="icon">❌</span>
    <h3>Jawaban Salah</h3>
  </div>
  <p>:w digunakan untuk menyimpan file tanpa keluar./p>
  <div class="correct-info">
    <p>:wq digunakan untuk menyimpan perubahan dan keluar dari Vim.</p>
    <!-- ================== Edit Diantara ini ============= -->

  </div>
</div>
`) // JawC(Jawaban C)

// ======================= Silahkan ubah isi content didalam elemen JawD ==============
const JawD = ref(`
<div class="answer-content 

wrong-answer  <!--Ubah bagian kiri ini, yaitu "wrong-answer" ini menjadi "correct-answer" jika pilihan ganda D adalah benar -->

  <div class="answer-header">

     <!-- ================== Edit Diantara ini ============= -->
    <span class="icon">❌</span>
    <h3>Jawaban Salah</h3>
  </div>
  <p>Tidak ada perintah khusus untuk keluar tanpa menyimpan file baru; biasanya menggunakan :q!.</p>
  <div class="correct-info">
    <p>:wq digunakan untuk menyimpan perubahan dan keluar dari Vim.</p>
    <!-- ================== Edit Diantara ini ============= -->

  </div>
</div>
`);// JawaD(Jawaban D)



</script>

<template>
<!-- ======================= Awal dari Template ======================= -->
<div class="quiz-container">
  <!-- Quiz Header -->
  <div class="quiz-header">
    <div class="quiz-badge">
      <span class="badge-icon">🧠</span>
      <span>Programming Quiz</span>
    </div>
    <!-- ============ Silahkan Ubah Content didalam tag h1 ini! ================== -->
    <h1 class="quiz-title">
      
      Vim Challenge <!-- <= Ini Untuk Nama Mapel, sesuaikan dengan kebutuhan! -->
    
    </h1> 
    <div class="progress-bar">
      <div class="progress-fill" :style="{ width: showResult ? '100%' : '0%' }"></div>
    </div>
  </div>

  <!-- Question Section -->
  <div class="question-card">
    <div class="question-number">Question</div>
    <h2 class="question-text"> 
<!-- =================== Diantara ini, silahkan ubah. Digunakan untuk penulisan soal ===================== -->
      
Apa fungsi dari perintah :wq di Vim ?   
<!-- =================== Diantara ini, silahkan ubah. Digunakan untuk penulisan soal ===================== -->    
    </h2>
  </div>

  <!-- Answer Options -->
  
  <div class="answers-section">
    <div class="answers-grid">
      <button 
        class="answer-btn" @click="SkuisAA">
        <span class="answer-letter">A</span>
        <span class="answer-text">
          <!-- ==================== Tulis Jawaban pilihan ganda diantara ini! ================= -->

          Menyimpan file dan keluar dari Vim

          <!-- =================  Tulis Jawaban pilihan ganda diantara ini!  ==================-->
        </span>
        
      </button>

      <!-- ============ Jawaban A ================ -->

      <button 
        class="answer-btn" 
        @click="SkuisBB"
      >
        <span class="answer-letter">B</span>
        <span class="answer-text">
          <!-- ================= Tulis Jawaban pilihan ganda diantara ini! =================== -->

          Keluar tanpa menyimpan perubahan

          <!-- ========================== Tulis Jawaban pilihan ganda diantara ini! ================ -->
        </span>
        
      </button>

      <!-- =============== Jawaban B =============-->

      <button 
        class="answer-btn" 
        @click="SkuisCC"
      >
        <span class="answer-letter">C</span>
        <span class="answer-text">
          <!-- =============== Tulis Jawaban pilihan ganda diantara ini! ============== -->

          Menyimpan file tanpa keluar
          <!-- =============== Tulis Jawaban pilihan ganda diantara ini! ================ -->
        </span>
        
      </button>

      <!-- =============== Jawaban C =============-->

      <button 
        class="answer-btn" 
        @click="SkuisDD"
      >
        <span class="answer-letter">D</span>
        <span class="answer-text">
          <!-- ================ Tulis Jawaban pilihan ganda diantara ini! ============= -->

          Keluar dari Vim tanpa menyimpan file baru

          <!-- =====================  Tulis Jawaban pilihan ganda diantara ini! ================== -->
        </span>
        
      </button>

      <!-- =============== Jawaban D =============-->
    </div>
  </div>

  <!-- =============== Baris kebawah ini, tidakk perlu dibaca dan diubah. ================== -->
  <transition name="slide-down">
    <div v-if="kuisAA || kuisBB || kuisCC || kuisDD" class="explanation-section">
      <div v-if="kuisAA" v-html="JawA" class="explanation-card"></div>
      <div v-if="kuisBB" v-html="JawB" class="explanation-card"></div>
      <div v-if="kuisCC" v-html="JawC" class="explanation-card"></div>
      <div v-if="kuisDD" v-html="JawD" class="explanation-card"></div>
      
      <div class="quiz-actions">
        <button @click="resetQuiz" class="reset-btn">
          <span class="btn-icon">🔄</span>
          Try Again
        </button>
      </div>
    </div>
  </transition>

  <!-- Navigation -->
  <nav class="quiz-navigation">
    <RouterLink to="/" class="nav-link">
      <span class="nav-icon">🏠</span>
      Go to Home
    </RouterLink>
  </nav>
</div>
<!-- ======================= Akhir dari Template ======================= -->
</template>

<style scoped>
.quiz-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
}

/* Quiz Header */
.quiz-header {
  text-align: center;
  margin-bottom: 3rem;
}

.quiz-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  padding: 0.5rem 1rem;
  border-radius: 25px;
  color: white;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 1rem;
}

.badge-icon {
  font-size: 1.2rem;
}

.quiz-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  margin: 1rem 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.progress-bar {
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
  overflow: hidden;
  margin-top: 1rem;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #4facfe, #00f2fe);
  border-radius: 2px;
  transition: width 0.8s ease;
}

/* Question Card */
.question-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.question-number {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 1rem;
}

.question-text {
  font-size: 1.4rem;
  font-weight: 600;
  color: #2d3748;
  line-height: 1.6;
  margin: 0;
}

.highlight {
  background: linear-gradient(135deg, #667eea, #764ba2);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
}

/* Answer Section */
.answers-section {
  margin-bottom: 2rem;
}

.answers-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
}

.answer-btn {
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1.1rem;
  position: relative;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.answer-btn:hover:not(.disabled) {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  border-color: #667eea;
}

.answer-btn.selected {
  border-color: #667eea;
  background: #f7fafc;
}

.answer-btn.correct {
  border-color: #48bb78;
  background: #f0fff4;
}

.answer-btn.wrong {
  border-color: #f56565;
  background: #fffaf0;
}

.answer-btn.disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.answer-letter {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.2rem;
}

.answer-text {
  flex: 1;
  font-weight: 600;
  color: #2d3748;
}

.result-icon {
  font-size: 1.5rem;
}

/* Explanation Section */
.explanation-section {
  margin-bottom: 2rem;
}

.explanation-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.quiz-actions {
  margin-top: 2rem;
  text-align: center;
}

.reset-btn {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  border-radius: 25px;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(102, 126, 234, 0.3);
}

.reset-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
}

.btn-icon {
  font-size: 1.2rem;
}

/* Navigation */
.quiz-navigation {
  text-align: center;
  margin-top: 3rem;
}

.nav-link {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  color: white;
  text-decoration: none;
  padding: 0.75rem 2rem;
  border-radius: 25px;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

.nav-icon {
  font-size: 1.2rem;
}

/* Answer Content Styling */
:deep(.answer-content) {
  border-radius: 12px;
  overflow: hidden;
}

:deep(.answer-header) {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

:deep(.answer-header h3) {
  margin: 0;
  font-size: 1.3rem;
  font-weight: 700;
}

:deep(.correct-answer) {
  border-left: 4px solid #48bb78;
}

:deep(.correct-answer .answer-header h3) {
  color: #38a169;
}

:deep(.wrong-answer) {
  border-left: 4px solid #f56565;
}

:deep(.wrong-answer .answer-header h3) {
  color: #e53e3e;
}

:deep(.icon) {
  font-size: 1.5rem;
}

:deep(.correct-info) {
  background: #f0fff4;
  border: 1px solid #9ae6b4;
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1rem;
}

:deep(.extra-info) {
  background: #e6fffa;
  border: 1px solid #81e6d9;
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1rem;
}

/* Animations */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.5s ease;
}

.slide-down-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}

.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Responsive Design */
@media (max-width: 768px) {
  .quiz-container {
    padding: 1rem;
  }
  
  .quiz-title {
    font-size: 2rem;
  }
  
  .question-text {
    font-size: 1.2rem;
  }
  
  .answer-btn {
    padding: 1rem;
  }
  
  .explanation-card {
    padding: 1.5rem;
  }
}

.read-the-docs {
  color: #888;
}
</style>