import { mountSuspended } from '@nuxt/test-utils/runtime'
import { defineComponent, ref } from 'vue'
import { describe, expect, it } from 'vitest'
import DsInput from './DsInput.vue'

describe('DsInput', () => {
  it('renders the named native search field', async () => {
    const wrapper = await mountSuspended(DsInput, {
      props: {
        modelValue: '',
        ariaLabel: 'Search characters',
        id: 'character-search',
        name: 'name',
        placeholder: 'Search for characters...',
      },
    })
    const field = wrapper.get('input')

    expect(field.attributes()).toMatchObject({
      type: 'search',
      'aria-label': 'Search characters',
      id: 'character-search',
      name: 'name',
      placeholder: 'Search for characters...',
    })
  })

  it('emits native model updates', async () => {
    const wrapper = await mountSuspended(DsInput, {
      props: { modelValue: '', ariaLabel: 'Search' },
    })

    await wrapper.get('input').setValue('Rick')

    expect(wrapper.emitted('update:modelValue')).toEqual([['Rick']])
  })

  it('shows the clear action only for a nonempty value', async () => {
    const wrapper = await mountSuspended(DsInput, {
      props: { modelValue: '', ariaLabel: 'Search' },
    })

    expect(wrapper.find('button').exists()).toBe(false)

    await wrapper.setProps({ modelValue: 'Rick' })

    expect(wrapper.get('button').attributes('aria-label')).toBe('Clear search')
    expect(wrapper.get('button').attributes('type')).toBe('button')
  })

  it('clears without submitting and restores field focus', async () => {
    const harness = defineComponent({
      components: { DsInput },
      template: `
        <form @submit.prevent="submissions++">
          <DsInput v-model="value" aria-label="Search" />
        </form>
      `,
      setup() {
        return {
          submissions: ref(0),
          value: ref('Rick'),
        }
      },
    })
    const wrapper = await mountSuspended(harness, { attachTo: document.body })
    const field = wrapper.get('input')

    await wrapper.get('button').trigger('click')

    expect(wrapper.vm.value).toBe('')
    expect(wrapper.vm.submissions).toBe(0)
    expect(document.activeElement).toBe(field.element)
    expect(wrapper.find('button').exists()).toBe(false)

    wrapper.unmount()
  })
})
