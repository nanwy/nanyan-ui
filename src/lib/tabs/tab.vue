<template>
  <div v-if="shouldBeRender" v-show="active">
    <slot />
  </div>
</template>

<script>
import { defineComponent, computed, inject, ref, reactive } from "vue";
export default defineComponent({
  props: {
    title: {
      type: String,
    },
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
    disabled: Boolean,
    lazy: Boolean,
  },
  setup(props, context) {
    // let tabName = inject("tabName");
    // tabName++;
    const index = ref(null);
    const rootTabs = inject("rootTabs");
    const loaded = ref(false);
    const tab = reactive({
      title: props.title,
      name: props.name,
      disabled: props.disabled,
    });

    // console.log(rootTabs.currentName.value, props.name || index.value);
    const name = props.tabName;
    index.value = rootTabs.tabList.length;
    const active = computed(() => {
      const active = rootTabs.currentName.value === (props.name || index.value);
      // console.log(index);
      if (active) {
        loaded.value = true;
      }
      console.log(index, active);
      return active;
    });
    const shouldBeRender = computed(() => {
      return !props.lazy || loaded.value || active.value;
    });
    console.log("shouldBeRender: ", shouldBeRender);
    rootTabs.tabList[index.value] = tab;
    // console.log("elTababList: ", { ...rootTabs.tabList }, index.value);

    // console.log(props, { ...context.attrs });
    return {
      rootTabs,
      name,
      active,
      index,
      tab,
      shouldBeRender,
    };
  },
});
</script>

<style>
</style>