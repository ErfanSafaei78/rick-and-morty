<template>
  <div
    role="alert"
    class="flex flex-wrap items-center gap-4 rounded-2xl bg-neutral-800 p-4"
  >
    <p class="text-neutral-300">Couldn't load {{ subject }}.</p>
    <DsButton :loading="retrying" @click="$emit('retry')">Retry</DsButton>
  </div>
</template>

<script setup lang="ts">
import DsButton from '~/components/ui/button/DsButton.vue'
defineProps<{ subject: string; retrying?: boolean }>()
defineEmits<{ retry: [] }>()
</script>
