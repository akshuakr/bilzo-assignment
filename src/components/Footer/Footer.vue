<template>
    <div class="container">
        <div class="subcontainer">
            <div class="top">
                <img src="public/MainLogo.svg" alt="">

                <div class="right1">
                    <div class="right2">
                        <img src="public/location.svg" alt="">
                        New Delhi
                    </div>
                    <div class="right2">
                        <img src="public/phone.svg" alt="">
                        +91 9992981775
                    </div>
                    <div class="right2">
                        <img src="public/email.svg" alt="">
                        in.akshansh@gmail.com
                    </div>
                    <div class="right3 text">
                        Other Links
                        <!-- <div> -->
                        <a href="https://www.linkedin.com/in/akshuakr/">
                            <img src="public/linkedin.svg" alt="">
                        </a>
                        <a href="https://github.com/akshuakr">
                            <img src="public/github.svg" alt="">
                        </a>


                        <!-- </div> -->
                    </div>

                </div>
            </div>
            <div class="line"></div>
            <div class="bottom">
                <div class="bottom-left">
                    <div>Blogs</div>
                    <div>Features</div>
                    <div>Pricing</div>
                    <div>Integration</div>
                </div>
                <div class="bottom-right">
                    Copyright © 2024 • ExpenseBook
                    <!-- <img src="public/Ellipse.svg" alt=""> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>


// import FeatureboxComponent from "../Featurebox/Featurebox.vue"
// import BoxComponent from "./Box.vue";

export default {
    name: 'FooterComponent',
    components: {
        // BoxComponent,
    }
}
</script>

<style lang="scss" scoped>
@import './Footer.scss';
</style>