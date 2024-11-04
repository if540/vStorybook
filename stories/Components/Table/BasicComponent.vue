<template>
  <table :class="cTable" :summary="summary">
    <caption>Caption</caption>
    <thead>
      <tr>
        <th :class="cFirstFix">Song</th>
        <th>Artist</th>
        <th>Year</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
        <td>Malcolm Lockyer</td>
        <td>1961
        </td>
      </tr>
      <tr>
        <td>Witchy Woman</td>
        <td>The Eagles</td>
        <td>1972
        </td>
      </tr>
      <tr>
        <td>Shining Star</td>
        <td>Earth, Wind, and Fire</td>
        <td>1975
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table,
td,
th {
  border: solid 1px;
  @apply border-slate-700 text-slate-500;
}

.w-250 {
  width: 250px;
}
</style>

<script setup lang="ts">
import { computed } from 'vue';
// import './button.css';

export interface MyComponentProps {
  /** The name of the table */
  name?: string;
  /** The summary of the table */
  summary?: string;
  /** The caption of the table */
  caption?: string;
  // cTable props
  /** 寬 100% */
  full?: boolean;
  /** 表格佈局方式 */
  layout?: 'auto' | 'fixed';
  /** 固定首列寬度DEMO */
  firstFix?: boolean
}

const props = withDefaults(defineProps<MyComponentProps>(), {
  name: "Table",
  summary: '表格摘要',
  caption: '原生表格',
  // cTable props
  full: true,
  layout: 'auto',
  firstFix: false,
});

// const emit = defineEmits(['click']);

const cTable = computed(() => ({
  'table-auto': props.layout == 'auto',
  'table-fixed': props.layout == 'fixed',
  'w-full': props.full,
}));
const cFirstFix = computed(() => ({
  'w-250': props.firstFix
}));

const style = computed(() => ({
}));
</script>
