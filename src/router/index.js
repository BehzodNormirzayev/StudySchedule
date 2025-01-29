import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   
    // Страница Login должна быть первой
    {
      path: '/',
      name: 'Login',
      component: () => import('@/pages/LoginPage.vue')
    },
    
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/pages/dashboard/DashboardPage.vue'),
      children: [
        {
          path: '',
          redirect: 'lessons'
        },
        {
          path: 'lessons',
          name: 'lessons',
          component: () => import('@/pages/dashboard/lessons/LessonsPage.vue')
        },
        {
          path: 'classes',
          name: 'classes',
          component: () => import('@/pages/dashboard/classes/ClassesPage.vue')
        },
        {
          path: 'shedule',
          name: 'shedule',
          component: () => import('@/pages/dashboard/shedule/ShedulePage.vue')
        },
        {
          path: 'teachers',
          name: 'teachers',
          component: () => import('@/pages/dashboard/teachers/TeachersPage.vue')
        },
        {
          path: 'teachers/:id',
          name: 'teacher-info',
          component: () => import('@/pages/dashboard/teachers/TeacherInfo.vue')
        },
        {
          path: 'messages',
          name: 'messages',
          component: () => import('@/pages/dashboard/messages/MessagesPage.vue')
        },
        {
          path: '500',
          component: () => import('@/pages/_500.vue'),
          name: 'dashboard_internal_server_error'
        }
      ]
    },


    {
      path: '/tutor',
      name: 'tutor',
      component: () => import('@/pages/tutor/TutorPage.vue'),
      children: [
        {
           path: 'sheduletutor',
           name: 'sheduletutor',
           component: () => import('@/pages/tutor/sheduletutor/SheduletutorPage.vue')
        },
        {
          path: 'profile',
          name: 'profile',
          component: () => import('@/pages/tutor/profile/ProfilePage.vue')
        },
        {
          path: 'messagestutor',
          name: 'messagestutor',
          component: () => import('@/pages/tutor/messagestutor/MessagestutorPage.vue')
        },
        {
           path: '500',
           component: () => import('@/pages/_500.vue'),
           name: 'dashboard_internal_server_error'
        }
      ]
    },
    {
      path: '/500',
      component: () => import('@/pages/_500.vue'),
      name: 'internal_server_error'
    },
    {
      path: '/404',
      component: () => import('@/pages/_404.vue'),
      name: 'not_found_main'
    }
  ]
})

export default router
