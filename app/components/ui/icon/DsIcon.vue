<template>
  <img
    :src="iconAssets[name]"
    alt=""
    aria-hidden="true"
    :width="size"
    :height="size"
    class="block shrink-0"
  />
</template>

<script setup lang="ts">
import { iconAssets } from './icon-assets'
import type { DsIconProps } from './icon.types'

withDefaults(defineProps<DsIconProps>(), {
  size: 24,
})
</script>
