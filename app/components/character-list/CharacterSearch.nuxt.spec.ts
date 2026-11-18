import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'
import CharacterSearch from './CharacterSearch.vue'

describe('CharacterSearch', () => {
  it('updates the draft without submitting while typing', async () => {
    const wrapper = await mountSuspended(CharacterSearch, {
      props: { modelValue: '' },
    })

    await wrapper.get('input').setValue('Rick')

    expect(wrapper.emitted('update:modelValue')).toEqual([['Rick']])
    expect(wrapper.emitted('submit')).toBeUndefined()
  })

  it('submits through both the search button and form submission', async () => {
    const buttonWrapper = await mountSuspended(CharacterSearch, {
      props: { modelValue: 'Rick' },
    })
    await buttonWrapper.get('button[type="submit"]').trigger('click')
    expect(buttonWrapper.emitted('submit')).toHaveLength(1)

    const enterWrapper = await mountSuspended(CharacterSearch, {
      props: { modelValue: 'Rick' },
    })
    await enterWrapper.get('form').trigger('submit')
    expect(enterWrapper.emitted('submit')).toHaveLength(1)
  })
})
