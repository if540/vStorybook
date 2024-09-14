<template>
  <a href="#" :title="label" :class="classes" @click="onClick" :style="style">{{ label }}</a>
</template>

<script setup lang="ts">
import { computed } from 'vue';
// import './button.css';

interface MyComponentProps {
  /** The name of the label */
  label?: string;
  /**
   * 元件主要樣式
   *
   * @since 8.0.0
   */
  primary?: boolean;
  /** 框類型，常見的有邊框(border)跟輪廓(outline) */
  type: 'border' | 'outline';
}

const props = withDefaults(defineProps<MyComponentProps>(), {
  label: '測試焦點時CSS呈現',
  primary: true,
});

const emit = defineEmits(['click']);

const classes = computed(() => ({
  'focus-within:outline-4 focus-within:outline-dashed focus-within:outline-red-600': props.type == 'outline',
  'focus-within:border-4 focus-within:border-dashed focus-within:outline-0 focus-within:border-red-600': props.type == 'border',
}));

const style = computed(() => ({
}));

const onClick = () => {
  emit('click');
};
</script>
