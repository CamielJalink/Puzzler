<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1>{{ msg }}</h1>
    <h2>For all your puzzler needs</h2>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h2 {
  font-size: 1.2rem;
}

.greetings {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.greetings h1,
.greetings h2 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h2 {
    text-align: left;
  }
}
</style>
