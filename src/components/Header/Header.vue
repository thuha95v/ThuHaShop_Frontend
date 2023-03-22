<template>
    <div class="header">
        <div class="container">
            <div class="container flex header-auth">
                <router-link to="/login">Đăng nhập</router-link>
                <router-link to="/signup">Đăng ký</router-link>
            </div>
        </div>
        <el-divider />
        <div class="container flex header-center">
            <img src="@/assets/logo.webp" alt="" srcset="">

            <div class="flex header-search">
                <div class="">
                    <el-input placeholder="Tìm kiếm sản phẩm">
                        <template #append>
                            <el-icon color="white" :size="20">
                                <Search />
                            </el-icon>
                        </template>
                    </el-input>
                </div>

                <el-badge class="header-badge" :value="12" type="warning">
                    <template #default>
                        <div class="flex header-card">
                            <el-icon color="#AB8C74" :size="26">
                                <Goods />
                            </el-icon>
                            <span>5.000.000</span>
                            <el-icon>
                                <ArrowDown />
                            </el-icon>
                        </div>
                    </template>
                </el-badge>
            </div>
        </div>
        <el-divider />

        <div class="container header-category">
            <ul class="flex">
                <router-link to="/">Trang chủ</router-link>
                <router-link v-for="category in categories" :to="category.slug">{{ category.name }}</router-link>
            </ul>
        </div>

        <el-divider class="mb-0" />


        <el-backtop :right="100" :bottom="100">
            <div>
                <el-icon color="#AB8C74">
                    <CaretTop />
                </el-icon>
            </div>
        </el-backtop>
    </div>
</template>


<style lang="scss" src="./Header.scss"></style>

<script setup>
import { onBeforeMount, ref } from "vue"
import api from '@/api/axios'
let categories = ref([])
let categoryLocalStorage = localStorage.getItem('thuha:categories');

const getCategories = async () => {
    let data = await api.get("/api/v1/categories")
    localStorage.setItem('thuha:categories', JSON.stringify(data.data));
    categories.value = data.data
}

// const checkDiff = (data) => {

// }
// if(!categoryLocalStorage){
//     getCategories()
// }
// else {
//     categories.value = JSON.parse(categoryLocalStorage)

// }

onBeforeMount(() => {
    getCategories()
})
</script>