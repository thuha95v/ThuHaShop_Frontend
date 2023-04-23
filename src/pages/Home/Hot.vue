<template>
  <div class="deal container">
    <el-row :gutter="10">
      <el-col :xs="8" :sm="6" :md="4" :lg="8" :xl="1">
        <div class="deal-item">
          <img src="@/assets/sale/01.webp" alt="" />
        </div>
      </el-col>

      <el-col :xs="8" :sm="6" :md="4" :lg="8" :xl="1">
        <div class="deal-item">
          <img src="@/assets/sale/02.webp" alt="" />
        </div>
      </el-col>

      <el-col :xs="8" :sm="6" :md="4" :lg="8" :xl="1">
        <div class="deal-item">
          <img src="@/assets/sale/03.webp" alt="" />
        </div>
      </el-col>
    </el-row>

    <el-row>
      <el-col :xs="8" :sm="6" :md="4" :lg="24" :xl="1">
        <div class="flex deal-hot">
          <h3>Sản phẩm hot</h3>
          <div class="hot-button">
            <el-icon class="swiper-button-prev" :size="15"
              ><ArrowLeftBold
            /></el-icon>
            <el-icon class="swiper-button-next" :size="15"
              ><ArrowRightBold
            /></el-icon>
          </div>
        </div>
      </el-col>
    </el-row>

    <div>
      <swiper
        :loop="true"
        :slides-per-view="4"
        :space-between="0"
        :modules="modules"
        :navigation="{
          enabled: true,
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }"
      >
        <swiper-slide>
          <div class="hot-slider-item">
            <img src="@/assets/product/01.webp" alt="" srcset="" />
            <span>Trang sức bạc</span>
            <h4>Cái chổi luxury</h4>
            <p>$50.000</p>

            <div class="flex slider-item-icon">
              <el-icon size="20"><Collection /></el-icon>
              <p>Thêm vào giỏ hàng</p>
            </div>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="hot-slider-item">
            <img src="@/assets/product/02.webp" alt="" srcset="" />
            <span>Trang sức bạc</span>
            <h4>Cái ghế luxury</h4>
            <p>$50.000</p>

            <div class="flex slider-item-icon">
              <el-icon size="18"><Collection /></el-icon>
              <p>Thêm vào giỏ hàng</p>
            </div>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="hot-slider-item">
            <img src="@/assets/product/03.webp" alt="" srcset="" />
            <span>Trang sức bạc</span>
            <h4>Cái sao luxury</h4>
            <p>$50.000</p>

            <div class="flex slider-item-icon">
              <el-icon size="20"><Collection /></el-icon>
              <p>Thêm vào giỏ hàng</p>
            </div>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="hot-slider-item">
            <img src="@/assets/product/04.webp" alt="" srcset="" />
            <span>Trang sức bạc</span>
            <h4>Cái tròn luxury</h4>
            <p>$50.000</p>

            <div class="flex slider-item-icon">
              <el-icon size="20"><Collection /></el-icon>
              <p>Thêm vào giỏ hàng</p>
            </div>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="hot-slider-item">
            <img src="@/assets/product/02.webp" alt="" srcset="" />
            <span>Trang sức bạc</span>
            <h4>Cái chổi luxury</h4>
            <p>$50.000</p>

            <div class="flex slider-item-icon">
              <el-icon size="20"><Collection /></el-icon>
              <p>Thêm vào giỏ hàng</p>
            </div>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="hot-slider-item">
            <img src="@/assets/product/01.webp" alt="" srcset="" />
            <span>Trang sức bạc</span>
            <h4>Cái chổi luxury</h4>
            <p>$50.000</p>

            <div class="flex slider-item-icon">
              <el-icon size="20"><Collection /></el-icon>
              <p>Thêm vào giỏ hàng</p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <div
      class="flex sale-banner"
      style="margin-top: 20px; justify-content: space-between"
    >
      <el-row :gutter="20">
        <el-col :xs="8" :sm="6" :md="4" :lg="12" :xl="1">
          <div class="deal-item">
            <img src="@/assets/sale/04.webp" alt="" />
          </div>
        </el-col>

        <el-col :xs="8" :sm="6" :md="4" :lg="12" :xl="1">
          <div class="deal-item">
            <img src="@/assets/sale/05.webp" alt="" />
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
const modules = [Navigation];
</script>
<style src="./Hot.scss"></style>
