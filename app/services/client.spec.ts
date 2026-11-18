import { describe, expect, it, vi } from 'vitest'
import { createApiClient } from './client'

describe('api', () => {
  it('uses the configured base URL and explicit retry policy', () => {
    const fetcher = { create: vi.fn(() => vi.fn()) }
    createApiClient('https://api.example.test', fetcher as never)

    expect(fetcher.create).toHaveBeenCalledWith({
      baseURL: 'https://api.example.test',
      retry: 1,
    })
  })

  it('allows services to forward cancellation through request options', () => {
    const controller = new AbortController()
    const request = vi.fn()
    const fetcher = { create: vi.fn(() => request) }
    createApiClient('https://api.example.test', fetcher as never)(
      '/character',
      {
        signal: controller.signal,
      },
    )

    expect(request).toHaveBeenCalledWith('/character', {
      signal: controller.signal,
    })
  })
})
