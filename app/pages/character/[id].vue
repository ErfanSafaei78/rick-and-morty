<template>
  <div>
    <CharacterHero
      :id="character.id"
      :name="character.name"
      :image="character.image"
      :species="character.species"
      :status="character.status"
    />
    <div class="w-full bg-neutral-900">
      <div
        class="mx-auto flex max-w-[1608px] flex-col gap-8 px-4 py-8 md:gap-12 md:py-12"
      >
        <section aria-labelledby="episodes-heading">
          <h2
            id="episodes-heading"
            class="mb-4 flex items-center gap-3 text-xl font-bold"
          >
            <DsIcon name="episode" /> Episodes
          </h2>
          <EpisodeGridSkeleton
            v-if="episodes.status.value === 'pending'"
            :count="Math.min(character.episodeIds.length, 8)"
          />
          <DetailSectionError
            v-else-if="episodes.status.value === 'error'"
            subject="episodes"
            :retrying="episodes.pending.value"
            @retry="episodes.refresh"
          />
          <EpisodeGrid v-else :episodes="episodes.data.value ?? []" />
        </section>
        <section aria-labelledby="location-heading">
          <h2
            id="location-heading"
            class="mb-4 flex items-center gap-3 text-xl font-bold"
          >
            <DsIcon name="location" /> Location
          </h2>
          <div
            v-if="location.status.value === 'pending'"
            class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            <LocationCardSkeleton />
          </div>
          <DetailSectionError
            v-else-if="location.status.value === 'error'"
            subject="location"
            :retrying="location.pending.value"
            @retry="location.refresh"
          />
          <div
            v-else
            class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            <LocationCard
              :location="location.data.value ?? null"
              :fallback-name="character.locationName"
            />
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CharacterHero from '~/components/character-detail/CharacterHero.vue'
import DetailSectionError from '~/components/character-detail/DetailSectionError.vue'
import EpisodeGrid from '~/components/character-detail/EpisodeGrid.vue'
import EpisodeGridSkeleton from '~/components/character-detail/EpisodeGridSkeleton.vue'
import LocationCard from '~/components/character-detail/LocationCard.vue'
import LocationCardSkeleton from '~/components/character-detail/LocationCardSkeleton.vue'
import DsIcon from '~/components/ui/icon/DsIcon.vue'
import { parseId } from '~/composables/character-detail/params'
import { useCharacterDetail } from '~/composables/character-detail/useCharacterDetail'
import { useCharacterEpisodes } from '~/composables/character-detail/useCharacterEpisodes'
import { useCharacterLocation } from '~/composables/character-detail/useCharacterLocation'

const route = useRoute()
const id = parseId(route.params.id)
if (id === null)
  throw createError({
    statusCode: 404,
    statusMessage: 'Character not found',
    fatal: true,
  })

const detail = await useCharacterDetail(id)
if (detail.error.value || !detail.data.value) {
  throw createError({
    statusCode: detail.error.value?.statusCode === 404 ? 404 : 500,
    statusMessage:
      detail.error.value?.statusCode === 404
        ? 'Character not found'
        : 'Unable to load character',
    fatal: true,
  })
}

const character = detail.data.value
const episodes = useCharacterEpisodes(id, character.episodeIds)
const location = useCharacterLocation(id, character.locationId)

useSeoMeta({ title: `${character.name} | Rick and Morty Explorer` })
</script>
