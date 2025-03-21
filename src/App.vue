<script setup>
import Title from './components/Title.vue';
import Portfolio from './components/Portfolio.vue';
</script>

<template>
  <!-- https://getbootstrap.com/ 참조하여 코드 가져다가 붙여넣음 -->
  <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Portfolio</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <Title />
  <Portfolio />
</template>

<!-- lang="scss" 를 쓰면 sass 문법을 사용할 수 있다. -->
<style scoped lang="scss">
  
</style>
