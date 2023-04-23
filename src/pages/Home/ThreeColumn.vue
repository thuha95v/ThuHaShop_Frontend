<template>
  <div class="container three-column">
    <el-row :gutter="10">
      <el-col :xs="8" :sm="6" :md="4" :lg="8" :xl="1">
        <div class="flex deal-hot">
          <h3>Sản phẩm xem nhiều</h3>
          <div class="hot-button">
            <el-icon class="one-button-prev" :size="15"
              ><ArrowLeftBold
            /></el-icon>
            <el-icon class="one-button-next" :size="15"
              ><ArrowRightBold
            /></el-icon>
          </div>
        </div>

        <swiper
        :loop="true"
        :slides-per-view="1"
        :space-between="0"
        :modules="modules"
        :navigation="{
          enabled: true,
          prevEl: '.one-button-prev',
          nextEl: '.one-button-next',
        }"
      >
        <swiper-slide>
          <div class="hot-slider-item">
            <img src="@/assets/product/01.webp" alt="" srcset="" />
            <span>Trang sức bạc</span>
            <h4>Cái chổi luxury</h4>
            <p>$50.000</p>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="hot-slider-item">
            <img src="@/assets/product/02.webp" alt="" srcset="" />
            <span>Trang sức bạc</span>
            <h4>Cái ghế luxury</h4>
            <p>$50.000</p>

          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="hot-slider-item">
            <img src="@/assets/product/03.webp" alt="" srcset="" />
            <span>Trang sức bạc</span>
            <h4>Cái sao luxury</h4>
            <p>$50.000</p>

            
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="hot-slider-item">
            <img src="@/assets/product/04.webp" alt="" srcset="" />
            <p>Trang sức bạc</p>
            <h4>Cái tròn luxury</h4>
            <p>$50.000</p>

            
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="hot-slider-item">
            <img src="@/assets/product/02.webp" alt="" srcset="" />
            <span>Trang sức bạc</span>
            <h4>Cái chổi luxury</h4>
            <p>$50.000</p>

            
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="hot-slider-item">
            <img src="@/assets/product/01.webp" alt="" srcset="" />
            <span>Trang sức bạc</span>
            <h4>Cái chổi luxury</h4>
            <p>$50.000</p>

          </div>
        </swiper-slide>
      </swiper>
      </el-col>

      <el-col :xs="8" :sm="6" :md="4" :lg="8" :xl="1">
        <div class="flex deal-hot">
          <h3>Sản phẩm gợi ý</h3>
          <div class="hot-button">
            <el-icon class="two-button-prev" :size="15"
              ><ArrowLeftBold
            /></el-icon>
            <el-icon class="two-button-next" :size="15"
              ><ArrowRightBold
            /></el-icon>
          </div>
        </div>

        <swiper
        :loop="true"
        :slides-per-view="1"
        :space-between="0"
        :modules="modules"
        :navigation="{
          enabled: true,
          prevEl: '.two-button-prev',
          nextEl: '.two-button-next',
        }"
      >
        <swiper-slide>
          <div class="hot-slider-item">
            <img src="@/assets/product/02.webp" alt="" srcset="" />
            <span>Trang sức bạc</span>
            <h4>Cái ghế luxury</h4>
            <p>$50.000</p>

          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="hot-slider-item">
            <img src="@/assets/product/03.webp" alt="" srcset="" />
            <span>Trang sức bạc</span>
            <h4>Cái sao luxury</h4>
            <p>$50.000</p>

            
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="hot-slider-item">
            <img src="@/assets/product/04.webp" alt="" srcset="" />
            <p>Trang sức bạc</p>
            <h4>Cái tròn luxury</h4>
            <p>$50.000</p>

            
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="hot-slider-item">
            <img src="@/assets/product/02.webp" alt="" srcset="" />
            <span>Trang sức bạc</span>
            <h4>Cái chổi luxury</h4>
            <p>$50.000</p>

            
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="hot-slider-item">
            <img src="@/assets/product/01.webp" alt="" srcset="" />
            <span>Trang sức bạc</span>
            <h4>Cái chổi luxury</h4>
            <p>$50.000</p>

          </div>
        </swiper-slide>
      </swiper>
      </el-col>

      <el-col :xs="8" :sm="6" :md="4" :lg="8" :xl="1">
        <div class="flex deal-hot">
          <h3>Sản phẩm giới hạn</h3>
          <div class="hot-button">
            <el-icon class="three-button-prev" :size="15"
              ><ArrowLeftBold
            /></el-icon>
            <el-icon class="three-button-next" :size="15"
              ><ArrowRightBold
            /></el-icon>
          </div>
        </div>

        <swiper
        :loop="true"
        :slides-per-view="1"
        :space-between="0"
        :modules="modules"
        :navigation="{
          enabled: true,
          prevEl: '.three-button-prev',
          nextEl: '.three-button-next',
        }"
      >
        <swiper-slide>
          <div class="hot-slider-item">
            <img src="@/assets/product/03.webp" alt="" srcset="" />
            <span>Trang sức bạc</span>
            <h4>Cái sao luxury</h4>
            <p>$50.000</p>

            
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="hot-slider-item">
            <img src="@/assets/product/04.webp" alt="" srcset="" />
            <p>Trang sức bạc</p>
            <h4>Cái tròn luxury</h4>
            <p>$50.000</p>

            
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="hot-slider-item">
            <img src="@/assets/product/02.webp" alt="" srcset="" />
            <span>Trang sức bạc</span>
            <h4>Cái chổi luxury</h4>
            <p>$50.000</p>

            
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="hot-slider-item">
            <img src="@/assets/product/01.webp" alt="" srcset="" />
            <span>Trang sức bạc</span>
            <h4>Cái chổi luxury</h4>
            <p>$50.000</p>

          </div>
        </swiper-slide>
      </swiper>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
const modules = [Navigation];
</script>

<style src="./ThreeColumn.scss"></style>