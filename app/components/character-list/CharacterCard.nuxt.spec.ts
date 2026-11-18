import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'
import CharacterCard from './CharacterCard.vue'

describe('CharacterCard', () => {
  it('links to the detail page and reserves image dimensions', async () => {
    const wrapper = await mountSuspended(CharacterCard, {
      props: {
        id: 1,
        name: 'Rick Sanchez',
        status: 'Alive',
        species: 'Human',
        image: 'https://example.test/rick.jpeg',
        priority: true,
      },
    })

    expect(wrapper.get('a').attributes('href')).toBe('/character/1')
    expect(wrapper.get('img').attributes()).toMatchObject({
      alt: 'Rick Sanchez',
      width: '300',
      height: '300',
      loading: 'eager',
    })
  })

  it('lazy loads cards below the first position', async () => {
    const wrapper = await mountSuspended(CharacterCard, {
      props: {
        id: 2,
        name: 'Morty Smith',
        status: 'unknown',
        species: 'Human',
        image: 'https://example.test/morty.jpeg',
      },
    })

    expect(wrapper.get('img').attributes('loading')).toBe('lazy')
    expect(wrapper.text()).toContain('unknown-Human')
  })
})
