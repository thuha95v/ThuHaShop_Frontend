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
                <el-col :xs="2" :sm="5" :md="7" :lg="8" :xl="8" v-for="post in posts.data" :key="post.id">
                    <div class="blog-item" >
                        <div>
                            <el-skeleton style="width: 240px" :loading="loading" animated>
                                <template #template>
                                    <el-skeleton-item variant="image" style="width: 240px; height: 240px" />
                                    <div style="padding: 14px;">
                                        <el-skeleton-item variant="p" style="width: 50%" />
                                        <div tyle="display: flex; align-items: center; justify-items: space-between;">
                                        <el-skeleton-item variant="text" style="margin-right: 16px" />
                                        <el-skeleton-item variant="text" style="width: 30%" />
                                        </div>
                                    </div>
                                </template>

                                <template #default>
                                    <img :src="post.thumbnail" alt="">
                                    <span class="item-tag">{{ JSON.parse(post.tags)[0] }}</span>

                                    <p class="item-title">{{ post.title }}</p>

                                    <p class="item-desc">{{ post.short_desc }}</p>

                                    <div class="item-info">
                                        <div><el-icon><Calendar /></el-icon> {{ format(post.createdAt) }}</div>
                                        <div><router-link to="/tin-tuc/hello">
                                            Xem thêm
                                        </router-link></div>
                                    </div>
                                </template>
                            </el-skeleton>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>


        <div class="container pagination" v-if="!loading">
            <el-pagination background layout="prev, pager, next" :total="posts.total" />
        </div>

    </div>

    <Footer />
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue';
import { ElNotification } from 'element-plus'
import api from '@/api/axios'
import format  from "@/utils/formatTime";

import Header from '@/components/Header/Header.vue';
import Footer from '@/components/Footer/Footer.vue';

let posts = reactive({
    data: [{},{},{}],
    total: 0,
})

let loading = ref(true)

onMounted(async() => {
    let data = await api.get("/api/v1/posts")
    setTimeout(() => {
        Object.assign(posts, data)
        loading.value = false;
    },400)
})
</script>

<style lang="scss" src="./Blog.scss" ></style>