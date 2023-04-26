<template>
  <Header></Header>
  <div class="container product-detail">
    <el-row :gutter="10">
      <el-col :xs="8" :sm="6" :md="4" :lg="10" :xl="1">
        <div class="product-image">
          <img src="https://htmldemo.net/devita/devita/assets/img/product-details/product-detalis-bl5.jpg" alt="">
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
        </div>
      </el-col>
    </el-row>
  </div>

  <Footer></Footer>
</template>

<script setup>
import { ref } from 'vue'
import Header from '@/components/Header/Header.vue';
import Footer from '@/components/Footer/Footer.vue';

const rate = ref(4)

</script>

<style src="./ProductDetail.scss"></style>