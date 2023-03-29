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
      <swiper-slide>
        <div class="slider-item">
          <h4>
            Nhanh tay lựa chọn nhẫn xinh ưng ý
          </h4>
          <p>
            Giá chỉ từ <span class="slider-price">$5000</span>
          </p>
          <router-link to="/">Mua ngay</router-link>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="slider-item">
          <h4>
            Nhanh tay lựa chọn nhẫn xinh ưng ý
          </h4>
          <p>
            Giá chỉ từ <span class="slider-price">$5000</span>
          </p>
          <router-link to="/">Mua ngay</router-link>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="slider-item">
          <h4>
            Nhanh tay lựa chọn nhẫn xinh ưng ý
          </h4>
          <p>
            Giá chỉ từ <span class="slider-price">$5000</span>
          </p>
          <router-link to="/">Mua ngay</router-link>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from 'swiper';
import "swiper/css";
import 'swiper/css/pagination';

let modules = [Pagination]

</script>

<style src="./Slider.scss"></style>