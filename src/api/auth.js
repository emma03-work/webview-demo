/**
 * 模拟登录API
 * @param {string} username 用户名
 * @param {string} password 密码
 * @returns {Promise<Object>} 登录结果
 */
export function login(username, password) {
  return new Promise((resolve) => {
    // 模拟网络请求延迟
    setTimeout(() => {
      // 模拟登录验证
      if (username === 'admin' && password === '123456') {
        resolve({
          success: true,
          token: 'mock-jwt-token-' + Math.random().toString(36).substr(2),
          message: '登录成功'
        });
      } else {
        resolve({
          success: false,
          message: '用户名或密码错误'
        });
      }
    }, 1000); // 延迟1秒，模拟网络请求
  });
}

/**
 * 模拟检查登录状态API
 * @returns {Promise<boolean>} 是否已登录
 */
export function checkLoginStatus() {
  return new Promise((resolve) => {
    const token = localStorage.getItem('token');
    resolve(!!token);
  });
}

/**
 * 模拟修改密码API
 * @param {string} currentPassword 当前密码
 * @param {string} newPassword 新密码
 * @returns {Promise<Object>} 修改结果
 */
export function changePassword(currentPassword, newPassword) {
  return new Promise((resolve) => {
    // 模拟网络请求延迟
    setTimeout(() => {
      // 检查是否已登录
      const token = localStorage.getItem('token');
      if (!token) {
        resolve({
          success: false,
          message: '请先登录'
        });
        return;
      }

      // 模拟验证当前密码（这里简单假设当前密码是123456）
      if (currentPassword === '123456') {
        // 这里在实际项目中，您可能需要更新用户的密码信息
        // 为了演示，我们只是返回成功消息
        resolve({
          success: true,
          message: '密码修改成功'
        });
      } else {
        resolve({
          success: false,
          message: '当前密码错误'
        });
      }
    }, 1500); // 延迟1.5秒，模拟网络请求
  });
}
