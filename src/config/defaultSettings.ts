type config = {
  colorPrimary: string
  layout: 'mix' | 'top' | 'sidebar'
}

const defaultSettings: config = {
  colorPrimary: '#9F1C21',
  layout: 'sidebar'
} as const

export default defaultSettings
