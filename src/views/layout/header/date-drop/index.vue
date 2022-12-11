<template lang="pug">
el-dropdown(@command="commandHandler" size="small")
  .current-time
    span {{ currentTime }}
    mrc-icon(icon="ArrowDown")
  template( #dropdown)
    el-dropdown-menu
      el-dropdown-item(
        v-for="timezone in timezoneList"
        :key="timezone.label"
        :command="timezone.value"
      ) {{ timezone.label }}
</template>

<script setup lang="ts">
import {} from 'vue'
import { ElDropdown, ElDropdownMenu, ElDropdownItem } from 'element-plus'
import { useDateTime } from '@/common'

const { currentTime, timezoneList, changeTimeZone } = useDateTime()

const commandHandler = (command: string) => {
  changeTimeZone(command)
}
</script>

<style scoped lang="scss">
.current-time {
  display: flex;
  align-items: center;
  font-size: 12px;
  cursor: pointer;
  span {
    padding-right: 5px;
  }
}
</style>