import { createRouter, createWebHistory } from 'vue-router'

const HomePage = () => import('@/pages/HomePage.vue')
const NotFoundPage = () => import('@/pages/NotFoundPage.vue')
const ThinkToDoPage = () => import('@/pages/ThinkToDoPage.vue')
const AirportTransferPage = () => import('@/pages/AirportTransferPage.vue')
const ContactPage = () => import('@/pages/ContactsPage.vue')
const ExcursionsPage = () => import('@/pages/excursion/ExcursionsPage.vue')
const ExcursionsCard = () => import('@/pages/excursion/ExcursionCard.vue')
const FoodGuidePage = () => import('@/pages/food/FoodGuidePage.vue')
const FoodGuideCard = () => import('@/pages/food/FoodGuideCard.vue')
const JobsPage = () => import('@/pages/JobsPage.vue')
const NewsPage = () => import('@/pages/NewsPage.vue')
const NightLifePage = () => import('@/pages/night/NightLifePage.vue')
const NightLifeCard = () => import('@/pages/night/NightLifeCard.vue')
const RealEstatePage = () => import('@/pages/RealEstatePage.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/think',
      name: 'think',
      component: ThinkToDoPage
    },
    {
      path: '/airport',
      name: 'airport',
      component: AirportTransferPage
    },
    {
      path: '/excursions',
      name: 'excursions',
      component: ExcursionsPage
    },
    { 
      path: '/excursions/:id', 
      name: 'excursion-card', 
      component: ExcursionsCard 
    },
    {
      path: '/news',
      name: 'news',
      component: NewsPage
    },
    {
      path: '/nightlife/:id',  // Исправлено
      name: 'nightlife-card',
      component: NightLifeCard
    },
    {
      path: '/nightlife',
      name: 'nightlife',
      component: NightLifePage
    },
    {
      path: '/foodguide',
      name: 'foodguide',
      component: FoodGuidePage
    },
    {
      path: '/foodguide/:id', // Исправлено
      name: 'foodguide-card',
      component: FoodGuideCard
    },
    {
      path: '/realestate',
      name: 'realestate',
      component: RealEstatePage
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsPage
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: ContactPage
    },
    {
      path: '/:catchAll(.*)',
      name: 'notfound',
      component: NotFoundPage
    }
  ]
})

export default router
