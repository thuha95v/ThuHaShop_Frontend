<template>
  <div class="container profile">
    <el-row>
    <el-row>
      <div class="back-list">
      <router-link to="/">
        <div class="back-item">
          <el-icon><Back /></el-icon>
          Về trang chủ
        </div>
        
      </router-link>      
    </div>

    </el-row>
      <el-col :xs="8" :sm="6" :md="4" :lg="24" :xl="1">
        <div class="background">
          <div class="avatar">
            <img src="@/assets/avatar.jpg" alt="">

            <h1>Thu Ha</h1>
          </div>
        </div>
      </el-col>

      <el-col :xs="8" :sm="6" :md="4" :lg="24" :xl="1">
        
        <div class="nav-service"> 
          <!-- <hr> -->

          <ul>
            <li>
              <span>
                Thông tin cá nhân
              </span>
            </li>
            <li>
              <span>
                Đổi mật khẩu
              </span>
            </li>
            <li>
              <span>
                Đơn hàng
              </span>
            </li>
          </ul>
        </div>
      </el-col>
    </el-row>

    <el-row>
      <el-col :xs="8" :sm="6" :md="4" :lg="24" :xl="1">
        <div class="change-info">
          <div>
            <label>Họ tên: </label>
            <el-input
              v-model="input1"
              class="input-text"
              size="large"
              placeholder="Nhập họ tên"
            />
          </div>

          <div>
            <label>Email: </label>
            <el-input
              v-model="input1"
              class="input-text"
              size="large"
              placeholder="Nhập email"
            />
          </div>

          <div>
            <label>SĐT: </label>
            <el-input
              v-model="input1"
              class="input-text"
              size="large"
              placeholder="Nhập số điện thoại"
            />
          </div>

          <div>
            <label>Địa chỉ: </label>
            <el-input
              v-model="input1"
              class="input-text"
              size="large"
              placeholder="Nhập địa chỉ"
            />
          </div>
          <div class="btn-save">Lưu thay đổi</div>
        </div>

      </el-col>
    </el-row>
  </div>
</template>


<style src="./Profile.scss"></style>