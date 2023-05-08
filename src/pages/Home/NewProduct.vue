<template>
  <div class="container new-product">
    <el-row>
      <el-col :xs="8" :sm="6" :md="4" :lg="24" :xl="1">
        <div class="flex deal-hot">
          <h3>Sản phẩm mới</h3>
          <div class="hot-button">
            <el-icon class="next-button-prev" :size="15"
              ><ArrowLeftBold
            /></el-icon>
            <el-icon class="next-button-next" :size="15"
              ><ArrowRightBold
            /></el-icon>
          </div>
        </div>
      </el-col>
    </el-row>

    <div class="new-slider">
      <swiper
        :slides-per-view="5"
        :grid="{
          rows: 2,
        }"
        :space-between="0"
        :modules="modules"
        :navigation="{
          enabled: true,
          prevEl: '.next-button-prev',
          nextEl: '.next-button-next',
        }"
      >
        <swiper-slide>
          <div class="hot-slider-item">
            <img src="@/assets/product/06.webp" alt="" srcset="" />
            <span>Trang sức bạc</span>
            <h4>Cái chổi luxury</h4>
            <p>$50.000</p>

            <div class="flex slider-item-icon">
              <el-icon size="20"><Collection /></el-icon>
              <p>Thêm giỏ hàng</p>
            </div>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="hot-slider-item">
            <img src="@/assets/product/07.webp" alt="" srcset="" />
            <span>Trang sức bạc</span>
            <h4>Cái chổi luxury</h4>
            <p>$50.000</p>

            <div class="flex slider-item-icon">
              <el-icon size="20"><Collection /></el-icon>
              <p>Thêm giỏ hàng</p>
            </div>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="hot-slider-item">
            <img src="@/assets/product/08.webp" alt="" srcset="" />
            <span>Trang sức bạc</span>
            <h4>Cái chổi luxury</h4>
            <p>$50.000</p>

            <div class="flex slider-item-icon">
              <el-icon size="20"><Collection /></el-icon>
              <p>Thêm giỏ hàng</p>
            </div>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="hot-slider-item">
            <img src="@/assets/product/09.webp" alt="" srcset="" />
            <span>Trang sức bạc</span>
            <h4>Cái chổi luxury</h4>
            <p>$50.000</p>

            <div class="flex slider-item-icon">
              <el-icon size="20"><Collection /></el-icon>
              <p>Thêm giỏ hàng</p>
            </div>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="hot-slider-item">
            <img src="@/assets/product/10.webp" alt="" srcset="" />
            <span>Trang sức bạc</span>
            <h4>Cái chổi luxury</h4>
            <p>$50.000</p>

            <div class="flex slider-item-icon">
              <el-icon size="20"><Collection /></el-icon>
              <p>Thêm giỏ hàng</p>
            </div>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="hot-slider-item">
            <img src="@/assets/product/11.webp" alt="" srcset="" />
            <span>Trang sức bạc</span>
            <h4>Cái chổi luxury</h4>
            <p>$50.000</p>

            <div class="flex slider-item-icon">
              <el-icon size="20"><Collection /></el-icon>
              <p>Thêm giỏ hàng</p>
            </div>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="hot-slider-item">
            <img src="@/assets/product/12.webp" alt="" srcset="" />
            <span>Trang sức bạc</span>
            <h4>Cái chổi luxury</h4>
            <p>$50.000</p>

            <div class="flex slider-item-icon">
              <el-icon size="20"><Collection /></el-icon>
              <p>Thêm giỏ hàng</p>
            </div>
          </div>
        </swiper-slide> 

        <swiper-slide>
          <div class="hot-slider-item">
            <img src="@/assets/product/13.webp" alt="" srcset="" />
            <span>Trang sức bạc</span>
            <h4>Cái ghế luxury</h4>
            <p>$50.000</p>

            <div class="flex slider-item-icon">
              <el-icon size="18"><Collection /></el-icon>
              <p>Thêm giỏ hàng</p>
            </div>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="hot-slider-item">
            <img src="@/assets/product/14.webp" alt="" srcset="" />
            <span>Trang sức bạc</span>
            <h4>Cái sao luxury</h4>
            <p>$50.000</p>

            <div class="flex slider-item-icon">
              <el-icon size="20"><Collection /></el-icon>
              <p>Thêm giỏ hàng</p>
            </div>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="hot-slider-item">
            <img src="@/assets/product/06.webp" alt="" srcset="" />
            <span>Trang sức bạc</span>
            <h4>Cái tròn luxury</h4>
            <p>$50.000</p>

            <div class="flex slider-item-icon">
              <el-icon size="20"><Collection /></el-icon>
              <p>Thêm giỏ hàng</p>
            </div>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="hot-slider-item">
            <img src="@/assets/product/07.webp" alt="" srcset="" />
            <span>Trang sức bạc</span>
            <h4>Cái chổi luxury</h4>
            <p>$50.000</p>

            <div class="flex slider-item-icon">
              <el-icon size="20"><Collection /></el-icon>
              <p>Thêm giỏ hàng</p>
            </div>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="hot-slider-item">
            <img src="@/assets/product/07.webp" alt="" srcset="" />
            <span>Trang sức bạc</span>
            <h4>Cái chổi luxury</h4>
            <p>$50.000</p>

            <div class="flex slider-item-icon">
              <el-icon size="20"><Collection /></el-icon>
              <p>Thêm giỏ hàng</p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>

    
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Grid, Navigation } from "swiper";
import 'swiper/css/grid';

const modules = [Grid, Navigation];
</script>
<style src="./NewProduct.scss"></style>
