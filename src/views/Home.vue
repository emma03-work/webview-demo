<template>
  <div class="home-container">
    <h1>欢迎回来！</h1>
    <p>您已成功登录系统</p>
    
    <div class="action-buttons">
      <button @click="goToChangePassword" class="change-password-btn">
        修改密码
      </button>
      <button @click="handleLogout" class="logout-btn">
        退出登录
      </button>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  name: 'HomeView',
  setup() {
    const router = useRouter();

    const handleLogout = () => {
      // 清除登录信息
      localStorage.removeItem('token');
      // 跳转到登录页
      router.push('/login');
    };

    const goToChangePassword = () => {
      router.push('/change-password');
    };

    return {
      handleLogout,
      goToChangePassword
    };
  }
}
</script>

<style scoped>
.home-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  text-align: center;
}

h1 {
  margin-bottom: 20px;
  color: #333;
}

p {
  margin-bottom: 30px;
  font-size: 18px;
  color: #666;
}

.action-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

button {
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  min-width: 120px;
}

.change-password-btn {
  background-color: #2196f3;
  color: white;
}

.change-password-btn:hover {
  background-color: #1976d2;
}

.logout-btn {
  background-color: #f44336;
  color: white;
}

.logout-btn:hover {
  background-color: #d32f2f;
}
</style>
