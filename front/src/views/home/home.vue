<style lang="less" scoped>
@import "./home.less";
@import "../../styles/common.less";

.background1 {
    background-image: url("https://artskyhome.com:17476/static/gitee/medicineSystem/home3.jpg")
}

.background2 {
    background-image: url("https://artskyhome.com:17476/static/gitee/medicineSystem/home1.jpg")
}

.background3 {
    background-image: url("https://artskyhome.com:17476/static/gitee/medicineSystem/home2.jpg")
}
</style>

<template>
<div>
    <div id="myloader">
        <div class="loader">
            <div class="grid">
                <div class="cube cube1"></div>
                <div class="cube cube2"></div>
                <div class="cube cube3"></div>
                <div class="cube cube4"></div>
                <div class="cube cube5"></div>
                <div class="cube cube6"></div>
                <div class="cube cube7"></div>
                <div class="cube cube8"></div>
                <div class="cube cube9"></div>
            </div>
        </div>
    </div>
    <div id="main-wrap">
        <div id="page-content" class="header-static">
            <div id="flexslider-nav" class="fullpage-wrap small">
                <ul class="slides">
                    <li class="background1">
                        <div class="text center">
                            <h1 class="heading center white margin-bottom-small flex-animation">基于vue的医疗后台管理系统<br>-</h1>
                            <p class="heading white center margin-bottom flex-animation">xxx</p>
                            <p class="heading white center margin-bottom flex-animation">本次登录地点:池州</p>
                            <div class="padding-onlytop-md flex-animation">
                       
                            </div>
                        </div>
                        <div class="gradient dark"></div>
                    </li>
                    <li class="background2">
                        <div class="text center">
                            <h1 class="heading center white margin-bottom-small flex-animation no-opacity">基于vue的医疗后台管理系统<br>-</h1>
                            <p class="heading white center margin-bottom flex-animation no-opacity">xxx</p>
                            <p class="heading white center margin-bottom flex-animation">本次登录地点:池州</p>
                            <div class="padding-onlytop-md flex-animation no-opacity">
                             
                            </div>
                        </div>
                        <div class="gradient dark"></div>
                    </li>
                    <li class="background3">
                        <div class="text center">
                            <h1 class="heading center white margin-bottom-small flex-animation no-opacity">基于vue的医疗后台管理系统<br>-</h1>
                            <p class="heading white center margin-bottom flex-animation no-opacity">xxx</p>
                            <p class="heading white center margin-bottom flex-animation">本次登录地点:池州</p>
                            <div class="padding-onlytop-md flex-animation no-opacity">
                    
                            </div>
                        </div>
                        <div class="gradient dark"></div>
                    </li>
                </ul>
                <div class="slider-navigation">
                    <a href="#" class="flex-prev"><i class="material-icons">←</i></a>
                    <div class="slider-controls-container"></div>
                    <a href="#" class="flex-next"><i class="material-icons">→</i></a>
                </div>
            </div>
            <!--  END Slider  -->
        </div>
        <!--  END Page Content -->
    </div>
    <!--  Main Wrap  -->
</div>
</template>

<script>
import {
    ipInfo
} from "@/api/index";
export default {
    name: "home",
    data() {
        return {
            city: ''
        };
    },
    methods: {},
    watch: {},
    mounted() {
        const s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = 'https://artskyhome.com:17476/static/gitee/medicineSystem/assets/js/jquery.min.js';
        document.body.appendChild(s);
        const s2 = document.createElement('script');
        s2.type = 'text/javascript';
        s2.src = 'https://artskyhome.com:17476/static/gitee/medicineSystem/assets/js/jquery.flexslider-min.js';
        document.body.appendChild(s2);
        const s3 = document.createElement('script');
        s3.type = 'text/javascript';
        s3.src = 'https://artskyhome.com:17476/static/gitee/medicineSystem/assets/js/pace.min.js';
        document.body.appendChild(s3);
        const s4 = document.createElement('script');
        s4.type = 'text/javascript';
        s4.src = 'https://artskyhome.com:17476/static/gitee/medicineSystem/assets/js/main.js';
        document.body.appendChild(s4);
        ipInfo().then(res => {
            if (res.success) {
                this.city = res.result;
            }
        });
    }
};
</script>
