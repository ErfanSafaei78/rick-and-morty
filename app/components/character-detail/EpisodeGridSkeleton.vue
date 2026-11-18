<template>
  <ul
    aria-label="Loading episodes"
    class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
  >
    <li
      v-for="item in count"
      :key="item"
      aria-hidden="true"
      class="h-detail-card animate-pulse rounded-2xl bg-cyan-400/4"
    />
  </ul>
</template>

<script setup lang="ts">
defineProps<{ count: number }>()
</script>
