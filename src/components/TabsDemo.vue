<template>
  <div>
    aTabsasgasgasgagasg 的文档
    <tabs v-model="model">
      <tab title="导航2">
        <NanButton
          theme="cyberpunk"
          size="small"
          round
          cyberpunkText="我是Tab组件"
        ></NanButton
      ></tab>
      <tab title="导航2">内容2</tab>
      <tab title="导航沙发">内容3</tab>
      <tab title="导航4" lazy>
        <NanButton
          theme="cyberpunk"
          size="small"
          round
          cyberpunkText="我是Tab组件"
        ></NanButton>
      </tab>
    </tabs>
  </div>
</template>
<script lang='ts'>
import Tabs from "../lib/tabs/Tabs.vue";
import Tab from "../lib/tabs/tab.vue";
import NanButton from "../lib/Button/button.vue";
import { defineComponent, ref } from "vue";
export default defineComponent({
  components: {
    Tabs,
    Tab,
    NanButton,
  },
  setup() {
    const model = ref(1);
    return {
      model,
    };
  },
});
</script>

<style>
</style>