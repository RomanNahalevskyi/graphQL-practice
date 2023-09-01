<script setup>
import { computed } from 'vue';
import { getImageFullPath } from '@/functions';

const props = defineProps({
    art: {
        type: String
    },
    title: {
        type: String
    }
});

const imageFullPath = computed(() => getImageFullPath(props.art));
</script>

<template>
    <div class="movie-poster">
        <div class="movie-art">
            <img
                :src="imageFullPath"
                :alt="props.title"
                class="absolute top-0 bottom-0 left-0 right-0 w-full cursor-pointer"
                loading="lazy"
            />
            <div
                class="absolute bottom-0 left-0 right-0 flex justify-center pb-2 pt-2 bg-slate-900/25"
            >
                <p class="text-center font-bold text-sm text-ellipsis overflow-hidden">
                    {{ props.title }}
                </p>
            </div>
        </div>
    </div>
</template>

<style>
.movie-poster {
    @apply relative z-10 align-top;

    padding: 0 0.2vw;
}

.movie-art {
    @apply relative h-0 overflow-hidden w-full;

    padding-top: 56.333%;
    border-radius: 0.2vw;
}
</style>
