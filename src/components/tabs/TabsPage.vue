<template>
  <div>
    <h1 class="first-title">Tabs 组件示例</h1>
    <section class="second-title">
      <h2>基础用法</h2>
      <p><span>Tabs</span>里必须是<span>Tab</span>组件</p>
    </section>
    <Demo :component="TabsDemo" />
    <section class="second-title">
      <h2>禁用属性</h2>
      <p>
        在<span>想要禁用的tab</span>添加一个<span>disabled</span>类型的变量到<span>来禁用tab</span>组件
      </p>
    </section>
    <Demo :component="TabsDemo1" />
    <section class="second-title">
      <h2>设定tab</h2>
      <p>
        如果<span>想要第四个tab第一次出现</span>在tabs上添加一个<span>v-model</span>类型的变量<span>来决定第一次出现的tab</span>组件
      </p>
    </section>
    <Demo :component="TabsDemo2" />
  </div>
</template>

<script>
import TabsDemo from "./TabsDemo/TabsDemo.vue";
import TabsDemo1 from "./TabsDemo/TabsDemo1.vue";
import TabsDemo2 from "./TabsDemo/TabsDemo2.vue";
import Demo from "../Demo.vue";
export default {
  components: {
    Demo,
  },
  setup(props) {
    return { TabsDemo, TabsDemo1, TabsDemo2 };
  },
};
</script>