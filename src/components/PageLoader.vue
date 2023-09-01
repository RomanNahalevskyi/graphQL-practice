<template>
    <div class="page-loader">
        <div
            v-for="(color, index) in colors"
            :key="index"
            class="cube"
            :style="{ backgroundColor: color }"
        ></div>
    </div>
</template>

<script setup>
const colors = ['#E50914', '#B81E26', '#F47B3F', '#FBB040', '#2E77D0'];
</script>

<style>
.page-loader {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 999;
}

.cube {
    width: 25px;
    height: 25px;
    margin-right: 10px;
}

.cube:first-child {
    animation: left 1s infinite;
}

.cube:last-child {
    animation: right 1s infinite 0.5s;
}

@keyframes left {
    40% {
        transform: translateX(-60px);
    }
    50% {
        transform: translateX(0);
    }
}

@keyframes right {
    40% {
        transform: translateX(60px);
    }
    50% {
        transform: translateX(0);
    }
}
</style>
