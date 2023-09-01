<script setup>
import MoviePoster from '@/components/MoviePoster.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    items: {
        type: Array,
        default: () => []
    }
});
</script>

<template>
    <div class="my-8 px-8 relative">
        <h2 class="text-lg font-bold text-gray-100">{{ props.title }}</h2>

        <Swiper :slides-per-view="4" :space-between="5">
            <SwiperSlide v-for="(movie, index) in props.items" :key="index">
                <MoviePoster :art="movie.backdrop_path || movie.poster_path" :title="movie.title" />
            </SwiperSlide>
        </Swiper>
    </div>
</template>
