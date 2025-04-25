<script setup lang="ts">
import type { WordRow } from '../types/WordRow.ts'
import PuzzleChar from './PuzzleChar.vue'

const props = defineProps<{
  wordRow: WordRow
  boundaries: number[]
}>()

const maxLeft = props.boundaries[0]
// const maxRight = boundaries[1]

const left = maxLeft - props.wordRow.targetChar
console.log(left)
</script>

<template>
  <!-- Meerdere v-fors, 1tje voor padding left, 1tje voor chars, 1tje voor padding right -->
  <div class="word-wrapper">
    <div class="filler" v-for="index in left" v-bind:key="index"></div>

    <!-- (item, index) in items" -->

    <PuzzleChar
      v-for="(char, index) in props.wordRow.word"
      :char="char"
      v-bind:key="char"
      :isTargetChar="index === props.wordRow.targetChar"
    >
    </PuzzleChar>
  </div>
</template>

<style scoped>
.word-wrapper {
  display: flex;
  flex-direction: row;
}

.filler {
  width: 30px;
}
</style>
