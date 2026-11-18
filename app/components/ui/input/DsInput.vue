<template>
  <div :class="theme.root()">
    <input
      :id="id"
      ref="field"
      v-bind="$attrs"
      type="search"
      :class="theme.field()"
      :name="name"
      :placeholder="placeholder"
      :value="modelValue"
      :aria-label="ariaLabel"
      @input="handleInput"
    />

    <button
      v-if="showClear"
      type="button"
      :class="theme.clear()"
      aria-label="Clear search"
      @click="clear"
    >
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { useTemplateRef } from 'vue'
import { inputTheme } from './input.theme'
import type { DsInputEmits, DsInputProps } from './input.types'
import { useInput } from './useInput'

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<DsInputProps>(), {
  id: undefined,
  name: undefined,
  placeholder: undefined,
})
const emit = defineEmits<DsInputEmits>()
const field = useTemplateRef<HTMLInputElement>('field')
const theme = inputTheme()

const { clear, handleInput, showClear } = useInput(props, field, (value) =>
  emit('update:modelValue', value),
)
</script>
