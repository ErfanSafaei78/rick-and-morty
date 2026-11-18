<template>
  <component
    :is="renderedElement"
    :class="classes"
    :to="element === 'NuxtLink' ? to : undefined"
    :href="element === 'a' ? href : undefined"
    :type="isNativeButton ? type : undefined"
    :disabled="isNativeButton ? isUnavailable : undefined"
    :aria-label="ariaLabel"
    :aria-disabled="isDisabledNavigation ? 'true' : undefined"
    :aria-busy="loading ? 'true' : undefined"
    @click="handleClick"
  >
    <span
      v-if="loading"
      class="size-4 shrink-0 animate-spin rounded-full border-2 border-current border-t-transparent motion-reduce:animate-none"
      aria-hidden="true"
    />
    <span v-else-if="$slots.start" class="shrink-0" aria-hidden="true">
      <slot name="start" />
    </span>

    <span v-if="$slots.default">
      <slot />
    </span>

    <span v-if="!loading && $slots.end" class="shrink-0" aria-hidden="true">
      <slot name="end" />
    </span>
  </component>
</template>

<script setup lang="ts">
import { NuxtLink } from '#components'
import { computed } from 'vue'
import { useButton } from './useButton'
import type {
  DsButtonEmits,
  DsButtonProps,
  DsButtonSlots,
} from './button.types'

const props = withDefaults(defineProps<DsButtonProps>(), {
  variant: 'solid',
  color: 'accent',
  radius: 'sm',
  size: 'md',
  disabled: false,
  loading: false,
  type: 'button',
  to: undefined,
  href: undefined,
  ariaLabel: undefined,
})

const emit = defineEmits<DsButtonEmits>()
const slots = defineSlots<DsButtonSlots>()

const {
  classes,
  element,
  handleClick,
  isDisabledNavigation,
  isNativeButton,
  isUnavailable,
} = useButton(props, slots, (event) => emit('click', event))

const renderedElement = computed(() =>
  element.value === 'NuxtLink' ? NuxtLink : element.value,
)
</script>
