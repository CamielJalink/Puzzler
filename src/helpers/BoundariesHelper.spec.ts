import { describe, it, expect } from 'vitest'
import findBoundaries from './BoundariesHelper'
import type { WordRow } from '@/types/WordRow'

describe('findBoundaries', () => {
  it('Finds the correct boundaries for a puzzle input', () => {
    const puzzle: WordRow[] = [
      { word: 'kaas', targetChar: 2 },
      { word: 'dropjes', targetChar: 5 },
      { word: 'chips', targetChar: 3 },
      { word: 'bier', targetChar: 3 },
    ]

    expect(findBoundaries(puzzle)).toEqual([5, 1])
  })

  it('Finds the correct boundaries for a second puzzle input', () => {
    const puzzle: WordRow[] = [
      { word: 'kaas', targetChar: 0 },
      { word: 'chips', targetChar: 4 },
    ]

    expect(findBoundaries(puzzle)).toEqual([4, 3])
  })
})
