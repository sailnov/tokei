// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    modules: [
        '@nuxt/eslint', '@nuxt/ui', '@pinia/nuxt',
        'pinia-plugin-persistedstate/nuxt',
    ],
    css: ['~/assets/css/main.css'],
    fonts: {
        families: [
            {
                name: 'KHドット秋葉原 16',
                src: '/fonts/KH-Dot-Akihabara-16.ttf',
            },
            {
                name: '機械彫刻用標準書体 M',
                src: '/fonts/KikaiChokokuJIS-Md.otf',
            },
            {
                name: 'DSEG7Classic-Bold',
                src: '/fonts/DSEG7Classic-Bold.ttf',
            },
            {
                name: 'DSEG7Classic-Italic',
                src: '/fonts/DSEG7Classic-BoldItalic.ttf',
            },
            {
                name: 'DSEGWeather',
                src: '/fonts/DSEGWeather.ttf',
            },
        ],
    },
    app: {
        baseURL: import.meta.env.NODE_ENV === 'development' ? '/' : '/tokei/',
        head: {
            htmlAttrs: {
                class: 'dark',
            },
        },
    },
})
