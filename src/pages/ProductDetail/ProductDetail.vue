<template>
  <Header></Header>
  <div class="container product-detail">
    <el-row :gutter="10">
      <el-col :xs="8" :sm="6" :md="4" :lg="10" :xl="1">
        <div class="product-image">
          <img src="https://htmldemo.net/devita/devita/assets/img/product-details/product-detalis-bl5.jpg" alt="">
        </div>

        <div>
            <swiper :navigation="true" :modules="modules" :slides-per-view="4" class="mySwiper">
              <swiper-slide>
                <div class="slider-item">
                  <img src="https://htmldemo.net/devita/devita/assets/img/product-details/product-detalis-s2.jpg" alt="" srcset="">
                </div>
              </swiper-slide>
              
              <swiper-slide>
                <div class="slider-item">
                  <img src="https://htmldemo.net/devita/devita/assets/img/product-details/product-detalis-s3.jpg" alt="" srcset="">
                </div>
              </swiper-slide>

              <swiper-slide>
                <div class="slider-item">
                  <img src="https://htmldemo.net/devita/devita/assets/img/product-details/product-detalis-s4.jpg" alt="" srcset="">
                </div>
              </swiper-slide>

              <swiper-slide>
                <div class="slider-item">
                  <img src="https://htmldemo.net/devita/devita/assets/img/product-details/product-detalis-s5.jpg" alt="" srcset="">
                </div>
              </swiper-slide>

              <swiper-slide>
                <div class="slider-item">
                  <img src="https://htmldemo.net/devita/devita/assets/img/product-details/product-detalis-s2.jpg" alt="" srcset="">
                </div>
              </swiper-slide>

              <swiper-slide>
                <div class="slider-item">
                  <img src="https://htmldemo.net/devita/devita/assets/img/product-details/product-detalis-s2.jpg" alt="" srcset="">
                </div>
              </swiper-slide>
            </swiper>
          </div>
      </el-col>
      <el-col :xs="4" :sm="6" :md="8" :lg="14" :xl="11">
        <div class="product-information">
          <h2>Tai nghe luxury</h2>

          <div class="product-rate">
            <el-rate v-model="rate" size="small" />
            <p>32 nhận xét</p>
          </div>

          <h1>$5.000</h1>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem veniam autem repudiandae magnam ipsa, laudantium ut ipsam aperiam quo amet fuga consequuntur deserunt sed vitae provident! Illo qui voluptate saepe.</p>
        
          <el-divider>
            <el-icon><star-filled /></el-icon>
          </el-divider>

          <div class="flex product-func">
            <span>Số lượng: </span>
            <input type="text" value="01">
            <p class="btn-cart">Thêm vào giỏ hàng</p>
            <p class="btn-favourite">
              <el-icon><Collection /></el-icon>
            </p>
          </div>

          <div style="margin-top: 30px;">
            <span>Thể loại: Nhẫn, Trang sức, Trang sức vàng</span>
          </div>
        </div>
      </el-col>

      <el-col :lg="24">
        <el-tabs v-model="activeName" class="desc-tabs" @tab-click="handleClick">
          <el-tab-pane label="Mô tả" name="first">Mô tả nè</el-tab-pane>
          <el-tab-pane label="Đánh giá" name="third">Đánh giá nè</el-tab-pane>
          <!-- <el-tab-pane label="Thể loại" name="second">thể loại nè</el-tab-pane> -->
        </el-tabs>
      </el-col>
    </el-row>


    <div class="container related-product">
      <el-row>
        <el-col :xs="8" :sm="6" :md="4" :lg="24" :xl="1">
          <div class="flex deal-hot">
            <h3>Sản phẩm liên quan</h3>
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
    </div>
  </div>

  <Footer></Footer>
</template>

<script setup>
import { ref } from 'vue'
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import Header from '@/components/Header/Header.vue';
import Footer from '@/components/Footer/Footer.vue';

import 'swiper/css';
// import 'swiper/css/navigation';

const modules = [Navigation]
const rate = ref(4)
const activeName = ref('first')

</script>

<style src="./ProductDetail.scss"></style>