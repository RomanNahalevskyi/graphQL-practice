<script setup>
import { computed, ref } from 'vue';
import { GET_POPULAR_QUERY } from '@/graphql/queries/getPopular.query';
import { useQuery } from '@vue/apollo-composable';
import AppHeader from '@/components/AppHeader.vue';
import AppHero from '@/components/AppHero.vue';
import NowPlayingMovies from '@/components/NowPlayingMovies.vue';
import PopularMovies from '@/components/PopularMovies.vue';
import YoutubePlayer from '@/components/YoutubePlayer.vue';
import OverlayEffect from '@/components/OverlayEffect.vue';
import ModalWindow from '@/components/ModalWindow.vue';
import MoreInfoMovie from '@/components/MoreInfoMovie.vue';

const { result } = useQuery(GET_POPULAR_QUERY);

const moviesData = computed(() => result.value?.popularMovies.results ?? []);

const trailerId = ref(null);
const trailer = ref(false);

const moreInfoMovieId = ref(null);
const moreInfo = ref(false);
const showTrailer = (id) => {
    trailerId.value = id;
    trailer.value = true;
    window.scrollTo({ top: 0 });
};

const showMoreInfo = (id) => {
    moreInfoMovieId.value = id;
    moreInfo.value = true;
};
</script>

<template>
    <AppHeader />
    <AppHero :movies-data="moviesData" @show-trailer="showTrailer" @more-info="showMoreInfo" />
    <NowPlayingMovies />
    <PopularMovies :movies-data="moviesData" />

    <ModalWindow v-if="moreInfo" @close="moreInfo = false">
        <template #content>
            <MoreInfoMovie :movie-id="moreInfoMovieId" />
        </template>
    </ModalWindow>

    <OverlayEffect v-if="trailer" @close="trailer = false" show-close>
        <YoutubePlayer :video-id="trailerId" />
    </OverlayEffect>
</template>
