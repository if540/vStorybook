<template>
  <table :class="cTable" :summary="summary">
    <caption>{{ caption }}</caption>
    <thead>
      <tr>
        <th class="w-1/5">分類</th>
        <th>標題</th>
        <th class="w-1/5">發佈日期</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-th="分類" class="text-center">
          <BadgeComponent label="降價促銷" />
        </td>
        <td data-th="標題">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
        <td data-th="發佈日期" class="text-center">2024-09-21</td>
      </tr>
      <tr>
        <td data-th="分類" class="text-center">
          <BadgeComponent label="履約其他" />
        </td>
        <td data-th="標題">Witchy Woman</td>
        <td data-th="發佈日期" class="text-center">2024-09-21</td>
      </tr>
      <tr>
        <td data-th="分類" class="text-center">
          <BadgeComponent label="下架公告" />
        </td>
        <td data-th="標題">
          112年第六次電腦軟體共同供應契約採購-雲端服務(1120206)決標資料「eDC Cloud加值服務-Backup HDD。加值規格:備份(Backup 磁碟)100GB。每月-cathy0921」產品下架</td>
        <td data-th="發佈日期" class="text-center">2024-09-21</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import BadgeComponent from '../Badge/BadgeComponent.vue';
import './rwdTable.scss';

export interface MyComponentProps {
  /** The name of the table */
  name?: string;
  /** The summary of the table */
  summary?: string;
  /** The caption of the table */
  caption?: string;
  /** 表格佈局方式 */
  layout?: 'auto' | 'fixed';
  /** 寬 100% */
  full?: boolean,
  /** 轉卡片 */
  toCard?: boolean,
  /** 轉卡片類型 */
  cardType?: '1' | '2',
  /** table-border */
  border?: boolean,
  /** bordre type */
  boorderType?: 'all' | 'bottom',
}

const props = withDefaults(defineProps<MyComponentProps>(), {
  name: "Table",
  summary: '表格摘要',
  caption: '響應式表格',
  layout: 'fixed',
  full: true,
  toCard: false,
  cardType: '1',
  border: false,
  boorderType: 'all'
});

// const emit = defineEmits(['click']);

const cTable = computed(() => ({
  'rwdTable': props.toCard && props.cardType == '1',
  'rwdTable2': props.toCard && props.cardType == '2',
  'table-auto': props.layout == 'auto',
  'table-fixed': props.layout == 'fixed',
  'w-full': props.full,
  'table-border': props.border && props.boorderType == 'all',
  'table-border-b': props.border && props.boorderType == 'bottom'
}));

const style = computed(() => ({
}));
</script>
