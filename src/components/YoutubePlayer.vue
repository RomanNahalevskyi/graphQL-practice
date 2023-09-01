<script setup>
import YoutubePlayerEmbed from 'vue-lite-youtube-embed';
import 'vue-lite-youtube-embed/style.css';
import { GET_MOVIE_VIDEOS_QUERY } from '@/graphql/queries/getMovieVideos.query';
import { useQuery } from '@vue/apollo-composable';
import { computed } from 'vue';
import { getRandomData } from '@/functions';

const props = defineProps({
    videoId: {
        type: [Number, null],
        required: true
    },
    posterSize: {
        type: String,
        default: 'maxresdefault'
    }
});

const { result } = useQuery(GET_MOVIE_VIDEOS_QUERY, { id: props.videoId });

const filteredVideos = computed(() => {
    if (result.value && result.value.movieVideos) {
        return result.value.movieVideos.results.filter((video) => video.type === 'Trailer');
    }

    return [];
});

const randomVideo = computed(() => {
    const videos = filteredVideos.value;

    return getRandomData(videos);
});
</script>

<template>
    <YoutubePlayerEmbed
        v-if="result && randomVideo"
        :id="randomVideo.key"
        :title="randomVideo.name"
        :poster="posterSize"
    />
</template>
