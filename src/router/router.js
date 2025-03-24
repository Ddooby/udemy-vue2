//import { createWebHistory, createRouter } from "vue-router";
import { createRouter, createWebHashHistory } from "vue-router";

// js 같은 경우는 확장자 생략이 가능한데 컴포넌트 경우에는 확장자 명시해줘야 오류가 안난다.
import TitlePage from '../components/TitlePage.vue';
import About from '../components/About.vue';
import Portfolio from '../components/Portfolio.vue';
import Detail from "../components/Detail.vue";

const router = createRouter({
  // 서버 배포 후,
  // 라우터가 생성하는 경로가 서버에 존재하지 않기 때문에 페이지를 새로고침하거나
  // 직접 주소를 입력하면 404 오류가 발생할 수 있다.
  // createWebHashHistory -> 라우터 방식을 해시(#) 방식으로 변경
  //history: createWebHistory(),
  history: createWebHashHistory(),
  
  // 라우터와 관련된 path 등록
  routes: [
    { path: '/', component: TitlePage },
    { path: '/about', component: About },
    { path: '/portfolio', component: Portfolio },
    { path: '/detail/:id', component: Detail },
  ]
})

export default router;