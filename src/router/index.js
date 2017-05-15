import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/Index';
import Spellcheck from '@/components/Spellcheck';
import TextAnalysis from '@/components/TextAnalysis';
import Weblang from '@/components/Weblang';
import LingAnalysis from '@/components/LingAnalysis';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/spellcheck',
      name: 'Spellcheck',
      component: Spellcheck,
    },
    {
      path: '/textanalysis',
      name: 'TextAnalysis',
      component: TextAnalysis,
    },
    {
      path: '/weblang',
      name: 'Weblang',
      component: Weblang,
    },
    {
      path: '/linganalysis',
      name: 'LinganAlysis',
      component: LingAnalysis,
    },
  ],
});
