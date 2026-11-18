import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'
import DsButton from './DsButton.vue'

describe('DsButton', () => {
  it('renders an enabled native button and emits its activation', async () => {
    const wrapper = await mountSuspended(DsButton, {
      slots: { default: 'Retry' },
    })

    expect(wrapper.element.tagName).toBe('BUTTON')
    expect(wrapper.attributes('type')).toBe('button')

    await wrapper.trigger('click')

    expect(wrapper.emitted('click')).toHaveLength(1)
  })

  it.each([
    { state: 'disabled', props: { disabled: true } },
    { state: 'loading', props: { loading: true } },
  ])('suppresses activation while $state', async ({ props }) => {
    const wrapper = await mountSuspended(DsButton, {
      props,
      slots: { default: 'Retry' },
    })

    expect(wrapper.attributes('disabled')).toBeDefined()
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })

  it('marks loading actions busy while preserving their name', async () => {
    const wrapper = await mountSuspended(DsButton, {
      props: { loading: true },
      slots: { default: 'Retry' },
    })

    expect(wrapper.attributes('aria-busy')).toBe('true')
    expect(wrapper.text()).toBe('Retry')
  })

  it('renders Nuxt and native link targets', async () => {
    const routeLink = await mountSuspended(DsButton, {
      props: { to: '/character/1' },
      slots: { default: 'Character' },
    })
    const anchor = await mountSuspended(DsButton, {
      props: { href: 'https://example.com' },
      slots: { default: 'External' },
    })

    expect(routeLink.element.tagName).toBe('A')
    expect(routeLink.attributes('href')).toBe('/character/1')
    expect(anchor.element.tagName).toBe('A')
    expect(anchor.attributes('href')).toBe('https://example.com')
  })

  it('renders disabled navigation without a destination', async () => {
    const wrapper = await mountSuspended(DsButton, {
      props: { to: '/character/1', disabled: true },
      slots: { default: 'Character' },
    })

    expect(wrapper.element.tagName).toBe('SPAN')
    expect(wrapper.attributes('href')).toBeUndefined()
    expect(wrapper.attributes('aria-disabled')).toBe('true')

    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })

  it('allows feature semantics on a disabled navigation span', async () => {
    const wrapper = await mountSuspended(DsButton, {
      props: {
        to: '/?page=2',
        disabled: true,
        size: 'sm',
        radius: 'full',
      },
      attrs: { 'aria-current': 'page' },
      slots: { default: '2' },
    })

    expect(wrapper.element.tagName).toBe('SPAN')
    expect(wrapper.attributes('aria-current')).toBe('page')
    expect(wrapper.attributes('aria-disabled')).toBe('true')

    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })

  it('uses an explicit accessible name for icon-only controls', async () => {
    const wrapper = await mountSuspended(DsButton, {
      props: { ariaLabel: 'Next page', size: 'sm', radius: 'full' },
      slots: { start: '<svg data-test="icon" />' },
    })

    expect(wrapper.attributes('aria-label')).toBe('Next page')
    expect(wrapper.find('[data-test="icon"]').attributes('aria-hidden')).toBe(
      undefined,
    )
    expect(
      wrapper
        .find('[data-test="icon"]')
        .element.parentElement?.getAttribute('aria-hidden'),
    ).toBe('true')
  })
})
