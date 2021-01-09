<template>
  <div>
    aTabsasgasgasgagasg 的文档
    <!-- <tabs>
      <tab v-for="(i, index) in 4" :key="index" :title="i">内容1</tab>
      <tab title="导航2">内容2</tab>
      <tab title="导航3">内容3</tab>
      <tab title="导航4">内容4</tab>
    </tabs> -->
    <el-tabs>
      <el-tab-pane label="用户管理">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script lang='ts'>
import elTabs from "./tabs/src/tabs.vue";
import elTabPane from "./tabs/src/tab-pane.vue";
import Tabs from "../lib/tabs/Tabs.vue";
import Tab from "../lib/tabs/tab.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    Tabs,
    Tab,
    elTabs,
    elTabPane,
  },
});
</script>

<style>
</style>