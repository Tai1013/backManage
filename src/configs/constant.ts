export const ROLE_ID_LIST = [
  { value: 1, label: '管理員' },
  { value: 2, label: '總代理' },
  { value: 3, label: '代理' },
  { value: 4, label: '商品部門' },
  { value: 5, label: '財務部門' },
  { value: 6, label: '客服部門' }
] as const
export const roles = ROLE_ID_LIST.map(role => role.label)
export type RoleType = typeof roles[number]

export const actions = ['查看', '新增', '編輯', '刪除'] as const
export type ActionType = typeof actions[number]

export const LOCALE_LIST = [
  { value: 'zh-tw', label: '繁體中文' },
  { value: 'en', label: '英語' }
] as const

export const TIMEZONE_LIST = [
  { value: 'Asia/Taipei', label: '台北時間' },
  { value: 'America/New_York', label: '紐約時間' }
] as const