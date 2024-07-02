import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },

  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title:
          'Newspoint - Welcome to the haven of information and news update from around the globe',
        metaTags: [
          {
            name: 'Newspoint',
            content:
              'Newspoint gives you upto date news information to keep you always informed and updated with news from around the globe'
          },
          {
            property: 'og:Newspoint',
            content:
              'Newspoint gives you upto date news information to keep you always informed and updated with news from around the globe'
          }
        ]
      }
    },
    {
      path: '/news/:category',
      name: 'category',
      component: () => import('../views/CategoryView.vue'),
      props: true,
      meta: {
        title: 'Explore different Categories of News on Newspoint',
        metaTags: [
          {
            name: 'Category',
            content:
              'Newspoint gives you upto date news information to keep you always informed and updated on any category'
          },
          {
            property: 'og:Category',
            content:
              'Newspoint gives you upto date news information to keep you always informed and updated on any category'
          }
        ]
      }
    },
    {
      path: '/news/:category/:slug',
      name: 'news details',
      component: () => import('../views/NewsDetail.vue'),
      props: true
    }
  ]
})

router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.title)
  const nearestWithMeta = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.metaTags)
  const previousNearestWithMeta = from.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.metaTags)

  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title
  } else if (previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title
  }

  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).forEach((el) =>
    el.parentNode.removeChild(el)
  )

  if (nearestWithMeta) {
    nearestWithMeta.meta.metaTags.forEach((tagDef) => {
      const tag = document.createElement('meta')
      Object.keys(tagDef).forEach((key) => tag.setAttribute(key, tagDef[key]))
      tag.setAttribute('data-vue-router-controlled', '')
      document.head.appendChild(tag)
    })
  }

  next()
})

export default router
