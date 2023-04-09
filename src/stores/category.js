import { defineStore } from 'pinia'
import api from '../api/axios'

export const useCategoryStore = defineStore('category', {
  state: () => {
    return {
      categories: [],
    }
  },
  getters: {
    getCategories: (state) => state.categories,
  },
  actions: {
    async callAPICategories(){
      let data = await api.get("/api/v1/categories")
      this.categories = data.data;
    },
  }
})
