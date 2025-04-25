<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
const props = defineProps<{
  char: string,
  isTargetChar: boolean,
}>()
</script>

<template>
  <input :class="{ isTargetChar: isTargetChar}" class="char" :value="char"></input>
</template>

<style scoped>
  .char {
    box-sizing: border-box;
    width: 30px;
    text-align: center;
  }

  .isTargetChar {
    background-color: hotpink;
  }
</style>
