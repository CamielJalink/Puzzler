<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
const props = defineProps<{
  char: string
}>()
</script>

<template>
  <input :value="char"></input>
</template>

<style scoped></style>
