import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth'
const Home = () => import('@/pages/Home/Home.vue')
const Login = () => import('@/pages/Login/Login.vue')
const Signup = () => import('@/pages/Signup/Signup.vue')

const Search = () => import('@/pages/Search/Search.vue')
const Dashboard = () => import('@/pages/Dashboard/Dashboard.vue')


export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
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
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
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

  if (authRequired && !auth.user) {
    auth.returnUrl = to.fullPath;
    return '/login';
  }
});