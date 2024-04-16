<template>
    <div class="container">
        <div class="left">
            <img src="public/MainLogo.svg" alt="">
        </div>
        <div class="right">
            <div class="text">Blogs</div>
            <div class="text">Features</div>
            <div class="text">Pricing</div>
            <div class="text">Integrations</div>
            <ButtonComponent />
        </div>
        <div class="hamburger">
            <img src="public/Hamburger.svg" alt="">
        </div>
    </div>
</template>

<script>

import ButtonComponent from '../Button/Button.vue'

export default {
    name: 'NavbarComponent',
    components: {
        ButtonComponent
    }
}
</script>

<style lang="scss" scoped>
@import './Navbar.scss';
</style>