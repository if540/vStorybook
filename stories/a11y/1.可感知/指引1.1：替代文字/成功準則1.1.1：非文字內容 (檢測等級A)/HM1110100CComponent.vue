<template>
  <img :src="src" :alt="alt" />
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface MyComponentProps {
  name?: string;
  /** 圖片 */
  src: string;
  /** 圖片替代文字 */
  alt?: string;
  /** 圖片類型，一般圖片|裝飾性圖片 */
  type: 'normal' | 'decoration';
}

const props = withDefaults(defineProps<MyComponentProps>(), {
  name: "一般圖片",
  src: "/stories/assets/storylogo.svg",
  alt: "StoryBookJS Logo",
  type: 'normal'
});

// const emit = defineEmits(['click']);

const classes = computed(() => ({
  'focus-within:outline-4 focus-within:outline-dashed focus-within:outline-red-600': props.type == 'outline',
  'focus-within:border-4 focus-within:border-dashed focus-within:outline-0 focus-within:border-red-600': props.type == 'border',
}));

const style = computed(() => ({
}));
</script>
