<template>
  <div class="relative isolate min-h-dvh bg-neutral-950 text-neutral-100">
    <div
      class="pointer-events-none absolute inset-x-0 top-0 z-0 h-[102px] bg-gradient-to-r from-neutral-900 from-[0%] via-neutral-950 via-[50%] to-neutral-950 h-dvh"
      aria-hidden="true"
    />

    <div
      v-if="isHome"
      class="pointer-events-none absolute left-[15.3%] top-[53px] z-0 hidden h-[152px] w-[200px] md:block"
      aria-hidden="true"
    >
      <DsIcon
        name="header-glow"
        class="absolute -left-40 -top-40 h-[472px] w-[520px] max-w-none"
      />
    </div>

    <div
      v-else-if="isCharacterDetail"
      class="pointer-events-none absolute left-hero-glow-mobile top-detail-glow-mobile z-0 h-38 w-50 md:left-hero-glow-desktop md:top-detail-glow-desktop"
      aria-hidden="true"
    >
      <DsIcon
        name="header-glow"
        class="absolute -left-40 -top-40 h-hero-glow w-hero-glow max-w-none"
      />
    </div>

    <header class="relative z-10 h-[102px] md:h-[128px]">
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

    <main class="relative z-10 mx-auto w-full">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import DsIcon from '~/components/ui/icon/DsIcon.vue'

const route = useRoute()

const isHome = computed(() => route.path === '/')

const isCharacterDetail = computed(() =>
  /^\/character\/\d+$/.test(route.path),
)
</script>