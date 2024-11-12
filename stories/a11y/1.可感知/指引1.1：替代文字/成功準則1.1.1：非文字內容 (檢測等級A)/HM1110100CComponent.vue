<template>
  <template v-if="type == 'hasLink'">
    <a href="https://storybook.js.org/" target="_blank" :title="linkTitle"><img :src="src" :alt="alt" /></a>
  </template>
  <template v-else>
    <img :src="src" :alt="alt" />
  </template>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface MyComponentProps {
  name?: string;
  /** 圖片 */
  src: string;
  /** 圖片替代文字 */
  alt?: string;
  /** 連結標題 */
  linkTitle?: string;
  /** 圖片類型，一般圖片|裝飾性圖片|具有連結目用途的圖片超連結 */
  type: 'normal' | 'decoration' | 'hasLink';
}

const props = withDefaults(defineProps<MyComponentProps>(), {
  name: "一般圖片",
  src: "assets/storylogo.svg",
  alt: "StoryBookJS Logo",
  type: 'normal'
});

// const emit = defineEmits(['click']);

const classes = computed(() => ({
}));

const style = computed(() => ({
}));
</script>
