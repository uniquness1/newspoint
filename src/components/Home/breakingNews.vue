<template>
  <section class="w-full">
    <div
      class="w-full max-w-6xl mx-auto flex flex-wrap md:flex-nowrap gap-4 md:flex-row items-center py-5 px-4 lg:px-0"
    >
      <h1 class="text-black uppercase font-bold text-base max-w-max w-full px-4 py-2 bg-[#ffcc00]">
        Breaking News:
      </h1>
      <swiper
        :modules="modules"
        :slides-per-view="1"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false
        }"
        :space-between="0"
        :speed="1500"
        :loop="true"
        :touch="true"
        class="breaking-news-swiper"
      >
        <swiper-slide v-for="(news, index) in breakingNews" :key="index">
          <div>
            <router-link
              :to="`/news/${news.category.toLowerCase()}/${news.slug}`"
              class="text-white text-sm md:text-base xl:text-lg font-normal uppercase hover:underline"
            >
              {{ news.title }}
            </router-link>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { A11y, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import newsList from '@/assets/news.json'

const modules = [A11y, Autoplay]

const breakingNews = ref([])

onMounted(() => {
  const breakingCategory = 'Breaking'.toLowerCase()
  breakingNews.value = newsList
    .filter((news) => news.category.toLowerCase() === breakingCategory)
    .map((news) => ({
      title: news.title,
      category: news.category,
      slug: news.slug
    }))

  // Debugging
  console.log('Breaking News:', breakingNews.value)
})
</script>

<style scoped>
section {
  background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 1));
}
</style>
