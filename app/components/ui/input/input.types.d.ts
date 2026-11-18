export interface DsInputProps {
  modelValue: string
  /** Accessible name announced for the search field. */
  ariaLabel: string
  id?: string
  name?: string
  placeholder?: string
}

export interface DsInputEmits {
  'update:modelValue': [value: string]
}
