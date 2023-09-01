<script setup>
import MovieSection from '@/components/MovieSection.vue';
import { useQuery } from '@vue/apollo-composable';
import { GET_NOW_PLAYING_QUERY } from '@/graphql/queries/getNowPlaying.query';
import { computed } from 'vue';

const { result } = useQuery(GET_NOW_PLAYING_QUERY);

const movies = computed(() => result.value?.nowPlayingMovies.results ?? []);
</script>

<template>
    <MovieSection title="Now playing" :items="movies" />
</template>
