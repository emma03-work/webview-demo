import { createRouter, createWebHistory } from 'vue-router';
import { checkLoginStatus } from '@/api/auth';

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
    meta: { requiresAuth: false }
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/change-password',
    name: 'ChangePassword',
    component: () => import('@/views/ChangePassword.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/login'
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

// 路由守卫，检查登录状态
router.beforeEach(async (to, from, next) => {
  // 检查路由是否需要登录权限
  if (to.meta.requiresAuth) {
    // 检查用户是否已登录
    const isLoggedIn = await checkLoginStatus();
    if (!isLoggedIn) {
      // 如果未登录，重定向到登录页面
      next({ name: 'Login' });
      return;
    }
  } else if (to.path === '/login') {
    // 如果用户已登录且尝试访问登录页，重定向到首页
    const isLoggedIn = await checkLoginStatus();
    if (isLoggedIn) {
      next({ name: 'Home' });
      return;
    }
  }

  // 继续导航
  next();
});

export default router;
