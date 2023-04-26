<template>
  <Header></Header>

  <div class="container blog-detail">

    <div class="back-list">
      <router-link to="/tin-tuc">
        <div class="back-item">
          <el-icon><Back /></el-icon>
          Về trang tin tức
        </div>
        
      </router-link>      
    </div>

    <div class="image-top">
      <img src="@/assets/test.jpg" alt="">
    </div>

    <div class="content-body">
      <h2 class="title-post">Cách tôi đã kiếm 1000$ mỗi tháng</h2>
      <span class="info-post"> Thứ năm - 16.03.2023 / 2 bình luận</span>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ull laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprhen voluptate velit esse cillum dolore eu fugiat to nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qei officia deser mollit anim id est to laborum sed ut perspiciatis.</p>
    
    
      <div class="flex temp">
        <img src="https://htmldemo.net/devita/devita/assets/img/blog/blog-dec-img1.jpg" alt="">
        <img src="https://htmldemo.net/devita/devita/assets/img/blog/blog-dec-img2.jpg" alt="">

      </div>
    </div>
  </div>

  <Footer></Footer>
</template>


<script setup>
import Header from '@/components/Header/Header.vue';
import Footer from '@/components/Footer/Footer.vue';
</script>

<style src="./BlogDetail.scss"></style>