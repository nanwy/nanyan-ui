<demo>
设定第一次出现的tab
</demo>
<template>
  <div>
    <NANTabs v-model="model">
      <NANTab title="导航1">
        <NanButton
          theme="cyberpunk"
          size="small"
          round
          cyberpunkText="我是Tab组件1"
        ></NanButton
      ></NANTab>
      <NANTab title="导航2">内4</NANTab>
      <NANTab title="导航沙发">内容3</NANTab>
      <NANTab title="导航4" lazy>
        <NanButton
          theme="cyberpunk"
          size="small"
          round
          cyberpunkText="我是Tab组件4"
        ></NanButton>
      </NANTab>
    </NANTabs>
  </div>
</template>
<script lang='ts'>
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const model = ref(3);
    return {
      model,
    };
  },
});
</script>

<style>
</style>