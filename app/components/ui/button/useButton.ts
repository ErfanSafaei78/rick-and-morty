import { computed } from 'vue'
import { buttonTheme } from './button.theme'
import type {
  ButtonElement,
  DsButtonProps,
  DsButtonSlots,
} from './button.types.d'

export function useButton(
  props: Readonly<DsButtonProps>,
  slots: Readonly<DsButtonSlots>,
  emitClick: (event: MouseEvent) => void,
) {
  const isNavigation = computed(
    () => props.to !== undefined || props.href !== undefined,
  )
  const isUnavailable = computed(() => Boolean(props.disabled || props.loading))
  const isIconOnly = computed(() => !slots.default)

  const element = computed<ButtonElement>(() => {
    if (isNavigation.value && isUnavailable.value) {
      return 'span'
    }

    if (props.to !== undefined) return 'NuxtLink'
    if (props.href !== undefined) return 'a'
    return 'button'
  })

  const isNativeButton = computed(() => element.value === 'button')
  const isDisabledNavigation = computed(
    () => element.value === 'span' && isUnavailable.value,
  )

  const classes = computed(() => {
    const variant = props.variant ?? 'solid'
    const color = props.color ?? 'accent'
    const radius = props.radius ?? 'sm'
    const size = props.size ?? 'md'
    const state = props.loading
      ? 'loading'
      : props.disabled
        ? 'disabled'
        : 'enabled'

    return buttonTheme({
      variant,
      color,
      radius,
      size,
      iconOnly: isIconOnly.value,
      state,
    })
  })

  function handleClick(event: MouseEvent) {
    if (isUnavailable.value) {
      event.preventDefault()
      event.stopImmediatePropagation()
      return
    }

    emitClick(event)
  }

  return {
    classes,
    element,
    handleClick,
    isDisabledNavigation,
    isNativeButton,
    isUnavailable,
  }
}
