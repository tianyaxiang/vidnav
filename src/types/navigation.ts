export interface NavigationSubItem {
  id: string
  title: string
  href: string
  description?: string
  icon?: string
  enabled: boolean
}

export interface NavigationCategory {
  id: string
  title: string
  icon?: string
  description?: string
  parentId?: string
  items?: NavigationSubItem[]
  enabled?: boolean
}

export interface NavigationItem {
  id: string
  title: string
  description?: string
  icon?: string
  items?: NavigationSubItem[]
  subCategories?: NavigationCategory[]
  enabled?: boolean
}

export interface NavigationData {
  navigationItems: NavigationItem[]
}

export interface ResourceItem {
  title: string
  description: string
  icon: string
  url: string
}

export interface ResourceSection {
  id: string
  title: string
  items: ResourceItem[]
}

export interface ResourceData {
  resourceSections: ResourceSection[]
}

// 图标路径解析工具函数
export function resolveIconPath(icon?: string): string | undefined {
  if (!icon) return undefined

  // 预定义的图标映射
  const iconMap: Record<string, string> = {
    'search': '/icons/search.svg',
    'user': '/icons/user.svg',
    'linecons-desktop': '/icons/desktop.svg',
    // 添加更多常见图标的映射
  }

  // 如果是预定义的图标名称，使用映射
  if (iconMap[icon]) {
    return iconMap[icon]
  }

  // 如果是完整的 URL，直接返回
  if (icon.startsWith('http://') || icon.startsWith('https://')) {
    return icon
  }

  // 如果是相对路径，确保以 / 开头
  if (!icon.startsWith('/')) {
    return `/icons/${icon}`
  }

  return icon
}