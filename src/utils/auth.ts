import UserType from '@/types/user.type'

export const LocalStorageEventTarget = new EventTarget()

export const setAccessTokenToLS = (access_token: string) => {
  return localStorage.setItem('access_token', access_token)
}

export const getAccessTokenFromLS = () => {
  return localStorage.getItem('access_token') || '11'
}

export const clearAuthFromLS = () => {
  localStorage.removeItem('profile')
  localStorage.removeItem('access_token')

  const clearLSEvent = new Event('clearLS')
  LocalStorageEventTarget.dispatchEvent(clearLSEvent)

  return
}

export const getProfileFromLS = () => {
  const result = localStorage.getItem('profile')

  return result ? JSON.parse(result) : result
}

export const setProfileToLS = (profile: UserType) => {
  return localStorage.setItem('profile', JSON.stringify(profile))
}

export const getRefreshTokenFromLS = () => localStorage.getItem('refresh_token') || ''

export const setRefreshTokenToLS = (refresh_token: string) => {
  localStorage.setItem('refresh_token', refresh_token)
}
