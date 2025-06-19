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
