<template>
  <div>
    <nuxt-head>
      <title>Bilzo Assignment - Akshansh</title>
    </nuxt-head>
    <Homepage />
  </div>
</template>

<script>

import Homepage from './src/pages/Homepage.vue'

export default {
  components: {
    Homepage
  }
}
</script>

<style>
html,
body {
  margin: 0;
}
</style>