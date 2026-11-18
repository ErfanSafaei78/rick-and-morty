<template>
  <span
    class="relative inline-block h-9 w-[116px] overflow-hidden"
    aria-hidden="true"
  >
    <img
      :src="logoUrl"
      alt=""
      class="absolute top-[-50%] left-[-5.17%] h-[200%] w-[110.34%] max-w-none"
    />
  </span>
</template>

<script setup lang="ts">
import logoUrl from '~/assets/images/rick-and-morty-logo.png'
</script>
