<script setup>
import { noScroll, removeNoScroll } from '@/functions';

defineProps({
    showClose: {
        type: Boolean,
        default: false
    }
});

noScroll();

const emit = defineEmits(['close']);

const close = () => {
    removeNoScroll();
    emit('close');
};
</script>

<template>
    <div class="overlay">
        <div class="width-block">
            <div v-if="showClose" class="text-right cursor-pointer" @click="close">
                <span>[close]</span>
            </div>
            <slot />
        </div>
    </div>
</template>

<style>
.overlay {
    @apply fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center z-50;
    background: #4149;
}

.width-block {
    width: 70%;
}

.no-scroll {
    overflow: hidden;
}
</style>
