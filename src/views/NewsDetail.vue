<template>
  <section class="mt-5 max-w-6xl mx-auto flex flex-col lg:flex-row gap-5">
    <div class="pt-5 bg-white h-max w-full xl:w-[65%] px-4 xl:px-0">
      <div class="p-4 border-l-4 border-l-[#FFCC00] flex flex-col border-b">
        <h1 class="text-3xl font-semibold max-w-max text-slate-800">{{ news.title }}</h1>
      </div>
      <img :src="news.image" alt="" class="mb-4" />
      <p class="text-base text-slate-600">{{ news.description }}</p>
      <AdsBannerVue />
      <div v-html="news.content" class="text-base text-slate-600 mt-4"></div>
      <AdsBannerVue />
    </div>
    <div class="w-full xl:w-[35%] px-4 xl:px-0">
      <SocialSection />
      <Ads />
      <TrendingNews />
      <NewsLetter />
      <TagsSection />
    </div>
  </section>
</template>

<script>
import { computed } from 'vue'
import AdsBannerVue from '@/components/Home/adsBanner.vue'
import newsList from '@/assets/news.json'
import SocialSection from '@/components/Home/SocialSection.vue'
import Ads from '@/components/Home/AdS.vue'
import TrendingNews from '@/components/Home/TrendingNews.vue'
import NewsLetter from '@/components/Home/NewsLetter.vue'
import TagsSection from '@/components/Home/TagsSection.vue'

export default {
  components: {
    AdsBannerVue,
    SocialSection,
    Ads,
    TrendingNews,
    NewsLetter,
    TagsSection
  },
  props: ['category', 'slug'],
  setup(props) {
    const getImageUrl = (image) => {
      return `/images/${image}`
    }

    const news = computed(() => {
      const foundNews = newsList.find((news) => news.slug === props.slug)
      if (foundNews) {
        return {
          ...foundNews,
          image: getImageUrl(foundNews.image)
        }
      }
      return null
    })

    return {
      news,
      getImageUrl
    }
  }
}
</script>

<style scoped>
/* Your styles */
</style>
