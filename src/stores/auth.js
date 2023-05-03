import { defineStore } from 'pinia'
import api from '../api/axios'
import { router } from '../router'

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      user: JSON.parse(localStorage.getItem('hit:user')),
      returnUrl: null
    }
  },
  actions: {
    async login(account, password){
      const { tokens }  = (await api.post("/api/v1/auth/login", { account, password }))
      this.user = tokens;

      localStorage.setItem('thuha:user', JSON.stringify(tokens));

      setTimeout(() => {
        router.push(this.returnUrl || '/profile');
      },300)
    },
    logout() {
      this.user = null;
      localStorage.removeItem('thuha:user');
      router.push('/login');
    }
  }
})
