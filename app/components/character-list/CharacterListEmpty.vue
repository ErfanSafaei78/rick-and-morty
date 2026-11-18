<template>
  <section
    class="flex flex-col gap-4 items-center px-4 py-16 text-center"
    aria-labelledby="empty-title"
  >
    <h2 id="empty-title" class="text-xl font-bold text-neutral-100">
      No characters found
    </h2>
    <DsButton to="/" variant="solid" color="accent">
      Back to all characters
    </DsButton>
  </section>
</template>

<script setup lang="ts">
import DsButton from '~/components/ui/button/DsButton.vue'
</script>
