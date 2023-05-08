import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth'
const Home = () => import('@/pages/Home/Home.vue')
const Login = () => import('@/pages/Login/Login.vue')
const Blog = () => import('@/pages/Blog/Blog.vue')
const Cart = () => import('@/pages/Cart/Cart.vue')
const Signup = () => import('@/pages/Signup/Signup.vue')
const Profile = () => import('@/pages/Profile/Profile.vue')
const BlogDetail = () => import('@/pages/BlogDetail/BlogDetail.vue')
const ListProduct = () => import('@/pages/ListProduct/ListProduct.vue')
const ProductDetail = () => import('@/pages/ProductDetail/ProductDetail.vue')
const ForgetPassword = () => import('@/pages/ForgetPassword/ForgetPassword.vue')

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: "/:slug",
      name: "list-product",
      component: ListProduct
    },
    {
      path: "/san-pham/:slug",
      name: "product-detail",
      component: ProductDetail
    },
    {
      path: '/dang-nhap',
      name: 'login',
      component: Login,
      beforeEnter: () => {
        const auth = useAuthStore();
        if(auth.user){
          return { path: "/profile", query: {}, hash: '' }
        }

        return true;
      }
    },
    {
      path: '/dang-ky',
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
      name: 'blog',
      component: Blog
    },
    {
      path: '/tin-tuc/:slug',
      name: 'blog-detail',
      component: BlogDetail
    },
    {
      path: '/gio-hang',
      name: 'cart',
      component: Cart
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
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

    return { top: 0 }
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