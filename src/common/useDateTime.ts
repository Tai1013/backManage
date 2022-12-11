import { ref, onMounted, onUnmounted } from 'vue'
import { TIMEZONE_LIST } from '@/configs/constant'
import { useConfigStore } from '@/store'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.extend(utc)
dayjs.extend(timezone)

const timeInterval = ref()

const getDateTime = (tz: string) => {
  return dayjs().tz(tz).format('YYYY-MM-DD HH:mm:ss (ZZ)')
}

export const useDateTime = () => {
  const configStore = useConfigStore()
  const currentTZ = ref(configStore.timezone ?? dayjs.tz.guess())
  const currentTime = ref(getDateTime(currentTZ.value))
  const timezoneList = ref<Global.Option[]>([])

  timezoneList.value = TIMEZONE_LIST.map(zone => ({
    value: zone.value,
    label: zone.label + dayjs().tz(zone.value).format(' (ZZ)')
  }))

  const changeTimeZone = (tz: string) => {
    currentTZ.value = tz
    currentTime.value = getDateTime(tz)
    configStore.timezone = tz
  }

  onMounted(() => {
    timeInterval.value = setInterval(() => {
      currentTime.value = getDateTime(currentTZ.value)
    }, 1000)
  })

  onUnmounted(() => {
    clearInterval(timeInterval.value)
  })

  return {
    currentTime,
    timezoneList,
    changeTimeZone
  }
}