<template>
  <button type="button" :class="classes" @click="onClick" :style="style">{{ label }}</button>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue';
import './button.css';

interface MyComponentProps {
  /** The name of the label */
  label: string;
  /**
   * The primary style of the component
   *
   * @since 8.0.0
   */
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  backgroundColor?: string;
}

const props = withDefaults(defineProps<MyComponentProps>(), {
  // primary: true
});

const emit = defineEmits(['click']);

const classes = computed(() => ({
  'storybook-button': true,
  'storybook-button--primary': props.primary,
  'storybook-button--secondary': !props.primary,
  [`storybook-button--${props.size || 'medium'}`]: true,
}));

const style = computed(() => ({
  backgroundColor: props.backgroundColor,
}));

const onClick = () => {
  emit('click');
};
</script>
