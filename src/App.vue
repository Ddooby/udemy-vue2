<script setup>

</script>

<template>
  <div class="parent">
    <h1 class="display-1">App</h1>
    <button class="btn btn-primary">button</button>
  </div>
  <h1>heading 1</h1>
</template>

<!-- lang="scss" 를 쓰면 sass 문법을 사용할 수 있다. -->
<style scoped lang="scss">
  // .parent h1 {
  //   color: red;
  // }

  // .parent button {
  //   color: yellow;
  // }

  // Nesting 문법
  .parent {
    h1 { color: red; }
    button { color: yellow }
  }
</style>
