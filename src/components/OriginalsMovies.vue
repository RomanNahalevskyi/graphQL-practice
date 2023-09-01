<script setup>
import MovieSection from '@/components/MovieSection.vue';

defineProps({
    moviesData: {
        type: Array,
        default: () => []
    }
});
</script>

<template>
    <MovieSection title="Originals" :items="moviesData" />
</template>
