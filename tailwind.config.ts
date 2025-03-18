import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
    darkMode: 'class',
    content: [
        './pages/**/*.vue',
        './layouts/**/*.vue',
        './components/**/*.vue',
        './nuxt.config.{js,ts}',
    ],
    safelist: [
    ],
}
