<template>
    <div class="container1">
        <div class="container">
            <div class="subcontainer">
                <div class="input1">
                    <CustominputComponent placeholder="Name" :backgroundColor="bottomForm ? '#F8FAFC' : undefined" />
                </div>
                <div class=" input2">
                    <CustominputComponent placeholder="Official Email ID"
                        :backgroundColor="bottomForm ? '#F8FAFC' : undefined" />
                </div>


            </div>

            <div class="button">
                <div>Start</div>
                &nbsp;
                <div>trial</div>
            </div>
        </div>

        <div class="freeTrial">
            30 Days free trial
            <img src="public/Ellipse.svg" alt="">
            Upto 10 users
        </div>

    </div>


</template>

<script>

import ButtonComponent from '../Button/Button.vue'
import CustominputComponent from '../Custominput/Custominput.vue'

export default {
    name: 'FormComponent',
    props: {
        bottomForm: {
            type: Boolean,
            default: false
        },
    },
    components: {
        CustominputComponent,
        ButtonComponent
    },
}
</script>

<style lang="scss" scoped>
@import './Form.scss';
</style>