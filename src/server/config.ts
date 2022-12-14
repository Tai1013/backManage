export interface UsersData {
  id: number
  account: string
  password: string
  role: number
  auth: number[]
}

export const configMode: Record<string, string[]> = {
  login: ['users', '../../data/db.json'],
  password: ['users', '../../data/db.json']
}