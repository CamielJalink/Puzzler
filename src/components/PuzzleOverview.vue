<script setup lang="ts">
import PuzzleWord from '../components/PuzzleWord.vue'
import type { Word } from '../types/Word.ts'

const puzzle: Word[] = [
  { word: 'kaas', puzzleChar: 2 },
  { word: 'dropjes', puzzleChar: 5 },
]
</script>

<template>
  <PuzzleWord v-for="word in puzzle" v-bind:key="word.word" :word="word"></PuzzleWord>
</template>

<style scoped></style>
