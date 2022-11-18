import { localePath, localeFile, i18n } from './install'
import { ref, reactive, watch } from 'vue'

export const $t = i18n.global.t

export const localeList = Object.keys(localeFile).map(locale => locale.slice(localePath.length, -5))

const getElementLocale = async (locale: string) => {
  console.log(locale)
  return (await import(`../../node_modules/element-plus/es/locale/lang/${locale}.mjs`)).default
}

export const useLanguage = () => {
  const language = ref(localStorage.getItem('locale') ?? import.meta.env.VITE_DEFAULT_LANGUAGE)

  const elementLocale = ref({})

  watch(() => language.value, async () => {
    elementLocale.value = await getElementLocale(language.value)
  }, { immediate: true })

  return {
    language,
    elementLocale
  }
}