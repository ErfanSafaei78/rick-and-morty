<template>
  <div class="min-h-dvh bg-neutral-900 text-neutral-100">
    <header
      class="relative isolate h-[102px] overflow-hidden bg-gradient-to-r from-neutral-900 from-header-start to-neutral-950 md:h-[128px]"
    >
      <div
        class="pointer-events-none absolute left-[8%] top-[-110px] -z-10 h-[236px] w-[260px] bg-[url('/app/assets/images/header-glow.svg')] bg-center bg-no-repeat opacity-70"
        aria-hidden="true"
      />
      <div
        class="mx-auto max-w-[1920px] px-4 py-3 md:px-[max(16px,calc((100%-1608px)/2))]"
      >
        <NuxtLink
          to="/"
          aria-label="Rick and Morty Explorer home"
          class="inline-flex h-9 w-[116px] items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-400"
        >
          <NuxtImg
            :src="logoUrl"
            alt="Rick and Morty"
            class="h-9 w-[116px] object-cover"
            width="116"
            height="36"
          />
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
import logoUrl from '~/assets/images/rick-and-morty-logo.png'
</script>
