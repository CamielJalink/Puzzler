<script setup lang="ts">
import type { WordRow } from '../types/WordRow.ts'
import PuzzleChar from './PuzzleChar.vue'

const props = defineProps<{
  word: WordRow
  boundaries: number[]
}>()

// hier bepalen we de actual padding left en right van dit specifieke woord.
</script>

<template>
  <!-- Meerdere v-fors, 1tje voor padding left, 1tje voor chars, 1tje voor padding right -->
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
