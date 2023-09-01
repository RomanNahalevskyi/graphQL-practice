<script setup>
import ThumbUpIcon from '@/components/icons/ThumbUpIcon.vue';
import ThumbDownIcon from '@/components/icons/ThumbDownIcon.vue';
import { GET_MOVIE_DETAILS_QUERY } from '@/graphql/queries/getMovieDetalis.query';
import { getImageFullPath } from '@/functions';
import { useQuery } from '@vue/apollo-composable';
import { computed } from 'vue';

const props = defineProps({
    movieId: {
        type: [Number, null]
    }
});

const { result } = useQuery(GET_MOVIE_DETAILS_QUERY, { id: props.movieId });

const movieData = computed(() => result.value?.movieDetails ?? []);

const imageFullPath = computed(() => {
    return getImageFullPath(movieData.value.backdrop_path);
});

const getYearReleaseMovie = computed(() => {
    return movieData.value.release_date?.split('-')[0] || null;
});

const sss = computed(() => {
    return movieData.value.vote_average?.toFixed(1) || null;
});
</script>

<template>
    <div v-if="movieData">
        <img :src="imageFullPath" :alt="movieData.title" class="absolute top-0 left-0" />

        <div class="px-5 my-3">
            <div class="flex items-center gap-3">
                <span class="text-sm">{{ getYearReleaseMovie }}</span>
                <button>
                    <ThumbUpIcon />
                </button>
                <span class="text-sm">{{ sss }}</span>
                <button>
                    <ThumbDownIcon />
                </button>
                <span class="text-sm">({{ movieData.vote_count }})</span>
            </div>

            <div class="mt-3 flex flex-col gap-y-3">
                <h1 class="text-2xl">
                    {{ movieData.title }}
                </h1>
                <p class="text-sm">{{ movieData.overview }}</p>
            </div>
        </div>
    </div>
</template>

<style></style>
