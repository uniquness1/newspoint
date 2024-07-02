<template>
  <section class="mt-5">
    <div
      class="max-w-6xl mx-auto bg-white p-4 border-l-4 border-l-[#FFCC00] flex flex-col border-b"
    >
      <h1 class="text-3xl font-semibold max-w-max text-slate-800">{{ news.title }}</h1>
    </div>
    <div class="p-5 bg-white">
      <img :src="getImageUrl(news.image)" alt="" class="mb-4" />
      <p class="text-base text-slate-600">{{ news.description }}</p>
      <div v-html="news.content" class="text-base text-slate-600 mt-4"></div>
    </div>
  </section>
</template>

<script>
import newsList from '@/assets/news.json'

export default {
  props: ['category', 'slug'],
  computed: {
    news() {
      return newsList.find((news) => news.slug === this.slug)
    }
  },
  methods: {
    getImageUrl(image) {
      return new URL(`../assets/images/${image}`, import.meta.url).href
    }
  }
}
</script>

<style scoped>
/* Your styles */
</style>
