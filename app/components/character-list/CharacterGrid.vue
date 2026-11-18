<template>
  <ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
    <CharacterCard
      v-for="(character, index) in characters"
      :key="character.id"
      v-bind="character"
      :priority="index === 0"
    />
  </ul>
</template>

<script setup lang="ts">
import type { CharacterGridProps } from './character-list.types'
import CharacterCard from './CharacterCard.vue'

defineProps<CharacterGridProps>()
</script>
