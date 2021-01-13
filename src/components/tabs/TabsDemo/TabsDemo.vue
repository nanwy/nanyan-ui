<demo>
常规用法
</demo>
<template>
  <div>
    <tabs>
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
import Tabs from "../../../lib/tabs/tabs.vue";
import Tab from "../../../lib/tabs/tab.vue";
import NanButton from "../../../lib/Button/button.vue";
import { defineComponent, ref } from "vue";
export default defineComponent({
  components: {
    Tabs,
    Tab,
    NanButton,
  },
  setup() {
    const model = ref(0);
    return {
      model,
    };
  },
});
</script>

<style>
</style>