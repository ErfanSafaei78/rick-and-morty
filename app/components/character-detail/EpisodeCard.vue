<template>
  <li class="rounded-2xl bg-cyan-400/4 p-4">
    <h3 class="truncate font-bold">{{ name }}</h3>
    <p class="mt-2 text-sm font-medium text-cyan-400">{{ code }}</p>
    <p class="mt-2 text-sm text-neutral-400">{{ airDate }}</p>
  </li>
</template>

<script setup lang="ts">
import type { EpisodeCardProps } from './character-detail.types'
defineProps<EpisodeCardProps>()
</script>
