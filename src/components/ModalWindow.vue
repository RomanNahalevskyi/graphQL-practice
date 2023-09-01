<script setup>
import CloseIcon from '@/components/icons/CloseIcon.vue';
import { noScroll, removeNoScroll } from '@/functions';

const emit = defineEmits(['close']);

noScroll();

const close = () => {
    removeNoScroll();
    emit('close');
};
</script>

<template>
    <Teleport to="#modal">
        <Transition name="modal" appear>
            <div class="modal-bg">
                <div
                    role="dialog"
                    class="relative w-2/3 drop-shadow-lg z-50 rounded-lg overflow-hidden bg-black"
                >
                    <button class="absolute top-4 right-4 w-6 h-6 z-50" @click="close">
                        <CloseIcon class="w-full h-full" />
                    </button>

                    <div class="relative overflow-hidden bg-black">
                        <div class="w-full overflow-hidden pt-[calc(9/16*100%)]">
                            <slot name="content" />
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<style>
.modal-bg {
    @apply fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-50;

    background-color: rgba(0, 0, 0, 0.7);
}

.modal-enter-active,
.modal-leave-active {
    transition: all 0.25s ease;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
    transform: scale(1.1);
}
</style>
