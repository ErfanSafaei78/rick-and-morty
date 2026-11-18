<template>
  <ul
    role="status"
    aria-label="Loading characters"
    aria-busy="true"
    class="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4"
  >
    <CharacterCardSkeleton v-for="item in count" :key="item" />
  </ul>
</template>

<script setup lang="ts">
import { CHARACTER_PAGE_SIZE } from '~/composables/character-list/constants'
import CharacterCardSkeleton from './CharacterCardSkeleton.vue'

const count = CHARACTER_PAGE_SIZE
</script>
