<template>
  <section class="overflow-hidden">
    <div class="w-full m-0 flex flex-col md:flex-row gap-0">
      <div
        class="w-full md:w-[50%] xl:w-[55%] h-[70vh] md:h-[50vh] xl:h-[80vh]"
        @mouseenter="stopAutoplay"
        @mouseleave="startAutoplay"
      >
        <swiper
          ref="swiper"
          :modules="modules"
          :slides-per-view="1"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: false
          }"
          :space-between="0"
          :pagination="{ clickable: true }"
          :speed="500"
          :loop="true"
          :touch="true"
        >
          <swiper-slide v-for="(slide, index) in slides" :key="index">
            <div
              :class="[
                'h-[70vh] md:h-[50vh] xl:h-[80vh] flex items-end px-4 md:px-10 pb-16',
                'slide-' + index
              ]"
              :style="{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(${slide.imageUrl})`
              }"
            >
              <div class="flex flex-col gap-4">
                <div class="flex items-center gap-5">
                  <router-link
                    :to="`/news/${slide.category.toLowerCase()}`"
                    class="text-black uppercase font-bold text-sm max-w-max w-full px-4 py-2 bg-[#ffcc00]"
                  >
                    {{ slide.category }}
                  </router-link>
                  <router-link
                    :to="`/news/${slide.slug}`"
                    class="text-white font-normal text-lg max-w-max w-full"
                  >
                    {{ slide.date }}
                  </router-link>
                </div>
                <div>
                  <router-link
                    :to="`/news/${slide.slug}`"
                    class="text-white font-bold text-3xl text-wrap hover:underline"
                  >
                    {{ slide.title }}
                  </router-link>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <Newscard />
    </div>
    <Breaking />
  </section>
</template>

<script>
import { ref, onMounted } from 'vue'
import { Pagination, A11y, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import Newscard from './newsCard.vue'
import Breaking from './breakingNews.vue'
import newsList from '@/assets/news.json'

export default {
  components: {
    Swiper,
    SwiperSlide,
    Newscard,
    Breaking
  },
  setup() {
    const swiper = ref(null)
    const slides = ref([])

    const stopAutoplay = () => {
      if (swiper.value && swiper.value.swiper) {
        swiper.value.swiper.autoplay.stop()
      }
    }

    const startAutoplay = () => {
      if (swiper.value && swiper.value.swiper) {
        swiper.value.swiper.autoplay.start()
      }
    }

    const getImageUrl = (image) => {
      return `/images/${image}`
    }
    onMounted(() => {
      const specifiedNewsIds = ['1', '17', '14']
      slides.value = specifiedNewsIds.map((id) => {
        const news = newsList.find((newsItem) => newsItem.id === id)
        return {
          category: news.category,
          date: news.date,
          title: news.title,
          imageUrl: getImageUrl(news.image),
          slug: news.slug
        }
      })
    })

    return {
      modules: [Pagination, A11y, Autoplay],
      slides,
      swiper,
      stopAutoplay,
      startAutoplay
    }
  }
}
</script>

<style scoped>
::v-deep .swiper-pagination {
  position: absolute;
  top: 30px;
  right: 10px;
  width: auto !important;
  left: auto !important;
  margin: 0;
}

::v-deep .swiper-pagination-bullet {
  padding: 8px 10px;
  border-radius: 0;
  width: auto;
  opacity: 1;
  background: #fff;
}

::v-deep .swiper-pagination-bullet-active {
  padding: 8px 15px;
  color: #fff;
  background: #ffcc00;
}

.slide-0,
.slide-1,
.slide-2 {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
