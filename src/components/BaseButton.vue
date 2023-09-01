<script setup>
defineProps({
    text: {
        type: String,
        required: true
    }
});
</script>

<template>
    <button class="flex items-center rounded px-4 py-2 gap-2">
        <slot />
        <span class="font-bold">{{ text }}</span>
    </button>
</template>

<style>
.btn-secondary {
    background: rgba(109, 109, 110, 0.7);
}
</style>
