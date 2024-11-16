<template>
  <template v-if="type == 'hasLinkImg'">
    <span class="componentStoryTip">描述完整範例, 報讀軟體會讀出: 連結,影像,Storybook Logo, 連結至 Storybook
      官網(另開新視窗)</span>
    <a href="https://storybook.js.org/" target="_blank" :title="linkTitleFull"><img :src="src" :alt="alt" /></a>
    <span class="componentStoryTip">描述不完整範例, 報讀軟體會讀出: 未標示的圖示,<code class="code">未標示的圖示</code>,Logo, 連結至 Storybook
      官網(另開新視窗)</span>
    <a href="https://storybook.js.org/" target="_blank" :title="linkTitleFull"><img :src="src" alt="Logo" /></a>
  </template>
  <template v-else>
    <span class="componentStoryTip">因文法或排版及其它特殊需要為短文字, 可利用 <code class="code">title</code>
      依上下文加以補充描述</span>
    Storyboook 生態有眾多套件, 其中 <a :href="linkHref" class="underline underline-offset-2" :title="linkTitleShort"
      target="_blank">{{
        linkTextShort }}</a> 被普遍使用。
    <span class="componentStoryTip">已具有完整文字描述, 可利用 <code class="code">title</code>
      依上下文加以補充描述</span>
    <a :href="linkHref" class="underline underline-offset-2" :title="linkTitleFull" target="_blank">{{ linkTextFull
      }}</a>
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
  /** 連結 url */
  linkHref: string,
  /** 連結標題(for 短文字) */
  linkTitleShort?: string;
  /** 連結文字(短) */
  linkTextShort?: string;
  /** 連結標題(for 完整文字) */
  linkTitleFull?: string;
  /** 連結文字(完整) */
  linkTextFull?: string;
  /** 連結類型，具有連結目用途的文字超連結|具有連結目用途的圖片超連結 */
  type: 'hasLinkText' | 'hasLinkImg';
}

const props = withDefaults(defineProps<MyComponentProps>(), {
  name: "具有連結目用途的文字超連結",
  src: "assets/storylogo.svg",
  alt: "StoryBookJS Logo",
  type: 'hasLinkText'
});

// const emit = defineEmits(['click']);

const classes = computed(() => ({
}));

const style = computed(() => ({
}));
</script>
