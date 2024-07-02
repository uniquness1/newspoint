<template>
  <div
    class="w-full md:w-[50%] xl:w-[45%] md:h-[50vh] xl:h-[80vh] grid md:grid-cols-2 md:grid-rows-2"
  >
    <NewsItem
      v-for="news in filteredNews"
      :key="news.id"
      :category="news.category"
      :date="news.date"
      :title="news.title"
      :backgroundImage="news.image"
      :slug="news.slug"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import NewsItem from '@/components/Home/newsItem.vue'
import newsList from '@/assets/news.json'

const categories = ['Education', 'Health', 'Politics', 'Science']
const filteredNews = ref([])

const getImageUrl = (image) => {
  return `/images/${image}`
}

onMounted(() => {
  filteredNews.value = categories
    .map((category) => {
      const newsItem = newsList.find((item) => item.category === category)
      return newsItem
        ? {
            ...newsItem,
            image: getImageUrl(newsItem.image)
          }
        : null
    })
    .filter((item) => item !== null)
})
</script>
