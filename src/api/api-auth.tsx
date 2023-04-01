import axios from 'axios'
import { instance } from './instance'

export const apiAuth = {
  login(data: LoginParamsType) {
    return instance.post<ResponseType>(`auth/login`, data)
  },
  recoveryPassword(data: recoveryPasswordType) {
    return instance.post<ResponseTypeRecoveryPassword>(`auth/forgot`, data)
  },
  newPassword(data: newPasswordType) {
    return instance.post<ResponseNewPassword>(`auth/set-new-password`, data)
  },
  logout() {
    return instance.delete(`auth/me`, {})
  },

  me() {
    return instance.post(`auth/me`, {})
  },
}
export const updateUserApi = {
  updateUsersData(data: UpdateUserType) {
    return instance.put<ResponseUpdateUserDataType>('auth/me', data)
  },
}
export type UpdateUserType = {
  name?: string
  avatar?: string
}

export interface UpdatedUser {
  _id: string
  email: string
  rememberMe: boolean
  isAdmin: boolean
  name: string
  verified: boolean
  publicCardPacksCount: number
  created: string
  updated: string
  __v: number
  token: string
  tokenDeathTime: number
  avatar: string
}

export interface ResponseUpdateUserDataType {
  updatedUser: UpdatedUser
  token: string
  tokenDeathTime: number
}

type ResponseType = {
  _id: string
  email: string
  name: string
  avatar?: string
  publicCardPacksCount: number
  created: Date
  updated: Date
  isAdmin: boolean
  verified: boolean
  rememberMe: boolean
  error?: string
}
export type recoveryPasswordType = {
  email: string
  from: string
  message: string
}
export type LoginParamsType = {
  email: string
  password: string
  rememberMe: boolean
}
type ResponseTypeRecoveryPassword = {
  info: string
  error: string
}
export type newPasswordType = {
  password: string
  resetPasswordToken: string
}
export type ResponseNewPassword = {
  info: string
  error: string
}
