<script setup>
import { computed } from 'vue';
import PlayIcon from '@/components/icons/PlayIcon.vue';
import InfoIcon from '@/components/icons/InfoIcon.vue';
import BaseButton from '@/components/BaseButton.vue';
import { getRandomData, getImageFullPath } from '@/functions';

const props = defineProps({
    moviesData: {
        type: Array,
        default: () => []
    }
});

defineEmits(['showTrailer', 'moreInfo']);

const movie = computed(() => getRandomData(props.moviesData));

const imageFullPath = computed(() => getImageFullPath(movie.value.backdrop_path));
</script>

<template>
    <div class="hero" v-if="movie">
        <div class="absolute top-0 w-full">
            <div class="info">
                <div class="text-4xl font-bold mb-4">{{ movie.title }}</div>
                <div class="description mb-4 text-sm">{{ movie.overview }}</div>
                <div class="flex flex-row gap-3">
                    <BaseButton
                        text="Play"
                        class="bg-white text-black"
                        @click="$emit('showTrailer', movie.id)"
                    >
                        <span class="icon h-6 w-6">
                            <PlayIcon class="w-full h-full" />
                        </span>
                    </BaseButton>

                    <BaseButton
                        text="More info"
                        class="btn-secondary text-white"
                        @click="$emit('moreInfo', movie.id)"
                    >
                        <span class="icon h-6 w-6">
                            <InfoIcon class="w-full h-full" />
                        </span>
                    </BaseButton>
                </div>
            </div>
            <img class="w-full" :src="imageFullPath" alt="" loading="lazy" />
        </div>
    </div>
</template>

<style>
.hero {
    @apply relative;
    padding-bottom: 40%;
}
.info {
    @apply absolute w-full px-10;
    bottom: 40%;
    max-width: 40%;
}

.description {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>
