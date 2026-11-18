import type { iconAssets } from './icon-assets'

export type DsIconName = keyof typeof iconAssets

export interface DsIconProps {
  name: DsIconName
  size?: number
}
