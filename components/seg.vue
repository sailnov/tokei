<script setup lang="ts">
const props = defineProps<{
    mode: 'seg7' | 'weather'
    backgroundText?: string
}>()

</script>

<template>
    <div class="relative">
        <span class="relative z-10 font-dseg7-italic bottom-0">
            <slot />
        </span>
        <span class="absolute z-0 left-0 font-dseg7-italic text-neutral-800">
            {{ props.backgroundText || '8' }}
        </span>
    </div>
</template>
