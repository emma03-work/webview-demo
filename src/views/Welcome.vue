<template>
  <div class="welcome-container">
    <div class="welcome-content">
      <div class="logo-section">
        <h1 class="welcome-title">欢迎来到我们的系统</h1>
        <p class="welcome-subtitle">一个简单而强大的应用程序</p>
      </div>
      
      <div class="features-section">
        <div class="feature-item">
          <div class="feature-icon">🔒</div>
          <h3>安全可靠</h3>
          <p>采用先进的安全技术保护您的数据</p>
        </div>
        <div class="feature-item">
          <div class="feature-icon">⚡</div>
          <h3>快速响应</h3>
          <p>优化的性能提供流畅的用户体验</p>
        </div>
        <div class="feature-item">
          <div class="feature-icon">🎯</div>
          <h3>简单易用</h3>
          <p>直观的界面设计，轻松上手</p>
        </div>
      </div>
      
      <div class="action-section">
        <button @click="goToLogin" class="welcome-button">
          开始使用
        </button>
        <p class="login-hint">点击上方按钮进入登录页面</p>
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
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.welcome-content {
  max-width: 800px;
  text-align: center;
  color: white;
}

.logo-section {
  margin-bottom: 60px;
}

.welcome-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 16px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.welcome-subtitle {
  font-size: 1.25rem;
  opacity: 0.9;
  margin-bottom: 0;
}

.features-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 60px;
}

.feature-item {
  background: rgba(255, 255, 255, 0.1);
  padding: 30px 20px;
  border-radius: 12px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.feature-item:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.15);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 16px;
}

.feature-item h3 {
  font-size: 1.5rem;
  margin-bottom: 12px;
  font-weight: 600;
}

.feature-item p {
  opacity: 0.9;
  line-height: 1.6;
}

.action-section {
  margin-top: 40px;
}

.welcome-button {
  background: linear-gradient(45deg, #4caf50, #45a049);
  color: white;
  border: none;
  padding: 16px 40px;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.welcome-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(76, 175, 80, 0.4);
  background: linear-gradient(45deg, #45a049, #388e3c);
}

.welcome-button:active {
  transform: translateY(0);
}

.login-hint {
  margin-top: 20px;
  opacity: 0.8;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .welcome-title {
    font-size: 2rem;
  }
  
  .features-section {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .feature-item {
    padding: 20px;
  }
}
</style>