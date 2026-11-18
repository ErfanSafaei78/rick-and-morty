<template>
  <div class="flex flex-col gap-4">
    <h1 class="sr-only">Rick and Morty characters</h1>
    <div class="max-md:px-4">
      <CharacterSearch
        v-model="draft"
        class="mx-auto max-w-[1608px]"
        @submit="submit"
      />
    </div>
    <section aria-label="Characters" class="w-full bg-neutral-900">
      <div
        class="w-full mx-auto max-w-[1608px] px-4 pb-8 pt-8 md:px-0 md:pb-16 md:pt-16"
      >
        <CharacterGridSkeleton v-if="status === 'pending'" />
        <CharacterListError v-else-if="status === 'error'" @retry="refresh" />
        <template v-else-if="pageData?.characters.length">
          <CharacterGrid :characters="pageData.characters" />
          <CharacterPagination
            class="mt-6"
            :current-page="pageData.currentPage"
            :total-pages="pageData.totalPages"
            :name="name"
          />
        </template>
        <CharacterListEmpty v-else />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import CharacterGrid from '~/components/character-list/CharacterGrid.vue'
import CharacterGridSkeleton from '~/components/character-list/CharacterGridSkeleton.vue'
import CharacterListEmpty from '~/components/character-list/CharacterListEmpty.vue'
import CharacterListError from '~/components/character-list/CharacterListError.vue'
import CharacterPagination from '~/components/character-list/CharacterPagination.vue'
import CharacterSearch from '~/components/character-list/CharacterSearch.vue'
import { useCharacterList } from '~/composables/character-list/useCharacterList'
import { useCharacterSearch } from '~/composables/character-list/useCharacterSearch'
import { parseName } from '~/composables/character-list/params'

const { data: pageData, status, refresh } = await useCharacterList()
const route = useRoute()
const name = computed(() => parseName(route.query.name))
const { draft, submit } = useCharacterSearch()

useSeoMeta({ title: 'Rick and Morty Explorer' })
</script>
