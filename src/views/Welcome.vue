<template>
  <div class="welcome-container">
    <div class="welcome-box">
      <div class="logo-section">
        <img src="@/assets/logo.png" alt="Logo" class="logo" />
      </div>
      
      <div class="welcome-content">
        <h1 class="welcome-title">欢迎使用</h1>
        <p class="welcome-subtitle">一个简洁高效的应用平台</p>
        
        <div class="feature-list">
          <div class="feature-item">
            <span class="feature-icon">🚀</span>
            <span class="feature-text">快速启动</span>
          </div>
          <div class="feature-item">
            <span class="feature-icon">🔒</span>
            <span class="feature-text">安全可靠</span>
          </div>
          <div class="feature-item">
            <span class="feature-icon">💡</span>
            <span class="feature-text">简单易用</span>
          </div>
        </div>
        
        <div class="action-buttons">
          <button @click="goToLogin" class="primary-button">
            开始使用
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  name: 'WelcomeView',
  setup() {
    const router = useRouter();

    const goToLogin = () => {
      router.push('/login');
    };

    return {
      goToLogin
    };
  }
}
</script>

<style scoped>
.welcome-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
}

.welcome-box {
  width: 100%;
  max-width: 450px;
  padding: 40px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.logo-section {
  margin-bottom: 30px;
}

.logo {
  width: 80px;
  height: 80px;
  object-fit: contain;
}

.welcome-content {
  margin-bottom: 20px;
}

.welcome-title {
  font-size: 28px;
  font-weight: 600;
  color: #333;
  margin-bottom: 12px;
}

.welcome-subtitle {
  font-size: 16px;
  color: #666;
  margin-bottom: 40px;
  line-height: 1.5;
}

.feature-list {
  display: flex;
  justify-content: space-around;
  margin-bottom: 40px;
  padding: 0 20px;
}

.feature-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.feature-icon {
  font-size: 24px;
  margin-bottom: 4px;
}

.feature-text {
  font-size: 14px;
  color: #555;
  font-weight: 500;
}

.action-buttons {
  margin-top: 30px;
}

.primary-button {
  width: 100%;
  max-width: 200px;
  padding: 14px 28px;
  background: linear-gradient(45deg, #4caf50, #66bb6a);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3);
}

.primary-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(76, 175, 80, 0.4);
  background: linear-gradient(45deg, #45a049, #5cb85c);
}

.primary-button:active {
  transform: translateY(0);
}

/* 响应式设计 */
@media (max-width: 480px) {
  .welcome-box {
    padding: 30px 20px;
    margin: 10px;
  }
  
  .welcome-title {
    font-size: 24px;
  }
  
  .feature-list {
    flex-direction: column;
    gap: 20px;
    padding: 0;
  }
  
  .feature-item {
    flex-direction: row;
    justify-content: center;
    gap: 12px;
  }
}
</style>