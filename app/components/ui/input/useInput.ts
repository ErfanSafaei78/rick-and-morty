import { computed, nextTick, type Ref } from 'vue'
import type { DsInputProps } from './input.types'

export function useInput(
  props: Readonly<DsInputProps>,
  field: Readonly<Ref<HTMLInputElement | null>>,
  updateModelValue: (value: string) => void,
) {
  const showClear = computed(() => props.modelValue.length > 0)

  function handleInput(event: Event) {
    updateModelValue((event.target as HTMLInputElement).value)
  }

  async function clear() {
    updateModelValue('')
    await nextTick()
    field.value?.focus()
  }

  return {
    clear,
    handleInput,
    showClear,
  }
}
