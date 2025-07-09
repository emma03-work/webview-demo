<template>
  <div class="login-container">
    <div class="background-decoration">
      <div class="circle circle1"></div>
      <div class="circle circle2"></div>
      <div class="circle circle3"></div>
    </div>
    
    <div class="login-card">
      <div class="login-header">
        <div class="logo">
          <i class="icon">🔐</i>
        </div>
        <h1>欢迎回来</h1>
        <p>请登录您的账户</p>
      </div>

      <form @submit.prevent="handleLogin" class="login-form">
        <div class="input-group">
          <div class="input-wrapper">
            <i class="input-icon">👤</i>
            <input
              type="text"
              v-model="username"
              placeholder="用户名"
              class="form-input"
              :class="{ 'error': usernameError }"
              @blur="validateUsername"
              @input="clearErrors"
            />
          </div>
          <span v-if="usernameError" class="error-text">{{ usernameError }}</span>
        </div>

        <div class="input-group">
          <div class="input-wrapper">
            <i class="input-icon">🔒</i>
            <input
              :type="showPassword ? 'text' : 'password'"
              v-model="password"
              placeholder="密码"
              class="form-input"
              :class="{ 'error': passwordError }"
              @blur="validatePassword"
              @input="clearErrors"
            />
            <button
              type="button"
              class="password-toggle"
              @click="togglePassword"
            >
              {{ showPassword ? '🙈' : '👁️' }}
            </button>
          </div>
          <span v-if="passwordError" class="error-text">{{ passwordError }}</span>
        </div>

        <div class="form-options">
          <label class="remember-me">
            <input type="checkbox" v-model="rememberMe">
            <span class="checkmark"></span>
            记住我
          </label>
          <a href="#" class="forgot-password">忘记密码？</a>
        </div>

        <button
          type="submit"
          class="login-btn"
          :disabled="loading"
          :class="{ 'loading': loading }"
        >
          <span v-if="loading" class="spinner"></span>
          {{ loading ? '登录中...' : '登录' }}
        </button>

        <div v-if="errorMessage" class="error-message">
          <i class="error-icon">⚠️</i>
          {{ errorMessage }}
        </div>
      </form>

      <div class="login-footer">
        <p>还没有账户？ <a href="#" class="register-link">立即注册</a></p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { login } from '@/api/auth';

export default {
  name: 'LoginView',
  setup() {
    const router = useRouter();
    const username = ref('');
    const password = ref('');
    const loading = ref(false);
    const errorMessage = ref('');
    const usernameError = ref('');
    const passwordError = ref('');
    const showPassword = ref(false);
    const rememberMe = ref(false);

    // 从localStorage加载记住的用户名
    onMounted(() => {
      const savedUsername = localStorage.getItem('rememberedUsername');
      if (savedUsername) {
        username.value = savedUsername;
        rememberMe.value = true;
      }
    });

    const validateUsername = () => {
      if (!username.value) {
        usernameError.value = '请输入用户名';
        return false;
      }
      if (username.value.length < 3) {
        usernameError.value = '用户名至少需要3个字符';
        return false;
      }
      usernameError.value = '';
      return true;
    };

    const validatePassword = () => {
      if (!password.value) {
        passwordError.value = '请输入密码';
        return false;
      }
      if (password.value.length < 6) {
        passwordError.value = '密码至少需要6个字符';
        return false;
      }
      passwordError.value = '';
      return true;
    };

    const clearErrors = () => {
      errorMessage.value = '';
      usernameError.value = '';
      passwordError.value = '';
    };

    const togglePassword = () => {
      showPassword.value = !showPassword.value;
    };

    const handleLogin = async () => {
      // 表单验证
      const isUsernameValid = validateUsername();
      const isPasswordValid = validatePassword();

      if (!isUsernameValid || !isPasswordValid) {
        return;
      }

      try {
        loading.value = true;
        errorMessage.value = '';

        const response = await login(username.value, password.value);

        if (response.success) {
          // 存储token
          localStorage.setItem('token', response.token);
          
          // 处理记住用户名
          if (rememberMe.value) {
            localStorage.setItem('rememberedUsername', username.value);
          } else {
            localStorage.removeItem('rememberedUsername');
          }

          // 跳转到首页
          router.push('/home');
        } else {
          errorMessage.value = response.message || '登录失败';
        }
      } catch (error) {
        errorMessage.value = '登录过程中发生错误';
        console.error('Login error:', error);
      } finally {
        loading.value = false;
      }
    };

    return {
      username,
      password,
      loading,
      errorMessage,
      usernameError,
      passwordError,
      showPassword,
      rememberMe,
      handleLogin,
      validateUsername,
      validatePassword,
      clearErrors,
      togglePassword
    };
  }
}
</script>

<style scoped>
.login-container {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
  overflow: hidden;
}

.background-decoration {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
}

.circle {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  animation: float 6s ease-in-out infinite;
}

.circle1 {
  width: 80px;
  height: 80px;
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.circle2 {
  width: 120px;
  height: 120px;
  top: 70%;
  right: 10%;
  animation-delay: 2s;
}

.circle3 {
  width: 60px;
  height: 60px;
  top: 40%;
  left: 80%;
  animation-delay: 4s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
  }
}

.login-card {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 400px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
  padding: 40px;
  animation: slideUp 0.8s ease-out;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.login-header {
  text-align: center;
  margin-bottom: 40px;
}

.logo {
  margin-bottom: 20px;
}

.icon {
  font-size: 48px;
  display: inline-block;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

h1 {
  font-size: 28px;
  font-weight: 700;
  color: #333;
  margin: 0 0 8px 0;
}

.login-header p {
  color: #666;
  font-size: 16px;
  margin: 0;
}

.login-form {
  margin-bottom: 30px;
}

.input-group {
  margin-bottom: 25px;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.input-icon {
  position: absolute;
  left: 15px;
  font-size: 16px;
  z-index: 1;
}

.form-input {
  width: 100%;
  padding: 15px 15px 15px 50px;
  border: 2px solid #e1e5e9;
  border-radius: 12px;
  font-size: 16px;
  transition: all 0.3s ease;
  background: #fff;
}

.form-input:focus {
  outline: none;
  border-color: #667eea;
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(102, 126, 234, 0.2);
}

.form-input.error {
  border-color: #e74c3c;
}

.password-toggle {
  position: absolute;
  right: 15px;
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  padding: 5px;
  border-radius: 50%;
  transition: background-color 0.3s ease;
}

.password-toggle:hover {
  background-color: #f8f9fa;
}

.error-text {
  color: #e74c3c;
  font-size: 14px;
  margin-top: 8px;
  display: block;
  animation: shake 0.5s ease-in-out;
}

@keyframes shake {
  0%, 100% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-5px);
  }
  75% {
    transform: translateX(5px);
  }
}

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.remember-me {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  color: #666;
}

.remember-me input[type="checkbox"] {
  display: none;
}

.checkmark {
  width: 18px;
  height: 18px;
  border: 2px solid #ddd;
  border-radius: 4px;
  margin-right: 8px;
  position: relative;
  transition: all 0.3s ease;
}

.remember-me input[type="checkbox"]:checked + .checkmark {
  background-color: #667eea;
  border-color: #667eea;
}

.remember-me input[type="checkbox"]:checked + .checkmark::after {
  content: '✓';
  position: absolute;
  top: -2px;
  left: 2px;
  color: white;
  font-size: 12px;
}

.forgot-password {
  font-size: 14px;
  color: #667eea;
  text-decoration: none;
  transition: color 0.3s ease;
}

.forgot-password:hover {
  color: #5a6fd8;
  text-decoration: underline;
}

.login-btn {
  width: 100%;
  padding: 15px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.login-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
}

.login-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

.login-btn.loading {
  pointer-events: none;
}

.spinner {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid #ffffff33;
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 1s ease-in-out infinite;
  margin-right: 10px;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.error-message {
  background-color: #fee;
  color: #e74c3c;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: slideDown 0.3s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.error-icon {
  margin-right: 8px;
}

.login-footer {
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid #eee;
}

.login-footer p {
  margin: 0;
  color: #666;
  font-size: 14px;
}

.register-link {
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.register-link:hover {
  color: #5a6fd8;
  text-decoration: underline;
}

/* 响应式设计 */
@media (max-width: 480px) {
  .login-container {
    padding: 10px;
  }
  
  .login-card {
    padding: 30px 20px;
  }
  
  .form-options {
    flex-direction: column;
    gap: 15px;
    align-items: flex-start;
  }
}
</style>
