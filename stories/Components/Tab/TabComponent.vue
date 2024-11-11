<template>
  <h3 id="tablist-1">{{ tablistTitle }}</h3>
  <div role="tablist" aria-labelledby="tablist-1">
    <button id="tab-1" role="tab" aria-selected="true" aria-controls="tabpanel-1">自行前往</button>
    <button id="tab-2" role="tab" aria-selected="false" aria-controls="tabpanel-2" tabindex="-1">公共運輸</button>
  </div>
  <div id="tabpanel-1" role="tabpanel" tabindex="0" aria-labelledby="tab-1" class="tab_content">
    <p>tab_content-1</p>
  </div>
  <div id="tabpanel-2" role="tabpanel" tabindex="0" aria-labelledby="tab-2" class="tab_content" hidden>
    <p>tab_content-2</p>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import './Tab.scss';
import tab from './Tab.js';

export interface MyComponentProps {
  /** The name of the tablist */
  name?: string;
  /** The title of the tablist */
  tablistTitle?: string;
}

const props = withDefaults(defineProps<MyComponentProps>(), {
  name: "TabList",
  tablistTitle: '索引標籤',
});

// const emit = defineEmits(['click']);

const classes = computed(() => ({
}));

const style = computed(() => ({
}));


onMounted(() => {
  tab()
})
</script>
