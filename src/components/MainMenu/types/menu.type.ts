import { ReactElement } from 'react'

export default interface MenuItemType {
  icon?: ReactElement
  label: string
  path?: string
  children?: MenuItemType[]
}
