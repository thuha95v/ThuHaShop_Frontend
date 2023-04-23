<template>
    <div class="footer">
        <div class="container">
            <el-row class="footer-service" :gutter="10">
                <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
                    <h4>Miễn phí vận chuyển</h4>    
                    <p>Miễn phí vận chuyển tất cả đơn hàng</p>
                </el-col>

                <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
                    <h4>Hoàn tiền</h4>             
                    <p>30 ngày đổi trả miễn phí</p>
                </el-col>

                <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
                    <h4>Hỗ trợ trực tuyến</h4>             
                    <p>Hỗ trợ trực tuyến 24/7</p>
                </el-col>
            </el-row>
        </div>
        
        <div class="container">
            <el-row class="footer-about" :gutter="10">
                <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                    <h2>Về chúng tôi</h2>    
                    <p>Chào mừng quý khách đến với cửa hàng của chúng tôi - nơi chúng tôi cung cấp các sản phẩm trang sức độc đáo và chất lượng cao. Chúng tôi là một nhóm các chuyên gia trong lĩnh vực trang sức với nhiều năm kinh nghiệm trong việc thiết kế và sản xuất các sản phẩm đẹp mắt và độc đáo.</p>

                    <div class="about-information">
                        <p>Địa chỉ: Trường ĐHCN Hà Nội, Nhổn - Từ Liêm</p>
                        <p>Số điện thoại: 0999999999</p>
                        <p>Email: nguyenthuha21nt@gmail.com</p>
                    </div>
                </el-col>

                <el-col :xs="24" :sm="0" :md="12" :lg="8" :xl="8">
                    <div class="list-infomation">
                        <h2>Thông tin</h2>    
                        <ul>
                            <li>
                                Về chúng tôi
                            </li>
                            <li>
                                Thông tin giao hàng
                            </li>
                            <li>
                                Chính sách bảo mật
                            </li>
                            <li>
                                Dịch vụ khách hàng
                            </li>
                        </ul>
                    </div>
                    
                </el-col>

                <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                    <div class="subscribe-email">
                        <h2>Đăng ký nhận thông báo</h2>
                        <p>Nhận thông tin cập nhật qua email về cửa hàng mới nhất của chúng tôi và các ưu đãi đặc biệt.</p>
                        <input type="email" placeholder="Nhập email">
                        <button>Đăng ký</button>
                    </div>

                </el-col>
            </el-row>
        </div>
        
        <div class="footer-copyright">
            <div class="container flex">
                <p>Bản quyền thuộc về © Thu Ha Luxury</p>
                <img src="@/assets/payment/visa.webp" alt="">
            </div>
        </div>
    </div>
</template>

<script></script>

<style src="./Footer.scss"></style>

