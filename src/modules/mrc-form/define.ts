type SupportedComponent = 'select' | 'input'

export interface FormField {
  prop: string
  label?: string
  type?: string
  attrs?: object
  component?: SupportedComponent
  options?: Global.Option[]
  rules?: object
  clearable?: boolean
  disabled?: boolean
  visible?: boolean
  onChange?: <T>({ value, field }: { value: T, field: FormField }) => void
}

const fieldValidator = (fields: FormField[]) => {
  fields.every(field => {
    if (!('prop' in field)) throw "form prop not undefined"
    if ('component' in field && field.component === 'select') {
      if (!('options' in field)) throw "form options not undefined"
    }
  })
}

const normalizeVisible = (field: FormField) => {
  if (field.visible != false) return field.visible = true
}

export const defineFields = (fields: FormField[]) => {
  fieldValidator(fields)
  fields.map(normalizeVisible)
  fields.filter(field => field.visible === true)
  return fields
}