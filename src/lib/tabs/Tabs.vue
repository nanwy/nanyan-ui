<template>
  <div class="nan-tabs">
    Tabs组件
    <div class="nan-tabs-nav">
      <div class="nan-tabs-bar" :style="style"></div>
      <div
        class="nan-tabs-nav-item"
        v-for="(item, index) in tabList"
        :class="{
          'is-active': currentName === index,
          'is-disabled': item.disabled,
        }"
        :id="`nan-tabs-${index}`"
        @click="tabClick(item, index)"
        :key="index"
        :ref="
          (el) => {
            if (el) tabElList[index] = el;
          }
        "
      >
        {{ item.title }}
      </div>
    </div>
    <div class="nan-tabs-content">
      <!-- <component
        class="nan-tabs-content-item"
        v-for="(c, index) in defaults"
        :key="index"
        :tabName="index"
        :is="c"
      /> -->
      <slot />
    </div>
  </div>
</template>

<script lang='ts'>
import {
  provide,
  ref,
  reactive,
  getCurrentInstance,
  onUpdated,
  onMounted,
  nextTick,
  computed,
  HtmlHTMLAttributes,
} from "vue";
import Tab from "./tab.vue";
export default {
  props: {
    // disabled: Boolean,
    modelValue: Number,
  },
  setup(props, context) {
    const instance = getCurrentInstance();
    // console.log("instance: ", instance);
    // provide("tabName", 1);
    const currentName = ref(props.modelValue || props.activeName || 0);
    // console.log("currentName: ", currentName);

    const tabList = reactive([]);
    let tabElList = reactive<HTMLDivElement[]>([]);
    onMounted(async () => {
      await nextTick();
      tabElList.forEach((el, index) => {
        // console.log("el: ", el.getBoundingClientRect());
        const style = window.getComputedStyle(el);
        tabList[index].width =
          parseFloat(style.width) -
          (parseFloat(style.paddingLeft) + parseFloat(style.paddingRight));
        tabList[index].offsetLeft =
          parseFloat(el.offsetLeft) + parseFloat(style.paddingLeft);
        // console.log("style: ", style);
      });
      console.log("tabElList: ", tabElList);
    });
    const style = computed(() => {
      console.log("tabList[currentName]", tabList[0]);
      return [
        `width: ${tabList[currentName.value]?.width}px `,
        `transform:translateX(${tabList[currentName.value]?.offsetLeft}px)`,
      ];
    });
    console.log("style: ", style);
    provide("rootTabs", {
      props,
      tabList,
      currentName,
    });
    const changeCurrentName = (value) => {
      currentName.value = value;
      context.emit("input", value);
      context.emit("update:modelValue", value);
    };
    // console.log(".....", { ...context.slots.default() });
    const defaults = context.slots.default();
    // console.log("defaults: ", defaults);
    // console.log(defaults[0].type === Tab);
    let active = ref(0);
    const tabClick = (item, index) => {
      console.log(index);
      if (item.disabled) return;
      currentName.value = index;
    };
    console.log("asfasf", tabList);
    defaults.forEach((type) => {
      if (type.type !== Tab) {
        // throw new Error("Tabs 子组件必须是 Tab");
      }
    });
    const titles = defaults.map((i) => i.props?.title);
    // console.log("titles: ", titles);
    return {
      defaults,
      titles,
      tabClick,
      currentName,
      tabList,
      tabElList,
      style,
    };
  },
};
</script>

<style>
</style>