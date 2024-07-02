<template>
  <section class="max-w-6xl mx-auto flex flex-col xl:flex-row gap-5 h-screen">
    <div class="w-full xl:w-[65%]">
      <LatestNewsItems />
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
import LatestNewsItems from './LatestNewsItems.vue'
import SocialSection from './SocialSection.vue'
import Ads from './AdS.vue'
import TrendingNews from './TrendingNews.vue'
import NewsLetter from './NewsLetter.vue'
import TagsSection from './TagsSection.vue'
</script>

<style></style>
