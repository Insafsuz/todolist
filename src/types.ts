export type Option = {
  value: string
  name: string
}

export type Task = {
  id: string
  title: string
  checked: boolean
  status: string
}

export type FilterStatus = 'all' | 'complete' | 'incomplete'
