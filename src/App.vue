<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import PuzzleOverview from './components/PuzzleOverview.vue'
</script>

<template>
  <header>
    <div class="d-flex">
      <HelloWorld msg="Welcome to Puzzler" />
    </div>
  </header>

  <main>
    <PuzzleOverview></PuzzleOverview>
  </main>
</template>

<style scoped>
.d-flex {
  display: flex;
  justify-content: center;
}
</style>
