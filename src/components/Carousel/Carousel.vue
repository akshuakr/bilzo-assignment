<template>
    <div class="carousel-container">
        <div class="image-carousel">
            <div class="image-container" ref="imageContainer">
                <div class="image-wrapper">
                    <img src="public/p1.svg" alt="Image 1" />
                    <img src="public/p2.svg" alt="Image 2" />
                    <img src="public/p3.svg" alt="Image 3" />
                    <img src="public/p4.svg" alt="Image 4" />
                    <img src="public/p5.svg" alt="Image 5" />
                    <img src="public/p6.svg" alt="Image 6" />
                </div>
                <div class="image-wrapper">
                    <img src="public/p1.svg" alt="Image 1" />
                    <img src="public/p2.svg" alt="Image 2" />
                    <img src="public/p3.svg" alt="Image 3" />
                    <img src="public/p4.svg" alt="Image 4" />
                    <img src="public/p5.svg" alt="Image 5" />
                    <img src="public/p6.svg" alt="Image 6" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ImageCarouselComponent',
    mounted() {
        const imageContainer = this.$refs.imageContainer;
        const containerWidth = imageContainer.offsetWidth;
    },
};
</script>

<style>
.carousel-container {
    overflow: hidden;
    overflow: ;
}

.image-carousel {
    overflow: hidden;
    white-space: nowrap;
}

.image-container {
    display: inline-flex;
    animation: scroll 40s linear infinite;
}

.image-wrapper {
    display: flex;
    flex-direction: row;
    /* gap: 50px; */
}

.image-wrapper img {
    height: 80px;
    margin-right: 100px;

    @media (max-width: 650px) {
        height: 55px;
        margin-right: 50px;
    }
}

@keyframes scroll {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-50%);
    }
}
</style>
