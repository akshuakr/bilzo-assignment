<template>
    <div class="container">
        <!-- <div class="Headline2Text">Features that suit your needs</div>
        <div class="subcontainer">H</div> -->
        <div class="top">
            <img :src="imagePath" alt="No Image">
            <!-- <img src="public/f1.svg"> -->
            <div class="text1">
                {{ heading }}
            </div>
        </div>
        <div class="text2">
            {{ text }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'FeatureboxComponent',
    props: {
        imagePath: {
            type: String,
            default: 'f1.svg'
        },
        heading: {
            type: String,
            default: 'Setup Employee Groups'
        },
        text: {
            type: String,
            default: 'Use any parameter to setup distinct employee groups to implement policies'
        },
        comingSoon: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        imageSrc() {
            try {
                return require(`@/public/${this.imagePath}`);
            } catch (err) {
                console.error(`Failed to load image ${this.imagePath}: ${err}`);
                return null;
            }
        }
    }
    // components: {

    // }
}
</script>

<style lang="scss" scoped>
@import './Featurebox.scss';
</style>