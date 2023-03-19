import { defineStore } from 'pinia'
import api from '../api/axios'
import { router } from '../router'

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      user: JSON.parse(localStorage.getItem('thuha:user')),
      returnUrl: null
    }
  },
  actions: {
    async login(account, password){
      const { data } = (await api.post("/api/v1/auth/login", { account, password }))

      this.user = data;


      setTimeout(() => {
        router.push(this.returnUrl || '/dashboard');
      },300)
    },
    logout() {
      this.user = null;
      router.push('/login');
    }
  }
})
