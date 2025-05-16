<script setup>

const count = 'Saya komponen baru'
</script>

<template>
<!-- ========================= Template start ================== -->
<div class="wiki-main">
  <!-- Header Section -->
  <header class="wiki-header">
    <RouterLink to="/" class="wiki-logo">
      <img src="./assets/FPC-ori.svg" alt="Logo title" height="auto" width="42">
      <h1>FPC <span class="subtitle">(Free Programming Course)</span></h1>
    </RouterLink>
    
    <div class="wiki-search">
      <input type="text" placeholder="Cari artikel...">
      <button class="search-button">Cari</button>
    </div>
  </header>

  <!-- Main Content Container -->
  <div class="wiki-container">
    <!-- Left Sidebar -->
    <nav class="wiki-sidebar">
      <div class="sidebar-section">
        <h3>Contents</h3>
        <div class="sidebar-divider"></div>
        <div class="sidebar-links">
          <RouterLink to="/" class="sidebar-link">
            <span class="icon">🏠</span>Home
          </RouterLink>
          <RouterLink to="/HTML-Mapel" class="sidebar-link">
            <span class="icon">📄</span>HTML Course
          </RouterLink>
          <RouterLink to="/vim" class="sidebar-link">
            <span class="icon">⌨️</span>Vim Course
          </RouterLink>
          <RouterLink to="/git" class="sidebar-link">
            <span class="icon">🔄</span>Git Course
          </RouterLink>
          <RouterLink to="/html-kuis-02" class="sidebar-link">
            <span class="icon">✓</span>Testing
          </RouterLink>
          <RouterLink to="/latihanHTML02" class="sidebar-link">
            <span class="icon">📝</span>Latihan HTML 2
          </RouterLink>
        </div>
      </div>
      
      <div class="sidebar-section">
        <h3>Tools</h3>
        <div class="sidebar-divider"></div>
        <div class="sidebar-links">
          <a href="#" class="sidebar-link">Page History</a>
          <a href="#" class="sidebar-link">What links here</a>
          <a href="#" class="sidebar-link">Recent changes</a>
          <a href="#" class="sidebar-link">Special pages</a>
        </div>
      </div>
    </nav>

    <!-- Main Content Area -->
    <main class="wiki-content">
      <div class="content-header">
        <div class="content-tabs">
          <div class="tab active">Article</div>
          <div class="tab">Discussion</div>
          <div class="tab">Edit</div>
          <div class="tab">History</div>
        </div>
      </div>
      
      <div class="article-container">
        <RouterView />
      </div>
    </main>
  </div>

  <!-- Footer Section -->
  <footer class="wiki-footer">
    <div class="footer-info">
      <p>This page was last edited on 29 December 2023, at 18:14.</p>
    </div>
    
    <div class="footer-buttons">
      <button class="wiki-button primary">Edit</button>
      <button class="wiki-button danger">Report Issue</button>
      <button class="wiki-button success">Contribute</button>
      <button class="wiki-button outline">More Actions</button>
    </div>
    
    <div class="footer-links">
      <a href="#">Privacy Policy</a>
      <span class="separator">•</span>
      <a href="#">About FPC</a>
      <span class="separator">•</span>
      <a href="#">Disclaimers</a>
      <span class="separator">•</span>
      <a href="#">Contact Us</a>
    </div>
  </footer>
</div>
<!-- ========================= Template End ================== -->
</template>

<style scoped>
/* MediaWiki-inspired Styling */
:root {
  --primary-color: #3366cc;
  --primary-hover: #2a4b8d;
  --danger-color: #d33;
  --success-color: #36b37e;
  --light-gray: #f8f9fa;
  --border-color: #a2a9b1;
  --text-color: #222;
  --text-light: #54595d;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.wiki-main {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Liberation Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: var(--text-color);
  background-color: var(--light-gray);
  line-height: 1.6;
}

/* Header Styles */
.wiki-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1.5rem;
  background-color: white;
  border-bottom: 1px solid var(--border-color);
}

.wiki-logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--text-color);
}

.wiki-logo h1 {
  font-size: 1.3rem;
  font-weight: normal;
  margin-left: 10px;
}

.subtitle {
  font-size: 0.9rem;
  font-weight: normal;
  color: var(--text-light);
}

.wiki-search {
  display: flex;
  max-width: 350px;
}

.wiki-search input {
  padding: 0.5rem;
  border: 1px solid var(--border-color);
  border-radius: 2px 0 0 2px;
  width: 100%;
  font-size: 0.9rem;
}

.search-button {
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 0 2px 2px 0;
  font-size: 0.9rem;
}

.search-button:hover {
  background-color: var(--primary-hover);
}

/* Main Container */
.wiki-container {
  display: flex;
  flex: 1;
  background-color: white;
  margin: 0 auto;
  width: 100%;
  max-width: 1400px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

/* Sidebar Styles */
.wiki-sidebar {
  width: 230px;
  padding: 1.5rem 0;
  background-color: var(--light-gray);
  border-right: 1px solid var(--border-color);
}

.sidebar-section {
  margin-bottom: 1.5rem;
  padding: 0 1rem;
}

.sidebar-section h3 {
  font-size: 0.9rem;
  color: var(--text-light);
  font-weight: normal;
  margin-bottom: 5px;
}

.sidebar-divider {
  border-bottom: 1px solid var(--border-color);
  margin-bottom: 0.5rem;
}

.sidebar-links {
  display: flex;
  flex-direction: column;
}

.sidebar-link {
  display: flex;
  align-items: center;
  padding: 0.3rem 0;
  color: var(--primary-color);
  text-decoration: none;
  font-size: 0.85rem;
}

.sidebar-link:hover {
  text-decoration: underline;
}

.icon {
  margin-right: 6px;
  font-size: 1rem;
}

/* Content Area */
.wiki-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.content-header {
  border-bottom: 1px solid var(--border-color);
}

.content-tabs {
  display: flex;
  padding-left: 1rem;
}

.tab {
  padding: 0.6rem 1rem;
  font-size: 0.85rem;
  cursor: pointer;
  color: var(--primary-color);
}

.tab.active {
  border-bottom: 2px solid var(--primary-color);
  font-weight: bold;
}

.article-container {
  padding: 1.5rem;
  min-height: 600px;
}

/* Footer Styles */
.wiki-footer {
  padding: 1rem 1.5rem;
  background-color: var(--light-gray);
  border-top: 1px solid var(--border-color);
  font-size: 0.85rem;
  color: var(--text-light);
}

.footer-info {
  margin-bottom: 1rem;
}

.footer-buttons {
  display: flex;
  gap: 10px;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.wiki-button {
  padding: 0.4rem 1rem;
  border-radius: 2px;
  font-size: 0.85rem;
  cursor: pointer;
  border: 1px solid transparent;
}

.wiki-button.primary {
  background-color: var(--primary-color);
  color: white;
}

.wiki-button.primary:hover {
  background-color: var(--primary-hover);
}

.wiki-button.danger {
  background-color: var(--danger-color);
  color: white;
}

.wiki-button.success {
  background-color: var(--success-color);
  color: white;
}

.wiki-button.outline {
  background-color: white;
  border: 1px solid var(--border-color);
  color: var(--text-color);
}

.footer-links {
  margin-top: 1rem;
  text-align: center;
}

.footer-links a {
  color: var(--primary-color);
  text-decoration: none;
}

.footer-links a:hover {
  text-decoration: underline;
}

.separator {
  margin: 0 0.5rem;
  color: var(--border-color);
}

/* Responsive Design */
@media (max-width: 992px) {
  .wiki-container {
    flex-direction: column;
  }

  .wiki-sidebar {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid var(--border-color);
    padding: 1rem;
  }

  .sidebar-section {
    margin-bottom: 1rem;
  }
  
  .sidebar-links {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 15px;
  }
}

@media (max-width: 768px) {
  .wiki-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .wiki-search {
    width: 100%;
    max-width: none;
    margin-top: 1rem;
  }
  
  .content-tabs {
    overflow-x: auto;
    width: 100%;
  }
  
  .footer-buttons {
    justify-content: center;
  }
}
</style>