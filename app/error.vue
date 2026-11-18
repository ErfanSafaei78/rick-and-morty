<template>
  <NuxtLayout>
    <main
      class="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center gap-4 px-4 text-center"
    >
      <h1 class="text-3xl font-bold">
        {{ isNotFound ? 'Character not found' : 'Something went wrong' }}
      </h1>
      <p class="text-neutral-400">
        {{
          isNotFound
            ? 'This character could not be found.'
            : 'The character details could not be loaded.'
        }}
      </p>
      <div class="flex gap-3">
        <DsButton v-if="!isNotFound" @click="retry">Retry</DsButton>
        <DsButton to="/" variant="ghost">Back to characters</DsButton>
      </div>
    </main>
  </NuxtLayout>
</template>

<script setup lang="ts">
import DsButton from '~/components/ui/button/DsButton.vue'

const props = defineProps<{ error: { statusCode?: number } }>()
const isNotFound = computed(() => props.error.statusCode === 404)
const retry = () => window.location.reload()
</script>
