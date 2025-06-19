<template>
  <div class="home-container">
    <h1>欢迎回来！</h1>
    <p>您已成功登录系统</p>
    <button @click="handleLogout">退出登录</button>
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

    return {
      handleLogout
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

button {
  padding: 10px 20px;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #d32f2f;
}
</style>
