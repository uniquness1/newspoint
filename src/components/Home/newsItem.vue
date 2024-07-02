<template>
  <div
    class="news-item flex items-end px-4 pt-32 pb-10"
    :style="{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`
    }"
  >
    <div class="flex flex-col gap-4">
      <div class="flex flex-nowrap items-center gap-5">
        <router-link
          :to="`/news/${category.toLowerCase()}`"
          class="text-black uppercase font-bold text-sm max-w-max w-full px-4 py-2 bg-[#ffcc00]"
        >
          {{ category }}
        </router-link>
        <router-link to="#" class="text-white font-normal text-base max-w-max w-full">
          {{ date }}
        </router-link>
      </div>
      <div>
        <router-link
          :to="`/news/${category.toLowerCase()}/${slug}`"
          class="text-white font-bold text-base text-wrap hover:underline"
        >
          {{ title }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  category: String,
  date: String,
  title: String,
  backgroundImage: String,
  slug: String
})
</script>

<style scoped>
.news-item {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
