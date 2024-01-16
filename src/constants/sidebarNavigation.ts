import { HomeIcon, BarChart2, Settings, AlignJustify, Pencil } from 'lucide-vue-next'

interface SideNavigationItem {
  id: string
  label: string
  href: string
  icon: typeof HomeIcon
}

const sideNavigation: SideNavigationItem[] = [
  {
    id: 'home',
    label: 'Home',
    href: '/',
    icon: HomeIcon
  },
  {
    id: 'templates',
    label: 'Templates',
    href: '#',
    icon: Pencil
  },
  {
    id: 'documents-library',
    label: 'Documents Library',
    href: '#',
    icon: AlignJustify
  },
  {
    id: 'data-sources',
    label: 'Data Sources',
    href: '#',
    icon: BarChart2
  },
  {
    id: 'settings',
    label: 'Settings',
    href: '#',
    icon: Settings
  }
]

export default sideNavigation
