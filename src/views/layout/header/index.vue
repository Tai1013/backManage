<template lang="pug">
.header-comp
  .header-top
  .header-content
</template>

<script setup lang="ts">
import { ref } from 'vue'

const date = new Date()
console.log(date.getFullYear())
console.log(date.getMonth() + 1)
console.log(date.getDate())

console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getSeconds())


</script>

<style scoped lang="scss">
@import './style.scss';
</style>