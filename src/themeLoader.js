import CONFIG from './config'

export const applyTheme = () => {
  const root = document.documentElement
  Object.entries(CONFIG.theme).forEach(([key, value]) => {
    root.style.setProperty(`--${key}`, value)
  })
}
