<template>
  <div class="nan-tabs">
    Tabs组件
    <div class="nan-tabs-nav">
      <div
        class="nan-tabs-nav-item"
        :class="{ 'is-active': active === index, 'is-disabled': disabled }"
        v-for="(t, index) in titles"
        @click="tabClick(index)"
        :key="index"
      >
        {{ t }}
      </div>
    </div>
    <div class="nan-tabs-content">
      <component
        class="nan-tabs-content-item"
        v-for="(c, index) in defaults"
        :key="index"
        :tabName="index"
        :active="active"
        :is="c"
      />
    </div>
  </div>
</template>

<script lang='ts'>
import { provide, ref } from "vue";
import Tab from "./tab.vue";
export default {
  props: {
    disabled: Boolean,
  },
  setup(props, context) {
    // provide("tabName", 1);
    const currentName = ref(props.modelValue || props.activeName || "0");
    provide("rootTabs", {
      props,
      currentName,
    });
    console.log(".....", { ...context.slots.default() });
    const defaults = context.slots.default();
    console.log("defaults: ", defaults);
    // console.log(defaults[0].type === Tab);
    let active = ref(0);
    const tabClick = (index) => {
      console.log(index);
      active.value = index;
    };

    defaults.forEach((type) => {
      if (type.type !== Tab) {
        // throw new Error("Tabs 子组件必须是 Tab");
      }
    });
    const titles = defaults.map((i) => i.props?.title);
    console.log("titles: ", titles);
    return {
      defaults,
      titles,
      tabClick,
      active,
    };
  },
};
</script>

<style>
</style>