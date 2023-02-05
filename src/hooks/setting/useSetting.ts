import { ThemeEnum } from '@/enums/appEnum'
import { MenuLayout } from '@/enums/menuEnum'

export interface AppSetting {
  theme: ThemeEnum,
  menuLayout: MenuLayout,
  menuCollapsed: boolean,
  hasBreadcrumb: boolean,
  hasTagsView: boolean,
  hasFooter: boolean,
  hasLocales: boolean
}

const appSettings = reactive<AppSetting>({
  theme: ThemeEnum.DARK,
  menuLayout: MenuLayout.VERTICAL,
  menuCollapsed: false,
  hasBreadcrumb: true,
  hasTagsView: true,
  hasFooter: true,
  hasLocales: true
})

export default () => appSettings

export const useAppTheme = () => computed(() => appSettings.theme)
export const useMenuLayout = () => computed(() => appSettings.menuLayout)
export const useMenuCollapsed = () => computed(() => appSettings.menuCollapsed)
export const useBreadcrumb = () => computed(() => appSettings.hasBreadcrumb)
export const useFooter = () => computed(() => appSettings.hasFooter)
export const useLocales = () => computed(() => appSettings.hasLocales)

export function setAppSetting(settings: Partial<AppSetting>) {
  Object.keys(settings).forEach(key => {
    // @ts-ignore
    appSettings[key] = settings[key]
  })
}
