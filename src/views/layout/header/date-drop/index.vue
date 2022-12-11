<template lang="pug">
mrc-dropdown(
  :label="currentTime"
  :options="timezoneList"
  size="small"
  @command="commandHandler"
)

</template>

<script setup lang="ts">
import { useDateTime } from '@/common'

const { currentTime, timezoneList, changeTimeZone } = useDateTime()

const commandHandler = (timezone: string) => {
  changeTimeZone(timezone)
}
</script>

<style scoped lang="scss">

</style>