<script setup lang="ts">
import type { Word } from '../types/Word.ts'
import PuzzleChar from './PuzzleChar.vue'

const props = defineProps<{
  word: Word
}>()
</script>

<template>
  <div class="word-wrapper">
    <PuzzleChar v-for="char in props.word.word" :char="char" v-bind:key="char" :isTargetChar="true">
    </PuzzleChar>
  </div>
</template>

<style scoped>
.word-wrapper {
  display: flex;
  flex-direction: row;
}
</style>
