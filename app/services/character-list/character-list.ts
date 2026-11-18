import type { Character } from '~/types/api.types'
import type { CharacterPageView } from './character-list.types'
import type { Paginated } from '~/types/pagination.types'
import type { RequestOptions } from '../client.types'
import { api } from '../client'
import { toCharacterView } from '../transformers'

/** Returns null for an API 404 (no matches or page beyond the result set). */
export async function getCharacterPage(
  page: number,
  name: string,
  { signal }: RequestOptions = {},
): Promise<CharacterPageView | null> {
  const request = api()<Paginated<Character>>('/character', {
    query: { page, name: name || undefined },
    signal,
  })

  try {
    const response = await request
    return {
      characters: response.results.map(toCharacterView),
      currentPage: page,
      totalPages: response.info.pages,
    }
  } catch (error: unknown) {
    if (
      typeof error === 'object' &&
      error !== null &&
      'statusCode' in error &&
      error.statusCode === 404
    ) {
      return null
    }
    throw error
  }
}
