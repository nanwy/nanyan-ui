<demo>
设定第一次出现的tab
</demo>
<template>
  <div>
    <tabs v-model="model">
      <tab title="导航1">
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
    const model = ref(3);
    return {
      model,
    };
  },
});
</script>

<style>
</style>