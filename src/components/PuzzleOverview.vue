<script setup lang="ts">
import PuzzleWord from '../components/PuzzleWord.vue'
import type { Word } from '../types/Word.ts'

const puzzle: Word[] = [
  { word: 'kaas', targetChar: 2 },
  { word: 'dropjes', targetChar: 5 },
  { word: 'chips', targetChar: 3 },
  { word: 'bier', targetChar: 4 },
]
</script>

<template>
  <div class="puzzle-wrapper">
    <PuzzleWord v-for="word in puzzle" v-bind:key="word.word" :word="word"></PuzzleWord>
  </div>
</template>

<style scoped>
.puzzle-wrapper {
  display: block;
  justify-self: center;
}
</style>
