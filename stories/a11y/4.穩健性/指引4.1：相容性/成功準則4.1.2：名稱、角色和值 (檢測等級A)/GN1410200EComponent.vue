<template>
  <template v-if="preview">
    <div v-html="content"></div>
    <small class="text-gray-400">Tip: JavaScript 禁用時, 使用者才能看見、讀到此段提示。此為模擬禁用時狀態, Html 非真實渲染結果。真實 Html 請將 `preview: false`
      關閉預覽。</small>
  </template>
  <noscript v-else>
    <div v-html="content"></div>
  </noscript>
</template>

<script setup lang="ts">
import { computed } from 'vue';
// import './button.css';

interface MyComponentProps {
  preview: boolean
  content: string,
}

const props = withDefaults(defineProps<MyComponentProps>(), {
  preview: true
});

// const emit = defineEmits(['click']);

const classes = computed(() => ({
}));

const style = computed(() => ({
}));
</script>
