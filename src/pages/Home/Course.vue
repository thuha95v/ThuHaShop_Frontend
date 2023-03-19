<template></template>

<script setup>
import "swiper/css";
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper';

const modules = [Navigation, Pagination, Autoplay]


const breakpoints = {
    320: { slidesPerView: 1, spaceBetween: 10 },
    380: { slidesPerView: 1, spaceBetween: 10 },
    480: { slidesPerView: 2, spaceBetween: 30 },
    768: { slidesPerView: 2, spaceBetween: 20 },
    1024: { slidesPerView: 3, spaceBetween: 30 },
}

const autoplay = {
    delay: 2000,
    disableOnInteraction: false,
}

</script>
<style scoped>

    .swiper {
        margin-top: 20px;
    }

    .course {
        position: relative;
    }

    
    img {
        width: 100%;
        height: 230px;
        border-radius: 10px;
        object-fit: cover;
        margin-right: 10px;
    }

    .slide-zoom {
        height: 230px;
        border-radius: 10px;
        overflow: hidden;
        cursor: pointer;
    }

    .slide-zoom img {
        transition: transform .5s ease;
    }

    .slide-zoom img:hover {
        transform: scale(1.1);
    }

    .teacher-detail {
        display: flex;
        align-items: center;
    }

    .course-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .course-item h4:hover{
        color: #f47b2a;
        cursor: pointer;
    }

    .teacher-avatar {
        height: 30px;
        width: 30px;
        border-radius: 50%;
        line-height: 50px;
    }

    button {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: none;
        cursor: pointer;
        background-color: white;
        box-shadow: 0px 6px 15px 0px rgb(64 79 104 / 8%);
    }

    button:hover:enabled {
        background-color: #f47b2a;
        color: white;
    }

    @media screen and (max-width: 380px) {
        
    }
</style>