<template>
  <div>
    aTabsasgasgasgagasg 的文档
    <tabs :actived="1">
      <tab title="'导航1">内容1</tab>
      <tab title="'导航2">内容2</tab>
    </tabs>
  </div>
</template>
<script lang='ts'>
import Tabs from "../lib/tabs/Tabs.vue";
import Tab from "../lib/tabs/tab.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    Tabs,
    Tab,
  },
});
</script>

<style>
</style>