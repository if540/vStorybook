<template>
  <a :href="href" :title="label" :class="classes" :style="style" target="_self">{{ label }}</a>
</template>

<script setup lang="ts">
import { computed } from 'vue';
// import './button.css';

interface MyComponentProps {
  /** The name of the label */
  label?: string;
  /** 類型 */
  type: 'static' | 'animation',
  /** Link to main content */
  href: string;
}

const props = withDefaults(defineProps<MyComponentProps>(), {
  label: 'Skip to main content',
  href: '#main-content'
});

// const emit = defineEmits(['click']);

const classes = computed(() => ({
  'visually-hidden-focusable': props.type === 'static',
  'absolute top-0 left-0 z-50 px-4 py-2 text-white transition transform -translate-y-full bg-blue-500 focus:translate-y-0': props.type === 'animation'
}));

const style = computed(() => ({
}));
</script>
