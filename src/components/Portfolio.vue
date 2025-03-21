<template>
  <section id="portfolio">
    <h1>Portfolio</h1>
    <ul class="list row">
      <!-- 3단 구성 -->
      <!-- 
      <li class="col-md-4">
        <img src="/images/work1.jpg" alt="1">
        <h3>title 1</h3>
        <p>작품 설명</p>
      </li>
      <li class="col-md-4">
        <img src="/images/work2.png" alt="2">
        <h3>title 2</h3>
        <p>작품 설명</p>
      </li>
      <li class="col-md-4">
        <img src="/images/work3.png" alt="3">
        <h3>title 3</h3>
        <p>작품 설명</p>
      </li>
      -->

      <li v-for="(data, i) in data" :key="i" class="col-md-4">
        <img :src="data.imgUrl" :alt="i">
        <h3>{{ data.title }}</h3>
        <p>{{ data.desc }}</p>
      </li>
    </ul>
  </section>
</template>

<script setup>
import data from '../assets/portfolio';
console.log(data);
</script>

<style scoped lang="scss">
  #portfolio {
    h1 { margin-bottom: 1rem; }
    .list {
      list-style-type: none;
      padding: 0;

      li {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-bottom: 10vh;
        img {
          width: 100%;
          aspect-ratio: 16 / 9;
          object-fit: cover;
          object-position: top;
        }
        h4 { margin-top: 1rem; }
      }
    }
  }
</style>