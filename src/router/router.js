import { createWebHistory, createRouter } from "vue-router";

// js 같은 경우는 확장자 생략이 가능한데 컴포넌트 경우에는 확장자 명시해줘야 오류가 안난다.
import TitlePage from '../components/TitlePage.vue';
import About from '../components/About.vue';
import Portfolio from '../components/Portfolio.vue';

const router = createRouter({
  history: createWebHistory(),
  // 라우터와 관련된 path 등록
  routes: [
    { path: '/', component: TitlePage },
    { path: '/about', component: About },
    { path: '/portfolio', component: Portfolio },
  ]
})

export default router;