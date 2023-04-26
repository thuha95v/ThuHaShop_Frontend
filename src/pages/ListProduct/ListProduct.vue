<template>
  <div class="list-product">
    <Header />
    <div class="container flex product-banner">
      <img src="@/assets/sale/04.webp" alt="" srcset="">
      <img src="@/assets/sale/05.webp" alt="" srcset="">

    </div>
    <div class="container product-filter">
      <h4>Lọc theo: </h4>
      <div class="f-row1 flex">
        <div>
          <el-select class="m-2 filter-metail" v-model="data.metalOptions" placeholder="Chất liệu">
            <el-option v-for="metal in metalOptions" :key="metal.value" :label="metal.label" :value="metal.value" />
          </el-select>
        </div>
          
          <div>
            <el-select v-model="data.colorOptions" class="m-2" placeholder="Màu">
              <el-option v-for="metal in colorOptions" :key="metal.value" :label="metal.label" :value="metal.value" />
            </el-select>
          </div>

          <div>
            <el-select v-model="data.styleOptions" class="m-2" placeholder="Kiểu">
              <el-option v-for="metal in styleOptions" :key="metal.value" :label="metal.label" :value="metal.value" />
            </el-select>
          </div>

          <div>
            <el-select v-model="data.limitedOptions" class="m-2" placeholder="Khác">
              <el-option v-for="metal in limitedOptions" :key="metal.value" :label="metal.label" :value="metal.value" />
            </el-select>
          </div>
      </div>
      
      <div class="flex">
        <div class="filter-price">
          <div class="flex price-slider">
            <h4>Giá: </h4>
            <el-slider v-model="value" :show-tooltip	="false" placement="bottom" range :step="1000000" :min="0" :max="100000000"/>
          </div>
          <div class="input-slider">
            <el-input class="input-01" v-model="formatPriceRange[0]"/>
            <el-input v-model="formatPriceRange[1]"/>
          </div>
        </div>

        <div class="filter-checkbox">
          <el-checkbox label="Mới" size="large" border />
          <el-checkbox label="Bán chạy" size="large" border />
        </div>
      </div>
      

      <el-divider>
        <el-icon><star-filled /></el-icon>
      </el-divider>

      <div class="filter-bottom">
        <div class="btn-filter">
          Lọc ngay
        </div>

        <el-select v-model="sortOptions[0]" class="m-2">
          <el-option v-for="metal in sortOptions" :key="metal.value" :label="metal.label" :value="metal.value" />
        </el-select>
      </div>
    </div>

    
    <div class="container main">  
      <el-row :gutter="10">
        <el-col :xs="8" :sm="6" :md="4" :lg="6" :xl="1">
          <div class="hot-slider-item">
            <img src="@/assets/product/01.webp" alt="" srcset="" />
            <span>Trang sức bạc</span>
            <h4 @click="redirect">Cái chổi luxury</h4>
            <p>$50.000</p>

            <div class="flex slider-item-icon">
              <el-icon size="20"><Collection /></el-icon>
              <p>Thêm vào giỏ hàng</p>
            </div>
          </div>
        </el-col>

        <el-col :xs="8" :sm="6" :md="4" :lg="6" :xl="1">
          <div class="hot-slider-item">
            <img src="@/assets/product/02.webp" alt="" srcset="" />
            <span>Trang sức bạc</span>
            <h4 @click="redirect">Cái ghế luxury</h4>
            <p>$50.000</p>

            <div class="flex slider-item-icon">
              <el-icon size="18"><Collection /></el-icon>
              <p>Thêm vào giỏ hàng</p>
            </div>
          </div>
        </el-col>

        <el-col :xs="8" :sm="6" :md="4" :lg="6" :xl="1">
          <div class="hot-slider-item">
            <img src="@/assets/product/03.webp" alt="" srcset="" />
            <span>Trang sức bạc</span>
            <h4 @click="redirect">Cái sao luxury</h4>
            <p>$50.000</p>

            <div class="flex slider-item-icon">
              <el-icon size="20"><Collection /></el-icon>
              <p>Thêm vào giỏ hàng</p>
            </div>
          </div>
        </el-col>

        <el-col :xs="8" :sm="6" :md="4" :lg="6" :xl="1">
          <div class="hot-slider-item">
            <img src="@/assets/product/04.webp" alt="" srcset="" />
            <span>Trang sức bạc</span>
            <h4 @click="redirect">Cái tròn luxury</h4>
            <p>$50.000</p>

            <div class="flex slider-item-icon">
              <el-icon size="20"><Collection /></el-icon>
              <p>Thêm vào giỏ hàng</p>
            </div>
          </div>
        </el-col>
      </el-row>

      <el-row :gutter="10">
        <el-col :xs="8" :sm="6" :md="4" :lg="6" :xl="1">
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
        </el-col>

        <el-col :xs="8" :sm="6" :md="4" :lg="6" :xl="1">
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
        </el-col>

        <el-col :xs="8" :sm="6" :md="4" :lg="6" :xl="1">
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
        </el-col>

        <el-col :xs="8" :sm="6" :md="4" :lg="6" :xl="1">
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
        </el-col>
      </el-row>

      <el-row :gutter="10">
        <el-col :xs="8" :sm="6" :md="4" :lg="6" :xl="1">
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
        </el-col>

        <el-col :xs="8" :sm="6" :md="4" :lg="6" :xl="1">
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
        </el-col>

        <el-col :xs="8" :sm="6" :md="4" :lg="6" :xl="1">
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
        </el-col>

        <el-col :xs="8" :sm="6" :md="4" :lg="6" :xl="1">
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
        </el-col>
      </el-row>
    </div>

    <div class="container pagination">
      <el-pagination background layout="prev, pager, next" :total="1000" />
    </div>

    <Footer></Footer>
  </div>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'
import { StarFilled } from '@element-plus/icons-vue'

import Header from '@/components/Header/Header.vue';
import Footer from '@/components/Footer/Footer.vue';
import { router } from '@/router'

import { metalOptions, colorOptions, limitedOptions, sortOptions, styleOptions } from './options'

const data = reactive({
  metalOptions: "",
  colorOptions: "",
  limitedOptions: "",
  sortOptions: "",
  styleOptions: ""
})

const value = ref([0, 50000000])

const redirect = () => {
  router.push('/san-pham/test');
}

const formatPriceRange = computed(() => {
  return [`${value.value[0]} VNĐ`, `${value.value[1]} VNĐ`]
})
</script>
<style src="./ListProduct.scss"></style>