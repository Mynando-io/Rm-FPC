<script setup>
import { ref } from 'vue'

const kuisTr = ref(false) // adalah state note True | Tr(True) | Penempatan: Jawaban Atas(True)
const kuisFl = ref(false) // adalah state note false | Fl(False) | Penempatan: Jawaban bawah(False)
const selectedAnswer = ref(null) // Track selected answer
const showResult = ref(false) // Show result state

// Menimpa nilai awal menjadi nilai baru
function SkuisTr(){ // Ini untuk buka catatan kuis True | Skuis(Soal kuis)
  kuisTr.value = !kuisTr.value
  kuisFl.value = false
  selectedAnswer.value = 'SSH'
  showResult.value = true
}

// Menimpa nilai awal menjadi nilai baru
function SkuisFl(){ // Ini untuk buka catatan kuis False
  kuisFl.value = !kuisFl.value
  kuisTr.value = false
  selectedAnswer.value = 'HTTPS'
  showResult.value = true
}

function resetQuiz() {
  kuisTr.value = false
  kuisFl.value = false
  selectedAnswer.value = null
  showResult.value = false
}

// Membuat component kecil untuk HTML
let JawA = ref(`
<div class="answer-content wrong-answer">
  <div class="answer-header">
    <span class="icon">❌</span>
    <h3>SSH - Jawaban Salah</h3>
  </div>
  <p><strong>SSH (Secure Shell)</strong> adalah protokol jaringan yang digunakan untuk akses remote yang aman ke komputer lain, bukan untuk web browsing. SSH biasanya digunakan untuk administrasi server dan transfer file yang aman.</p>
  <div class="correct-info">
    <p><strong>Jawaban yang benar adalah HTTPS</strong> - protokol yang digunakan untuk website seperti FPC.</p>
  </div>
</div>
`) // JawA(Jawaban A)

const JawB = ref(`
<div class="answer-content correct-answer">
  <div class="answer-header">
    <span class="icon">✅</span>
    <h3>HTTPS - Jawaban Benar!</h3>
  </div>
  <p><strong>HTTPS (HyperText Transfer Protocol Secure)</strong> memiliki cara kerja yang hampir sama dengan HTTP, perbedaan adalah di sana terdapat enkripsi TLS (Transport Layer Security) tambahan untuk meningkatkan keamanan jaringan. Penambahan keamanan salah satunya berada di sisi server.</p>
  <div class="extra-info">
    <p>HTTPS memastikan data yang dikirim antara browser dan server terenkripsi dan aman dari intersepsi.</p>
  </div>
</div>
`);// JawaB(Jawaban B)
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
    <h1 class="quiz-title">Network Protocol Challenge</h1>
    <div class="progress-bar">
      <div class="progress-fill" :style="{ width: showResult ? '100%' : '0%' }"></div>
    </div>
  </div>

  <!-- Question Section -->
  <div class="question-card">
    <div class="question-number">Question 1</div>
    <h2 class="question-text">
      Protokol jaringan apa yang digunakan oleh 
      <span class="highlight">"FPC (Free Programming Course)"</span>?
    </h2>
  </div>

  <!-- Answer Options -->
  <div class="answers-section">
    <div class="answers-grid">
      <button 
        class="answer-btn" 
        :class="{ 
          'selected': selectedAnswer === 'SSH',
          'wrong': selectedAnswer === 'SSH' && showResult,
          'disabled': showResult && selectedAnswer !== 'SSH'
        }"
        @click="SkuisTr"
        :disabled="showResult && selectedAnswer !== 'SSH'"
      >
        <span class="answer-letter">A</span>
        <span class="answer-text">SSH</span>
        <span v-if="selectedAnswer === 'SSH' && showResult" class="result-icon wrong">❌</span>
      </button>

      <button 
        class="answer-btn" 
        :class="{ 
          'selected': selectedAnswer === 'HTTPS',
          'correct': selectedAnswer === 'HTTPS' && showResult,
          'disabled': showResult && selectedAnswer !== 'HTTPS'
        }"
        @click="SkuisFl"
        :disabled="showResult && selectedAnswer !== 'HTTPS'"
      >
        <span class="answer-letter">B</span>
        <span class="answer-text">HTTPS</span>
        <span v-if="selectedAnswer === 'HTTPS' && showResult" class="result-icon correct">✅</span>
      </button>
    </div>
  </div>

  <!-- Answer Explanation -->
  <transition name="slide-down">
    <div v-if="kuisTr || kuisFl" class="explanation-section">
      <div v-if="kuisTr" v-html="JawA" class="explanation-card"></div>
      <div v-if="kuisFl" v-html="JawB" class="explanation-card"></div>
      
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
    <RouterLink to="/html" class="nav-link">
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