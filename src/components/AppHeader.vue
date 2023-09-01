<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';

const menu = ['Home', 'TV Shows', 'Movies', 'Latest', 'My List', 'Audio & Subtitles'];
const isDark = ref(false);

const changeTheme = () => {
    isDark.value = window.scrollY > 100;
};

onMounted(() => {
    window.addEventListener('scroll', changeTheme);
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', changeTheme);
});
</script>

<template>
    <header
        :class="[
            { 'header-transparent': !isDark, 'bg-black': isDark },
            'px-8 fixed h-16 top-0 right-0 left-0 flex gap-4 items-center z-10'
        ]"
    >
        <a href="/" class="logo inline-block text-3xl"></a>
        <ul class="flex gap-4">
            <li v-for="(item, index) in menu" :key="index" class="cursor-pointer">
                <a href="/">{{ item }}</a>
            </li>
        </ul>
    </header>
</template>

<style>
.header-transparent {
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 10%, rgba(0, 0, 0, 0));
}

.logo {
    color: #e50914;
    font-family: nf-icon, serif;
}

.logo::before {
    content: '\e5d0';
}
</style>
