<template>
    <div class="header">
        <div class="container flex header-auth">
            <router-link to="/login">Đăng nhập</router-link>
            <router-link to="/signup">Đăng ký</router-link>
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
                            <el-icon><ArrowDown /></el-icon>
                        </div>
                    </template>
                </el-badge>
            </div>
        </div>
        <el-divider />

        <div class="container header-category">
            <ul class="flex">
                <li>Trang chủ</li>
                <li>Trang sức vàng</li>
                <li>Trang sức kim cương</li>
                <li>Trang sức giới hạn</li>
                <li>Tin tức</li>
            </ul>
        </div>

        <el-divider/>
            

        <el-backtop :right="100" :bottom="100">
            <div>
                <el-icon color="#AB8C74"><CaretTop /></el-icon>
            </div>
        </el-backtop>
    </div>
</template>


<style lang="scss" src="./Header.scss"></style>