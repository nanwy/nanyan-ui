<template>
  <div :class="`is${active}`" v-show="tabName === active">
    tab组件
    {{ active }}
    <slot />
  </div>
</template>

<script>
import { defineComponent, inject } from "vue";
export default defineComponent({
  props: {
    tabName: {
      type: Number,
    },
    active: {
      type: Number,
    },
  },
  setup(props, context) {
    // let tabName = inject("tabName");
    // tabName++;
    const name = props.tabName;
    console.log(props.tabName, { ...context.attrs });
    return {
      name,
    };
  },
});
</script>

<style>
</style>