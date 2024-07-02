<template>
  <header class="w-full px-4 m-0 bg-[#1E2024] py-5 xl:py-0">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <div class="flex items-center gap-5">
        <router-link to="/" class="font-semibold text-white text-xl md:text-2xl uppercase">
          📰News<span class="text-[#FFCC00]">Point</span>
        </router-link>
        <nav class="hidden xl:flex xl:items-center">
          <router-link
            v-for="(tag, index) in tags"
            :key="index"
            :to="`/news/${tag.toLowerCase()}`"
            class="text-sm uppercase font-medium text-white hover:bg-[#FFCC00] hover:text-slate-900 py-5 px-2"
          >
            {{ tag }}
          </router-link>
        </nav>
      </div>
      <div class="">
        <div class="hidden md:flex m-0 p-0 items-center">
          <input type="search" placeholder="Search here" class="px-4 py-2" />
          <p class="bg-[#FFCC00] px-2 py-2">Search</p>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  setup() {
    const tags = [
      'Politics',
      'Business',
      'Sports',
      'Security',
      'Education',
      'Entertainment',
      'Tech',
      'Food',
      'Travels'
    ]

    return {
      tags
    }
  }
}
</script>
