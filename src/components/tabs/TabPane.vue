<template>
  <div
    v-if="lazy ? tab.rendered : true"
    v-show="
      typeof elTabsInfo.props.modelValue !== 'undefined'
        ? elTabsInfo.state.activeName === name
        : elTabsInfo.state.activeIndex === index
    "
  >
    <slot></slot>
  </div>
</template>
<script>
import { getCurrentInstance, inject, ref, reactive } from "vue";

export default {
  name: "ElTabPane",

  props: {
    label: [String, Number],
    name: [String, Number],
    disabled: Boolean,
    closable: Boolean,
    lazy: Boolean,
  },

  setup(props) {
    const index = ref(0);
    const instance = getCurrentInstance();

    const elTabsInfo = inject("elTabsInfo", null);

    const tab = reactive({
      label: props.label,
      name: props.name,
      disabled: props.disabled,
      closable: props.closable,
      rendered: false,
      pane: instance,
    });

    if (!elTabsInfo) {
      console.error("Element: not find parent ETabs");
      return;
    }

    index.value = elTabsInfo.tabList.length;
    // console.log("elTabsInfo.tabList: ", { ...elTabsInfo.tabList }, index.value);
    elTabsInfo.tabList[index.value] = tab;

    return {
      elTabsInfo,
      tab,
      index,
    };
  },
};
</script>
