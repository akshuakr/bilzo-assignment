<template>
  <div class="container">
    <!-- <ButtonComponent /> -->
    <NavbarComponent />
    <div class="nav-bottomline"></div>
    <div class="hero">
      <div class="text1">The World’s Most Configurable</div>
      <div class="text2">Travel & Expense Management Software</div>
      <div class="text3">Configure any rule. Enable a world class mobile experience for your users. Get seamless
        reporting & integrations. Inbuilt OCR expense scanning. Manage travel & non-travel expenses. Open APIs to
        connect with external systems.</div>
      <FormComponent />
      <div class="used-by">
        <div class="used-by-text">USED BY OVER 50 ENTERPRISES</div>
        <ImageCarouselComponent />
      </div>
    </div>
    <!-- <div class="used-by">

    </div> -->
    <!-- <FeatureboxComponent/> -->
    <FeaturesComponent />
    <div class="integrations1">
      <div class="Headline2Text">Integrations</div>
      <img src="public/pointers.svg" alt="" class="pointers">
      <div class="integrations">
        <div class="i1">
          <div class="i-box">
            <img src="public/i1.svg" alt="">
            <div class="i-text1">HRMS Systems</div>
          </div>
          <div class="i-text2">We can integrate with any HRMS as long as the employee master can be made available to us
            over SFTP/API. <br /><br /> We
            are already deeply integrated with PeopleStrong and others are coming up.</div>
        </div>
        <div class="i1 i2">
          <div class="i-box">
            <img src="public/i2.svg" alt="">
            <div class="i-text1">Finance Systems</div>
          </div>
          <div class="i-text2">Connect us with your finance systems to get all cost centers mapped, and all data
            reconciled on a
            periodic/regular basis. <br /><br />Open APIs available to connect.</div>
        </div>
        <div class="i1 i3">
          <div class="i-box">
            <img src="public/i3.svg" alt="">
            <div class="i-text1">Single Sign-on Systems</div>
          </div>
          <div class="i-text2">We can integrate to ensure that your users don’t have to log in multiple times into
            different logins. <br /><br />SSO
            is possible with any system that offers it.</div>
        </div>
      </div>
    </div>
    <CustomerLoveComponent />
    <div class="BottomForm">
      <div class="Headline2Text">Manage your travel and expenses the smart way!</div>
      <FormComponent :bottomForm="true" />
    </div>
    <FooterComponent />
  </div>
</template>

<script>

import ButtonComponent from '../components/Button/Button.vue'
import NavbarComponent from '../components/Navbar/Navbar.vue'
import FormComponent from '../components/Form/Form.vue';
import FeaturesComponent from '../components/Features/Features.vue';
import ImageCarouselComponent from '../components/Carousel/Carousel.vue'
import CustomerLoveComponent from "../components/CustomerLove/CustomerLove.vue"
import FooterComponent from "../components/Footer/Footer.vue"

export default {
  name: 'Homepage',
  components: {
    ButtonComponent,
    NavbarComponent,
    FormComponent,
    FeaturesComponent,
    ImageCarouselComponent,
    CustomerLoveComponent,
    FooterComponent,
    // FeatureboxComponent

  }
}
</script>

<style lang="scss" scoped>
@import './Homepage.scss';
</style>