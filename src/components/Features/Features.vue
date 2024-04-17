<template>
    <div class="container">
        <div class="Headline2Text">Features that suit your needs</div>
        <div class="subcontainer">
            <FeatureboxComponent imagePath="f1.svg"/>
            <FeatureboxComponent />
            <FeatureboxComponent />
            <FeatureboxComponent />
            <FeatureboxComponent />
            <FeatureboxComponent />
            <FeatureboxComponent />
            <FeatureboxComponent />
            <FeatureboxComponent />
        </div>
    </div>
</template>

<script>


import FeatureboxComponent from "../Featurebox/Featurebox.vue"


export default {
    name: 'FeaturesComponent',
    components: {
        FeatureboxComponent
    }
}
</script>

<style lang="scss" scoped>
@import './Features.scss';
</style>