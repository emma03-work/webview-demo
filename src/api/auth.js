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
      // 首先检查默认管理员账户
      if (username === 'admin' && password === '123456') {
        resolve({
          success: true,
          token: 'mock-jwt-token-' + Math.random().toString(36).substr(2),
          message: '登录成功'
        });
        return;
      }

      // 检查注册用户
      const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
      const user = registeredUsers.find(user => 
        (user.username === username || user.email === username) && user.password === password
      );

      if (user) {
        resolve({
          success: true,
          token: 'mock-jwt-token-' + Math.random().toString(36).substr(2),
          message: '登录成功',
          user: {
            id: user.id,
            username: user.username,
            email: user.email
          }
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
 * 模拟用户注册API
 * @param {string} username 用户名
 * @param {string} email 邮箱
 * @param {string} password 密码
 * @returns {Promise<Object>} 注册结果
 */
export function register(username, email, password) {
  return new Promise((resolve) => {
    // 模拟网络请求延迟
    setTimeout(() => {
      // 从localStorage获取已注册用户
      const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
      
      // 检查用户名是否已存在
      const userExists = registeredUsers.some(user => 
        user.username === username || user.email === email
      );
      
      if (userExists) {
        resolve({
          success: false,
          message: '用户名或邮箱已存在'
        });
      } else {
        // 保存新用户到localStorage
        const newUser = {
          username,
          email,
          password, // 实际项目中需要加密
          id: Math.random().toString(36).substr(2),
          createdAt: new Date().toISOString()
        };
        
        registeredUsers.push(newUser);
        localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
        
        resolve({
          success: true,
          message: '注册成功'
        });
      }
    }, 1500); // 延迟1.5秒，模拟网络请求
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
