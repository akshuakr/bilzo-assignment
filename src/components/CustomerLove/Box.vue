<template>
    <div class="container" :style="{ backgroundColor: backgroundColor, borderColor: borderColor }">

        <div class="message">{{ message }}</div>
        <div class="bottom">
            <img :src="imagePath" alt="No Image">
            <div class="right">
                <div class="name">{{ name }}</div>
                <div class="designation">{{ designation }}</div>
            </div>
        </div>

    </div>
</template>

<script>





export default {
    name: 'BoxComponent',
    props: {
        imagePath: {
            type: String,
            default: 'h1.svg'
        },
        message: {
            type: String,
            default: 'ExpenseBook has truly streamlined our travel setup. No more emails and delays in booking. No mor unknown overruns in expense. Everything is trackable, and the configurability they offer is outstanding.'
        },
        name: {
            type: String,
            default: 'Rohit Mehra'
        },
        designation: {
            type: String,
            default: 'CFO, XYZ'
        },
        borderColor: {
            type: String,
            default: '#b0c0f7'
        },
        backgroundColor: {
            type: String,
            default: '#e5eafb'
        }

    },

}
</script>

<style lang="scss" scoped>
@import './Box.scss';
</style>