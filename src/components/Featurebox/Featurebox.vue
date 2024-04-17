<template>
    <div class="container">

        <div class="top">
            <div class="image-container">
                <img :src="imagePath" alt="No Image" class="primary-image">
                <img src="public/f.svg" alt="No Image" class="secondary-image">
            </div>

            <div class="text1">
                {{ heading }}
            </div>

            <div v-if="comingSoon" class="coming-soon">
                Coming Soon
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

}
</script>

<style lang="scss" scoped>
@import './Featurebox.scss';
</style>