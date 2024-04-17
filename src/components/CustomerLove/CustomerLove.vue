<template>
    <div class="container">
        <div class="Headline2Text">Our customers love us</div>
        <div class="subcontainer">
            <BoxComponent />
            <BoxComponent imagePath="h2.svg" name="Alan Turing" designation="CTO, ABC" borderColor="#a6ddf5" backgroundColor="#e2f2fa"/>
            <BoxComponent imagePath="h3.svg" name="Mark Jacob" designation="CEO, PQR" borderColor="#aacdf6" backgroundColor="#e3eefa"/>
            
        </div>
    </div>
</template>

<script>


// import FeatureboxComponent from "../Featurebox/Featurebox.vue"
import BoxComponent from "./Box.vue";

export default {
    name: 'CustomerLoveComponent',
    components: {
        BoxComponent,
    }
}
</script>

<style lang="scss" scoped>
@import './Customerlove.scss';
</style>