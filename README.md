# Login Demo - Vue.js 登录演示项目

这是一个基于 Vue.js 3 的简单登录演示项目，展示了基本的用户认证功能。

## 🚀 技术栈

- **Vue.js 3** - 渐进式 JavaScript 框架
- **Vue Router** - Vue.js 官方路由管理器
- **Axios** - HTTP 客户端
- **Vue CLI** - Vue.js 官方脚手架工具

## 📦 项目安装

### 环境要求
- Node.js 14.x 或更高版本
- npm 或 yarn

### 安装步骤

1. 克隆项目
```bash
git clone <项目地址>
cd login-demo
```

2. 安装依赖
```bash
# 使用 npm
npm install

# 或使用 yarn
yarn install
```

## 🎯 使用说明

### 启动开发服务器
```bash
# 使用 npm
npm run serve

# 或使用 yarn
yarn serve
```

启动成功后，在浏览器中访问 `http://localhost:8080`

### 测试账号
- **用户名**: admin
- **密码**: 123456

### 构建生产版本
```bash
# 使用 npm
npm run build

# 或使用 yarn
yarn build
```

### 代码检查
```bash
# 使用 npm
npm run lint

# 或使用 yarn
yarn lint
```

## 📁 项目结构

```
login-demo/
├── public/                 # 静态资源
├── src/
│   ├── api/               # API 接口
│   │   └── auth.js        # 认证相关API
│   ├── assets/            # 资源文件
│   ├── components/        # 组件
│   ├── router/            # 路由配置
│   ├── views/             # 页面视图
│   │   ├── Home.vue       # 首页
│   │   └── Login.vue      # 登录页
│   ├── App.vue            # 主应用组件
│   └── main.js            # 应用入口
├── package.json           # 依赖配置
└── README.md              # 项目说明
```

## ✨ 功能特性

- ✅ 用户登录界面
- ✅ 表单验证
- ✅ 加载状态显示
- ✅ 错误信息提示
- ✅ Token 存储
- ✅ 路由跳转
- ✅ 响应式设计

## 🔧 开发说明

本项目使用模拟 API 进行演示，实际开发中需要：

1. 将 `src/api/auth.js` 中的模拟接口替换为真实的后端API
2. 添加更完善的错误处理机制
3. 实现更安全的 Token 管理
4. 添加路由守卫进行权限控制

## 📝 许可证

[MIT](LICENSE)