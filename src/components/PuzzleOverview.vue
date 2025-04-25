<script setup lang="ts">
import PuzzleWord from '../components/PuzzleWord.vue'
import type { WordRow } from '../types/WordRow.ts'
import findBoundaries from '@/helpers/BoundariesHelper.ts'

const puzzle: WordRow[] = [
  { word: 'eten', targetChar: 0 },
  { word: 'aap', targetChar: 1 },
  { word: 'tomaten', targetChar: 4 },
  { word: 'kaars', targetChar: 4 },
  { word: 'honing', targetChar: 0 },
  { word: 'schild', targetChar: 3 },
  { word: 'frituur', targetChar: 3 },
]

const boundaries = findBoundaries(puzzle)
</script>

<template>
  <div class="puzzle-wrapper">
    <PuzzleWord
      v-for="wordRow in puzzle"
      v-bind:key="wordRow.word"
      :wordRow="wordRow"
      :boundaries="boundaries"
    ></PuzzleWord>
  </div>
</template>

<style scoped>
.puzzle-wrapper {
  display: block;
  justify-self: center;
}
</style>
