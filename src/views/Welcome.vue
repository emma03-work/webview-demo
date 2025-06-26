<template>
  <div class="welcome-container">
    <div class="welcome-content">
      <div class="logo-section">
        <h1 class="welcome-title">🎉 欢迎访问</h1>
        <p class="welcome-subtitle">一个简单而优雅的演示应用</p>
      </div>
      
      <div class="features-section">
        <div class="feature-card">
          <h3>🚀 快速开始</h3>
          <p>简单易用的界面设计</p>
        </div>
        <div class="feature-card">
          <h3>🔒 安全登录</h3>
          <p>安全可靠的用户认证</p>
        </div>
        <div class="feature-card">
          <h3>📱 响应式设计</h3>
          <p>适配各种设备尺寸</p>
        </div>
      </div>
      
      <div class="action-section">
        <button @click="goToLogin" class="primary-btn">开始使用</button>
        <button @click="learnMore" class="secondary-btn">了解更多</button>
      </div>
    </div>
    
    <div class="decoration">
      <div class="circle circle-1"></div>
      <div class="circle circle-2"></div>
      <div class="circle circle-3"></div>
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

    const learnMore = () => {
      // 可以跳转到关于页面或显示更多信息
      alert('这是一个Vue.js演示应用，展示了现代化的前端开发技术！');
    };

    return {
      goToLogin,
      learnMore
    };
  }
}
</script>

<style scoped>
.welcome-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.welcome-content {
  text-align: center;
  color: white;
  z-index: 2;
  max-width: 800px;
  padding: 40px 20px;
}

.logo-section {
  margin-bottom: 60px;
}

.welcome-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.welcome-subtitle {
  font-size: 1.3rem;
  opacity: 0.9;
  margin-bottom: 0;
}

.features-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
}

.feature-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 30px 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.feature-card h3 {
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: #fff;
}

.feature-card p {
  font-size: 1rem;
  opacity: 0.9;
  line-height: 1.5;
}

.action-section {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.primary-btn, .secondary-btn {
  padding: 15px 30px;
  font-size: 1.1rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  min-width: 150px;
}

.primary-btn {
  background: #ff6b6b;
  color: white;
  box-shadow: 0 5px 15px rgba(255, 107, 107, 0.4);
}

.primary-btn:hover {
  background: #ff5252;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(255, 107, 107, 0.6);
}

.secondary-btn {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
}

.secondary-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

.decoration {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}

.circle {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  animation: float 6s ease-in-out infinite;
}

.circle-1 {
  width: 100px;
  height: 100px;
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.circle-2 {
  width: 150px;
  height: 150px;
  top: 60%;
  right: 10%;
  animation-delay: 2s;
}

.circle-3 {
  width: 80px;
  height: 80px;
  bottom: 30%;
  left: 20%;
  animation-delay: 4s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

@media (max-width: 768px) {
  .welcome-title {
    font-size: 2.5rem;
  }
  
  .welcome-subtitle {
    font-size: 1.1rem;
  }
  
  .features-section {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .action-section {
    flex-direction: column;
    align-items: center;
  }
}
</style>