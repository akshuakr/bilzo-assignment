<template>
    <input class="container" :placeholder="placeholder" :style="{ backgroundColor: backgroundColor }" />
</template>

<script>


export default {
    name: 'CustominputComponent',
    props: {
        placeholder: {
            type: String,
            default: 'Enter text...'
        },
        backgroundColor: {
            type: String,
            default: '#F1F5F9'
        }
    },

}
</script>

<style lang="scss" scoped>
@import './Custominput.scss';
</style>