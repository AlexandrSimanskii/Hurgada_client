import { createRouter, createWebHistory } from 'vue-router'

const HomePage = () => import('@/pages/HomePage.vue')
const NotFoundPage =()=>import('@/pages/NotFoundPage.vue')
const ThinkToDoPage =()=> import('@/pages/ThinkToDoPage.vue')
const AirportTransferPage =()=> import('@/pages/AirportTransferPage.vue')
const ContactPage =()=> import('@/pages/ContactsPage.vue')
const ExcursionsPage =()=>import('@/pages/ExcursionsPage.vue')
const FoodGuidePage = ()=>import('@/pages/FoodGuidePage.vue')
const JobsPage =()=>import ('@/pages/JobsPage.vue')
const NewsPage =()=>import('@/pages/NewsPage.vue')
const NightLifePage =()=>import ('@/pages/NightLifePage.vue')
const RealEstatePage = ()=>import('@/pages/RealEstatePage.vue')






const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: "/think",
      
      component: ThinkToDoPage
    }, 
    {path:'/airport',

      component:AirportTransferPage
    },
    
    
    {
      path: "/excursions",
      
      component:ExcursionsPage
    },  {
      path: "/news",
      
      component:NewsPage
    },  {
      path: "/nightlife",
      
      component:NightLifePage
    },  {
      path: "/foodguide",
      
      component:FoodGuidePage
    },  {
      path: "/realestate",
      
      component:RealEstatePage
    },  {
      path: "/jobs",
      
      component:JobsPage
    },  {
      path: "/contacts",
      
      component:ContactPage
    },
    {
      path: "/:catchAll(.*)",
      
      component: NotFoundPage
    },
    
  ]
})

export default router
