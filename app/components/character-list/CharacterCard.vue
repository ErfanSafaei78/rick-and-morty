<template>
  <li>
    <NuxtLink
      :to="`/character/${id}`"
      class="flex h-full flex-col gap-4 rounded-2xl border border-transparent p-4 transition-colors hover:border-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-400"
    >
      <NuxtImg
        :src="image"
        :alt="name"
        width="300"
        height="300"
        :loading="priority ? 'eager' : 'lazy'"
        decoding="async"
        class="aspect-square w-full rounded-lg object-cover"
      />
      <div class="flex min-w-0 flex-col gap-3">
        <h2
          class="break-words text-xl font-bold leading-normal text-neutral-100"
        >
          {{ name }}
        </h2>
        <p
          class="flex items-center gap-2 text-base leading-normal text-neutral-100"
        >
          <span
            aria-hidden="true"
            class="size-3 shrink-0 rounded-full"
            :class="statusDot"
          />
          <span>{{ status }}-{{ species }}</span>
        </p>
      </div>
    </NuxtLink>
  </li>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { CharacterCardProps } from '~/types/character-list.types'

const props = withDefaults(defineProps<CharacterCardProps>(), {
  priority: false,
})

const statusDot = computed(() => {
  if (props.status === 'Alive') return 'bg-green-400'
  if (props.status === 'Dead') return 'bg-red-500'
  return 'bg-neutral-400'
})
</script>
