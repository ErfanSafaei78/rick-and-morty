<template>
  <section class="px-4 py-16 text-center" aria-labelledby="error-title">
    <h2 id="error-title" class="text-xl font-bold text-neutral-100">
      Couldn't load characters
    </h2>
    <p class="mt-2 text-neutral-300">Check your connection and try again.</p>
    <DsButton class="mt-4" @click="emit('retry')">Retry</DsButton>
  </section>
</template>

<script setup lang="ts">
import DsButton from '~/components/ui/button/DsButton.vue'
import type { CharacterListErrorEmits } from '~/types/character-list.types'

const emit = defineEmits<CharacterListErrorEmits>()
</script>
