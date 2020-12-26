<template>
  <!-- <button v-bind="$attrs"> 全部属性 
      <slot />
    </button> -->
  <button
    class="nan-btn"
    :class="[
      size ? `nan-btn-${size}` : '',
      outlineClass ? `nan-btn-${outlineClass}-${theme}` : `nan-btn-${theme}`,
      {
        'is-round': round,
        'is-circle': circle,
        'is-click': !unclick,
      },
    ]"
    :autofocus="autofocus"
    :disabled="buttonDisabled || loading"
  >
    <i class="nan-icon-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon && !loading"></i>
    <div v-if="theme === 'cyberpunk'">
      <div class="glitch"></div>
      <div class="text" :data-text="cyberpunkText">{{ cyberpunkText }}</div>
      <span class="platform">R25</span>
    </div>
    <span v-if="$slots.default && theme != 'cyberpunk'">
      <slot></slot>
    </span>
  </button>
</template>

<script lang="ts">
import { computed } from "vue";
export default {
  // inheritAttrs: false, //继承属性
  props: {
    icon: {
      type: String,
      default: "",
    },
    loading: Boolean,
    autofocus: Boolean,
    theme: {
      type: String,
      default: "primary",
      validator(val) {
        return (
          [
            "dark",
            "secondary",
            "info",
            "primary",
            "light",
            "success",
            "danger",
            "warning",
            "cyberpunk",
          ].indexOf(val) !== -1
        );
      },
    },
    disabled: Boolean,
    size: {
      type: String,
      defult: "small",
    },
    outline: Boolean,
    round: Boolean,
    circle: Boolean,
    unclick: {
      type: Boolean,
      default: false,
    },
    cyberpunkText: String,
  },
  setup(props, context) {
    // console.log({ ...props });
    // console.log({ ...context.attrs });
    // const {size,onClick,onMouseOver} = context.attrs
    const { ...rest } = context.attrs; //分离属性

    // 创建响应式对象
    const outlineClass = computed(() => (props.outline ? "outline" : ""));
    const btnSize = computed(() => props.size);
    const buttonDisabled = computed(() => props.disabled);

    //props V.S. attgs
    // 区别如下
    // props要先声明才能取值，attrs 不用先声明
    // props不包含事件，attrs 包含
    // props没有声明的属性，会跑到attrs里
    // props支持string以外的类型，attrs只有string类型
    return { outlineClass, btnSize, buttonDisabled };
  },
};
</script>

<style lang='scss'>
@import "../assets/scss/button.scss";
</style>