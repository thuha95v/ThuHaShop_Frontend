<template>
  <Header></Header>

  <div class="container cart">
    <el-row :gutter="10">
      <el-col :xs="8" :sm="6" :md="4" :lg="24" :xl="1">
        <h3 class="cart-title">Giỏ hàng của bạn</h3>
      </el-col>

      <table>
        <thead>
          <tr>
            <th></th>
            <th>Tên sản phẩm</th>
            <th>Giá bán</th>
            <th>Số lượng</th>
            <th>Tổng tiền</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src="https://htmldemo.net/devita/devita/assets/img/cart/cart-3.jpg" alt="" />
            </td>
            <td>Tay chơi game luxry</td>
            <td>$2000</td>
            <td>
              <input type="number" value="02" />
            </td>
            <td>$4000</td>
            <td>
              <el-icon :size="20" color="#AB8C74">
                <Close />
              </el-icon>
            </td>
          </tr>

          <tr>
            <td>
              <img src="https://htmldemo.net/devita/devita/assets/img/cart/cart-4.jpg" alt="" />
            </td>
            <td>Ai pát luxury</td>
            <td>$2000</td>
            <td>
              <input type="number" value="02" />
            </td>
            <td>$4000</td>
            <td>
              <el-icon :size="20" color="#AB8C74">
                <Close />
              </el-icon>
            </td>
          </tr>
        </tbody>
      </table>

      <el-col :xs="8" :sm="6" :md="4" :lg="24" :xl="1">
        <div class="cart-btn">
          <div>Tiếp tục mua sắm</div>
          <div>Dọn dẹp giỏ hàng</div>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="10">
      <el-col :xs="8" :sm="6" :md="4" :lg="8" :xl="1">
        <div class="cart-tax">
          <div class="title-wrap">
            <h4 class="section-bg-white">Thông tin đặt hàng</h4>
          </div>

          <div class="tax-wrapper">
            <p>Vui lòng kiểm tra kỹ thông tin đặt hàng.</p>
            <div class="tax-select-wrapper">
              <div class="tax-select">
                <label> Phương thức thanh toán </label>
                <select class="">
                  <option>Tiền mặt</option>
                  <option>Thanh toán ngân hàng</option>
                </select>
              </div>

              <div class="tax-select">
                <label> Khách hàng </label>
                <input type="text" />
              </div>

              <div class="tax-select">
                <label> Địa chỉ </label>
                <input type="text" />
              </div>

              <div class="tax-select">
                <label>Email</label>
                <input type="text" />
              </div>
            </div>
          </div>
        </div>
      </el-col>

      <el-col :xs="8" :sm="6" :md="4" :lg="8" :xl="1">
        <div class="cart-tax">
          <div class="tax-wrapper">
            <div class="tax-select-wrapper" style="margin-top: 77px;">
              <div class="tax-select">
                <label> Số điện thoại </label>
                <input type="text" />
              </div>

              <div class="tax-select">
                <label> Ghi chú </label>
                <textarea type="text" rows="7" cols="50"></textarea>
              </div>
            </div>
          </div>
        </div>
      </el-col>

      <el-col :xs="8" :sm="6" :md="4" :lg="8" :xl="1">
        <div class="grand-totall">
          <div class="title-wrap">
            <h4 class="cart-bottom-title section-bg-gary-cart">Chi tiết</h4>
          </div>
          <h5>Tổng tiền sản phẩm <span>$260.00</span></h5>
          <div class="total-shipping">
            <h5>Phí vận chuyển</h5>
            <ul>
              <li><input type="checkbox"> Nhanh 5h  <span>$20.00</span></li>
              <li><input type="checkbox"> Hỏa tốc 1h <span>$30.00</span></li>
            </ul>
          </div>
          <h4 class="grand-totall-title">Tổng tiền <span>$260.00</span></h4>
          <a href="#">Đặt hàng</a>
        </div>
      </el-col>
    </el-row>
  </div>
  <Footer></Footer>
</template>

<script setup>
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/Footer.vue";
</script>

<style src="./Cart.scss"></style>
