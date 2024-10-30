export type TOption = {
  value: string
  name: string
}

export type TTask = {
  id: string
  title: string
  checked: boolean
  status: string
}

export type TFilterStatus = 'all' | 'complete' | 'incomplete'
