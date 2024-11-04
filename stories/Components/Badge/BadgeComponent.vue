<template>
  <span :class="mainClass">{{ label }}</span>
</template>

<script setup lang="ts">
import { computed } from 'vue';

export interface myComponet {
  label: string,
  nowrap: boolean
}

const props = withDefaults(defineProps<myComponet>(), {
  nowrap: false
})

const mainClass = computed(() => ({
  'text-nowrap': props.nowrap
}))
</script>

<style lang="scss" scoped>
span {
  @apply bg-slate-500 text-white rounded-sm px-2 py-1 inline-block
}
</style>
