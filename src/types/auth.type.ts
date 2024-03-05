import { SuccessResponseApi } from './utils.type'
import UserType from './user.type'

export type AuthResponse = SuccessResponseApi<{
  access_token: string
  expires: string
  user: UserType
  refresh_token: string
  expires_refresh_token: number
}>

export type RefreshTokenReponse = SuccessResponseApi<{ access_token: string }>
