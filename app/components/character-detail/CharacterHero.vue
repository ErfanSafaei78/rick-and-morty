<template>
  <section class="relative z-10 px-4 pb-8 pt-0 md:pb-16">
    <div
      class="relative z-10 mx-auto flex max-w-content flex-col items-start gap-4 md:flex-row md:items-center md:gap-10"
    >
      <NuxtImg
        :src="image"
        :alt="name"
        width="240"
        height="240"
        class="aspect-square w-hero-mobile rounded-xl object-cover md:w-hero-desktop"
        fetchpriority="high"
      />
      <div class="flex flex-col gap-3">
        <h1
          class="break-words text-2xl font-bold leading-tight md:text-hero-title"
        >
          {{ name }}
        </h1>
        <p class="flex items-center gap-2 text-sm md:text-base">
          <span
            aria-hidden="true"
            class="size-3 rounded-full"
            :class="statusColor"
          />
          <span>{{ status }}-{{ species }}</span>
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { CharacterHeroProps } from './character-detail.types'

const props = defineProps<CharacterHeroProps>()
const statusColor = computed(() =>
  props.status === 'Alive'
    ? 'bg-green-400'
    : props.status === 'Dead'
      ? 'bg-red-500'
      : 'bg-neutral-400',
)
</script>
