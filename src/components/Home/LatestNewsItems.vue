<template>
  <section class="px-4 xl:px-0">
    <div
      class="max-w-6xl mx-auto bg-white p-4 border-l-4 border-l-[#FFCC00] flex items-center justify-between mb-4"
    >
      <h1 class="text-3xl font-semibold max-w-max text-slate-800">LATEST NEWS</h1>
      <router-link class="text-xl font-medium text-slate-800" to="#">View All</router-link>
    </div>

    <!-- news card first row -->
    <div class="grid md:grid-cols-2 gap-4">
      <div v-for="(news, index) in firstRowNews" :key="index">
        <div>
          <img :src="news.image" alt="" class="h-[200px] w-full" />
        </div>
        <div class="bg-white flex flex-col gap-4 p-4">
          <div class="flex flex-nowrap items-center gap-5">
            <router-link
              :to="`/news/${news.category.toLowerCase()}`"
              class="text-slate-800 uppercase font-bold text-sm max-w-max w-full px-4 py-2 bg-[#ffcc00]"
            >
              {{ news.category }}
            </router-link>
            <router-link
              :to="`/date/${news.date}`"
              class="text-slate-800 font-normal text-base max-w-max w-full"
            >
              {{ news.date }}
            </router-link>
          </div>
          <router-link
            :to="`/news/${news.category.toLowerCase()}/${news.slug}`"
            class="text-slate-800 font-bold text-[22px] leading-6 text-wrap hover:underline"
          >
            {{ news.title }}
          </router-link>
          <p class="text-base font-normal text-slate-600">{{ news.description }}</p>
        </div>
      </div>
    </div>
    <AdsBanner />
    <!-- news card second row -->
    <div class="grid md:grid-cols-2 gap-4 py-5">
      <div v-for="(news, index) in secondRowNews" :key="index">
        <div class="flex h-full">
          <div class="w-[35%] md:h-full">
            <img class="h-28 md:h-full object-cover" :src="news.image" alt="" />
          </div>
          <div class="bg-white flex flex-col gap-1 px-4 py-2 w-[65%]">
            <div class="flex flex-nowrap items-center gap-4">
              <router-link
                :to="`/news/${news.category.toLowerCase()}`"
                class="text-slate-800 uppercase font-bold text-sm max-w-max w-full px-2 py-2 bg-[#ffcc00]"
              >
                {{ news.category }}
              </router-link>
              <router-link
                :to="`/date/${news.date}`"
                class="text-slate-800 font-normal text-sm max-w-max w-full"
              >
                {{ news.date }}
              </router-link>
            </div>
            <router-link
              :to="`/news/${news.category.toLowerCase()}/${news.slug}`"
              class="text-slate-800 font-bold text-[14px] leading-5 text-wrap hover:underline mt-2"
            >
              {{ news.title }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="px-4 xl:px-0">
    <!-- news card single -->
    <div v-if="singleNews" class="flex flex-col md:flex-row h-full">
      <div class="w-full md:w-[40%] h-full">
        <img
          class="h-[300px] md:h-[350px] lg:h-[320px] w-full object-cover"
          :src="singleNews.image"
          alt=""
        />
      </div>
      <div class="bg-white flex flex-col gap-1 px-4 py-10 w-full md:w-[60%] h-[350px] lg:h-[320px]">
        <div class="flex flex-nowrap items-center gap-4">
          <router-link
            :to="`/news/${singleNews.category.toLowerCase()}`"
            class="text-slate-800 uppercase font-bold text-sm max-w-max w-full px-2 py-2 bg-[#ffcc00]"
          >
            {{ singleNews.category }}
          </router-link>
          <router-link
            :to="`/date/${singleNews.date}`"
            class="text-slate-800 font-normal text-sm max-w-max w-full"
          >
            {{ singleNews.date }}
          </router-link>
        </div>
        <router-link
          :to="`/news/${singleNews.category.toLowerCase()}/${singleNews.slug}`"
          class="text-slate-800 font-bold text-xl text-wrap hover:underline my-3"
        >
          {{ singleNews.title }}
        </router-link>
        <p class="text-base font-normal text-slate-600">{{ singleNews.description }}</p>
      </div>
    </div>
    <AdsBanner />
    <!-- news card third row -->
    <div class="grid md:grid-cols-2 gap-4 py-5">
      <div v-for="(news, index) in thirdRowNews" :key="index">
        <div class="flex h-full">
          <div class="w-[35%] h-full">
            <img class="h-28 md:h-full object-cover" :src="news.image" alt="" />
          </div>
          <div class="bg-white flex flex-col gap-1 px-4 py-2 w-[65%]">
            <div class="flex flex-nowrap items-center gap-4">
              <router-link
                :to="`/news/${news.category.toLowerCase()}`"
                class="text-slate-800 uppercase font-bold text-sm max-w-max w-full px-2 py-2 bg-[#ffcc00]"
              >
                {{ news.category }}
              </router-link>
              <router-link
                :to="`/date/${news.date}`"
                class="text-slate-800 font-normal text-sm max-w-max w-full"
              >
                {{ news.date }}
              </router-link>
            </div>
            <router-link
              :to="`/news/${news.category.toLowerCase()}/${news.slug}`"
              class="text-slate-800 font-bold text-[14px] leading-5 text-wrap hover:underline mt-2"
            >
              {{ news.title }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import AdsBanner from './adsBanner.vue'
import newsList from '@/assets/news.json'

const getImageUrl = (image) => {
  return `/images/${image}`
}

const processedNewsList = newsList.map((news) => ({
  ...news,
  image: getImageUrl(news.image)
}))

const firstRowNews = computed(() => processedNewsList.slice(6, 10))
const secondRowNews = computed(() => processedNewsList.slice(13, 17))
const thirdRowNews = computed(() => processedNewsList.slice(18, 22))
const singleNews = computed(() => processedNewsList[10])
</script>

<style scoped>
.news-item {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
