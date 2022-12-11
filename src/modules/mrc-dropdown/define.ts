import type { IconType } from '@/plugin/icons'

export interface DropOption {
  label: string
  value: string | number
  disabled?: boolean
  divided?: boolean
  icon?: IconType
}

const optionValidator = (options: DropOption[]) => {
  options.every(option => {
    if (!('label' in option)) throw "dropDown label not undefined"
    if (!('value' in option)) throw "dropDown value not undefined"
  })
}

export const defineOptions = (options: DropOption[]) => {
  optionValidator(options)

  return options
}