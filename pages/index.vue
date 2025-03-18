<script setup lang="ts">
import { useTimestamp, useDateFormat, useNetwork, useWakeLock } from '@vueuse/core'
// WebWorkerFn, useLastChanged, useTimeAgo

const time = useTimestamp()
const computedTime = useDateFormat(time, 'YYYY-MM-DD HH:mm:ss SSS')
const { isOnline } = useNetwork()
const { isSupported: isWakeLockSupported, isActive: isWakeLockActive } = useWakeLock() // request, release,
const store = useStore()
const areaCode = computed(() => store.areaCode)
const weatherData = computed(() => store.weatherData)
</script>

<template>
    <div>
        <p class="font-akiba">
            あいうえお
        </p>
        <p class="font-kikai">
            機械彫刻用標準書体 M
        </p>
        <p class="font-dseg7">
            12345
        </p>
        <p class="font-dseg7-italic">
            12345
        </p>
        <p class="font-dseg-weather">
            1234567890:ABCabc;
        </p>
        {{  computedTime  }} {{ isOnline ? 'online' : 'offline' }}
        <p>
            {{ isWakeLockSupported ? 'supported' : 'not supported' }} {{ isWakeLockActive ? 'active' : 'not active' }}
        </p>
        {{ areaCode }} {{ weatherData }}
    </div>
</template>
