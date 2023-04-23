import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth'
const Home = () => import('@/pages/Home/Home.vue')
const Login = () => import('@/pages/Login/Login.vue')
const ForgetPassword = () => import('@/pages/ForgetPassword/ForgetPassword.vue')
const Blog = () => import('@/pages/Blog/Blog.vue')
const Signup = () => import('@/pages/Signup/Signup.vue')
const ListProduct = () => import('@/pages/ListProduct/ListProduct.vue')

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: "/p/:slug",
      name: "list-product",
      component: ListProduct
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      beforeEnter: () => {
        const auth = useAuthStore();

        if(auth.user){
          return { path: "/dashboard", query: {}, hash: '' }
        }

        return true;
      }
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/forget-password',
      name: 'forget-password',
      component: ForgetPassword,
    },
    {
      path: '/tin-tuc',
      name: 'tin-tuc',
      component: Blog
    },
    {
      path: '/logout',
      name: 'logout',
      component: null,
      beforeEnter: () => {
        const auth = useAuthStore();
        auth.logout();
      }
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80
      }
    }
  }
})

router.beforeEach(async (to) => {
  const publicPages = ['/', '/signup', '/login'];
  const authRequired = !publicPages.includes(to.path);
  const auth = useAuthStore();

  // if (authRequired && !auth.user) {
  //   auth.returnUrl = to.fullPath;
  //   return '/login';
  // }
});