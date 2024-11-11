<template>
  <div v-if="props.type == 'normal'">
    <label for="title">{{ title }}</label>
    <input type="text" id="title" name="title" value="" :class="classes">
  </div>
  <div v-if="props.type == 'noneLabel'">
    <input type="text" id="title" name="title" :class="classes" :title="title">
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface MyComponentProps {
  name?: string;
  /** 提示資訊 label 為 text, input 為 title or aria-label...  */
  title?: string;
  /** 控制器類型，一般|無法使用label時 */
  type: 'normal' | 'noneLabel';
}

const props = withDefaults(defineProps<MyComponentProps>(), {
  name: "一般",
  type: 'normal'
});

// const emit = defineEmits(['click']);

const classes = computed(() => ({
  'ml-2 rounded outline-1 outline outline-gray-300 focus-within:outline-gray-600': props.type == 'normal',
  'rounded outline-1 outline outline-gray-300 focus-within:outline-gray-600': props.type == 'noneLabel',
}));

const style = computed(() => ({
}));
</script>
