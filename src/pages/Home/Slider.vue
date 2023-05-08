<template>
  <div class="slider">
    <swiper
      :slides-per-view="1"
      :space-between="0"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
    >
      <swiper-slide v-if="!props?.sliders?.length > 0">
        <div class="slider-item">
        </div>
      </swiper-slide>
      
      <swiper-slide v-for="slider in props.sliders">
        <div class="slider-item" :style="{ backgroundImage: 'url(' + slider?.url + ')'  }">
          <div v-html="slider?.content" /> 
          <router-link :to="{ path: slider.redirect_link }">Mua ngay</router-link>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import 'swiper/css/pagination';

let modules = [Pagination]
const props = defineProps(['sliders'])
</script>

<style src="./Slider.scss"></style>