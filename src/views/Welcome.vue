<template>
  <div class="welcome-container">
    <div class="welcome-box">
      <h1>欢迎使用我们的系统</h1>
      <p>这里是一个简单的登录演示系统</p>
      <div class="welcome-content">
        <div class="feature-list">
          <div class="feature-item">
            <span class="feature-icon">🔒</span>
            <span>安全登录</span>
          </div>
          <div class="feature-item">
            <span class="feature-icon">🏠</span>
            <span>个人主页</span>
          </div>
          <div class="feature-item">
            <span class="feature-icon">⚡</span>
            <span>快速响应</span>
          </div>
        </div>
      </div>
      <div class="action-buttons">
        <button @click="goToLogin" class="primary-button">
          开始使用
        </button>
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
  max-width: 500px;
  width: 100%;
  padding: 40px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h1 {
  margin-bottom: 16px;
  color: #333;
  font-size: 28px;
  font-weight: 600;
}

p {
  margin-bottom: 32px;
  color: #666;
  font-size: 16px;
  line-height: 1.6;
}

.welcome-content {
  margin-bottom: 32px;
}

.feature-list {
  display: flex;
  justify-content: space-around;
  margin-bottom: 32px;
}

.feature-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.feature-icon {
  font-size: 32px;
  margin-bottom: 8px;
}

.feature-item span:last-child {
  color: #555;
  font-size: 14px;
  font-weight: 500;
}

.action-buttons {
  display: flex;
  justify-content: center;
}

.primary-button {
  padding: 14px 32px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.primary-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(102, 126, 234, 0.4);
}

.primary-button:active {
  transform: translateY(0);
}

@media (max-width: 600px) {
  .welcome-box {
    padding: 30px 20px;
  }
  
  .feature-list {
    flex-direction: column;
    gap: 20px;
  }
  
  h1 {
    font-size: 24px;
  }
}
</style>