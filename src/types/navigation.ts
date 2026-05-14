export interface NavItem {
    title: string
    href: string
    description?: string
    disabled?: boolean
    external?: boolean
    icon?: React.ComponentType<{ className?: string }>
  }
  
  export interface NavItemWithChildren extends NavItem {
    items?: NavItemWithChildren[]
  }
  
  export interface MainNavItem extends NavItem {
    items?: NavItem[]
  }
  
  export type SidebarNavItem = NavItemWithChildren