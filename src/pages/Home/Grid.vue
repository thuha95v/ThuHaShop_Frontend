<template>
  <div class="container home-grid">
    <el-row>
      <el-col :xs="8" :sm="6" :md="4" :lg="24" :xl="1">
        <div class="flex deal-hot">
          <h3>Sản phẩm bán chạy</h3>
          <div class="hot-button">
            <el-icon class="grid-button-prev" :size="15"
              ><ArrowLeftBold
            /></el-icon>
            <el-icon class="grid-button-next" :size="15"
              ><ArrowRightBold
            /></el-icon>
          </div>
        </div>
      </el-col>
    </el-row>

    <swiper
        :slides-per-view="1"
        :space-between="0"
        :modules="modules"
        :navigation="{
          enabled: true,
          prevEl: '.grid-button-prev',
          nextEl: '.grid-button-next',
        }"
      >
        <swiper-slide>
          <div class="slider-item">
            <el-row>
              <el-col :xs="8" :sm="6" :md="4" :lg="16" :xl="1">
                <div class="flex product-left">
                  <div>
                    <img src="@/assets/product/15.webp" alt="" srcset="">
                  </div>

                  <div class="product-info"> 
                    <span>Trang sức bạc</span>
                    <h4>Trang sức bạc là sản phẩm thủ công</h4>
                    <span class="price">$20.000</span>

                    <ul>
                      <li>Hàng giới hạn</li>
                      <li>Hàng sản xuất tại Đức</li>
                      <li>Hàng đẫ được kiểm định</li>
                      <li>Hàng hoàng dz</li>
                    </ul>

                    <div class="flex slider-item-icon">
                      <p>Thêm vào giỏ hàng</p>
                      <el-icon size="18"><Collection /></el-icon>
                    </div>
                  </div>
                </div>

              </el-col>

              <el-col :xs="8" :sm="6" :md="4" :lg="8" :xl="1">
                <div class="product-right">
                  <div class="flex right-item">
                    <img src="@/assets/product/16.webp" alt="" srcset="" />
                    <div>
                      <span>Trang sức bạc</span>
                      <h4>Trang sức bạc là sản phẩm thủ công</h4>
                      <span class="price">$20.000</span>
                    </div>
                  </div>

                  <div class="flex right-item">
                    <img src="@/assets/product/17.webp" alt="" srcset="" />
                    <div>
                      <span>Trang sức bạc</span>
                      <h4>Trang sức bạc là sản phẩm thủ công</h4>
                      <span class="price">$20.000</span>
                    </div>
                  </div>
                </div>
                
              </el-col>
            </el-row>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="slider-item">
            <el-row>
              <el-col :xs="8" :sm="6" :md="4" :lg="16" :xl="1">
                <div class="flex product-left">
                  <div>
                    <img src="@/assets/product/18.webp" alt="" srcset="">
                  </div>

                  <div class="product-info"> 
                    <span>Trang sức bạc</span>
                    <h4>Trang sức bạc là sản phẩm thủ công</h4>
                    <span class="price">$20.000</span>

                    <ul>
                      <li>Hàng giới hạn</li>
                      <li>Hàng sản xuất tại Đức</li>
                      <li>Hàng đẫ được kiểm định</li>
                      <li>Hàng hoàng dz</li>
                    </ul>

                    <div class="flex slider-item-icon">
                      <p>Thêm vào giỏ hàng</p>
                      <el-icon size="18"><Collection /></el-icon>
                    </div>
                  </div>
                </div>

              </el-col>

              <el-col :xs="8" :sm="6" :md="4" :lg="8" :xl="1">
                <div class="product-right">
                  <div class="flex right-item">
                    <img src="@/assets/product/16.webp" alt="" srcset="" />
                    <div>
                      <span>Trang sức bạc</span>
                      <h4>Trang sức bạc là sản phẩm thủ công</h4>
                      <span class="price">$20.000</span>
                    </div>
                  </div>

                  <div class="flex right-item">
                    <img src="@/assets/product/17.webp" alt="" srcset="" />
                    <div>
                      <span>Trang sức bạc</span>
                      <h4>Trang sức bạc là sản phẩm thủ công</h4>
                      <span class="price">$20.000</span>
                    </div>
                  </div>
                </div>
                
              </el-col>
            </el-row>
          </div>
        </swiper-slide>
      </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
const modules = [Navigation];
</script>


<style src="./Grid.scss"></style>

