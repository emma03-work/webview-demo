<template>
  <div class="register-container">
    <div class="register-box">
      <h2>用户注册</h2>
      <div class="form-group">
        <label for="username">用户名</label>
        <input
          type="text"
          id="username"
          v-model="username"
          placeholder="请输入用户名"
        />
      </div>
      <div class="form-group">
        <label for="email">邮箱</label>
        <input
          type="email"
          id="email"
          v-model="email"
          placeholder="请输入邮箱地址"
        />
      </div>
      <div class="form-group">
        <label for="password">密码</label>
        <input
          type="password"
          id="password"
          v-model="password"
          placeholder="请输入密码"
        />
      </div>
      <div class="form-group">
        <label for="confirmPassword">确认密码</label>
        <input
          type="password"
          id="confirmPassword"
          v-model="confirmPassword"
          placeholder="请再次输入密码"
        />
      </div>
      <div class="form-group">
        <button @click="handleRegister" :disabled="loading">
          {{ loading ? '注册中...' : '注册' }}
        </button>
      </div>
      <div v-if="errorMessage" class="error-message">
        {{ errorMessage }}
      </div>
      <div v-if="successMessage" class="success-message">
        {{ successMessage }}
      </div>
      <div class="link-group">
        <router-link to="/login" class="login-link">
          已有账号？点击登录
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { register } from '@/api/auth';

export default {
  name: 'RegisterView',
  setup() {
    const router = useRouter();
    const username = ref('');
    const email = ref('');
    const password = ref('');
    const confirmPassword = ref('');
    const loading = ref(false);
    const errorMessage = ref('');
    const successMessage = ref('');

    const validateForm = () => {
      if (!username.value || !email.value || !password.value || !confirmPassword.value) {
        errorMessage.value = '请填写所有字段';
        return false;
      }

      if (username.value.length < 3) {
        errorMessage.value = '用户名至少需要3个字符';
        return false;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.value)) {
        errorMessage.value = '请输入有效的邮箱地址';
        return false;
      }

      if (password.value.length < 6) {
        errorMessage.value = '密码至少需要6个字符';
        return false;
      }

      if (password.value !== confirmPassword.value) {
        errorMessage.value = '两次输入的密码不一致';
        return false;
      }

      return true;
    };

    const handleRegister = async () => {
      errorMessage.value = '';
      successMessage.value = '';

      if (!validateForm()) {
        return;
      }

      try {
        loading.value = true;

        const response = await register(username.value, email.value, password.value);

        if (response.success) {
          successMessage.value = '注册成功！正在跳转到登录页面...';
          setTimeout(() => {
            router.push('/login');
          }, 2000);
        } else {
          errorMessage.value = response.message || '注册失败';
        }
      } catch (error) {
        errorMessage.value = '注册过程中发生错误';
        console.error('Register error:', error);
      } finally {
        loading.value = false;
      }
    };

    return {
      username,
      email,
      password,
      confirmPassword,
      loading,
      errorMessage,
      successMessage,
      handleRegister
    };
  }
}
</script>

<style scoped>
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 20px 0;
}

.register-box {
  width: 350px;
  padding: 30px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  margin-bottom: 24px;
  color: #333;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #333;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  box-sizing: border-box;
}

input:focus {
  outline: none;
  border-color: #4caf50;
}

button {
  width: 100%;
  padding: 12px;
  background-color: #2196f3;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #1976d2;
}

button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.error-message {
  color: #f44336;
  text-align: center;
  margin-top: 16px;
  padding: 8px;
  background-color: #ffebee;
  border-radius: 4px;
}

.success-message {
  color: #4caf50;
  text-align: center;
  margin-top: 16px;
  padding: 8px;
  background-color: #e8f5e8;
  border-radius: 4px;
}

.link-group {
  text-align: center;
  margin-top: 16px;
}

.login-link {
  color: #2196f3;
  text-decoration: none;
  font-size: 14px;
}

.login-link:hover {
  text-decoration: underline;
}
</style>