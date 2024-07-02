<template>
  <section class="mt-5">
    <div
      class="max-w-6xl mx-auto bg-white p-4 border-l-4 border-l-[#FFCC00] flex flex-col border-b"
    >
      <h1 class="text-3xl font-semibold max-w-max text-slate-800">Categories</h1>
    </div>
    <div class="flex flex-wrap gap-2 p-5 bg-white">
      <router-link
        v-for="(tag, index) in tags"
        :key="index"
        :to="`/news/${tag.toLowerCase()}`"
        class="text-slate-800 uppercase font-medium text-sm px-4 py-1 border border-slate-700"
      >
        {{ tag }}
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  setup() {
    const tags = [
      'Politics',
      'Business',
      'Sports',
      'Health',
      'Education',
      'Wealth',
      'Science',
      'Food',
      'Travels',
      'Tech',
      'Security'
    ]

    return {
      tags
    }
  }
}
</script>
