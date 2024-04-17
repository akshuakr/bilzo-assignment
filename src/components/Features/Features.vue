<template>
    <div class="container">
        <div class="Headline2Text">Features that suit your needs</div>
        <div class="subcontainer">
            <FeatureboxComponent imagePath="f1.svg" />
            <FeatureboxComponent imagePath="f2.svg" heading="The Definitive Rule Engine"
                text="Configure ANY policy - and if you can’t configure it, we promise to work on it for free" />
            <FeatureboxComponent imagePath="f3.svg" heading="Customized Reports"
                text="Setup the reports that you want using our seamless reporting engine." />
            <FeatureboxComponent imagePath="f4.svg" heading="Superior Employee Experience"
                text="Manage all expenses and travel requests easily. Empower your employees with personalized reports." />
            <FeatureboxComponent imagePath="f5.svg" heading="Easy Integrations"
                text="Integrate with your upstream, HRMS or your downstream finance system to seamlessly deliver value through our Open APIs." />
            <FeatureboxComponent imagePath="f6.svg" heading="Configurable Workflows"
                text="Configure approvals or rejections. Escalations and reports. At will. Setup new groups." />
            <FeatureboxComponent imagePath="f7.svg" heading="Scan any Bill"
                text="The world’s best OCR system backs up this product. All data goes in. 99% success." />
            <FeatureboxComponent imagePath="f8.svg" heading="AI-Based Concierge"
                text="Ask the concierge to change things during your travel - and it will trigger relevant actions 24x7." comingSoon="true"/>
            <FeatureboxComponent imagePath="f9.svg" heading="AI-Assisted Trip Planning"
                text="Just tell us what you want to do in normal language and we will try and put together the best itinerary for you." comingSoon="true"/>
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