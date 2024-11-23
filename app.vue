<template>
    <NuxtLayout>
        <NuxtPage></NuxtPage>
    </NuxtLayout>
    <Analytics/>
</template>

<script setup>
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { Analytics } from '@vercel/analytics/nuxt'

const nuxtApp = useNuxtApp()

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    nuxtApp.vueApp.component(key, component)
}

</script>
<style>
body {
    background-color: #fcfcfd;
    padding: 0;
    margin: 0 auto;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 0;
    padding: 0;
}

@font-face {
    font-family: "Douyin Meihao";
    src: url('./assets/fonts/抖音美好体.ttf') format('truetype');
    font-display: swap;
    font-weight: 100 200 300 400 500 600 700 800 900;
    font-style: normal;
}

@font-face {
    font-family: "Fangzheng Kaiti Jian";
    src: url("./assets/fonts/方正楷体简体.ttf") format("truetype");
    font-display: swap;
    font-weight: 100 200 300 400 500 600 700 800 900;
    font-style: normal;
}
/* 滚动槽 */
::-webkit-scrollbar {
    width: 6px;
    height: 6px;
}
::-webkit-scrollbar-track {
    border-radius: 3px;
    background: rgba(0,0,0,0.06);
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.08);
}
/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background: rgba(0,0,0,0.12);
    -webkit-box-shadow: inset 0 0 10px rgba(0,0,0,0.2);
}
</style>