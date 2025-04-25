import type { WordRow } from '../types/WordRow.ts'

export default function findBoundaries(input: WordRow[]): number[] {
  return input
    .map((wordRow: WordRow) => {
      return [wordRow.targetChar, wordRow.word.length - 1 - wordRow.targetChar]
    })
    .reduce(
      (previous, current) => {
        return [Math.max(previous[0], current[0]), Math.max(previous[1], current[1])]
      },
      [0, 0],
    )
}
