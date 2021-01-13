<demo>
可以禁用某个Tab
</demo>
<template>
  <div>
    aTabsasgasgasgagasg 的文档
    <tabs v-model="model">
      <tab title="导航1" disabled>
        <NanButton
          theme="cyberpunk"
          size="small"
          round
          cyberpunkText="我是Tab组件1"
        ></NanButton
      ></tab>
      <tab title="导航2">内容2</tab>
      <tab title="导航沙发">内容3</tab>
      <tab title="导航4" lazy>
        <NanButton
          theme="cyberpunk"
          size="small"
          round
          cyberpunkText="我是Tab组件4"
        ></NanButton>
      </tab>
    </tabs>
  </div>
</template>
<script lang='ts'>
import NanButton from "../../../lib/Button/button.vue";

import Tabs from "../../../lib/tabs/tabs.vue";
import Tab from "../../../lib/tabs/tab.vue";
import { defineComponent, ref } from "vue";
export default defineComponent({
  components: {
    NanButton,
    Tabs,
    Tab,
  },
  setup() {
    const model = ref(1); //需要手动设置不被禁用的第一个tab
    return {
      model,
    };
  },
});
</script>

<style>
</style>