import { localePath, localeFile, i18n } from './install'
import { MessageFunctions } from 'vue-i18n'
import { ref, watch } from 'vue'

interface ElementLocale {
  name: string
  el: MessageFunctions
}

export const $t = i18n.global.t

const getElementLocale = async (locale: string) => {
  return (await import(`../../node_modules/element-plus/es/locale/lang/${locale}.mjs`)).default
}

export const useLanguage = () => {
  const elementLocale = ref<ElementLocale | undefined>(undefined)
  const language = ref(localStorage.getItem('locale') ?? import.meta.env.VITE_DEFAULT_LANGUAGE)
  const localeList = Object.keys(localeFile).map(locale => locale.slice(localePath.length, -5))

  watch(() => language.value, async () => {
    elementLocale.value = await getElementLocale(language.value)
  }, { immediate: true })

  return {
    language,
    localeList,
    elementLocale
  }
}