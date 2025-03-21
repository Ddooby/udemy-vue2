<template>
  <section id="about" class="container">
    <h1>About</h1>
    <!-- gx-5 는 Bootstrap 의 Gutter 관련(Column 사이의 간격) 수평 간격 5단계 -->
    <div class="row gx-5">
      <figure class="col-md-6">
        <img src="../assets/images/profile.jpg" alt="profile">
        <figcaption>About Michael Kwon</figcaption>
      </figure>
      <p class="col-md-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis odit id suscipit similique
        excepturi, rem consequuntur pariatur qui non commodi eos aliquid, porro exercitationem necessitatibus sint
        veritatis cumque quas esse.
      </p>
    </div>

    <!-- mt-5 는 Bootstrap 의 Spacing 관련 top margin 5단계 -->
    <article class="row mt-5">
      <h2>Skills</h2>
      <!--
      <dl>
        <dt class="lead">HTML</dt>
        <dd>
          <div 
            class="progress" 
            role="progressbar"
          >
            <div class="progress-bar" style="width: 80%"></div>
          </div>
        </dd>
        <dt class="lead">JavaScript</dt>
        <dd>
          <div 
            class="progress" 
            role="progressbar"
          >
            <div class="progress-bar" style="width: 50%"></div>
          </div>
        </dd>
        <dt class="lead">Vue</dt>
        <dd>
          <div 
            class="progress" 
            role="progressbar"
          >
            <div class="progress-bar" style="width: 75%"></div>
          </div>
        </dd>
      </dl>
       -->
      <dl v-for="(skill, i) in skill" :key="i">
        <dt class="lead">{{ skill.name }}</dt>
        <dd>
          <!-- <div 
            class="progress" 
            role="progressbar"
          >
            <div class="progress-bar" :style="witdh: {{skill.point}}"></div>
          </div> -->
        </dd>
      </dl>
    </article>
  </section>
</template>
<script setup>
  const skills = [
    { name: 'HTML', point: '90%' },
    { name: 'CSS', point: '80%' },
    { name: 'JAVASCRIPT', point: '50%' },
    { name: 'VUE', point: '75%' },
  ]
</script>
<style lang="scss">
  figure img {
    width: 100%;
  }
</style>