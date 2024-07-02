<template>
  <section class="py-10 px-4 xl:px-0">
    <div
      class="max-w-6xl mx-auto bg-white p-4 border-l-4 border-l-[#FFCC00] flex items-center justify-between mb-8"
    >
      <h1 class="text-lg md:text-3xl font-semibold max-w-max text-slate-800">FEATURED NEWS</h1>
      <div class="flex items-center gap-4">
        <div
          class="swiper-button-prev-wrapper border border-black px-4 py-4 border-solid hover:bg-[#FFCC00] cursor-pointer"
        ></div>
        <div
          class="swiper-button-next-wrapper border border-black px-4 py-4 border-solid hover:bg-[#FFCC00] cursor-pointer"
        ></div>
      </div>
    </div>
    <div class="max-w-6xl mx-auto w-full">
      <swiper
        :modules="modules"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false
        }"
        :speed="1500"
        :loop="true"
        :breakpoints="{
          640: {
            slidesPerView: 1
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30
          }
        }"
        class="featured-news-swiper"
      >
        <swiper-slide v-for="news in featuredNews" :key="news.id">
          <div
            :class="news.backgroundClass"
            class="news-item flex items-end px-4 pt-32 pb-10"
            :style="{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(${news.imageUrl})`
            }"
          >
            <div class="flex flex-col gap-4">
              <div class="flex flex-wrap items-center gap-5">
                <router-link
                  :to="`/news/${news.category.toLowerCase()}`"
                  class="text-black uppercase font-bold text-sm max-w-max w-full px-4 py-2 bg-[#ffcc00]"
                >
                  {{ news.category }}
                </router-link>
                <router-link to="#" class="text-white font-normal text-base max-w-max w-full">
                  {{ news.date }}
                </router-link>
              </div>
              <div>
                <router-link
                  :to="`/news/${news.category.toLowerCase()}/${news.slug}`"
                  class="text-white font-bold text-base text-wrap hover:underline"
                >
                  {{ news.title }}
                </router-link>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Navigation, A11y, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import newsList from '@/assets/news.json'

const modules = [Navigation, A11y, Autoplay]

const featuredNewsIds = [6, 9, 7, 10]
const featuredNews = ref([])

const getImageUrl = (image) => {
  return `/images/${image}`
}

onMounted(() => {
  featuredNews.value = newsList
    .filter((news) => {
      return featuredNewsIds.includes(Number(news.id))
    })
    .map((news) => ({
      ...news,
      imageUrl: getImageUrl(news.image),
      backgroundClass: `bg-[url('${getImageUrl(news.image)}')]`
    }))
})
</script>

<style scoped>
.news-item {
  height: 300px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
