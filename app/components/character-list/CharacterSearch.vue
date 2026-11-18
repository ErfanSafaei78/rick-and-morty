<template>
  <form
    role="search"
    class="flex h-20 w-full items-center justify-center gap-4 rounded-lg bg-neutral-900 p-4"
    @submit.prevent="submit"
  >
    <div class="min-w-0 flex-1">
      <DsInput
        :model-value="modelValue"
        v-bind="{ ariaLabel: 'Search characters' }"
        name="name"
        placeholder="Search for characters..."
        @update:model-value="emit('update:modelValue', $event)"
      />
    </div>
    <DsButton
      type="submit"
      aria-label="Search characters"
      class="w-12 px-0 sm:w-auto sm:px-4 [&>span:last-child]:hidden sm:[&>span:last-child]:inline-flex"
      @click.prevent="submit"
    >
      <template #start>
        <DsIcon name="search" :size="14" />
      </template>
      <span class="hidden sm:inline">Search</span>
    </DsButton>
  </form>
</template>

<script setup lang="ts">
import DsButton from '~/components/ui/button/DsButton.vue'
import DsIcon from '~/components/ui/icon/DsIcon.vue'
import DsInput from '~/components/ui/input/DsInput.vue'
import type {
  CharacterSearchEmits,
  CharacterSearchProps,
} from './character-list.types'

defineProps<CharacterSearchProps>()
const emit = defineEmits<CharacterSearchEmits>()

const submit = () => emit('submit')
</script>
