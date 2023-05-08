<script setup>
import Header from "@/components/Header/Header.vue"
import Footer from "@/components/Footer/Footer.vue"

import Slider from "./Slider.vue"
import Hot from "./Hot.vue"
import NewProduct from "./NewProduct.vue"
import Grid from "./Grid.vue"
import ThreeColumn from "./ThreeColumn.vue"

import { onMounted, reactive } from 'vue'
import api from '@/api/axios'
let banners = reactive({})

onMounted(async() => {
  const temp = {}
  let data = await api.get("/api/v1/banners/home")
  for(let item of data.data){
    if(temp[item.type]){
      temp[item.type].push(item)
    }else {
      temp[item.type] = [item]
    }
  }
  Object.assign(banners, temp)
})
</script>

<template>
  <Header></Header>
  <Slider :sliders="banners.slider"></Slider>
  <Hot v-if="banners?.banner" :banners="banners.banner"></Hot>
  <NewProduct></NewProduct>
  <Grid></Grid>
  <ThreeColumn></ThreeColumn>
  <Footer></Footer>
</template>
