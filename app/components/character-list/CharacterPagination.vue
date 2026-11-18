<template>
  <nav
    v-if="totalPages > 1"
    aria-label="Pagination"
    class="flex justify-center"
  >
    <ol class="flex items-center gap-1">
      <li>
        <DsButton
          :to="{ path: '/', query: paginationQuery(1, name) }"
          variant="ghost"
          color="neutral"
          radius="full"
          size="sm"
          :disabled="currentPage === 1"
          aria-label="First page"
        >
          <template #start>
            <DsIcon name="pagination-first" />
          </template>
        </DsButton>
      </li>
      <li>
        <DsButton
          :to="{ path: '/', query: paginationQuery(currentPage - 1, name) }"
          variant="ghost"
          color="neutral"
          radius="full"
          size="sm"
          :disabled="currentPage === 1"
          aria-label="Previous page"
        >
          <template #start>
            <DsIcon name="pagination-previous" />
          </template>
        </DsButton>
      </li>
      <li
        v-for="item in items"
        :key="item.kind === 'page' ? item.page : item.key"
      >
        <span
          v-if="item.kind === 'ellipsis'"
          aria-hidden="true"
          class="inline-flex h-6 min-w-4 items-center justify-center text-neutral-100"
        >
          …
        </span>
        <DsButton
          v-else
          :to="{ path: '/', query: paginationQuery(item.page, name) }"
          :disabled="item.page === currentPage"
          :aria-current="item.page === currentPage ? 'page' : undefined"
          :aria-label="
            item.page === currentPage
              ? `Page ${item.page}, current page`
              : `Go to page ${item.page}`
          "
          :variant="item.page === currentPage ? 'solid' : 'ghost'"
          :color="item.page === currentPage ? 'accent' : 'neutral'"
          :class="item.page === currentPage ? '!opacity-100' : undefined"
          radius="full"
          size="sm"
        >
          {{ item.page }}
        </DsButton>
      </li>
      <li>
        <DsButton
          :to="{ path: '/', query: paginationQuery(currentPage + 1, name) }"
          variant="ghost"
          color="neutral"
          radius="full"
          size="sm"
          :disabled="currentPage === totalPages"
          aria-label="Next page"
        >
          <template #start>
            <DsIcon name="pagination-next" />
          </template>
        </DsButton>
      </li>
      <li>
        <DsButton
          :to="{ path: '/', query: paginationQuery(totalPages, name) }"
          variant="ghost"
          color="neutral"
          radius="full"
          size="sm"
          :disabled="currentPage === totalPages"
          aria-label="Last page"
        >
          <template #start>
            <DsIcon name="pagination-last" />
          </template>
        </DsButton>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
import { toRef } from 'vue'
import DsButton from '~/components/ui/button/DsButton.vue'
import DsIcon from '~/components/ui/icon/DsIcon.vue'
import { usePagination } from '~/composables/character-list/usePagination'
import { paginationQuery } from '~/composables/character-list/params'
import type { CharacterPaginationProps } from './character-list.types'

const props = defineProps<CharacterPaginationProps>()
const items = usePagination(
  toRef(props, 'currentPage'),
  toRef(props, 'totalPages'),
)
</script>
