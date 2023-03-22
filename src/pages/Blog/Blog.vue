<template>
    <Header />
    <div class="blog">
        <div class="blog-bg">
            <div class="container blog-breadcrumb">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/' }">Trang chủ</el-breadcrumb-item>
                    <el-breadcrumb-item><a href="/tin-tuc">Tin tức</a></el-breadcrumb-item>
                </el-breadcrumb>
            </div>
        </div>

        <div class="container">
            <el-row :gutter="0" style="width: 100%;">
                <el-col :xs="2" :sm="5" :md="7" :lg="8" :xl="8" v-for="item in arr">
                    <div class="blog-item">
                        <div>
                            <img src="https://i.ytimg.com/vi/wFNQj0bWQl4/maxresdefault.jpg" alt="">
                            <span class="item-tag">Sale 08/03</span>

                            <p class="item-title">Giảm giá 80% giá kim cương nhân ngày 08/03</p>

                            <p class="item-desc">The first line of lorem Ipsum: "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>

                            <div class="item-info">
                                <div><el-icon><Calendar /></el-icon> 23/12/2023</div>
                                <div>Xem thêm</div>
                            </div>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>


        <div class="container pagination">
            <el-pagination background layout="prev, pager, next" :total="1000" />

        </div>

    </div>

    <!-- <Footer /> -->
</template>

<script setup>
import { reactive, ref } from 'vue';
import { ElNotification } from 'element-plus'
import Header from '@/components/Header/Header.vue';
import Footer from '@/components/Footer/Footer.vue';
const loading = ref(false)

let arr = ref([1,2,3,4,5,6])
</script>

<style lang="scss" src="./Blog.scss" ></style>