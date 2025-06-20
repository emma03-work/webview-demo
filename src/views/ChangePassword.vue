<template>
  <div class="change-password-container">
    <div class="change-password-box">
      <h2>修改密码</h2>
      <div class="form-group">
        <label for="currentPassword">当前密码</label>
        <input
          type="password"
          id="currentPassword"
          v-model="currentPassword"
          placeholder="请输入当前密码"
        />
      </div>
      <div class="form-group">
        <label for="newPassword">新密码</label>
        <input
          type="password"
          id="newPassword"
          v-model="newPassword"
          placeholder="请输入新密码"
        />
      </div>
      <div class="form-group">
        <label for="confirmPassword">确认新密码</label>
        <input
          type="password"
          id="confirmPassword"
          v-model="confirmPassword"
          placeholder="请再次输入新密码"
        />
      </div>
      <div class="form-group buttons">
        <button @click="handleChangePassword" :disabled="loading">
          {{ loading ? '修改中...' : '修改密码' }}
        </button>
        <button @click="goBack" class="cancel-btn">返回</button>
      </div>
      <div v-if="errorMessage" class="error-message">
        {{ errorMessage }}
      </div>
      <div v-if="successMessage" class="success-message">
        {{ successMessage }}
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { changePassword } from '@/api/auth';

export default {
  name: 'ChangePasswordView',
  setup() {
    const router = useRouter();
    const currentPassword = ref('');
    const newPassword = ref('');
    const confirmPassword = ref('');
    const loading = ref(false);
    const errorMessage = ref('');
    const successMessage = ref('');

    const validateForm = () => {
      if (!currentPassword.value || !newPassword.value || !confirmPassword.value) {
        errorMessage.value = '请填写所有字段';
        return false;
      }

      if (newPassword.value.length < 6) {
        errorMessage.value = '新密码长度至少为6位';
        return false;
      }

      if (newPassword.value !== confirmPassword.value) {
        errorMessage.value = '两次输入的新密码不一致';
        return false;
      }

      if (currentPassword.value === newPassword.value) {
        errorMessage.value = '新密码不能与当前密码相同';
        return false;
      }

      return true;
    };

    const handleChangePassword = async () => {
      errorMessage.value = '';
      successMessage.value = '';

      if (!validateForm()) {
        return;
      }

      try {
        loading.value = true;

        const response = await changePassword(
          currentPassword.value,
          newPassword.value
        );

        if (response.success) {
          successMessage.value = '密码修改成功！';
          // 清空表单
          currentPassword.value = '';
          newPassword.value = '';
          confirmPassword.value = '';
          
          // 3秒后返回首页
          setTimeout(() => {
            router.push('/home');
          }, 3000);
        } else {
          errorMessage.value = response.message || '密码修改失败';
        }
      } catch (error) {
        errorMessage.value = '修改密码过程中发生错误';
        console.error('Change password error:', error);
      } finally {
        loading.value = false;
      }
    };

    const goBack = () => {
      router.go(-1);
    };

    return {
      currentPassword,
      newPassword,
      confirmPassword,
      loading,
      errorMessage,
      successMessage,
      handleChangePassword,
      goBack
    };
  }
}
</script>

<style scoped>
.change-password-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 20px;
}

.change-password-box {
  width: 400px;
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

.form-group.buttons {
  display: flex;
  gap: 10px;
  justify-content: space-between;
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
  flex: 1;
  padding: 12px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #45a049;
}

button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.cancel-btn {
  background-color: #6c757d;
}

.cancel-btn:hover {
  background-color: #5a6268;
}

.error-message {
  color: #f44336;
  text-align: center;
  margin-top: 16px;
  padding: 10px;
  background-color: #ffebee;
  border-radius: 4px;
}

.success-message {
  color: #4caf50;
  text-align: center;
  margin-top: 16px;
  padding: 10px;
  background-color: #e8f5e8;
  border-radius: 4px;
}
</style>