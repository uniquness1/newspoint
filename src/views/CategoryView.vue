<template>
  <section class="mt-5 max-w-6xl mx-auto flex gap-5">
    <div class="w-full xl:w-[65%]">
      <div class="bg-white p-4 border-l-4 border-l-[#FFCC00] flex flex-col border-b mb-4">
        <h1 class="text-3xl font-semibold max-w-max text-slate-800 capitalize">
          {{ category }} News
        </h1>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 py-5">
        <div v-for="news in filteredNews" :key="news.id" class="news-item bg-white">
          <img :src="getImageUrl(news.image)" alt="" />
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
      <div class="grid md:grid-cols-2 gap-4 py-5">
        <div v-for="news in filteredNews" :key="news.id">
          <div class="flex h-full">
            <div class="w-[35%] md:h-full">
              <img class="h-24 md:h-full object-cover" :src="getImageUrl(news.image)" alt="" />
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
import SocialSection from '@/components/Home/SocialSection.vue'
import Ads from '@/components/Home/AdS.vue'
import TrendingNews from '@/components/Home/TrendingNews.vue'
import NewsLetter from '@/components/Home/NewsLetter.vue'
import TagsSection from '@/components/Home/TagsSection.vue'
</script>
<script>
import newsList from '@/assets/news.json'

export default {
  props: ['category'],
  computed: {
    filteredNews() {
      return newsList.filter((news) => news.category.toLowerCase() === this.category.toLowerCase())
    }
  },
  methods: {
    getImageUrl(image) {
      return new URL(`../assets/images/${image}`, import.meta.url).href
    }
  }
}
</script>
