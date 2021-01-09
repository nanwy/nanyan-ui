<template>
  <div v-show="tabName === active">
    tab组件
    {{ active }}
    <slot />
  </div>
</template>

<script>
import { defineComponent, inject, ref } from "vue";
export default defineComponent({
  props: {
    tabName: {
      type: Number,
    },
    active: {
      type: Number,
    },
    name: {
      type: String,
      default: "",
    },
  },
  setup(props, context) {
    // let tabName = inject("tabName");
    // tabName++;
    const index = ref(null);
    const rootTabs = inject("rootTabs");
    console.log(rootTabs.currentName.value, props.name || index.value);
    const name = props.tabName;
    console.log(props, { ...context.attrs });
    return {
      name,
    };
  },
});
</script>

<style>
</style>