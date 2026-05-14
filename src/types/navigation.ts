export type NavigationIcon =
  | 'compass'
  | 'map'
  | 'users'
  | 'palette'

export interface NavItem {
  title: string
  href: string
  description?: string
  icon?: NavigationIcon
  items?: NavItem[]
}  
  export interface NavItemWithChildren extends NavItem {
    items?: NavItemWithChildren[]
  }
  
  export interface MainNavItem extends NavItem {
    items?: NavItem[]
  }
  
  export type SidebarNavItem = NavItemWithChildren