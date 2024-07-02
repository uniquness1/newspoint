<template>
  <section class="mt-5 max-w-6xl mx-auto flex flex-col lg:flex-row gap-5">
    <div class="w-full xl:w-[65%] px-4 xl:px-0">
      <div class="bg-white p-4 border-l-4 border-l-[#FFCC00] flex flex-col border-b mb-4">
        <h1 class="text-3xl font-semibold max-w-max text-slate-800 capitalize">
          {{ category }} News
        </h1>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 py-5">
        <div v-for="news in firstSectionNews" :key="news.id" class="news-item bg-white">
          <img :src="news.image" alt="" class="h-[200px] object-cover w-full" />
          <div class="bg-white p-4">
            <router-link
              :to="`/news/${category}/${news.slug}`"
              class="text-xl font-bold text-slate-800 hover:underline"
            >
              {{ news.title }}
            </router-link>
            <p class="text-base text-slate-600">{{ news.description }}</p>
          </div>
        </div>
      </div>
      <AdsBannerVue />
      <div class="grid md:grid-cols-2 gap-4 py-5">
        <div v-for="news in secondSectionNews" :key="news.id">
          <div class="flex h-full">
            <div class="w-[35%] md:h-full">
              <img class="h-24 md:h-full object-cover" :src="news.image" alt="" />
            </div>
            <div class="bg-white flex flex-col gap-1 px-4 py-2 w-[65%]">
              <div class="flex flex-nowrap items-center gap-4">
                <router-link
                  to="#"
                  class="text-slate-800 uppercase font-bold text-xs max-w-max w-full px-2 py-2 bg-[#ffcc00]"
                >
                  {{ news.category }}
                </router-link>
                <router-link to="#" class="text-slate-800 font-normal text-sm max-w-max w-full">
                  {{ news.date }}
                </router-link>
              </div>
              <router-link
                :to="`/news/${category}/${news.slug}`"
                class="text-slate-800 font-bold text-[14px] leading-5 text-wrap hover:underline"
              >
                {{ news.title }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
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

<script setup>
import { computed } from 'vue'
import SocialSection from '@/components/Home/SocialSection.vue'
import Ads from '@/components/Home/AdS.vue'
import TrendingNews from '@/components/Home/TrendingNews.vue'
import NewsLetter from '@/components/Home/NewsLetter.vue'
import TagsSection from '@/components/Home/TagsSection.vue'
import newsList from '@/assets/news.json'
import AdsBannerVue from '@/components/Home/adsBanner.vue'

const props = defineProps(['category'])

const getImageUrl = (image) => {
  return `/images/${image}`
}

const filteredNews = computed(() =>
  newsList
    .filter((news) => news.category.toLowerCase() === props.category.toLowerCase())
    .map((news) => ({
      ...news,
      image: getImageUrl(news.image)
    }))
)

const firstSectionNews = computed(() =>
  filteredNews.value.slice(0, Math.ceil(filteredNews.value.length / 2))
)
const secondSectionNews = computed(() =>
  filteredNews.value.slice(Math.ceil(filteredNews.value.length / 2))
)
</script>

<style scoped>
.news-item {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
