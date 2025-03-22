<script setup lang="ts">
const props = defineProps<{
    color: 'red' | 'green' | 'blue' | 'yellow'
}>()

</script>

<template>
    <span
        :style="`
        text-shadow: 0 0 5px ${props.color};
        `"
        :class="{
            'text-red-500': props.color === 'red',
            'text-green-500': props.color === 'green',
            'text-blue-500': props.color === 'blue',
            'text-yellow-500': props.color === 'yellow',
        }"
    >●</span>
</template>
