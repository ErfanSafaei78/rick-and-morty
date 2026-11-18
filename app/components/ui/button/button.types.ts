import type { RouteLocationRaw } from 'vue-router'

export type DsButtonVariant = 'solid' | 'ghost'

export type DsButtonColor = 'accent' | 'neutral'

export type DsButtonRadius = 'sm' | 'full'

export type DsButtonSize = 'md' | 'sm'

export type DsButtonType = 'button' | 'submit' | 'reset'

export interface DsButtonProps {
  variant?: DsButtonVariant
  color?: DsButtonColor
  /**
   * sm: 4px corners
   *
   * full: Circular
   */
  radius?: DsButtonRadius
  /**
   * sm: 24px square
   *
   * md: 48px high; icon-only buttons are 48px square
   */
  size?: DsButtonSize
  disabled?: boolean
  loading?: boolean
  type?: DsButtonType
  /** Route destination. Takes precedence over `href`. */
  to?: RouteLocationRaw
  href?: string
  /** Required for icon-only buttons. */
  ariaLabel?: string
}

export interface DsButtonEmits {
  click: [event: MouseEvent]
}

export interface DsButtonSlots {
  default?: () => unknown
  start?: () => unknown
  end?: () => unknown
}
