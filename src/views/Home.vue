<template>
  <div class="home-container">
    <nav class="navbar">
      <div class="nav-content">
        <div class="logo">
          <i class="icon">🏠</i>
          <span class="app-name">演示应用</span>
        </div>
        <div class="user-menu">
          <span class="welcome-text">欢迎回来！</span>
          <button @click="handleLogout" class="logout-btn">
            <i class="logout-icon">🚪</i>
            退出登录
          </button>
        </div>
      </div>
    </nav>

    <main class="main-content">
      <div class="hero-section">
        <div class="hero-content">
          <h1 class="hero-title">🎉 登录成功！</h1>
          <p class="hero-subtitle">您已成功进入系统，现在可以使用所有功能</p>
          <div class="status-card">
            <div class="status-item">
              <i class="status-icon">✅</i>
              <span>认证状态：已验证</span>
            </div>
            <div class="status-item">
              <i class="status-icon">🕒</i>
              <span>登录时间：{{ loginTime }}</span>
            </div>
            <div class="status-item">
              <i class="status-icon">🔒</i>
              <span>会话状态：活跃</span>
            </div>
          </div>
        </div>
      </div>

      <div class="features-section">
        <h2>功能导航</h2>
        <div class="features-grid">
          <div class="feature-card">
            <i class="feature-icon">📊</i>
            <h3>数据分析</h3>
            <p>查看和分析您的数据</p>
            <button class="feature-btn">进入</button>
          </div>
          <div class="feature-card">
            <i class="feature-icon">⚙️</i>
            <h3>系统设置</h3>
            <p>配置您的偏好设置</p>
            <button class="feature-btn">设置</button>
          </div>
          <div class="feature-card">
            <i class="feature-icon">👥</i>
            <h3>用户管理</h3>
            <p>管理用户和权限</p>
            <button class="feature-btn">管理</button>
          </div>
          <div class="feature-card">
            <i class="feature-icon">📝</i>
            <h3>文档中心</h3>
            <p>查看帮助文档</p>
            <button class="feature-btn">查看</button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'HomeView',
  setup() {
    const router = useRouter();
    const loginTime = ref('');

    onMounted(() => {
      // 设置登录时间
      const now = new Date();
      loginTime.value = now.toLocaleString('zh-CN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      });
    });

    const handleLogout = () => {
      // 确认退出
      if (confirm('确定要退出登录吗？')) {
        // 清除登录信息
        localStorage.removeItem('token');
        // 跳转到登录页
        router.push('/login');
      }
    };

    return {
      loginTime,
      handleLogout
    };
  }
}
</script>

<style scoped>
.home-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.navbar {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
}

.icon {
  font-size: 24px;
}

.app-name {
  font-size: 20px;
  font-weight: 700;
  color: #333;
}

.user-menu {
  display: flex;
  align-items: center;
  gap: 20px;
}

.welcome-text {
  color: #666;
  font-size: 16px;
}

.logout-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.logout-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(255, 107, 107, 0.4);
}

.logout-icon {
  font-size: 16px;
}

.main-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.hero-section {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 60px 40px;
  text-align: center;
  margin-bottom: 60px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  animation: slideUp 0.8s ease-out;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-content {
  max-width: 600px;
  margin: 0 auto;
}

.hero-title {
  font-size: 48px;
  font-weight: 700;
  color: #333;
  margin: 0 0 16px 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 20px;
  color: #666;
  margin: 0 0 40px 0;
  line-height: 1.6;
}

.status-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  padding: 30px;
  color: white;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
}

.status-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 500;
}

.status-icon {
  font-size: 18px;
}

.features-section h2 {
  font-size: 32px;
  font-weight: 700;
  color: #333;
  text-align: center;
  margin: 0 0 40px 0;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  animation: fadeIn 0.8s ease-out 0.2s both;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.feature-card {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.feature-icon {
  font-size: 48px;
  margin-bottom: 20px;
  display: block;
}

.feature-card h3 {
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin: 0 0 12px 0;
}

.feature-card p {
  color: #666;
  font-size: 16px;
  margin: 0 0 24px 0;
  line-height: 1.5;
}

.feature-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
}

.feature-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .nav-content {
    padding: 0 15px;
    height: 60px;
  }
  
  .user-menu {
    gap: 10px;
  }
  
  .welcome-text {
    display: none;
  }
  
  .logout-btn {
    padding: 8px 16px;
    font-size: 12px;
  }
  
  .main-content {
    padding: 20px 15px;
  }
  
  .hero-section {
    padding: 40px 20px;
    margin-bottom: 40px;
  }
  
  .hero-title {
    font-size: 36px;
  }
  
  .hero-subtitle {
    font-size: 18px;
  }
  
  .status-card {
    flex-direction: column;
    gap: 15px;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .feature-card {
    padding: 20px;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 28px;
  }
  
  .hero-subtitle {
    font-size: 16px;
  }
  
  .features-section h2 {
    font-size: 24px;
  }
}
</style>
