<template></template>


<style scoped>

    .container {
        text-align: center;
    }

    .about {
        padding: 60px 0;
    }

    .about-desc {
        font-size: 12px;
    }

    .about-item img{
        height: 50px;
        width: 50px;
    }

    .about-item {
        border-radius: 8px;
        padding: 20px 2px;
        cursor: pointer;
        border: 2px dashed transparent;
    }

    .about-item h4 {
        margin-top: 10px;
    }

    .about-item p {
        font-size: 14px;
    }

    .about-item:hover{
        box-shadow: 0px 25px 70px 0px rgb(1 33 58 / 11%);
        transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
        border: 2px dashed #f47b2a;
    }
</style>