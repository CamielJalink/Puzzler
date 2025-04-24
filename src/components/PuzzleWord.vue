<script setup lang="ts">
import type { Word } from '../types/Word.ts'
import PuzzleChar from './PuzzleChar.vue'

const props = defineProps<{
  word: Word
}>()
</script>

<template>
  <PuzzleChar v-for="char in props.word.word" :char="char" v-bind:key="char"></PuzzleChar>
</template>

<style scoped></style>
