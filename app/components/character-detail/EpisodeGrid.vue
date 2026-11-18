<template>
  <ul class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
    <EpisodeCard
      v-for="episode in episodes"
      :key="episode.id"
      v-bind="episode"
    />
  </ul>
</template>

<script setup lang="ts">
import EpisodeCard from './EpisodeCard.vue'
import type { EpisodeGridProps } from './character-detail.types'
defineProps<EpisodeGridProps>()
</script>
