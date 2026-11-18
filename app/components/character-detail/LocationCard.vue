<template>
  <article class="rounded-2xl bg-cyan-400/4 p-4">
    <h3 class="truncate font-bold">{{ location?.name ?? fallbackName }}</h3>
    <p class="mt-2 text-sm font-medium text-cyan-400">
      {{ location?.type ?? 'unknown' }}
    </p>
    <p class="mt-2 text-sm text-neutral-400">
      {{ location?.dimension ?? 'unknown' }}
    </p>
  </article>
</template>

<script setup lang="ts">
import type { LocationCardProps } from './character-detail.types'
defineProps<LocationCardProps>()
</script>
