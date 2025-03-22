<script setup lang="ts">
import { useTimestamp, useDateFormat } from '@vueuse/core'

const time = useTimestamp()
const computedTime = useDateFormat(time, 'HH:mm:ss')
const computedDate = useDateFormat(time, 'YYYY年MM月DD日 (ddd)')
</script>

<template>
    <div class="flex flex-col items-center justify-center h-screen bg-neutral-900 p-4">
        <div class="max-w-4xl w-full border-6 border-neutral-200/40 rounded-2xl p-4 md:p-8 bg-neutral-950 shadow-xl grid grid-cols-12 gap-6">
            <div class="max-sm:col-span-full sm:col-span-6 flex flex-col justify-end">
                <div class="flex gap-x-2 items-center mb-4">
                    <Icon
                        name="tabler:map-pin"
                        size="22"
                        class=""
                    />
                    <span class=" font-semibold text-sm md:text-base">
                        東京都
                    </span>
                    <UButton
                        square
                        variant="ghost"
                        color="neutral"
                        icon="tabler:settings"
                        class="ml-auto"
                    />
                </div>
                <Icon
                    name="twemoji:sun-behind-cloud"
                    size="40"
                    class="mt-auto"
                />
                <svg viewBox="0 0 210 50">
                    <text
                        x="0"
                        y="40"
                        font-size="40"
                        fill="#fff"
                        class="font-chivo font-bold tracking-wider"
                    >
                        {{ computedTime }}
                    </text>
                </svg>
                <svg viewBox="0 0 180 10">
                    <text
                        x="0"
                        y="8"
                        font-size="8"
                        fill="#fff"
                        class="font-semibold tracking-wider font-kikai"
                    >
                        {{ computedDate }}
                    </text>
                </svg>
                <div class="flex gap-x-4 mt-4">
                    <div class="flex gap-x-2 items-center">
                        <Icon
                            name="tabler:temperature-plus"
                            size="22"
                            class=""
                        />
                        <span class=" font-semibold text-sm md:text-base font-chivo">
                            23.5<span class="text-xs">
                                ℃
                            </span>
                        </span>
                    </div>
                    <div class="flex gap-x-2 items-center">
                        <Icon
                            name="tabler:temperature-minus"
                            size="22"
                            class=""
                        />
                        <span class=" font-semibold text-sm md:text-base font-chivo">
                            23.5<span class="text-xs">
                                ℃
                            </span>
                        </span>
                    </div>
                    <div class="flex gap-x-2 items-center">
                        <Icon
                            name="tabler:droplet"
                            size="22"
                            class=""
                        />
                        <span class=" font-semibold text-sm md:text-base font-chivo">
                            80<span class="text-xs">
                                ％
                            </span>
                        </span>
                    </div>
                </div>
                <div class="gap-x-2 flex mt-4">
                    <p class="flex-grow bg-neutral-800 py-1 px-1 text-xs">
                        てすとてすとてすとて
                    </p>
                    <div class="flex items-center gap-x-1">
                        <Led
                            color="green"
                            class="text-sm"
                        />
                        <p class="font-kikai text-xs font-light">
                            接続
                        </p>
                    </div>
                    <div class="flex items-center gap-x-1">
                        <Led
                            color="red"
                            class="text-sm"
                        />
                        <p class="font-kikai text-xs font-light">
                            気象庁
                        </p>
                    </div>
                </div>
            </div>
            <div
                class="max-sm:col-span-full sm:col-span-6 md:min-h-80 md:max-h-80 max-md:max-h-80 overflow-y-auto hide-scrollbar"
            >
                <ul class="divide-y divide-neutral-800">
                    <li
                        v-for="i in 7"
                        :key="i"
                        class="p-2 flex gap-x-6 gap-y-3 items-center max-md:flex-wrap"
                    >
                        <div class="text-3xl font-chivo">
                            12
                        </div>
                        <div class="flex gap-x-2 items-center max-md:w-full flex-grow">
                            <Icon
                                name="twemoji:sun-behind-cloud"
                                size="24"
                            />
                            <span class="text-xs font-kikai font-light">
                                晴れ
                            </span>
                        </div>
                        <div class="font-chivo">
                            <p class="text-sm">
                                23.5<span class="text-2xs">
                                    ℃
                                </span>
                            </p>
                            <p class="text-2xs text-neutral-400 font-kikai font-light">
                                最高
                            </p>
                        </div>
                        <div class="font-chivo">
                            <p class="text-sm">
                                23.5<span class="text-2xs">
                                    ℃
                                </span>
                            </p>
                            <p class="text-2xs text-neutral-400 font-kikai font-light">
                                最低
                            </p>
                        </div>
                        <div class="font-chivo">
                            <p class="text-sm">
                                80<span class="text-2xs">
                                    ％
                                </span>
                            </p>
                            <p class="text-2xs text-neutral-400 font-kikai font-light">
                                降水
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
