<template>
  <section>
    <div
      class="max-w-6xl mx-auto bg-white p-4 border-l-4 border-l-[#FFCC00] flex flex-col border-b mt-5"
    >
      <h1 class="text-3xl font-semibold max-w-max text-slate-800">TRENDING NEWS</h1>
    </div>
    <div class="grid md:grid-cols-2 xl:grid-cols-1 gap-4 bg-white py-3 px-2 md:p-5">
      <div v-for="(news, index) in trendingNews" :key="index">
        <div class="flex h-full">
          <div class="w-[35%] h-full">
            <img class="h-28 md:h-full object-cover" :src="getImageUrl(news.image)" alt="" />
          </div>
          <div class="bg-white flex flex-col gap-1 px-4 py-2 w-[65%]">
            <div class="flex flex-nowrap items-center gap-4">
              <router-link
                to="#"
                class="text-slate-800 uppercase font-bold text-sm max-w-max w-full px-2 py-2 bg-[#ffcc00]"
              >
                {{ news.category }}
              </router-link>
              <router-link to="#" class="text-slate-800 font-normal text-sm max-w-max w-full">
                {{ news.date }}
              </router-link>
            </div>
            <router-link to="#" class="text-slate-800 font-bold text-sm text-wrap hover:underline">
              {{ news.title }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import newsList from '@/assets/news.json'

const trendingNewsIds = [23, 21, 19, 17]
const trendingNews = ref([])

const getImageUrl = (image) => {
  return `/images/${image}`
}

onMounted(() => {
  trendingNews.value = newsList.filter((news) => trendingNewsIds.includes(Number(news.id)))
})
</script>

<style scoped>
.news-item {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
