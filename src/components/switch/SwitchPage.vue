<template>
  <div>
    <h1 class="first-title">Switch 组件示例</h1>
    <section class="second-title">
      <h2>基础用法</h2>
      <p>
        使用<span>v-model</span>绑定一个<span>Boolean</span>类型的变量到<span>Switch</span>组件
      </p>
    </section>
    <Demo :component="SwitchDemo" />
    <section class="second-title">
      <h2>禁用属性</h2>
      <p>
        在<span>Switch</span>添加一个<span>disabled</span>用来<span>禁用Switch</span>组件
      </p>
    </section>
    <Demo :component="SwitchDemo1" />
    <!-- <component :is="SwitchDemo"></component>
    <div class="code">
      {{ SwitchDemo.__sourceCode }}
    </div> -->
  </div>
</template>

<script>
import SwitchDemo from "./SwitchDemo/SwitchDemo.vue";
import SwitchDemo1 from "./SwitchDemo/SwitchDemo1.vue";
import Demo from "../Demo.vue";
console.log(SwitchDemo);
export default {
  components: {
    Demo,
  },
  setup(props) {
    return { SwitchDemo, SwitchDemo1 };
  },
};
</script>

<style>
</style>