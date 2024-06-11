type config = {
  colorPrimary: string
  layout: 'mix' | 'top' | 'sidebar'
}

const defaultSettings: config = {
  colorPrimary: '#9F1C21',
  layout: 'mix'
} as const

export default defaultSettings
