<template>
  <div class="min-h-dvh bg-neutral-900 text-neutral-100">
    <header
      class="relative isolate h-[102px] overflow-hidden bg-gradient-to-r from-neutral-900 from-[0%] via-neutral-950 via-[50%] to-neutral-950 md:h-[128px]"
    >
      <div
        class="pointer-events-none absolute left-[15.3%] top-[53px] hidden h-[152px] w-[200px] md:block"
        aria-hidden="true"
      >
        <DsIcon
          name="header-glow"
          class="absolute -left-40 -top-40 h-[472px] w-[520px] max-w-none"
        />
      </div>
      <div
        class="mx-auto max-w-[1920px] px-4 py-3 md:px-[max(16px,calc((100%-1608px)/2))]"
      >
        <NuxtLink
          to="/"
          aria-label="Rick and Morty Explorer home"
          class="inline-flex h-9 w-[116px] items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-400"
        >
          <AppLogo />
        </NuxtLink>
      </div>
      <div class="mx-auto max-w-[1608px] px-4 md:px-0">
        <slot name="header" />
      </div>
    </header>
    <main class="mx-auto w-full max-w-[1920px]"><slot /></main>
  </div>
</template>

<script setup lang="ts">
import DsIcon from '~/components/ui/icon/DsIcon.vue'
</script>
