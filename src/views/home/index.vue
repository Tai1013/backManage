<template lang="pug">
.home(v-loading.lock="isLoading")
  Bar(
    
  )
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Bar } from 'vue-chartjs'
import { useLoading } from '@/common'

const {isLoading} = useLoading()
</script>

<style scoped>
</style>