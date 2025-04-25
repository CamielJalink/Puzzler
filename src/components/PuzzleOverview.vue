<script setup lang="ts">
import PuzzleWord from '../components/PuzzleWord.vue'
import type { WordRow } from '../types/WordRow.ts'
import findBoundaries from '@/helpers/BoundariesHelper.ts'

const puzzle: WordRow[] = [
  { word: 'kaas', targetChar: 2 },
  { word: 'dropjes', targetChar: 5 },
  { word: 'chips', targetChar: 3 },
  { word: 'bier', targetChar: 4 },
]

const boundaries = findBoundaries(puzzle)
</script>

<template>
  <div class="puzzle-wrapper">
    <PuzzleWord
      v-for="wordRow in puzzle"
      v-bind:key="wordRow.word"
      :word="wordRow"
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
