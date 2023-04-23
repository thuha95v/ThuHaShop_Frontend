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
                <router-link v-for="category in categories" :to="handlerSlug(category.slug)">{{ category.name }}</router-link>
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
import { onBeforeMount, computed } from "vue"

import { useCategoryStore } from '@/stores/category';
let store = useCategoryStore();

let categories = computed(() => store.getCategories)

const handlerSlug = (slug) => {
    if(slug === "tin-tuc") return "/tin-tuc";
    else return `/p/${slug}`
}
onBeforeMount(() => {
    if(store.categories.length == 0){
        store.callAPICategories();
    }
})
</script>