<template>
  <div class="container">
    <!-- <ButtonComponent /> -->
    <NavbarComponent/>
    <div class="nav-bottomline"></div>
    <div class="hero">
      <div class="text1">The World’s Most Configurable</div>
      <div class="text2">Travel & Expense Management Software</div>
      <div class="text3">Configure any rule. Enable a world class mobile experience for your users. Get seamless reporting & integrations. Inbuilt OCR expense scanning. Manage travel & non-travel expenses. Open APIs to connect with external systems.</div>
    </div>
  </div>
</template>

<script>

import ButtonComponent from '../components/Button/Button.vue'
import NavbarComponent from '../components/Navbar/Navbar.vue'

export default {
  name: 'Homepage',
  components: {
    ButtonComponent,
    NavbarComponent
  }
}
</script>

<style lang="scss" scoped>
@import './Homepage.scss';
</style>